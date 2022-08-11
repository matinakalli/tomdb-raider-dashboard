import { makeAutoObservable, observable } from "mobx";
import { purpleMode } from "../Colors";

class ThemeStore {
  theme = { ...purpleMode };

  constructor() {
    makeAutoObservable(this, {
      theme: observable,
    });
  }

  /* SETTERS */
  setTheme = (theme) => {
    this.theme = theme;
  };
}

const themeStore = new ThemeStore();

export default themeStore;
