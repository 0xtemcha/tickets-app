import { Suspense } from "react";
import { Heading } from "@/components/heading";
import { TicketList } from "@/features/ticket/components/ticket-list";

const TicketsPage = () => {
  return (
    <div className="flex flex-col gap-y-8 flex-1">
      <Heading title="Tickets" description="All your tickets at one place" />

      <Suspense fallback={<div>Loading tickets...</div>}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
