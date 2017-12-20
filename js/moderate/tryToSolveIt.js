var decr = {
    'a': 'u',
    'b': 'v',
    'c': 'w',
    'd': 'x',
    'e': 'y',
    'f': 'z',
    'g': 'n',
    'h': 'o',
    'i': 'p',
    'j': 'q',
    'k': 'r',
    'l': 's',
    'm': 't',
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
