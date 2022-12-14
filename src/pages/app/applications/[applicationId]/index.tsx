import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { trpc } from "~/utils/trpc";

function Application({ applicationId }: { applicationId: string }) {
  const application = trpc.admin.applications.show.useQuery(applicationId);
  return (
    <>
      <h2>{application.data?.name}</h2>
      <p>{application.data?.description}</p>
    </>
  );
}

const AdminApplicationsShowPage: NextPage = () => {
  const router = useRouter();
  const applicationId = router.query.applicationId as string | undefined;
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          App/Applications/ApplicationId Page
        </h1>
        <div className="flex w-full items-center justify-center pt-6 text-2xl text-blue-500">
          {applicationId && <Application applicationId={applicationId} />}
        </div>
      </main>
    </>
  );
};

export default AdminApplicationsShowPage;
