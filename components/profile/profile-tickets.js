  import Ticket from "../tickets/ticket";
  
  const ProfileTickets = ({ tickets }) => {
    return (
      <>
        <h2>Current tickets:</h2>
        <ul>
          {tickets.map((ticket) => (
            <Ticket key={ticket.ticket_id} ticket={ticket} />
          ))}
        </ul>
      </>
    );
  };
  
  export default ProfileTickets;