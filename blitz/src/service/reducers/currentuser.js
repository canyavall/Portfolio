import { GET_CURRENTUSER, LOGOUT_CURRENTUSER} from '../../actions/defaultActionConstants';

const initialUser = {
  "token": "",
  "username": "",
  "avatar": ""
};

const currentuser = (state = initialUser, action) => {
  switch (action.type) {

    case GET_CURRENTUSER:
      const newState = { ...state }
      newState.token = action.content.token;
      newState.username = action.content.username;
      newState.avatar = action.content.avatar;
      return newState;

    case LOGOUT_CURRENTUSER:
      return {
        "token": null,
        "username": null,
        "avatar": null
      };

    default:
      return state;
  }
}

export default currentuser;
