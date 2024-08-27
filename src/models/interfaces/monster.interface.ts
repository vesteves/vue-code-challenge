export interface Monster {
  id: string;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  speed: number;
  type: string;
  imageUrl: string;
}

export interface MonsterState {
  monsters: Monster[];
  selectedMonsterId: string | undefined;
  selectedMonster: Monster | undefined;
  winner: Monster | undefined;
}

export interface MonsterBattlePayload {
  monster1Id: number;
  monster2Id: number;
}

export interface MonsterBattleResponse {
  winner: Monster;
}
