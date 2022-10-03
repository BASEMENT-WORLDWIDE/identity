// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { publicRouter } from "./public";
import { adminRouter } from "./admin";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("public.", publicRouter)
  .merge("admin.", adminRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
