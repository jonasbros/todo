export const state = () => ({
  items: [
    {
      id: 0,
      task: 'Eat breakfast',
      completed: false
    },
    {
      id: 1,
      task: 'Excercise',
      completed: false
    },
    {
      id: 2,
      task: 'Watch TV',
      completed: false
    },
    {
      id: 3,
      task: 'Brush teeth',
      completed: true
    }
  ],
  completedItems: []
});

export const mutations = {
  ADD_ITEM (state, item) {
    state.items.push(item);
  },

  TOGGLE_COMPLETED (state, itemId) {
    state.items = state.items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });
  }
};

export const actions = {
  addItem ({ commit }, item) {
    commit('ADD_ITEM', item);
  },

  toggleCompleted ({ commit }, itemId) {
    commit('TOGGLE_COMPLETED', itemId);
  }
};

export const getters = {
  getItems (state) {
    return state.items;
  }
};
