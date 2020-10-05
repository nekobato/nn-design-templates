<template>
  <details>
    <summary><slot name="summary" /></summary>
    <slot name="detail" />
  </details>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "PopDetail",
});
</script>
<style scoped></style>
