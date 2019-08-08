import LocalStorage from './local-storage';

let textarea = document.getElementById('notes');
textarea.value = LocalStorage.getItem('note');

textarea.onkeyup = (e) => {
  if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
  LocalStorage.setItem('note', textarea.value);
};

textarea.onkeydown = (e) => {
  if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
    LocalStorage.setItem('note', textarea.value);
  }
}
