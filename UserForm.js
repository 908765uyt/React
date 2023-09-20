import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../redux/actions/userActions';
import { validateEmail, validateMobile, validateZipCode } from '../utils/validation';

const UserForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    address1: '',
    address2: '',
    state: '',
    city: '',
    country: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = {};

    // Validate First Name
    if (formData.firstName.trim() === '' || formData.firstName.length < 5) {
      validationErrors.firstName = 'First Name is required and must be at least 5 characters.';
    }

    // Validate Last Name
    if (formData.lastName.trim() === '' || formData.lastName.length < 5) {
      validationErrors.lastName = 'Last Name is required and must be at least 5 characters.';
    }

    // Validate Email
    if (!validateEmail(formData.email)) {
      validationErrors.email = 'Invalid email address.';
    }

    // Validate Mobile
    if (!validateMobile(formData.mobile)) {
      validationErrors.mobile = 'Invalid mobile number.';
    }

    // Validate Address 1
    if (formData.address1.trim() === '') {
      validationErrors.address1 = 'Address 1 is required.';
    }

    // Validate Zip Code
    if (!validateZipCode(formData.zipCode)) {
      validationErrors.zipCode = 'Invalid zip code.';
    }

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, dispatch the action to create the user
      dispatch(createUser(formData));
      // Clear the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address1: '',
        address2: '',
        state: '',
        city: '',
        country: '',
        zipCode: '',
      });
    } else {
      // If there are validation errors, set the errors state
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        {/* Email */}
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>

        {/* Address 1 */}
        <div>
          <label>Address 1</label>
          <input
            type="text"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
          />
          {errors.address1 && <p className="error">{errors.address1}</p>}
        </div>

        {/* Address 2 */}
        <div>
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        {/* State */}
        <div>
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>

        {/* City */}
        <div>
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>

        {/* Country */}
        <div>
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        {/* Zip Code */}
        <div>
          <label>Zip Code</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
          />
          {errors.zipCode && <p className="error">{errors.zipCode}</p>}
        </div>

        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserForm;
