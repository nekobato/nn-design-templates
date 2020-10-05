<template>
  <input type="text" class="nn-text-field" @input="onInput" :value="value" />
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "AutoFocusNextInput",
  prop: ["next", "maxlength", "value"],
  methods: {
    onInput() {
      this.$emit("input");
      if (this.value === this.mazlength) {
        document.querySelector(this.next).focus();
      }
    },
  },
});
</script>
<style scoped></style>
