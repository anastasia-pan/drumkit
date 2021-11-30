const boom = document.getElementById("boom");
const boombutton = document.getElementById("boombutton");

boombutton.addEventListener("click", () => {
  boom.play();
});

const clap = document.getElementById("clap");
const clapbutton = document.getElementById("clapbutton");

clapbutton.addEventListener("click", () => {
  clap.play();
});

const hihat = document.getElementById("hihat");
const hihatbutton = document.getElementById("hihatbutton");

hihatbutton.addEventListener("click", () => {
  hihat.play();
});

const kick = document.getElementById("kick");
const kickbutton = document.getElementById("kickbutton");

kickbutton.addEventListener("click", () => {
  kick.play();
});

const openhat = document.getElementById("openhat");
const openhatbutton = document.getElementById("openhatbutton");

openhatbutton.addEventListener("click", () => {
  openhat.play();
});

const ride = document.getElementById("ride");
const ridebutton = document.getElementById("ridebutton");

ridebutton.addEventListener("click", () => {
  ride.play();
});

const snare = document.getElementById("snare");
const snarebutton = document.getElementById("snarebutton");

snarebutton.addEventListener("click", () => {
  snare.play();
});

const tink = document.getElementById("tink");
const tinkbutton = document.getElementById("tinkbutton");

tinkbutton.addEventListener("click", () => {
  tink.play();
});

const tom = document.getElementById("tom");
const tombutton = document.getElementById("tombutton");

tombutton.addEventListener("click", () => {
  tom.play();
});

document.addEventListener("keypress", (event) => {
  if (event.code == "KeyA") {
    boom.play();
  } else if (event.code == "KeyS") {
    clap.play();
  } else if (event.code == "KeyD") {
    hihat.play();
  } else if (event.code == "KeyF") {
    kick.play();
  } else if (event.code == "KeyG") {
    openhat.play();
  } else if (event.code == "KeyH") {
    ride.play();
  } else if (event.code == "KeyJ") {
    snare.play();
  } else if (event.code == "KeyK") {
    tink.play();
  } else if (event.code == "KeyL") {
    tom.play();
  }
});
