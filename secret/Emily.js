click_no()

document.getElementById("much")
    .addEventListener('input', evt => {
  heart_size();
});

function heart_size() {
  document.getElementById("heart").style.width = (document.getElementById("much").value)/4 + "%";
  str = document.getElementById("heart").style.width;
  str = str.substring(0, str.length - 1);
  str = Number(str);
  document.getElementById("heart").style.left = (100 - str)/2 + "%";
}

function click_yes() {
  document.getElementById("much").style.visibility = "visible";
  document.getElementById("much_lb").style.visibility = "visible";
  document.getElementById("heart").style.visibility = "visible";
}

function click_no() {
  document.getElementById("end").style.visibility = "hidden";
  document.getElementById("much").value = 0;
  document.getElementById("much").style.visibility = "hidden";
  document.getElementById("much_lb").style.visibility = "hidden";
  document.getElementById("anni").value = "2003-11-05";
  document.getElementById("anni").style.visibility = "hidden";
  document.getElementById("anni_lb").style.visibility = "hidden";
  document.getElementById("submit").style.visibility = "hidden";
  document.getElementById("heart").style.visibility = "hidden";
  heart_size();
}

function fmuch() {
  if (document.getElementById("much").value == 100) {
    much_100();
  } else {
    much_0();
  }
}

function much_100() {
  document.getElementById("anni").style.visibility = "visible";
  document.getElementById("anni_lb").style.visibility = "visible";
}

function much_0() {
  document.getElementById("anni").value = "2003-11-05";
  document.getElementById("anni").style.visibility = "hidden";
  document.getElementById("anni_lb").style.visibility = "hidden";
  document.getElementById("submit").style.visibility = "hidden";
}

function fanni() {
  if (document.getElementById("anni").value == "2022-08-14") {
    anni_date();
  } else {
    other_date();
  }
}

function anni_date() {
  document.getElementById("submit").style.visibility = "visible";
}

function other_date() {
  document.getElementById("submit").style.visibility = "hidden";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function end() {
  document.getElementById("start_p").style.visibility = "hidden";
  document.getElementById("yes").style.visibility = "hidden";
  document.getElementById("yes_lb").style.visibility = "hidden";
  document.getElementById("no_lb").style.visibility = "hidden";
  document.getElementById("no").style.visibility = "hidden";
  document.getElementById("much").style.visibility = "hidden";
  document.getElementById("much_lb").style.visibility = "hidden";
  document.getElementById("anni").style.visibility = "hidden";
  document.getElementById("anni_lb").style.visibility = "hidden";
  document.getElementById("submit").style.visibility = "hidden";
  document.getElementById("heart").style.visibility = "hidden";
  document.getElementById("end").style.visibility = "visible";
  play();
}

function play() {
  var audio = new Audio("C:/Users/jonly/OneDrive/Documents/Valentine2025/secret/z3.mp3");
  audio.play();
  sleep(1000).then(() => {
    play();
  });
}
