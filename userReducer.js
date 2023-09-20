import {
  CREATE_USER,
  FETCH_USERS,
  UPDATE_USER,
  DELETE_USER,
} from '../actions/userActions';

const initialState = {
  users: [], // Initially an empty array
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case FETCH_USERS:
      return {
        ...state,
        // Fetch users from your backend/API and update the state accordingly
      };

    case UPDATE_USER:
      // Implement logic to update a user in the state based on action.payload
      return state;

    case DELETE_USER:
      // Implement logic to delete a user from the state based on action.payload
      return state;

    default:
      return state;
  }
};

export default userReducer;
