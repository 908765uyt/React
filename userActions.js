import axios from 'axios';

export const createUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/users', userData);
    dispatch({ type: 'CREATE_USER_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error creating user:', error);
    dispatch({ type: 'CREATE_USER_FAILURE', payload: error.message });
  }
};

// userReducer.js
const initialState = {
  users: [],
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_USER_SUCCESS':
      return { ...state, users: [...state.users, action.payload], error: null };
    case 'CREATE_USER_FAILURE':
      return { ...state, error: action.payload };
    // Handle other actions for fetching, updating, and deleting users
    default:
      return state;
  }
};

export default userReducer;
