var fs  = require("fs");
fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function (line) {
        if (line !== "") {
            var counter = 0;
            var rows = line.split(' | ');
            var mat = rows.map(x => x.split(''));
            
            for (var i = 0; i < rows.length - 1; i += 1) {
                for (var j = 0; j < rows[0].length - 1; j += 1) {
                    var current = [mat[i][j], mat[i+1][j], mat[i][j+1], mat[i+1][j+1]];
                    if (current.indexOf('c') >= 0 && 
                        current.indexOf('o') >= 0 && 
                        current.indexOf('d') >= 0 && 
                        current.indexOf('e') >= 0) {
                        counter += 1;
                    }
                }
            }
            console.log(counter);
        }
});
