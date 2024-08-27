<template>
  <div class="main-section">
    <p class="main-title">Battle of Monsters</p>
    <MonstersList :monsters="monsters" />
    <WinnerDisplay v-if="winner" :message="winner.name" />
    <div class="battle-section">
      <MonsterBattleCard
        :title="selectedMonster ? selectedMonster.name : 'Player'"
        :monster="selectedMonster"
      />
      <v-btn
        class="start-battle-button"
        :disabled="!selectedMonsterId"
        :class="[{ inactive: !selectedMonsterId }]"
        @click="
          getWinner({
            monster1Id: selectedMonsterId,
            monster2Id: computerMonster.id,
          })
        "
      >
        Start Battle
      </v-btn>
      <MonsterBattleCard title="Computer" :monster="computerMonster" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import Vue from "vue";

export default Vue.extend({
  name: "BattleOfMonsters",
  components: {
    MonstersList: defineAsyncComponent(
      () => import("@/components/MonstersList.vue")
    ),
    MonsterBattleCard: defineAsyncComponent(
      () => import("@/components/MonsterBattleCard.vue")
    ),
    WinnerDisplay: defineAsyncComponent(
      () => import("@/components/WinnerDisplay.vue")
    ),
  },
  computed: {
    ...mapState("monster", ["selectedMonsterId", "selectedMonster", "winner"]),
    ...mapGetters("monster", ["getMonsters"]),
    monsters() {
      return this.getMonsters;
    },
    computerMonster() {
      if (!this.selectedMonsterId) {
        return undefined;
      }

      const monsterTemp = this.monsters.filter(
        (monster) => monster.id !== this.selectedMonsterId
      );
      return monsterTemp[Math.floor(Math.random() * monsterTemp.length)];
    },
  },
  methods: {
    ...mapActions("monster", ["loadMonsters", "getWinner"]),
  },
  created() {
    this.loadMonsters();
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.main-section {
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin: 0 auto;
  max-width: 814px;
}

.main-title {
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
}

.battle-section {
  display: grid;
  align-items: center;
  gap: 25px;
  grid-template-columns: 1fr 150px 1fr;
}

.start-battle-button {
  color: white !important;
  font-family: $font-family-root !important;
  font-style: normal;
  font-weight: 400 !important;
  font-size: 18px !important;
  line-height: 21px !important;
  text-transform: capitalize !important;
  padding: 12px 30px !important;
  box-shadow: $box-shadow-button;
  pointer-events: visible !important;
  height: 45px !important;
  background-color: $active-button !important;
}

.v-btn--disabled.start-battle-button.inactive {
  background-color: $inactive-button !important;
  color: white !important;
}
</style>
