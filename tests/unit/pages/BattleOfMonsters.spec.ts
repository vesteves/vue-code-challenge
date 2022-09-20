import { mount, createLocalVue } from "@vue/test-utils";
import { mockMonsters } from "../__mocks__/monsters";
import BattleOfMonsters from "@/pages/BattleOfMonsters.vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { Monster } from "@/models/interfaces/monster.interface";

const vuetify = new Vuetify();
const localVue = createLocalVue();

localVue.use(Vuex);

const initialStore = (
  selectedMonsterId: string | undefined,
  selectedMonster: Monster | undefined,
  loadMonsters: () => void,
  getMonsters: Monster[] | []
) => {
  return {
    namespaced: true,
    state: {
      selectedMonsterId,
      selectedMonster,
    },
    actions: {
      loadMonsters,
    },
    getters: {
      getMonsters: () => getMonsters,
    },
  };
};

describe("BattleOfMonsters Page", () => {
  let store;
  let wrapper;
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        monster: initialStore(undefined, undefined, jest.fn(), []),
      },
    });
    wrapper = mount(BattleOfMonsters, {
      localVue,
      vuetify,
      store,
    });
  });

  test("should show the initial page with the monster list to select", () => {
    store = new Vuex.Store({
      modules: {
        monster: initialStore(undefined, undefined, jest.fn(), mockMonsters),
      },
    });
    wrapper = mount(BattleOfMonsters, {
      localVue,
      vuetify,
      store,
    });
    expect(wrapper.find("p").text()).toBe("Battle of Monsters");
    expect(wrapper.find("h3").text()).toBe("Select your monster");
    const monsterItemsCount = wrapper.findAll("p").length;
    expect(monsterItemsCount).toBe(mockMonsters.length + 3);
    expect(wrapper.find("button").text()).toBe("Start Battle");
  });

  test("should show the initial page without the monster list to select", () => {
    store = new Vuex.Store({
      modules: {
        monster: initialStore(undefined, undefined, jest.fn(), []),
      },
    });
    wrapper = mount(BattleOfMonsters, {
      localVue,
      vuetify,
      store,
    });
    expect(wrapper.find("p").text()).toBe("Battle of Monsters");
    expect(wrapper.find("h3").text()).toBe("No monsters available");
    const monsterItemsCount = wrapper.findAll("p").length;
    expect(monsterItemsCount).toBe(3);
    expect(wrapper.find("button").text()).toBe("Start Battle");
  });

  test("should select one monster and random monster also", () => {
    store = new Vuex.Store({
      modules: {
        monster: initialStore(
          "monster-1",
          mockMonsters[0],
          jest.fn(),
          mockMonsters
        ),
      },
    });
    wrapper = mount(BattleOfMonsters, {
      localVue,
      vuetify,
      store,
    });

    expect(wrapper.find("p").text()).toBe("Battle of Monsters");
    expect(wrapper.find("h3").text()).toBe("Select your monster");
    const monsterItemsCount = wrapper.findAll("p").length;
    expect(monsterItemsCount).toBe(mockMonsters.length + 3);
    expect(wrapper.find("button").text()).toBe("Start Battle");
  });
});
