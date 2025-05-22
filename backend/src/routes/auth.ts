import { auth } from "../lib/auth";
import { createRouter } from "../lib/router";

const authRouter = createRouter();

authRouter.on(["POST", "GET"], "/auth/**", (c) => {
  return auth.handler(c.req.raw);
});

export default authRouter;