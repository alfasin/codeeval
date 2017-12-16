function swap(arr, j, i) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function bubble(arr, iterations) {
    for (var i = 0; i < iterations; i += 1) {
        for (var j = 0; j < arr.length - 1; j += 1) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }
}

var fs  = require("fs");
fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function (line) {
        if (line !== "") {
            var arr = line.split(' ');
            var iterations = parseInt(arr.pop(), 10)
            arr.pop(); // remove pipe |
            if (iterations > arr.length) {
                iterations = arr.length;
            }
            arr = arr.map(x => parseInt(x, 10));
            bubble(arr, iterations);
            console.log(arr.join(" "));
        }
});
