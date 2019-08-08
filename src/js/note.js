export default class Note {
  elm = undefined;

  constructor(elmId) {
    this.elm = document.getElementById(elmId);
    if (this.elm === null) throw new Error(`Element with ID: ${elmId} not found!`);
    console.log(this.elm);
  }
}
