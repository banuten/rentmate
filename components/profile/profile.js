import React, { useState } from "react";
import classes from "./profile.module.css";
import ProfileDetailsForm from "./profile-details-form";
import TenantDetailsForm from "./tenant-details-form";
import ProfileTickets from "./profile-tickets";
import TicketDetailsForm from "../tickets/ticket-details-form";

const Profile = (props) => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [showTickets, setShowTickets] = useState(true);
  const [showTenantDetails, setShowTenantDetails] = useState(false);
  const [showNewTicketForm, setShowNewTicketForm] = useState(false);

  // const rentalProperty = "123 Main St";
  const activeTickets = [
    {
      id: 1,
      subject: "Leaky faucet",
      status: "Open",
    },
    {
      id: 2,
      subject: "Broken window",
      status: "In progress",
    },
    {
      id: 3,
      subject: "Clogged drain",
      status: "Closed",
    },
  ];

  const handleShowDetails = () => {
    setShowProfileDetails(!showProfileDetails);
  };

  const handleShowTickets = () => {
    setShowTickets(!showTickets);
  };

  const handleShowTenantDetails = () => {
    setShowTenantDetails(!showTenantDetails);
  };

  const handleShowNewTicketForm = () => {
    setShowNewTicketForm(!showNewTicketForm);
  };

  return (
    <div className={classes.profile}>
      <h2>{`${props.userData.firstName} ${props.userData.lastName}`}</h2>
      <p>Property you own: {props.userData.address}</p>
      <p>Email: {props.userData.email}</p>
      <p>Phone Number: {props.userData.phone}</p>
      <hr />
      <h3>
        Tenant Name:{" "}
        {`${props.tenantData.tenant_firstName} ${props.tenantData.tenant_lastName}`}
      </h3>
      <p>Tenant's Phone: {props.tenantData.tenant_phone}</p>
      <hr />
      <p>
        <a href="#" onClick={handleShowDetails}>
          {showProfileDetails ? "Hide Profile Details" : "Update Profile"}
        </a>
      </p>
      {showProfileDetails && (
        <ProfileDetailsForm email={props.userData.email} />
      )}
      <p>
        <a href="#" onClick={handleShowTenantDetails}>
          {showTenantDetails ? "Hide Tenant Details" : "Add Tenant"}
        </a>
      </p>
      {showTenantDetails && <TenantDetailsForm email={props.userData.email} />}
      <p>
        <a href="#" onClick={handleShowNewTicketForm}>
          Add Service Ticket
        </a>
      </p>
      {showNewTicketForm && <TicketDetailsForm email={props.userData.email} />}
      <p>
        <a href="#" onClick={handleShowTickets}>
          {showTickets ? "Hide My Current Tickets" : "Show My Current Tickets"}
        </a>
      </p>
      {showTickets && <ProfileTickets tickets={props.ticketData} />}
    </div>
  );
};

export default Profile;
