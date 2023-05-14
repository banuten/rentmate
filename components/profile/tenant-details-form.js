import { useRef } from 'react';
import classes from './profile-details-form.module.css';

const TenantDetailsForm = (props) => {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
  
    const formData = {
        tenant_firstName: firstNameInputRef.current.value,
        tenant_lastName: lastNameInputRef.current.value,
        tenant_address: addressInputRef.current.value,
        tenant_phone: phoneInputRef.current.value,
        landlord_email: event.target.email.value
    };
  
    try {
      const response = await fetch('/api/user/add-tenant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Error adding tenant details');
      }
  
      alert('Tenant details added successfully');
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
        <button>Add Tenant</button>
      </div>
    </form>
  );
};

export default TenantDetailsForm;
