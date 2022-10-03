import { createRouter } from "./context";
import { z } from "zod";
import { adminApplicationsRouter } from "./admin/applications";

export const adminRouter = createRouter()
  .merge("applications.", adminApplicationsRouter)
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  });
