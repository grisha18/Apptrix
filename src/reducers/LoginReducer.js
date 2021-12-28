const initialState = {
  refresh: "",
  access: ""
};


function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'save_refresh':
      return {
        ...state, refresh: action.payload
      }
      break;

    case 'save_access':
      return {
        ...state, access: action.payload
      }
      break;
    case 'save_users':
      console.log(`!!! ${action.payload}`);
      return {
        ...state, users: action.payload
      }
      case 'save_tasks':
        console.log(`!!! ${action.payload}`);
        return{
          ...state, tasks: action.payload
        }
      break;

    default:
      return state
  }
}

export default loginReducer;