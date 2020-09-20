<template>
  <div class="container">
    <div class="contents">
      <h1>Contents Title</h1>
      <p>
        あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。
      </p>
    </div>
    <nav class="bucket-menu">
      <ul>
        <li class="item-1">A</li>
        <li class="item-2">B</li>
        <li class="item-3">C</li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "BucketMenu",
  methods: {
    onClickOutside(e) {
      this.$emit("click-outside");
    },
  },
});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 640px;
  border: 1px solid #ddd;
  border-radius: 4px;
  mask-image: url("../assets/spreading_circle.svg");
  mask-repeat: no-repeat;
  mask-position: center center;
  mask-size: contain;
}
p {
  margin-top: 32px;
  font-size: 24px;
  line-height: 1.5;
}
.contents {
  flex-grow: 1;
}
.bucket-menu {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  margin: 0;
  padding: 0;
  height: 56px;
  list-style-image: none;
}
li {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 1px solid transparent;
  color: #fff;
  font-weight: bold;
}
.item-1 {
  background: #d66;
}
.item-2 {
  background: #6d6;
}
.item-3 {
  background: #66d;
}
</style>
