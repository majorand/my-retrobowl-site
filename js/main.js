function check() {
  return true;
}

window.check = window.check || check;
window.cpd = window.cpd || {
  pause: function () {},
  resume: function () {},
  game: function () {},
  event: function () {},
  track: function () {},
  start: function () {},
  complete: function () {},
  error: function () {}
};
