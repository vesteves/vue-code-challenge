import { mount, createLocalVue } from "@vue/test-utils";
import { mockMonsters } from "../__mocks__/monsters";
import MonstersList from "@/components/MonstersList.vue";
import Vuetify from "vuetify";
import Vuex, { Store } from "vuex";

const vuetify = new Vuetify();
const localVue = createLocalVue();

localVue.use(Vuex);

describe("MonstersList Component", () => {
  let store: Store<unknown>;

  beforeEach(() => {
    const userModule = {
      namespaced: true,
      actions: {
        selectedMonsterById: jest.fn(),
        selectedMonster: jest.fn(),
        selectedRandomMonster: jest.fn(),
        resetGame: jest.fn(),
      },
    };
    store = new Vuex.Store({
      modules: {
        monster: userModule,
      },
    });
  });

  test("should match with the snapshot", () => {
    const wrapper = mount(MonstersList, {
      propsData: {
        monsters: [],
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  test("should render the monsters list", () => {
    const wrapper = mount(MonstersList, {
      propsData: {
        monsters: mockMonsters,
      },
    });
    const monsterItemsCount = wrapper.findAll("p").length;
    expect(monsterItemsCount).toBe(mockMonsters.length);
  });

  test("should render the no monsters available message", () => {
    const wrapper = mount(MonstersList, {
      propsData: {
        monsters: [],
      },
    });
    expect(wrapper.text()).toBe("No monsters available");
  });

  test("should click on the first monster card", async () => {
    const wrapper = mount(MonstersList, {
      localVue,
      vuetify,
      propsData: {
        monsters: mockMonsters,
      },
      store,
    });
    const monster1 = wrapper.find('[data-testid="monster-1"]');
    const monster2 = wrapper.find('[data-testid="monster-2"]');
    await monster1.trigger("click");
    expect(monster1.attributes().style).toBe("border: 1px solid black;");
    await monster2.trigger("click");
    expect(monster1.attributes().style).toBe("");
  });
});
