<template>
  <v-card
    class="mx-auto px-6 py-2"
    max-width="344"
  >
    <v-list-item class="px-0" two-line>
      <v-list-item-content>
        <!-- HEADER -->
        <div class="text-h6 mb-4">
          Checklist
        </div>
        <!-- MAIN CARD CONTENT -->
        <div class="todo-min-h-12">
          <div class="mb-4">
            <!-- PENDING/COMPLETED VIEW SWITCH -->
            <todo-pending-completed-switch
              @switchView="(pendingOrCompleted) => showPendingOrCompleted = pendingOrCompleted"
            />
          </div>

          <transition name="slide-fade" mode="out-in">
            <!-- PENDING ITEMS COMPONENT -->
            <todo-pending-items-list
              v-if="showPendingOrCompleted === 'pending'"
              key="pendingListTransitionKey"
              :pending-items="pendingItems"
              @toggleCompleted="toggleCompleted"
            />

            <!-- COMPLETED ITEMS COMPONENT -->
            <todo-completed-items-list
              v-else
              key="completedListTransitionKey"
              :completed-items="completedItems"
              @toggleCompleted="toggleCompleted"
            />
          </transition>
        </div>
        <!-- LABEL -->
        <div class="justify-self-start">
          <v-chip
            label
            outlined
            small
          >
            Label
          </v-chip>
        </div>

      </v-list-item-content>

      <!-- KEBAB MENU BUTTON -->
      <todo-kebab-menu />
    </v-list-item>

    <!-- ADD ITEMS -->
    <v-card-actions class="px-0">
      <!-- ADD ITEMS TEXT INPUT -->
      <todo-text-input
        v-model="newItem"
        label="Add an item here"
        @enter="addItem"
      />
      <!-- ADD ITEMS BUTTON -->
      <v-btn
        color="info"
        depressed
        rounded
        small
        @click="addItem"
      >
        Add item
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    newItem: '',
    showPendingOrCompleted: 'pending'
  }),

  computed: {
    ...mapGetters({
      items: 'todo/getItems'
    }),

    pendingItems () {
      return this.items.filter(item => !item.completed);
    },

    completedItems () {
      return this.items.filter(item => item.completed);
    }
  },

  methods: {
    addItem () {
      console.log(this.newItem);
      if (!this.newItem) { return; }

      const item = {
        id: this.items.length,
        task: this.newItem,
        completed: false
      };
      /*
      * $repository
      * location: ~/repository/todoRepository.js
      */
      this.$repository.todo.addItem(item);
      this.newItem = '';
    },
    // toggle completed property
    toggleCompleted (itemId) {
      /*
      * $repository
      * location: ~/repository/todoRepository.js
      */
      this.$repository.todo.toggleCompleted(itemId);
    }

  } // methods
};
</script>
