import { useRef } from 'react';
import classes from './profile-details-form.module.css';

const ProfileDetailsForm = () => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    // TODO: Send data to server for updating profile details

    console.log(enteredFirstName, enteredLastName, enteredAddress, enteredPhone);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='firstName'>First Name</label>
        <input type='text' id='firstName' ref={firstNameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='lastName'>Last Name</label>
        <input type='text' id='lastName' ref={lastNameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' ref={addressInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='phone'>Phone Number</label>
        <input type='text' id='phone' ref={phoneInputRef} />
      </div>
      <div className={classes.action}>
        <button>Update Profile</button>
      </div>
    </form>
  );
};

export default ProfileDetailsForm;
