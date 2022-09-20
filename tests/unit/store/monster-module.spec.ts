import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import monster from "@/store/monster";
import { monsterState } from "../__mocks__/test-monster-state";
import { MonsterService } from "@/services/monsters.service";
import { Monster } from "@/models/interfaces/monster.interface";

const localVue = createLocalVue();
localVue.use(Vuex);
interface customRoot {
  version: string;
  monster: customMonster;
}
interface customMonster {
  monsters: Array<Monster> | [];
  selectedMonsterId: string | undefined;
  selectedMonster: Monster | undefined;
}

const createVuexStore = (initialStore: customMonster) => {
  return new Vuex.Store<customRoot>({
    modules: {
      monster: {
        ...monster,
        state: { ...initialStore },
      },
    },
  });
};

describe("Monster Module", () => {
  // States ==================
  test("should run the initial state", () => {
    const store = createVuexStore({
      monsters: [],
      selectedMonsterId: undefined,
      selectedMonster: undefined,
    });
    const { monsters, selectedMonsterId, selectedMonster } =
      store.state.monster;

    expect(monsters).toEqual([]);
    expect(selectedMonsterId).toBeUndefined();
    expect(selectedMonster).toBeUndefined();
  });

  // Mutations ==================
  test("should run the mutation: setMonsters", () => {
    const store = createVuexStore(monsterState);
    store.commit("monster/setMonsters", monsterState.monsters);
    expect(store.state.monster.monsters.length).toBe(5);
  });

  test("should run the mutation: setSelectedMonsterId", () => {
    const store = createVuexStore(monsterState);
    store.commit(
      "monster/setSelectedMonsterId",
      monsterState.selectedMonsterId
    );
    expect(store.state.monster.selectedMonsterId).toBe("monster-1");
  });

  test("should run the mutation: setSelectedMonster", () => {
    const store = createVuexStore(monsterState);
    store.commit("monster/setSelectedMonster", monsterState.selectedMonster);
    expect(store.state.monster.selectedMonster).toEqual({
      id: "monster-1",
      name: "Dead Unicorn",
      attack: 60,
      defense: 40,
      hp: 10,
      speed: 80,
      type: "Type",
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png",
    });
  });

  // Getters ==================
  test("should run the getter: getMonsters", () => {
    const store = createVuexStore(monsterState);
    expect(store.getters["monster/getMonsters"].length).toBe(5);
  });

  // Actions ==================
  test("should run the action: loadMonsters", async () => {
    jest
      .spyOn(MonsterService, "getAll")
      .mockResolvedValue(monsterState.monsters);
    const store = createVuexStore(monsterState);
    await store.dispatch("monster/loadMonsters");
    expect(store.state.monster.monsters.length).toBe(5);
  });

  test("should run the action: selectedMonsterById", async () => {
    const store = createVuexStore(monsterState);
    await store.dispatch("monster/selectedMonsterById", "monster-1");
    expect(store.state.monster.selectedMonsterId).toBe("monster-1");
  });

  test("should run the action: selectedMonster", async () => {
    const store = createVuexStore(monsterState);
    await store.dispatch(
      "monster/selectedMonster",
      monsterState.selectedMonster
    );
    expect(store.state.monster.selectedMonster).toEqual({
      id: "monster-1",
      name: "Dead Unicorn",
      attack: 60,
      defense: 40,
      hp: 10,
      speed: 80,
      type: "Type",
      imageUrl:
        "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png",
    });
  });
});
