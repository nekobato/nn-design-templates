<template>
  <button class="back-button" @click="back">
    <svg class="nn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"
      />
    </svg>
    <span>戻る</span>
  </button>
</template>
<script>
import Vue from "vue";
export default Vue.extend({
  props: ["src"],
  methods: {
    back() {
      if (this.src) this.$router.push(this.src);
      this.$router.back();
    },
  },
});
</script>
<style lang="postcss" scoped>
.back-button {
  $color-default: #444;
  $color-hover: #666;
  $color-active: #333;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  padding: 0;
  background: transparent;
  border: none;
  text-decoration: none;
  cursor: pointer;
  span {
    margin-left: 4px;
    font-weight: bold;
    text-decoration: none;
    color: $color-default;
  }
  .nn-icon {
    margin-left: 4px;
    fill: $color-default;
  }
  &:hover {
    span {
      color: $color-hover;
    }
    .nn-icon {
      fill: $color-hover;
    }
  }
  &:active {
    span {
      color: $color-active;
    }
    .nn-icon {
      fill: $color-active;
    }
  }
}
</style>
