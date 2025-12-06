type TicketPageProps = {
  params: Promise<{ ticketId: string }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;

  return <div className="text-lg">TicketPage: {ticketId}</div>;
};

export default TicketPage;
