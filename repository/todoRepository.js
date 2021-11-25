
export default store => ({
  getItems () {
    return store.getters['todo/getItems'];
  },

  addItem (item) {
    store.dispatch('todo/addItem', item);
  },

  toggleCompleted (item) {
    store.dispatch('todo/toggleCompleted', item);
  }
});
