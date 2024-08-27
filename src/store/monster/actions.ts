import { ActionTree } from "vuex";
import {
  Monster,
  MonsterState,
  MonsterBattlePayload,
  MonsterBattleResponse,
} from "@/models/interfaces/monster.interface";
import { MonsterService } from "@/services/monsters.service";
import { RootState } from "../types";
import { constants } from "@/constants/constants";

export const actions: ActionTree<MonsterState, RootState> = {
  loadMonsters({ commit }): void {
    MonsterService.getAll().then((resp: Monster[]) => {
      commit(constants.LOAD_MONSTERS, resp);
    });
  },
  selectedMonsterById({ commit }, id: string): void {
    commit(constants.SELECT_MONSTERS_BY_ID, id);
  },
  selectedMonster({ commit }, monster: Monster): void {
    commit(constants.SELECT_MONSTERS, monster);
  },
  getWinner({ commit }, payload: MonsterBattlePayload): void {
    MonsterService.getWinner(payload).then((resp: MonsterBattleResponse) => {
      commit(constants.GET_WINNER, resp.winner);
    });
  },
  clearWinner({ commit }): void {
    commit(constants.CLEAR_WINNER);
  },
};
