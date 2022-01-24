import { makeAutoObservable } from "mobx";
import petsData from "../petsData";

class PetStore {
  constructor() {
    this.pets = petsData;
    makeAutoObservable(this);
  }

  adopt = (petId) => {
    this.pets = this.pets.filter((pet) => +pet.id !== +petId);
  };
}

const petStore = new PetStore();
export default petStore;
