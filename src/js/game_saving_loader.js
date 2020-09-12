import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read().then((response) => {
        try {
          json(response).then((data) => {
            resolve(data);
          });
        } catch (error) {
          reject(error);
        }
      });
    });
  }
}
