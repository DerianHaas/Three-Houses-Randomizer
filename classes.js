var ClassLevel;
(function (ClassLevel) {
    ClassLevel[ClassLevel["Beginner"] = 0] = "Beginner";
    ClassLevel[ClassLevel["Intermediate"] = 1] = "Intermediate";
    ClassLevel[ClassLevel["Advanced"] = 2] = "Advanced";
    ClassLevel[ClassLevel["Master"] = 3] = "Master";
    ClassLevel[ClassLevel["Unique"] = 4] = "Unique";
})(ClassLevel || (ClassLevel = {}));
var myrmidon = {
    name: "Myrmidon",
    level: ClassLevel.Beginner,
    magic: false
};
var soldier = {
    name: "Soldier",
    level: ClassLevel.Beginner,
    magic: false
};
var fighter = {
    name: "Fighter",
    level: ClassLevel.Beginner,
    magic: false
};
var monk = {
    name: "Monk",
    level: ClassLevel.Beginner,
    magic: true
};
var lord = {
    name: "Lord",
    level: ClassLevel.Intermediate,
    magic: false,
    lordOnly: true
};
var mercenary = {
    name: "Mercenary",
    level: ClassLevel.Intermediate,
    magic: false,
};
var thief = {
    name: "Thief",
    level: ClassLevel.Intermediate,
    magic: false,
};
var cavalier = {
    name: "Cavalier",
    level: ClassLevel.Intermediate,
    magic: false,
};
var pegasus = {
    name: "Pegasus Knight",
    level: ClassLevel.Intermediate,
    magic: false,
    femaleOnly: true
};
var brigand = {
    name: "Brigand",
    level: ClassLevel.Intermediate,
    magic: false,
};
var armor = {
    name: "Armored Knight",
    level: ClassLevel.Intermediate,
    magic: false,
};
var archer = {
    name: "Archer",
    level: ClassLevel.Intermediate,
    magic: false,
};
var brawler = {
    name: "Brawler",
    level: ClassLevel.Intermediate,
    magic: false,
    maleOnly: true
};
var mage = {
    name: "Mage",
    level: ClassLevel.Intermediate,
    magic: true,
};
var darkMage = {
    name: "Dark Mage",
    level: ClassLevel.Intermediate,
    magic: true,
    maleOnly: true
};
var priest = {
    name: "Priest",
    level: ClassLevel.Intermediate,
    magic: true,
};
var swordmaster = {
    name: "Swordmaster",
    level: ClassLevel.Advanced,
    magic: false,
};
var hero = {
    name: "Hero",
    level: ClassLevel.Advanced,
    magic: false,
    maleOnly: true
};
var assassin = {
    name: "Assassin",
    level: ClassLevel.Advanced,
    magic: false,
};
var paladin = {
    name: "Paladin",
    level: ClassLevel.Advanced,
    magic: false,
};
var warrior = {
    name: "Warrior",
    level: ClassLevel.Advanced,
    magic: false,
};
var fortress = {
    name: "Fortress Knight",
    level: ClassLevel.Advanced,
    magic: false,
};
var wyvernRider = {
    name: "Wyvern Rider",
    level: ClassLevel.Advanced,
    magic: false,
};
var sniper = {
    name: "Sniper",
    level: ClassLevel.Advanced,
    magic: false,
};
var grappler = {
    name: "Grappler",
    level: ClassLevel.Advanced,
    magic: false,
    maleOnly: true
};
var warlock = {
    name: "Warlock",
    level: ClassLevel.Advanced,
    magic: true,
};
var darkBishop = {
    name: "Dark Bishop",
    level: ClassLevel.Advanced,
    magic: true,
    maleOnly: true
};
var bishop = {
    name: "Bishop",
    level: ClassLevel.Advanced,
    magic: true,
};
var mortalSavant = {
    name: "Mortal Savant",
    level: ClassLevel.Master,
    magic: true,
};
var falconKnight = {
    name: "Falcon Knight",
    level: ClassLevel.Master,
    magic: false,
    femaleOnly: true
};
var warMaster = {
    name: "War Master",
    level: ClassLevel.Master,
    magic: false,
    maleOnly: true
};
var wyvernLord = {
    name: "Wyvern Lord",
    level: ClassLevel.Master,
    magic: false,
};
var greatKnight = {
    name: "Great Knight",
    level: ClassLevel.Master,
    magic: false,
};
var bowKnight = {
    name: "Bow Knight",
    level: ClassLevel.Master,
    magic: false,
};
var gremory = {
    name: "Gremory",
    level: ClassLevel.Master,
    magic: true,
    femaleOnly: true
};
var darkKnight = {
    name: "Dark Knight",
    level: ClassLevel.Master,
    magic: true,
};
var holyKnight = {
    name: "Holy Knight",
    level: ClassLevel.Master,
    magic: true,
};
var enlightenedOne = {
    name: "Enlightened One",
    level: ClassLevel.Unique,
    magic: true,
    byOnly: true
};
var armoredLord = {
    name: "Armored Lord",
    level: ClassLevel.Advanced,
    magic: false,
    edelOnly: true
};
var emperor = {
    name: "Emperor",
    level: ClassLevel.Master,
    magic: false,
    edelOnly: true
};
var highLord = {
    name: "High Lord",
    level: ClassLevel.Advanced,
    magic: false,
    dimitriOnly: true
};
var greatLord = {
    name: "Great Lord",
    level: ClassLevel.Master,
    magic: false,
    dimitriOnly: true
};
var wyvernMaster = {
    name: "Wyvern Master",
    level: ClassLevel.Advanced,
    magic: false,
    claudeOnly: true
};
var barbarossa = {
    name: "Barbarossa",
    level: ClassLevel.Master,
    magic: false,
    claudeOnly: true
};
var dancer = {
    name: "Dancer",
    level: ClassLevel.Unique,
    magic: false,
    studentOnly: true
};
var deathKnight = {
    name: "Death Knight",
    level: ClassLevel.Unique,
    magic: true,
    jeritzaOnly: true
};
//# sourceMappingURL=classes.js.map