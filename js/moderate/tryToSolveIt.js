var decr = {
    'a': 'u',
    'u': 'a',
    'b': 'v',
    'v': 'b',
    'c': 'w',
    'w': 'c',
    'd': 'x',
    'x': 'd',
    'e': 'y',
    'y': 'e',
    'f': 'z',
    'z': 'f',
    'g': 'n',
    'n': 'g',
    'h': 'o',
    'o': 'h',
    'i': 'p',
    'p': 'i',
    'j': 'q',
    'q': 'j',
    'k': 'r',
    'r': 'k',
    'l': 's',
    's': 'l',
    'm': 't',
    't': 'm',
    ' ': ' '
};


var fs  = require("fs");
fs.readFileSync(process.argv[2])
  .toString()
  .split('\n')
  .forEach(function (line) {
      if (line !== "") {
          var res = '';
          for (var i in line) {
              res += decr[line[i]];
          }
          console.log(res);
      }
  });
