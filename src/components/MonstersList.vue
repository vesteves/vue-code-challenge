<template>
  <div>
    <h3 class="title-select-monster">
      {{
        monsters.length > 0 ? "Select your monster" : "No monsters available"
      }}
    </h3>
    <div class="list-monsters">
      <v-card
        v-for="monster in monsters"
        :key="monster.id"
        :data-testid="monster.id"
        class="card-monster"
        :ripple="false"
        :style="{
          border: monster.id === selectedMonsterId ? '1px solid black' : 'none',
        }"
        @click="handleMonsterClick(monster)"
      >
        <v-img :src="monster.imageUrl" class="image"></v-img>
        <p>{{ monster.name }}</p>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Monster } from "@/models/interfaces/monster.interface";
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "MonsterList",
  props: {
    monsters: {
      type: Array,
      required: false,
    },
  },
  data() {
    return {
      selectedMonsterId: null,
    };
  },

  methods: {
    ...mapActions("monster", [
      "selectedMonsterById",
      "selectedMonster",
      "clearWinner",
    ]),
    handleMonsterClick(monster: Monster) {
      this.clearWinner();
      const correctMonster =
        this.selectedMonsterId !== monster.id ? monster : null;
      this.selectedMonsterId = correctMonster?.id ?? null;
      this.selectedMonsterById(correctMonster?.id ?? null);
      this.selectedMonster(correctMonster ?? null);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.list-monsters {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.title-select-monster {
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
}

.image {
  width: 136px;
  height: 99px;
  border-radius: 7px;
}

.card-monster {
  width: 150px;
  height: 139px;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 7px;
  padding: 7px !important;
  box-shadow: $box-shadow;
  transition: all 0.2s ease-in-out;

  &:focus:before {
    opacity: 0 !important;
  }

  &:hover {
    transform: scale(1.05);
  }
}

.card-monster p {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-top: 7px;
}
</style>
