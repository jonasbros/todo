<template>
  <transition-group
    class="todo-relative px-0"
    name="slide-up"
    tag="ul"
  >

    <li v-show="!completedItems.length" key="completedListTextKey">
        You don't have completed tasks yet...
    </li>
    <!-- Completed Items List -->
    <li v-for="item in completedItems" :key="`completed-${item.id}`">
      <v-checkbox
        class="mt-0"
        color="info"
        hide-details
        :input-value="item.completed"
        :label="item.task"
        @click="todoPending($event, item.id)"
      ></v-checkbox>
    </li>

  </transition-group>
</template>

<script>
export default {
  props: {
    completedItems: {
      required: true,
      type: Array
    }
  },

  data: () => ({
    itemsCompleted: {}
  }),

  methods: {
    todoPending (e, itemId) {
      // Appliy pulsing animation to pending button
      this.$nuxt.$emit('itemPendingEvent');

      // Apply delay to toggleCompleted so styling can be seen, can be replaced by http request stuff
      setTimeout(() => {
        this.$emit('toggleCompleted', itemId);
      }, 300);
    }
  }
};
</script>
