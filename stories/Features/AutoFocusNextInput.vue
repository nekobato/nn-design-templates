<template>
  <input type="text" class="nn-text-field" @input="onInput" :value="value" :maxlength="maxlength" />
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "AutoFocusNextInput",
  props: ["next", "maxlength", "value"],
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      if (e.target.value.length === Number(this.maxlength)) {
        document.querySelector(`#${this.next}`).focus();
      }
    },
  },
});
</script>
<style scoped></style>
