import { trpcServer } from '@hono/trpc-server'
import { appTRPCRouter } from './trpc/router'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import authRouter from './routes/auth'
import { createRouter } from './lib/router'

const app = createRouter()

app.use(logger())

app.use("*", (c, next) => {
  if (!c.req.url.startsWith('/api/auth')) {
    return cors()(c, next);
  }
  
  return next();
})


app.use(
  "/api/auth/*", 
  cors({
    origin: "http://localhost:5173", 
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  }),
);

app.use(
  '/trpc/*',
  trpcServer({
    router: appTRPCRouter,
  })
)

app.get('/health', (c) => {
  return c.text('Ok')
})

const routes = [authRouter] as const;

for (const route of routes) {

  app.basePath("/api").route("/", route);
}

export default {
  port: 8000,
  fetch: app.fetch,
} 