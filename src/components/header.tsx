import { LucideKanban } from "lucide-react";
import Link from "next/link";
import { homePath, ticketsPath } from "@/paths";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <nav className="w-full flex py-2.5 px-5 justify-between border-b bg-background/95 backdrop-blur fixed left-0 right-0 top-0 z-20 supports-backdrop-blur:bg-background/60">
      <div>
        <Button variant={"ghost"} asChild>
          <Link href={homePath()}>
            <LucideKanban />
            <h1 className="text-lg font-semibold">TicketsApp</h1>
          </Link>
        </Button>
      </div>
      <div>
        <Button asChild>
          <Link href={ticketsPath()}>Tickets</Link>
        </Button>
      </div>
    </nav>
  );
};

export { Header };
