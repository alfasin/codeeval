var fs  = require("fs");
fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function (line) {
        if (line !== "") {
            var arr = line.split(' ');
            var ceil = parseInt(arr[0], 10);
            var floor = 0;
            var run = Math.ceil(ceil / 2);
            for (var i = 1; i < arr.length; i += 1) {
                if (arr[i] === 'Lower') {
                    ceil = run - 1;
                } else if (arr[i] === 'Higher') {
                    floor = run + 1;
                } else {
                    console.log(run);
                    break;
                }
                run = Math.ceil((ceil + floor) / 2);
            }
        }
});
