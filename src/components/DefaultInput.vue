<template>
  <ion-label>{{ labelValue }}</ion-label>
  <ion-input
    :type="inputType"
    :placeholder="inputPlaceholder"
    :value="inputValue"
    @input="$emit('input', $event)"
  ></ion-input>
</template>

<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
    labelValue: {
      type: String,
      default: "",
    },
  },
  computed: {
    inputType() {
      return this.type;
    },
    inputPlaceholder() {
      return this.placeholder;
    },
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue: any) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style scoped></style>
