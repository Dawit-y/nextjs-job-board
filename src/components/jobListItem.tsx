import { Job } from "@prisma/client";

interface jobListItemProps {
  job: Job;
}

export default function JobListItem({
  job: {
    title,
    companyName,
    type,
    locationType,
    location,
    salary,
    companyLogoUrl,
    createdAt,
  },
}: jobListItemProps) {
  return (
    <>
      <article>{title}</article>
    </>
  );
}
