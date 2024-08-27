<template>
  <div>
    <v-card
      class="battle-card-player"
      :class="{
        centralized: !monster,
      }"
    >
      <p v-if="!monster" class="title">{{ title }}</p>
      <template v-else>
        <v-img :src="monster.imageUrl" class="image"></v-img>
        <div class="monster-name">{{ monster.name }}</div>
        <hr />
        <div class="label">HP</div>
        <ProgressiveLinear :percent="monster.hp" />
        <div class="label">Atack</div>
        <ProgressiveLinear :percent="monster.attack" />
        <div class="label">Deffense</div>
        <ProgressiveLinear :percent="monster.defense" />
        <div class="label">Speed</div>
        <ProgressiveLinear :percent="monster.speed" />
      </template>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue, { defineAsyncComponent } from "vue";
import { Monster } from "@/models/interfaces/monster.interface";

export default Vue.extend({
  name: "MonsterBattleCard",
  components: {
    ProgressiveLinear: defineAsyncComponent(
      () => import("@/components/ProgressiveLinear.vue")
    ),
  },
  props: {
    title: {
      type: String,
      required: false,
    },
    monster: {
      type: Object as () => Monster,
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

.image {
  width: 283px;
  height: 178px;
  border-radius: 7px;
}

.monster-name {
  font-size: 22px;
  margin: 14px 0 5px 0;
}

.label {
  margin-top: 11px;
  margin-bottom: 5px;
}
</style>
