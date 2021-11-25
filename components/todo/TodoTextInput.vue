<template>
  <v-text-field
    class="todo-input-p-0"
    dense
    flat
    hide-details="true"
    :label="label"
    placeholder=""
    solo
    :value="value"
    @input="updateValue"
    @keyup.enter="$emit('enter')"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    label: {
      default: 'Label',
      type: String
    },
    value: {
      default: ''
    }
  },

  methods: {
    updateValue (value) {
      this.$emit('input', value);
    }
  }
};
</script>
