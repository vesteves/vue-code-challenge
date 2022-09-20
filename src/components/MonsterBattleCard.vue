<template>
  <div>
    <v-card class="battle-card-player centralized">
      <p class="title">{{ title }}</p>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "MonsterBattleCard",
  props: {
    title: {
      type: String,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.battle-card-player {
  padding: 13px 11px;
  height: 415px;
  flex-direction: column;
  border-radius: 7px;
  box-shadow: $box-shadow;
}

.centralized {
  display: flex !important;
  align-items: center;
  justify-content: center;
}

.title {
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
}
</style>
