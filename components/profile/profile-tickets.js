  import Ticket from "../tickets/ticket";
  
  const ProfileTickets = ({ tickets }) => {
    return (
      <>
        <h2>Currently active tickets:</h2>
        <ul>
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} />
          ))}
        </ul>
      </>
    );
  };
  
  export default ProfileTickets;