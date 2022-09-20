import { GetterTree } from "vuex";
import { Monster, MonsterState } from "@/models/interfaces/monster.interface";
import { RootState } from "../types";

export const getters: GetterTree<MonsterState, RootState> = {
  getMonsters(state): Monster[] {
    return state.monsters;
  },
};
