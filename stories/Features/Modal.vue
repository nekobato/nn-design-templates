<template>
  <div class="modal-container" :class="{ hidden: hidden }">
    <div class="scrim" @click="close"></div>
    <div class="modal">
      <component class="modal-contents" :is="content" :payload="payload" />
      <button class="nn-icon-button close-button" @click="close">
        <svg class="nn-icon type-small" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "Modal",
  components: {},
  props: ["hidden", "content", "payload"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
});
</script>

<style lang="postcss" scoped>
.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
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
  .modal {
    position: relative;
    min-width: 640px;
    min-height: 40px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 4px rgba(82, 72, 72, 0.32);
    overflow: hidden;
  }
  .modal-contents {
    display: flex;
    overflow-y: auto;
  }
  .close-button {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
