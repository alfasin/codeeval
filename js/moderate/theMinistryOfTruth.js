// replaces the characters in string orig with underscores
// fromIndex - inclusive
// toIndex - exclusive
// we do not replace whitespaces!
function putUnderscores(orig, fromIndex, toIndex) {
    var origArray = orig.split('');
    for (var i = fromIndex; i < toIndex; i += 1) {
        if (origArray[i] !== ' ') {
            origArray[i] = '_';
        }
    }
    return origArray.join("");
}

function inIndexZero(newIndex, index) {
    return newIndex === index && index === 0;
}

// check if we can find the words of utterance inside orig
// and in the same order (with at least one space between each pair)
// if so - replace the characters that are not in utterance with _
function isFeasible(orig, utterance) {
    var utteranceArr = utterance.split(' ');
    var fromIndex = 0;
    for (var word of utteranceArr) {
        var newIndex = orig.indexOf(word, fromIndex);
        // not found, or found immediately after the previous word (without a space between them)
        // the only exception is when we find the first word at the beginning of orig
        if (newIndex === -1 || newIndex === fromIndex && fromIndex !== 0) {
            return "I cannot fix history";
        }
        orig = putUnderscores(orig, fromIndex, newIndex);
        fromIndex = newIndex + word.length;
    }
    orig = putUnderscores(orig, fromIndex, orig.length);
    return orig;
}

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var arr = line.split(';');
        var orig = arr[0];
        orig = orig.split(/\s+/).join(' '); // remove multiple spaces
        var utterance = arr[1];
        console.log(isFeasible(orig, utterance));
    }
});
