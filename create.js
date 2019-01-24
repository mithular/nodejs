var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('ukinode.txt', 'Hey there, This is Uki family bond.we improve many skills through this Ukilife', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
