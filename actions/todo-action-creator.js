let itemId = 0;

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item,
    itemId : itemId++
  }
};

export const changeItemStatus = (itemId) => {
  return {
    type: 'CHANGEITEM_STATUS',
    itemId
  }
};

export const removeItem = (itemId) => {
  return {
    type: 'REMOVE_ITEM',
    itemId
  }
};
