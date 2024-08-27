import { MonsterState } from "@/models/interfaces/monster.interface";
import { mockMonsters } from "./monsters";

export const monsterState: MonsterState = {
  monsters: mockMonsters,
  selectedMonsterId: "monster-1",
  selectedMonster: {
    id: "monster-1",
    name: "Dead Unicorn",
    attack: 60,
    defense: 40,
    hp: 10,
    speed: 80,
    type: "Type",
    imageUrl:
      "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png",
  },
  winner: {
    id: "monster-1",
    name: "Dead Unicorn",
    attack: 60,
    defense: 40,
    hp: 10,
    speed: 80,
    type: "Type",
    imageUrl:
      "https://fsl-assessment-public-files.s3.amazonaws.com/assessment-cc-01/dead-unicorn.png",
  },
};
