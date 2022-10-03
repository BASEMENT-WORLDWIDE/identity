import { createRouter } from "../context";
import { z } from "zod";
import { randomUUID } from "crypto";

export const adminApplicationsRouter = createRouter()
  .query("applications", {
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
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.application.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
      description: z.string().nullish(),
      baseUrl: z.string(),
      issuerUrl: z.string().nullish(),
    }),
    async resolve({ ctx, input }) {
      const defaultIssuerUrl =
        input.issuerUrl ?? input.name.toLowerCase().replace("s", "-");
      return await ctx.prisma.application.create({
        data: {
          name: input.name,
          description: input.description,
          issuerUrl: defaultIssuerUrl,
          baseUrl: input.baseUrl,
          secret: randomUUID(),
          clientId: randomUUID(),
          clientSecret: randomUUID(),
        },
      });
    },
  });
