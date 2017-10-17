const addItem = (item, itemId) => ({
  item,
  status: false,
  itemId
});

const removeItem = (itemIdState, itemIdAction) => itemIdState !== itemIdAction;

const changeItemStatus = (state, itemId) => {
  if (state.itemId !== itemId) {
    return state;
  }

  return {
    ...state,
    status: !state.status
  };
};

//todo reducer is a pure function
const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM': {
      return [ ...state, addItem(action.item, action.itemId) ];
    }

    case 'CHANGEITEM_STATUS': {
      let data = state.map((item) => {
         return changeItemStatus(item, action.itemId);
      });
      return data;
    }

    case 'REMOVE_ITEM': {
      return state.filter((item) => removeItem(item.itemId, action.itemId));
    }
    
    default: return state;
  }
};

export default todos;
