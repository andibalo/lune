import { Hono } from "hono";
import type { AuthType } from "../lib/auth";

export const createRouter = () => {
  return new Hono<{ Bindings: AuthType }>({
    strict: false,
  });
}