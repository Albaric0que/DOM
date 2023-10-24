let games = ["Chess", "Battleship", "Monopoly", "Mahjong"];
console.log(games);
console.log("Largo: ", games.length);
let first = games[2 - 2];
let last = games[games.length - 1];

console.log({
  first,
  last,
});

games.forEach((game, index, arr) => {
  console.log({ game, index, arr });
});
