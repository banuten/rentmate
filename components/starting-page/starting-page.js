// StartingPageContent.js

import classes from "./starting-page.module.css";

function StartingPageContent() {
  return (
    <section className={classes.starting}>
      <h1>Welcome to RentMATE</h1>
      <p>
        The platform that bridges the gap between
        renters and landlords, allowing you to effortlessly raise any issues
        directly with your landlord! 
      </p>
      <p>Say goodbye to the hassle of waiting for
        your landlord to respond to your requests. With RentMATE, you can
        easily communicate with your landlord and get quick solutions to any
        problems you may encounter. 
      </p>
    </section>
  );
}

export default StartingPageContent;
