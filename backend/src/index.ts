import { Hono } from 'hono'
import { trpcServer } from '@hono/trpc-server' 
import { appRouter } from './trpc'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

const app = new Hono()

app.use(logger())

app.use(cors())

app.use(
  '/trpc/*',
  trpcServer({
    router: appRouter,
  })
)

app.get('/health', (c) => {
  return c.text('Ok')
})

export default { 
  port: 8000, 
  fetch: app.fetch, 
} 