const ActiveTicket = ({ ticket }) => {
    return (
      <li key={ticket.ticket_id}>
        <span>{ticket.ticket_issue}</span>
        <span>{ticket.ticket_status}</span>
      </li>
    );
  };
  
  export default ActiveTicket;
  