<template>
  <BattleOfMonsters />
</template>

<script lang="ts">
import Vue from "vue";
import { defineAsyncComponent } from "vue";

export default Vue.extend({
  name: "App",
  components: {
    BattleOfMonsters: defineAsyncComponent(
      () => import("@/pages/BattleOfMonsters.vue")
    ),
  },
});
</script>
