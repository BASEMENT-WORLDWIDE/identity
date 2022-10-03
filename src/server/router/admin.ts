import { t } from "~/server/trpc";
import { adminApplicationsRouter } from "./admin/applications";

export const adminRouter = t.router({
  applications: adminApplicationsRouter,
});
