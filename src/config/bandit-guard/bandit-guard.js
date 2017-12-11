
var MonsterType =    require('../../models/monster-type/monster-type.js');
var MonsterStat =    require('../../models/monster-stat/monster-stat.js');
var MonsterAbility = require('../../models/monster-ability/monster-ability.js');


var mobType = new MonsterType('Bandit Guard');

var mobAbility;

mobAbility = new MonsterAbility.config();
mobAbility.shuffle = false;
mobAbility.initiative = 16;
mobAbility.move = 1;
mobAbility.damage = -1;
mobAbility.range = 0;
mobAbility.target = 0;
mobType._abilities.push(new MonsterAbility(mobAbility));

mobAbility = new MonsterAbility.config();
mobAbility.shuffle = false;
mobAbility.initiative = 31;
mobAbility.move = 0;
mobAbility.damage = 0;
mobAbility.range = 0;
mobAbility.target = 0;
mobType._abilities.push(new MonsterAbility(mobAbility));

mobAbility = new MonsterAbility.config();
mobAbility.shuffle = false;
mobAbility.initiative = 32;
mobAbility.move = 0;
mobAbility.damage = 1;
mobAbility.range = -1;
mobAbility.target = 0;
mobType._abilities.push(new MonsterAbility(mobAbility));

mobAbility = new MonsterAbility.config();
mobAbility.shuffle = false;
mobAbility.initiative = 44;
mobAbility.move = -1;
mobAbility.damage = 1;
mobAbility.range = 0;
mobAbility.target = 0;
mobType._abilities.push(new MonsterAbility(mobAbility));

mobAbility = new MonsterAbility.config();
mobAbility.shuffle = false;
mobAbility.initiative = 56;
mobAbility.move = null;
mobAbility.damage = -1;
mobAbility.range = 0;
mobAbility.target = 2;
mobType._abilities.push(new MonsterAbility(mobAbility));

mobAbility = new MonsterAbility.config();
mobAbility.shuffle = false;
mobAbility.initiative = 14;
mobAbility.move = -1;
mobAbility.damage = -1;
mobAbility.range = 0;
mobAbility.target = 0;
//mobAbility.extra.push("Create a 3 damage trap in an adjacent empty hex closest to an enemy")
mobType._abilities.push(new MonsterAbility(mobAbility));

mobAbility = new MonsterAbility.config();
mobAbility.shuffle = true;
mobAbility.initiative = 68;
mobAbility.move = null;
mobAbility.damage = 1;
mobAbility.range = 1;
mobAbility.target = 0;
mobType._abilities.push(new MonsterAbility(mobAbility));

mobAbility = new MonsterAbility.config();
mobAbility.shuffle = true;
mobAbility.initiative = 29;
mobAbility.move = 0;
mobAbility.damage = -1;
mobAbility.range = 1;
mobAbility.target = 0;
//mobAbility.extra.push("immobilize")
mobType._abilities.push(new MonsterAbility(mobAbility));



var mobConfig;

// Bandit Guard - lvl 0
mobConfig = new MonsterStat.config();
mobConfig.health = 5;
mobConfig.move = 2;
mobConfig.damage = 2;
mobConfig.range = 0;
mobConfig.shield = 0;
mobConfig.target = 0;
mobType._stats.push(new MonsterStat(mobConfig));

// Bandit Guard - elite lvl 0
mobConfig = new MonsterStat.config();
mobConfig.health = 9;
mobConfig.move = 2;
mobConfig.damage = 3;
mobConfig.range = 0;
mobConfig.shield = 0;
mobConfig.target = 0;
mobType._statsElite.push(new MonsterStat(mobConfig));

// Bandit Guard - lvl 1
mobConfig = new MonsterStat.config();
mobConfig.health = 6;
mobConfig.move = 3;
mobConfig.damage = 2;
mobConfig.range = 0;
mobConfig.shield = 0;
mobConfig.target = 0;
mobType._stats.push(new MonsterStat(mobConfig));

// Bandit Guard - elite lvl 1
mobConfig = new MonsterStat.config();
mobConfig.health = 9;
mobConfig.move = 2;
mobConfig.damage = 3;
mobConfig.range = 0;
mobConfig.shield = 1;
mobConfig.target = 0;
mobType._statsElite.push(new MonsterStat(mobConfig));

// Bandit Guard - lvl 2
mobConfig = new MonsterStat.config();
mobConfig.health = 6;
mobConfig.move = 3;
mobConfig.damage = 3;
mobConfig.range = 0;
mobConfig.shield = 0;
mobConfig.target = 0;
mobType._stats.push(new MonsterStat(mobConfig));

// Bandit Guard - elite lvl 2
mobConfig = new MonsterStat.config();
mobConfig.health = 10;
mobConfig.move = 2;
mobConfig.damage = 4;
mobConfig.range = 0;
mobConfig.shield = 1;
mobConfig.target = 0;
mobType._statsElite.push(new MonsterStat(mobConfig));

// Bandit Guard - lvl 3
mobConfig = new MonsterStat.config();
mobConfig.health = 9;
mobConfig.move = 3;
mobConfig.damage = 3;
mobConfig.range = 0;
mobConfig.shield = 0;
mobConfig.target = 0;
mobType._stats.push(new MonsterStat(mobConfig));

// Bandit Guard - elite lvl 3
mobConfig = new MonsterStat.config();
mobConfig.health = 10;
mobConfig.move = 3;
mobConfig.damage = 4;
mobConfig.range = 0;
mobConfig.shield = 2;
mobConfig.target = 0;
mobType._statsElite.push(new MonsterStat(mobConfig));

// Bandit Guard - lvl 4
mobConfig = new MonsterStat.config();
mobConfig.health = 10;
mobConfig.move = 4;
mobConfig.damage = 3;
mobConfig.range = 0;
mobConfig.shield = 0;
mobConfig.target = 0;
mobType._stats.push(new MonsterStat(mobConfig));

// Bandit Guard - elite lvl 4
mobConfig = new MonsterStat.config();
mobConfig.health = 11;
mobConfig.move = 3;
mobConfig.damage = 4;
mobConfig.range = 0;
mobConfig.shield = 2;
mobConfig.target = 0;
// muddle
mobType._statsElite.push(new MonsterStat(mobConfig));

// Bandit Guard - lvl 5
mobConfig = new MonsterStat.config();
mobConfig.health = 11;
mobConfig.move = 4;
mobConfig.damage = 4;
mobConfig.range = 0;
mobConfig.shield = 0;
mobConfig.target = 0;
mobType._stats.push(new MonsterStat(mobConfig));

// Bandit Guard - elite lvl 5
mobConfig = new MonsterStat.config();
mobConfig.health = 12;
mobConfig.move = 3;
mobConfig.damage = 5;
mobConfig.range = 0;
mobConfig.shield = 2;
mobConfig.target = 0;
// muddle
mobType._statsElite.push(new MonsterStat(mobConfig));

// Bandit Guard - lvl 6
mobConfig = new MonsterStat.config();
mobConfig.health = 14;
mobConfig.move = 4;
mobConfig.damage = 4;
mobConfig.range = 0;
mobConfig.shield = 0;
mobConfig.target = 0;
mobType._stats.push(new MonsterStat(mobConfig));

// Bandit Guard - elite lvl 6
mobConfig = new MonsterStat.config();
mobConfig.health = 14;
mobConfig.move = 4;
mobConfig.damage = 5;
mobConfig.range = 0;
mobConfig.shield = 2;
mobConfig.target = 0;
// muddle
mobType._statsElite.push(new MonsterStat(mobConfig));

// Bandit Guard - lvl 7
mobConfig = new MonsterStat.config();
mobConfig.health = 16;
mobConfig.move = 5;
mobConfig.damage = 4;
mobConfig.range = 0;
mobConfig.shield = 0;
mobConfig.target = 0;
mobType._stats.push(new MonsterStat(mobConfig));

// Bandit Guard - elite lvl 7
mobConfig = new MonsterStat.config();
mobConfig.health = 14;
mobConfig.move = 3;
mobConfig.damage = 5;
mobConfig.range = 0;
mobConfig.shield = 3;
mobConfig.target = 0;
// muddle
mobType._statsElite.push(new MonsterStat(mobConfig));

module.exports = mobType;