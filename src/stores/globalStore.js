import { makeAutoObservable } from "mobx";

class globalStore {
  shuffledQuestions = [];

  constructor() {
    makeAutoObservable(this);
  }
};

export default new globalStore();