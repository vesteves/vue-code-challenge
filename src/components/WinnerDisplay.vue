<template>
  <div class="winner-box">
    <p class="message-winner">{{ message }} wins!</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "WinnerDisplay",
  props: {
    message: {
      type: String,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.winner-box {
  background: $winner-background;
  border: 1px solid $black;
  box-shadow: $box-shadow;
  border-radius: 4px;
  padding: 17px 28px;
  align-content: center;
}

.message-winner {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
}
</style>
