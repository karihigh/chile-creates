const path = require('path');
const fs = require('fs');

//joining path of directory
const directoryPath = path.join(__dirname, 'BabyJasons/streetart');

let papaJason = {
  responses: []
};

//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        let babyFile = path.join(directoryPath, file);
        let jason = JSON.parse(fs.readFileSync(babyFile));

        jason.responses.forEach( function(imgData) {
          let dataToKeep = {
            imgColorRed: imgData.imagePropertiesAnnotation.dominantColors.colors[0].color.red,
            imgColorGreen: imgData.imagePropertiesAnnotation.dominantColors.colors[0].color.green,
            imgColorBlue: imgData.imagePropertiesAnnotation.dominantColors.colors[0].color.blue
          }
          console.log(imgData.imagePropertiesAnnotation.dominantColors.colors);
          papaJason.responses.push(dataToKeep);
        })
        //console.log(imgData.imagePropertiesAnnotation.dominantColors.colors[0].blue)

    });

    fs.writeFileSync(`./AllColors-test.json`, JSON.stringify(papaJason));

});

//console.log(papaJason.responses.length);
