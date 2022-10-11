let latest = new Date("Oct 12 2022").getTime();
// + 24 * 60 * 60 * 1000;
console.log(latest);
setInterval(function () {
  let now = new Date();
  let diff = latest - now;

  let days = Math.floor(diff / (60 * 60 * 24 * 1000));
  let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((diff / 1000 / 60) % 60);
  let seconds = Math.floor((diff / 1000) % 60);
  document.getElementById("one").innerText =
    days + "d:" + hours + "hrs:" + minutes + "m:" + seconds + "s";
});
