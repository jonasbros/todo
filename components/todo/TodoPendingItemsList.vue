<template>
  <transition-group
    class="todo-relative px-0"
    name="slide-up"
    tag="ul"
  >

    <li v-show="!pendingItems.length" key="completedListTextKey">
      No pending tasks left...
    </li>
    <!-- Pending Items List -->
    <li v-for="item in pendingItems" :key="`pending-${item.id}`">
      <v-checkbox
        class="mt-0"
        color="info"
        hide-details
        :input-value="item.completed"
        :label="item.task"
        @click="todoComplete($event, item.id)"
      ></v-checkbox>
    </li>

  </transition-group>
</template>

<script>
export default {
  props: {
    pendingItems: {
      required: true,
      type: Array
    }
  },

  methods: {
    todoComplete (e, itemId) {
      /*
      * If box is clicked find and get label element to apply strikethrough class
      * Else if label is clicked just get the label element
      */
      const completedItem = e.target.parentElement.nextSibling || e.target;
      // Apply strikethrough styling
      completedItem.classList.add('text-decoration-line-through');
      // Appliy pulsing animation to completed button
      this.$nuxt.$emit('itemCompletedEvent');
      // Apply delay to toggleCompleted so styling can be seen
      setTimeout(() => {
        this.$emit('toggleCompleted', itemId);
      }, 300);
    }
  }
};
</script>
