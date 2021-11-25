<template>
  <v-menu
  bottom
  left
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="align-self-start mt-2 todo-translateX-25"
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="i in 3"
        :key="i"
      >
        <v-list-item-title>Menu Item {{ i }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
