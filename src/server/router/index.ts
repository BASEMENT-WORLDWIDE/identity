// src/server/router/index.ts
import { t } from "~/server/trpc";
import { publicRouter } from "./public";
import { adminRouter } from "./admin";

export const appRouter = t.router({
  public: publicRouter,
  admin: adminRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
