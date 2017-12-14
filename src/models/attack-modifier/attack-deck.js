
var AttackModifier = require('./attack-modifier.js');

var shuffleDeck = function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
	

var randomRange = function (min,max) {
	return Math.floor(Math.random()*(max-min+1)+min);
};

var AttackDeck = function AttackDeck(name) {
	this._cardConfig = [];
	this.deck = null;
	Object.seal(this);
};
module.exports = AttackDeck;

AttackDeck.prototype.addCard = function(cardConfig, count) {
	count = +count;
	if (isNaN(count) || count < 1) {
		count = 1;
	}
	if (!(cardConfig instanceof AttackModifier)) throw "bad config object, must be a AttackModifier";

	this._cardConfig.push([cardConfig, count]);
};

AttackDeck.prototype.buildDeck = function() {
	var deck = [];
	this._cardConfig.forEach(function(cardConfig) {
		for (var i=0; i<cardConfig[1]; i++) {
			deck.push(cardConfig[0]);
		}
	});

	deck = shuffleDeck(deck);

	return deck;
};

AttackDeck.prototype.draw = function(count) {
	var thisAttackDeck = this;
	count = +count;
	if (isNaN(count) || count < 1) {
		count = 1;
	}

	if (thisAttackDeck.deck == null) {
		thisAttackDeck.deck = thisAttackDeck.buildDeck();
	}

	var cards = thisAttackDeck.deck.splice(0, count);
	cards.forEach(function(card) {
		if (card._config.shuffle) {
			thisAttackDeck.deck = null;
			console.log('reset deck');
		}
	})

	return cards;
};

Object.seal(AttackDeck.prototype);
