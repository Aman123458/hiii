const text =
  "(Hey Sakshi
I just wanted to take a moment and pour my heart out to you because sometimes, words unsaid can weigh heavy, and you deserve to hear this from me loud and clear.
Sakshi I’m with you. Not just when life feels light and fun, not just when we’re laughing over silly things or having those deep late-night talks but also when things get tough, when you're stressed upset, confused, or just don’t feel like yourself. I’m not just here for the easy days. I’m here for all of it.No matter what life throws at us whatever storm, whatever chaos I want you to know that I’ll always be right beside you. I'm not someone who backs off when things get real. If anything, I hold on tighter. I want to be your peace when the world feels loud, your strength when you feel weak, and your calm when everything feels like a mess.I’ve seen your smiles, your fears, your doubts, your fire and I still choose you, every time. I love you, Sakshi. So much more than I even knew was possible. This isn’t some temporary, passing thing. This is deep, raw, genuine love. And I’m not going anywhere.
You don’t ever have to face anything alone not while I’m here. Because I’ll always be your biggest supporter, your safe place, your partner through everything. Whether we’re on top of the world or just trying to make it through the day I’m with you. Completely, endlessly, unconditionally.
I love you, Sakshi. Truly, madly, deeply.
I love you so so so much 🫂🫂❤️)";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
