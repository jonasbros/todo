<template>
  <div>
    <!-- PENDING BTN -->
    <v-btn
      ref="pendingViewBtn"
      class="switch-btn white--text"
      color="grey"
      depressed
      rounded
      small
      :text="pendingBtnTextProperty"
      @click="switchTodoView('pending')"
    >
      Pending
    </v-btn>
    <!-- COMPLETED BTN -->
    <v-btn
      ref="completedViewBtn"
      class="switch-btn white--text"
      color="grey"
      depressed
      rounded
      small
      :text="completedBtnTextProperty"
      @click="switchTodoView('completed')"
    >
      Completed
    </v-btn>

  </div>
</template>

<script>
export default {
  data: () => ({
    currentView: 'pending'
  }),

  computed: {
    pendingBtnTextProperty () {
      return this.currentView === 'completed';
    },
    completedBtnTextProperty () {
      return this.currentView === 'pending';
    }
  },

  mounted () {
    // Apply pulsing animation to pending button
    this.$nuxt.$on('itemPendingEvent', () => {
      this.switchBtnPulse(this.$refs.pendingViewBtn);
    });
    // Apply pulsing animation to completed button
    this.$nuxt.$on('itemCompletedEvent', () => {
      this.switchBtnPulse(this.$refs.completedViewBtn);
    });
  },

  methods: {
    switchTodoView (view) {
      this.$emit('switchView', view);
      this.currentView = view;
    },

    switchBtnPulse (btn) {
      btn.$el.classList.remove('todo-pulse-animation');
      // Adding set timeout so classes 'reset' properly
      setTimeout(() => {
        btn.$el.classList.add('todo-pulse-animation');
      }, 0);
    }
  }
};
</script>
