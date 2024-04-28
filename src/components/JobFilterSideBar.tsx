import { Input } from "./ui/input";
import { Label } from "./ui/label";

async function filterJobs(formData: FormData) {
  "use server";
}

export default function JobFilterSideBar() {
  return (
    <aside className="h-fit md:w-[260px] sticky top-0 bg-background border rounded-lg p-4">
      <form action={filterJobs}>
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="q">Search</Label>
            <Input id="q" name="q" />
          </div>
        </div>
      </form>
    </aside>
  );
}
