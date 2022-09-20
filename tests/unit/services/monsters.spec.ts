import { MonsterService } from "@/services/monsters.service";
import { monsterState } from "../__mocks__/test-monster-state";
import fetchMock from "jest-fetch-mock";

describe("Monsters Service", () => {
  beforeEach(() => {
    fetchMock.enableMocks();
  });

  test("should return the monsters list empty", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));
    await MonsterService.getAll().then((res) => {
      expect(res).toEqual([]);
    });
  });

  test("should return the monsters list with data", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify([monsterState.monsters[0], monsterState.monsters[1]])
    );
    await MonsterService.getAll().then((resp) => {
      expect(resp).toEqual([
        monsterState.monsters[0],
        monsterState.monsters[1],
      ]);
    });
  });
});
