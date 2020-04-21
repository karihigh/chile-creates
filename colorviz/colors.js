// colors
let signs;

function preload() {
  signs = loadJSON("/street-art.json");
  console.log('I loaded the json');
}

function setup() {
  createCanvas(1000, 1000);
}

// **MANY TILES
function draw() {
  background(220);
  w = 20
  h = 20
  x = 0
  y = 0
  for (let i = 0; i < 2000; i++) {
    let imgData = signs.responses[i].imagePropertiesAnnotation.dominantColors.colors[0];
    let r = imgData.color.red;
    let g = imgData.color.green;
    let b = imgData.color.blue;

    let c = color(r, g, b);
    fill(c);
    noStroke();
    rect(x, y, w, h);
    x += h;
    if(x >= width) {
      y += w
      x = 0
    }
  }
}

//   for (let i = 0; i < signs.responses.length; i++) {
//     let filename = signs.responses[i].context.uri;
//     newfilename = filename.substr(filename.length - 9);
//     createElement('h2', newfilename);
//
//     // createElement('p', signs.responses[i].textAnnotations.description);
//     // createElement('p', signs.responses[i].fullTextAnnotation.text);
//   }
// }

//   for (let i = 0; i < signs.responses.length; i++) {
//     let imgData = signs.responses[i];
//     //createElement('h2', imgData.context.uri);
//     let allObjects = imgData.localizedObjectAnnotations;
//     for (let a = 0; a < allObjects.length; a++) {
//       createElement('p', allObjects[a].name);
//       console.log(allObjects[a].name);
//     }
//   }
//}


// **ONE TILE
// function draw() {
//   background(250);
//   let r = signs.responses[16].imagePropertiesAnnotation.dominantColors.colors[0].color.red;
//   let g = signs.responses[16].imagePropertiesAnnotation.dominantColors.colors[0].color.green;
//   let b = signs.responses[16].imagePropertiesAnnotation.dominantColors.colors[0].color.blue;
//   let c = color(r, g, b)
//   fill(c);
//   noStroke();
//   rect(10, 10, 60, 60);
// }
