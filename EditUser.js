import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../redux/actions/userActions';

const EditUser = ({ match }) => {
  const dispatch = useDispatch();
  const userId = match.params.id; // Assuming you are passing the user ID in the route

  // Fetch the user details from Redux store using the user ID
  const user = useSelector((state) =>
    state.user.users.find((u) => u._id === userId)
  );

  const [formData, setFormData] = useState({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    email: user.email || '',
    mobile: user.mobile || '',
    address1: user.address1 || '',
    address2: user.address2 || '',
    state: user.state || '',
    city: user.city || '',
    country: user.country || '',
    zipCode: user.zipCode || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the action to update the user with the new data
    dispatch(updateUser(userId, formData));
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        {/* Render input fields for editing user details */}
        {/* You can reuse the UserForm.js component to render the fields */}
        {/* Ensure that you populate the input fields with user data */}
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;
