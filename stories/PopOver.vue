<template>
  <div>
    <slot />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "PopOver",
  methods: {
    onClickOutside(e) {
      this.$emit("click-outside");
    },
  },
  beforeMount() {
    document.addEventListener("click", this.onClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClickOutside);
  },
});
</script>
<style scoped></style>
