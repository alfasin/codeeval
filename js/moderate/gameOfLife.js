function isCellWithinBorders(x, y, mat) {
    return x >= 0 && y >= 0 && x < mat.length && y < mat.length;
}

function countNeighbors(mat, i, j) {
    // if the cell is alive don't count itself (hence -1)
    var counter = mat[i][j] === '*' ? -1 : 0;
    for (var x = i - 1; x <= i + 1; x += 1) {
        for (var y = j - 1; y <= j + 1; y += 1) {
            if (isCellWithinBorders(x, y, mat)) {
                if (mat[x][y] == '*') {
                    counter += 1;
                }
            }
        }
    }
    return counter;
}

// simulates one generation cycle
function generation(mat) {
    var newMat = copyMatrix(mat);
    for (var i = 0; i < mat.length; i += 1) {
        for (var j = 0; j < mat.length; j += 1) {
            var neighbors = countNeighbors(mat, i, j);
            var cell = mat[i][j]
            if (cell === '*' && (neighbors < 2 || neighbors > 3)) {
                newMat[i][j] = '.';
            } else if (cell === '.' && neighbors == 3) {
                newMat[i][j] = '*';
            }
        }
    }
    return newMat;
}

function copyMatrix(mat) {
    return JSON.parse(JSON.stringify(mat));
}

function print(mat) {
    for (var line of mat) {
        console.log(line.join(''));
    }
}

// build matrix
var mat = []
var fs  = require("fs");
fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function (line) {
        if (line !== "") {
            mat.push(line.split(''));
        }
});

// run game
for (var i = 0; i < 10; i += 1) {
    mat = generation(mat);
}
print(mat);
