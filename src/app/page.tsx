import Link from "next/link";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-8 flex-1">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Home</h2>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>

      <div className="flex flex-col items-center flex-1">
        <Link href={ticketsPath()} className="text-sm underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
