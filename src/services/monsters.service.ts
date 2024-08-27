import { API_URL } from "@/constants/env";
import {
  Monster,
  MonsterBattlePayload,
  MonsterBattleResponse,
} from "@/models/interfaces/monster.interface";

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then((response) => response.json());

const getWinner = async (
  payload: MonsterBattlePayload
): Promise<MonsterBattleResponse> => {
  return await fetch(`${API_URL}/battle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json());
};
export const MonsterService = {
  getAll,
  getWinner,
};
