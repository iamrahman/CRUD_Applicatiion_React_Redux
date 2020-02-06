const postReducer = (state = [], action) => {
    console.log('State', state);
    console.log('Action', action);
    switch(action.type) {
      case 'ADD_POST':
        return state.concat([action.data]);
      case 'DELETE_POST':
        return state.filter((post)=>post.id !== action.id);
      case 'EDIT_POST':
        return state.map((post)=>post.id === action.id ? {...post,edit:!post.edit}:post);
      case 'UPDATE_POST':
        return state.map((post)=>{
            
            if(Number(post.id) === Number(action.data.id)) {
              return {
                 ...post,
                 name:action.data.name,
                 location:action.data.location,
                 description: action.data.description,
                 edit: !action.data.edit
              }
            } else return post;
          })
      default:
        return state;
    }
  }
  export default postReducer;