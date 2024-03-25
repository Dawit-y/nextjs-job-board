import prisma from "@/lib/prisma";
import JobListItem from "@/components/jobListItem";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <h1 className="text-4xl font-extralight text-center">Jobs</h1>
      {jobs.map((job) => {
        return <JobListItem job={job} key={job.id} />;
      })}
    </>
  );
}
