<template>
  <div class="bar">
    <div
      class="progress"
      :style="{
        width: calcWidth(),
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProgressiveLinear",
  props: {
    percent: {
      type: Number,
      required: true,
    },
  },
  methods: {
    calcWidth(): string {
      return `${(283 * this.percent) / 100}px`;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.bar {
  width: 283px;
  height: 8px;
  border-radius: 4px !important;
  background-color: #d9d9d9;
}

.progress {
  height: 8px;
  border-radius: 4px !important;
  background-color: #00ff00;
  transition: all 1s ease-in-out;
}
</style>
