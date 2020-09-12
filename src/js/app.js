import GameSavingLoader from './game_saving_loader';
import read from './reader';
import json from './parser';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log(error);
});

(async () => {
  const response = await read();
  const data = await json(response);
})();
