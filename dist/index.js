"use strict";
var Player = /** @class */ (function () {
    function Player(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    return Player;
}());
var vitamin = new Player('vita', 'min');
vitamin.score = 33;
console.log(vitamin);
