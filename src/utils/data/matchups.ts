interface Type {
  name: string;
  url: string;
}

const N = 1;
const H = 1 / 2;

const typeIds = new Map([
  ['normal', 0],
  ['fire', 1],
  ['water', 2],
  ['electric', 3],
  ['grass', 4],
  ['ice', 5],
  ['fighting', 6],
  ['poison', 7],
  ['ground', 8],
  ['flying', 9],
  ['psychic', 10],
  ['bug', 11],
  ['rock', 12],
  ['ghost', 13],
  ['dragon', 14],
  ['dark', 15],
  ['steel', 16],
  ['fairy', 17],
]);

const matchupMat = [
  [N, N, N, N, N, N, N, N, N, N, N, N, H, 0, N, N, H, N],
  [N, H, H, N, 2, 2, N, N, N, N, N, 2, H, N, H, N, 2, N],
  [N, 2, H, N, H, N, N, N, 2, N, N, N, 2, N, H, N, N, N],
  [N, N, 2, H, H, N, N, N, 0, 2, N, N, N, N, H, N, N, N],
  [N, H, 2, N, H, N, N, H, 2, H, N, H, 2, N, H, N, H, N],
  [N, H, H, N, 2, H, N, N, 2, 2, N, N, N, N, 2, N, H, N],
  [2, N, N, N, N, 2, N, H, N, H, H, H, 2, 0, N, 2, 2, H],
  [N, N, N, N, 2, N, N, H, H, N, N, N, H, H, N, N, 0, 2],
  [N, 2, N, 2, H, N, N, 2, N, 0, N, H, 2, N, N, N, 2, N],
  [N, N, N, H, 2, N, 2, N, N, N, N, 2, H, N, N, N, H, N],
  [N, N, N, N, N, N, 2, 2, N, N, H, N, N, N, N, 0, H, N],
  [N, H, N, N, 2, N, H, H, N, H, 2, N, N, H, N, 2, H, H],
  [N, 2, N, N, N, 2, H, N, H, 2, N, 2, N, N, N, N, H, N],
  [0, N, N, N, N, N, N, N, N, N, 2, N, N, 2, N, H, N, N],
  [N, N, N, N, N, N, N, N, N, N, N, N, N, N, 2, N, H, 0],
  [N, N, N, N, N, N, H, N, N, N, 2, N, N, 2, N, H, N, H],
  [N, H, H, H, N, 2, N, N, N, N, N, N, 2, N, N, N, H, 2],
  [N, H, N, N, N, N, 2, H, N, N, N, N, N, N, 2, 2, H, N],
];

function matchupForPair(defenseType: Type, offenseType: Type): number {
  const defId = typeIds.get(defenseType.name);
  const offId = typeIds.get(offenseType.name);

  if (defId === undefined) {
    throw new Error(`matchupForPair: ${defenseType.name}`);
  }
  if (offId === undefined) {
    throw new Error(`matchupForPair: ${offenseType.name}`);
  }

  return matchupMat[offId][defId];
}

function multiply(a: number, b: number): number {
  return a * b;
}

export function matchupTypes(defenseTypes: Type[], offenseType: Type): number {
  return defenseTypes.map((type) => matchupForPair(type, offenseType)).reduce(multiply, 1);
}
