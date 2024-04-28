import prisma from "@/lib/prisma";
import JobListItem from "@/components/jobListItem";
import JobFilterSideBar from "@/components/JobFilterSideBar";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <main className="max-w-xl m-auto my-10 space-y-10 px-3">
        <div className="space-y-5 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Developer Jobs
          </h1>
          <p className="text-muted-foreground">Find Your Dream Job</p>
        </div>
        <section className="flex flex-col gap-4 md:flex-row">
          <JobFilterSideBar />
          <div className="space-y-4 flex-grow">
            {jobs.map((job) => {
              return <JobListItem job={job} key={job.id} />;
            })}
          </div>
        </section>
      </main>
    </>
  );
}
