import { t } from "~/server/trpc";
import { z } from "zod";
import { randomUUID } from "crypto";

export const adminApplicationsRouter = t.router({
  all: t.procedure.query(({ ctx }) => ctx.prisma.application.findMany()),
  create: t.procedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().nullish(),
        baseUrl: z.string(),
        subdomain: z.string().nullish(),
      })
    )
    .mutation(({ ctx, input }) => {
      const defaultSubdomain =
        input.subdomain ?? input.name.toLowerCase().replace("s", "-");
      return ctx.prisma.application.create({
        data: {
          name: input.name,
          description: input.description,
          subdomain: defaultSubdomain,
          baseUrl: input.baseUrl,
          secret: randomUUID(),
          clientId: randomUUID(),
          clientSecret: randomUUID(),
        },
      });
    }),
  show: t.procedure
    .input(z.string())
    .query(({ ctx, input }) =>
      ctx.prisma.application.findUnique({ where: { id: input } })
    ),
});
