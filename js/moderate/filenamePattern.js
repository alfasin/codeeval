var fs  = require("fs");
fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function (line) {
        if (line !== "") {
            var arr = line.split(' ');
            var regex = arr.shift();
            regex = '^' + regex.split('.').join('\\.')
                         .split('?').join('.')
                         .split('*').join('.*?') + '$';

            var res = '';
            for (var word of arr) {
                if (word.match(new RegExp(regex))) {
                    res += word + ' ';
                }
            }
            if (res.trim() === '') {
                res = '-'
            }
            console.log(res);
        }
});
