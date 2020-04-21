
let order = 2;
let ngrams = {};
let button;
let signs;
let txt = '';
//let txt = "Fila began in 1911, in the small alpine town of Biella, Italy, a place renowned for manufacturing the world's finest textiles, and weaving fabrics with impeccable quality, true innovation and extraordinary beauty. Born of the city and its traditions, Fila is inexorably derived from Biella's dedication to artistry, luxury and elegance. This is our birthright, it's in our soul, and it defines our future. We continue to enrich the athletic experience by improving comfort and performance with Italian design, quality craftsmanship and refined materials. There is no feeling quite as luxurious as that of playing in Fila, and that is the reason for our existence. We create what is desired, not what is necessary. Not just enough, but more than you need. This is Fila."


function preload() {
  signs = loadJSON( "/AllStreetArtTexts.json");
}

function setup() {
  noCanvas();
  //let txt = signs.responses.join();
  for (let i = 0; i < signs.responses.length; i++) {
    txt += signs.responses[i]
    txt += ' '
  }
  console.log(txt);

  for (let i = 0; i <= txt.length - order; i++) {
    let gram = txt.substring(i, i + order);

    if (!ngrams[gram]) {
      ngrams[gram] = [];
    }
    ngrams[gram].push(txt.charAt(i + order));
  }
  button = createButton('generate');
  button.mousePressed(markovIt);
  console.log(ngrams);
}

function markovIt() {

  let currentGram = txt.substring(0, order);
  let result = currentGram;

  for (var i = 0; i < 100; i++) {
    let possibilities = ngrams[currentGram];
    if (!possibilities) {
      break;
    }
    let next = random(possibilities);
    result += next;
    let len = result.length;
    currentGram = result.substring(len - order, len);
  }


  createP(result);
}
