//the people you might have been passed and words

let names = [{
  name: "akina",
  //word: "hey"
}, {
  name: "zak",
  //word: "love you"
}, {
  name: "june",
  //word: "sweet"
}, {
  name: "sara",
  //word: "my friend!"
}, {
  name: "cindia",
  //word: "super!"
}, {
  name: "nick",
  //word: "wonderful"
}, {
  name: "sierra",
  //word: "I'm down"
}, {
  name: "greg",
  //word: "you can do it"
}, {
  name: "cris",
  //word: "wanna go get some coffee?"
}, {
  name: "marta",
  //word: "bless you"
}, {
  name: "miguel",
  //word: "chao"
}];

let words = [{
  word: "hey"
}, {
  word: "love you"
}, {
  word: "sweet"
}, {
  word: "my friend!"
}, {
  word: "super!"
}, {
  word: "wonderful"
}, {
  word: "I'm down"
}, {
  word: "you can do it"
}, {
  word: "wanna go get some coffee?"
}, {
  word: "bless you"
}, {
  word: "chao"
}];

let randomIndex;
let randomIndex2;
// let inconsolata;
// function preload() {
//   inconsolata = loadFont('assets/inconsolata.otf');
// }

let animating = false;
let cats = [];
let imageCounter = 0;
let button;

function preload() {
  //'assets/cat_${i}.jpeg'
  for (let i = 0; i <= 5; i++) {
    cats[i] = loadImage("assets/cat_" + i + ".png")
  }
}


function setup() {
  createCanvas(400, 400);
  background(238, 130, 238);
  textSize(12);
  imageMode(CENTER);
  frameRate(8);

  text("click to find your destiny moment of bumping into someone", 50, 50);

  button = createButton("click to randomize");
  button.mousePressed(buttonPressed);


  // setTimeout(changeBackground, 1000);
  // setInterval(changeBackground, 1000);
  //function copy and past not



  // console.log("initial array is");
  // console.log(names);

  // names.shift();
  // //pop removes the last thing of the array
  // console.log("array after shift");
  // console.log(names);
  //
  // names.unshift("greg");
  // console.log("array after unshift");
  // console.log(names);
  // //unshift takes the premeter
  // //shift and pop: takes away the first one
  //names.splice(index, number);
  // names.splice(4, 1);
  // console.log("array after splice");
  // console.log(names);
  //splice to remove on that perticuilar section

}

function draw() {
  //text('click to find your destiny moment of bumping into someone', 45, 200);

  if (animating == true) {
    clear();
    //white clean the canvas image before
    image(cats[imageCounter], width / 2, height / 2);

    if (imageCounter < cats.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}


  // function changeBackground(){
  //   if (counter <= 5){
  //   counter++;
  //   console.log(counter);
  //   background(random(255),random(255), random(255));
  //   setTimeout(changeBackground, 1000);
  // } else {
  //
  // }
  //
  // }

  function randomizer() {
    animating = false;

    if (names[0]) {

      //this displays random name and splices it out of array
      // background(random(240, 150, 238));
      clear();

      //names random
      randomIndex = int(random(names.length));
      randomIndex2 = int(random(words.length));
      textStyle(NORMAL);
      textFont('Orbitron');
      textAlign(CENTER, CENTER);
      // text('${names[randomIndex].name} says...', 180, 150);
      image(random(cats), width / 2, height / 2);
      //random image of cats

      text(names[randomIndex].name + " says...", width/2, height - 50);


      //words random
      textStyle(ITALIC);
      textFont('Homemade Apple');
      textAlign(CENTER, CENTER);
      text(words[randomIndex2].word, width/2, height - 25);

      names.splice(randomIndex, 1);
    } else {
      background(random(240, 150, 238));
      text("nothing left!", 50, 50);

    }

  }

  function buttonPressed() {
    animating = true;
    setTimeout(randomizer, 2000);


  }
