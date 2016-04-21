let itemReducer = function(items = [], action) {
  switch (action.type) {
    case 'FETCH_ITEMS':
      return Object.assign([], items, action.items)
    default: 
      return items;
  }
}

export default itemReducer
