
var AttackModCard = require('../../models/attack-modifier/attack-modifier.js');
var AttackDeck =    require('../../models/attack-modifier/attack-deck.js');

var attackCardP2 = new AttackModCard.config();
attackCardP2.value = 2;

var attackCardP1 = new AttackModCard.config();
attackCardP1.value = 1;

var attackCard0 = new AttackModCard.config();
attackCard0.value = 0;

var attackCardM1 = new AttackModCard.config();
attackCardM1.value = -1;

var attackCardM2 = new AttackModCard.config();
attackCardM2.value = -2;

var attackCardCrit = new AttackModCard.config();
attackCardCrit.shuffle = true;
attackCardCrit.value = 2;
attackCardCrit.op = '*';

var attackCardMiss = new AttackModCard.config();
attackCardCrit.shuffle = true;
attackCardMiss.value = null;
attackCardMiss.op = null;

var attackDeck = new AttackDeck();

attackDeck.addCard(new AttackModCard(attackCardMiss));
attackDeck.addCard(new AttackModCard(attackCardCrit));

attackDeck.addCard(new AttackModCard(attackCardM2), 3);
attackDeck.addCard(new AttackModCard(attackCardM)1, 2);
attackDeck.addCard(new AttackModCard(attackCard0), 4);
attackDeck.addCard(new AttackModCard(attackCardP1), 3);
attackDeck.addCard(new AttackModCard(attackCardP2), 2);

module.exports = attackDeck;