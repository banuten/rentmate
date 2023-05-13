const ActiveTicket = ({ ticket }) => {
    return (
      <li key={ticket.id}>
        <span>{ticket.subject}</span>
        <span>{ticket.status}</span>
      </li>
    );
  };
  
  export default ActiveTicket;
  