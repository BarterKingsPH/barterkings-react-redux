import axios from 'axios'

let actions = {
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },

  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },

  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  },

  createNewUserId: function() {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  },

  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const { user } = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },

  createNewUserIdAsync: function() {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions.createNewUserId())
      }, 2500)
    }
  },

  fetchItems : function(items){
    return {
      type: 'FETCH_ITEMS',
      items: items
    }
  },

  fetchItemsAsync : function(){
    return (dispatch) => {
      axios.get('http://localhost:5000/items')
      .then(function(response){
        dispatch(actions.fetchItems(response.data.message));
      });
    }
  },

  fetchItemAsync : function(id){
    return (dispatch) => {
      axios.get('http://localhost:5000/items/' + id)
        .then( (response) => {
          dispatch( (response) => {
            return {
              type: 'FETCH_ITEM',
              item: response
            }
          });
        });
    }
  }

}

export default actions
