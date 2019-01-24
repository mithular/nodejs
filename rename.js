var fs = require('fs');

//Rename the file "mynewfile1.txt" into "myrenamedfile.txt":
fs.rename('ukinode.txt', 'ukinodejsexercise1.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
