import { MutationTree } from "vuex";
import { Monster, MonsterState } from "@/models/interfaces/monster.interface";

export const mutations: MutationTree<MonsterState> = {
  setMonsters(state, payload: Monster[]) {
    state.monsters = payload;
  },
  setSelectedMonsterId(state, id: string) {
    state.selectedMonsterId = id;
  },
  setSelectedMonster(state, monster: Monster) {
    state.selectedMonster = monster;
  },
  getWinner(state, monster: Monster) {
    state.winner = monster;
  },
  clearWinner(state) {
    state.winner = undefined;
  },
};
