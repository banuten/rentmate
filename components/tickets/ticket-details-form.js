import { useRef } from "react";
import classes from "./ticket-details-form.module.css";

const TicketDetailsForm = (props) => {
  const issueInputRef = useRef();
  const descriptionInputRef = useRef();
  const dateRaisedInputRef = useRef();
  const urgencyInputRef = useRef();
  const statusInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = {
      ticket_id: Math.floor(Math.random() * 100000).toString(), // Generate a random ticket ID
      ticket_issue: issueInputRef.current.value,
      ticket_description: descriptionInputRef.current.value,
      ticket_dateRaised: new Date(dateRaisedInputRef.current.value).toJSON(),
      ticket_urgency: urgencyInputRef.current.value,
      ticket_status: statusInputRef.current.value,
      landlord_email: props.email,
    };

    try {
      const response = await fetch("/api/ticket/add-ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error adding ticket details");
      }

      alert("Ticket details added successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="issue">Issue</label>
        <input type="text" id="issue" ref={issueInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea id="description" rows="5" ref={descriptionInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="dateRaised">Date Raised</label>
        <input type="date" id="dateRaised" ref={dateRaisedInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="urgency">Urgency</label>
        <select id="urgency" ref={urgencyInputRef}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div className={classes.control}>
        <label htmlFor="status">Status</label>
        <select id="status" ref={statusInputRef}>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>
      <div className={classes.action}>
        <button>Add Ticket</button>
      </div>
    </form>
  );
};

export default TicketDetailsForm;
