function swap(arr, i, j) {
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

function cocktailSort(arr, iters) {
    for (var iter = 0; iter < iters; iter += 1) {
        for (var i = 0; i < arr.length-1; i += 1) {
            if (arr[i] > arr[i+1]) {
                swap(arr, i, i+1);
            }
        }
        for (i = arr.length-1; i > 0 ; i -= 1) {
            if (arr[i] < arr[i-1]) {
                swap(arr, i, i-1);
            }
        }
    }
    return arr.join(' ');
}

var fs  = require("fs");
fs.readFileSync(process.argv[2])
  .toString()
  .split('\n')
  .forEach(function (line) {
      if (line !== "") {
          var arr = line.split(/\D+/);
          var it = parseInt(arr.pop(), 10);
          arr = arr.map(x => parseInt(x, 10));
          console.log(cocktailSort(arr, it));
      }
});
