import { useRef } from 'react';
import classes from './profile-details-form.module.css';

const ProfileDetailsForm = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
  
    const formData = {
      firstName: firstNameInputRef.current.value,
      lastName: lastNameInputRef.current.value,
      address: addressInputRef.current.value,
      phone: phoneInputRef.current.value,
      email: event.target.email.value
    };
  
    try {
      const response = await fetch('/api/user/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Error updating profile');
      }
  
      alert('Profile updated successfully');
    } catch (error) {
      alert(error.message);
    }
  };
  

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='hidden' name='email' value={props.email} />
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
