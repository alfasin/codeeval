const grader = {'J': 11, 'Q': 12, 'K': 13, 'A': 14};
var splitted, card1, card2, trump;

var fs  = require("fs");
fs.readFileSync(process.argv[2])
    .toString()
    .split('\n')
    .forEach(function (hand) {
        if (hand !== "") {
            splitted = hand.split(/\W+/);
            card1 = splitted[0];
            card2 = splitted[1];
            trump = splitted[2];
            if (trump === card1[1] && trump !== card2[1]) {
                console.log(card1);
            } else if (trump === card2[1] && trump !== card1[1]) {
                console.log(card2);
            } else {
                console.log(getWinner(card1, card2));
            }
        }
});

function getWinner(card1, card2) {
    var g1 = card1.slice(0, -1);
    var g2 = card2.slice(0, -1);
    if (g1 === g2) {
        return card1 + ' ' + card2;
    }
    g1 = grader[g1] || parseInt(g1, 10);
    g2 = grader[g2] || parseInt(g2, 10);
    return g1 > g2 ? card1 :
                    g2 > g1 ? card2 :
                            card1 + ' ' + card2;
}
