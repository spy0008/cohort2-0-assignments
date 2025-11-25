let keyNotes = {
  KeyA: "Mnotes/A.mp3",
  KeyB: "Mnotes/B.mp3",
  KeyC: "Mnotes/C.mp3",
  KeyD: "Mnotes/D.mp3",
  KeyE: "Mnotes/E.mp3",
  KeyF: "Mnotes/F.mp3",
  KeyG: "Mnotes/G.mp3",
  KeyH: "Mnotes/H.mp3",
  KeyI: "Mnotes/i.mp3",
  KeyJ: "Mnotes/J.mp3",
  KeyK: "Mnotes/K.mp3",
  KeyL: "Mnotes/l.mp3",
  KeyM: "Mnotes/M.mp3",
  KeyN: "Mnotes/N.mp3",
  KeyO: "Mnotes/O.mp3",
  KeyP: "Mnotes/P.mp3",
  KeyQ: "Mnotes/Q.mp3",
  KeyR: "Mnotes/R.mp3",
  KeyS: "Mnotes/S.mp3",
  KeyT: "Mnotes/T.mp3",
  KeyU: "Mnotes/U.mp3",
  KeyV: "Mnotes/V.mp3",
  KeyW: "Mnotes/W.mp3",
  KeyX: "Mnotes/X.mp3",
  KeyY: "Mnotes/Y.mp3",
  KeyZ: "Mnotes/Z.mp3",
  Digit1: "Mnotes/1.mp3",
  Digit2: "Mnotes/2.mp3",
  Digit3: "Mnotes/3.mp3",
  Digit4: "Mnotes/4.mp3",
  Digit5: "Mnotes/5.mp3",
  Digit6: "Mnotes/6.mp3",
  Digit7: "Mnotes/7.mp3",
  Digit8: "Mnotes/8.mp3",
  Digit9: "Mnotes/9.mp3",
  Digit0: "Mnotes/0.mp3",
};

document.body.addEventListener("keydown", function (e) {
  let note = keyNotes[e.code];
  let keydown = document.querySelector(`#key-${e.key}`);
  keydown.style.transform = "scale(0.9)";

  if (note) {
    new Audio(note).play();
  }
});

document.body.addEventListener("keyup", function (e) {
  let keyup = document.querySelector(`#key-${e.key}`);
  if (keyup) {
    keyup.style.transform = "scale(1)";
  }
});
