<template>
  <div class="dialog-container" :class="{ hidden: hidden }">
    <div class="scrim" @click="close"></div>
    <div class="dialog">
      <component :is="content" :payload="payload" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Dialog",
  props: ["hidden", "content", "payload"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
</script>

<style lang="postcss" scoped>
.dialog-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  &.hidden {
    visibility: hidden;
  }
  .scrim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  .dialog {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 480px;
    min-height: 40px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.32);
  }
  .close-button {
    position: absolute;
    top: 4px;
    right: 4px;
  }
}
</style>
