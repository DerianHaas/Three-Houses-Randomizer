var ClassLevel;
(function (ClassLevel) {
    ClassLevel[ClassLevel["Beginner"] = 0] = "Beginner";
    ClassLevel[ClassLevel["Intermediate"] = 1] = "Intermediate";
    ClassLevel[ClassLevel["Advanced"] = 2] = "Advanced";
    ClassLevel[ClassLevel["Master"] = 3] = "Master";
    ClassLevel[ClassLevel["Unique"] = 4] = "Unique";
})(ClassLevel || (ClassLevel = {}));
var WeaponSkills;
(function (WeaponSkills) {
    WeaponSkills[WeaponSkills["Sword"] = 0] = "Sword";
    WeaponSkills[WeaponSkills["Lance"] = 1] = "Lance";
    WeaponSkills[WeaponSkills["Axe"] = 2] = "Axe";
    WeaponSkills[WeaponSkills["Bow"] = 3] = "Bow";
    WeaponSkills[WeaponSkills["Gauntlets"] = 4] = "Gauntlets";
    WeaponSkills[WeaponSkills["Reason"] = 5] = "Reason";
    WeaponSkills[WeaponSkills["Faith"] = 6] = "Faith";
    WeaponSkills[WeaponSkills["Authority"] = 7] = "Authority";
    WeaponSkills[WeaponSkills["HeavyArmor"] = 8] = "HeavyArmor";
    WeaponSkills[WeaponSkills["Riding"] = 9] = "Riding";
    WeaponSkills[WeaponSkills["Flying"] = 10] = "Flying";
})(WeaponSkills || (WeaponSkills = {}));
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
    requiredSkills: [WeaponSkills.Sword]
};
var hero = {
    name: "Hero",
    level: ClassLevel.Advanced,
    magic: false,
    maleOnly: true,
    requiredSkills: [WeaponSkills.Sword, WeaponSkills.Axe]
};
var assassin = {
    name: "Assassin",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Sword, WeaponSkills.Bow]
};
var paladin = {
    name: "Paladin",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Lance, WeaponSkills.Riding]
};
var warrior = {
    name: "Warrior",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Axe]
};
var fortress = {
    name: "Fortress Knight",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Axe, WeaponSkills.HeavyArmor]
};
var wyvernRider = {
    name: "Wyvern Rider",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Axe, WeaponSkills.Flying]
};
var sniper = {
    name: "Sniper",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Bow]
};
var grappler = {
    name: "Grappler",
    level: ClassLevel.Advanced,
    magic: false,
    maleOnly: true,
    requiredSkills: [WeaponSkills.Gauntlets]
};
var warlock = {
    name: "Warlock",
    level: ClassLevel.Advanced,
    magic: true,
    requiredSkills: [WeaponSkills.Reason]
};
var darkBishop = {
    name: "Dark Bishop",
    level: ClassLevel.Advanced,
    magic: true,
    maleOnly: true,
    requiredSkills: [WeaponSkills.Reason]
};
var bishop = {
    name: "Bishop",
    level: ClassLevel.Advanced,
    magic: true,
    requiredSkills: [WeaponSkills.Faith]
};
var mortalSavant = {
    name: "Mortal Savant",
    level: ClassLevel.Master,
    magic: true,
    requiredSkills: [WeaponSkills.Sword, WeaponSkills.Reason]
};
var falconKnight = {
    name: "Falcon Knight",
    level: ClassLevel.Master,
    magic: false,
    femaleOnly: true,
    requiredSkills: [WeaponSkills.Lance, WeaponSkills.Flying, WeaponSkills.Sword]
};
var warMaster = {
    name: "War Master",
    level: ClassLevel.Master,
    magic: false,
    maleOnly: true,
    requiredSkills: [WeaponSkills.Axe, WeaponSkills.Gauntlets]
};
var wyvernLord = {
    name: "Wyvern Lord",
    level: ClassLevel.Master,
    magic: false,
    requiredSkills: [WeaponSkills.Axe, WeaponSkills.Flying, WeaponSkills.Lance]
};
var greatKnight = {
    name: "Great Knight",
    level: ClassLevel.Master,
    magic: false,
    requiredSkills: [WeaponSkills.Axe, WeaponSkills.Lance, WeaponSkills.HeavyArmor]
};
var bowKnight = {
    name: "Bow Knight",
    level: ClassLevel.Master,
    magic: false,
    requiredSkills: [WeaponSkills.Bow, WeaponSkills.Lance, WeaponSkills.Riding]
};
var gremory = {
    name: "Gremory",
    level: ClassLevel.Master,
    magic: true,
    femaleOnly: true,
    requiredSkills: [WeaponSkills.Reason, WeaponSkills.Faith]
};
var darkKnight = {
    name: "Dark Knight",
    level: ClassLevel.Master,
    magic: true,
    requiredSkills: [WeaponSkills.Reason, WeaponSkills.Riding, WeaponSkills.Flying]
};
var holyKnight = {
    name: "Holy Knight",
    level: ClassLevel.Master,
    magic: true,
    requiredSkills: [WeaponSkills.Faith, WeaponSkills.Riding, WeaponSkills.Lance]
};
var enlightenedOne = {
    name: "Enlightened One",
    level: ClassLevel.Unique,
    magic: true,
    byOnly: true,
    requiredSkills: []
};
var armoredLord = {
    name: "Armored Lord",
    level: ClassLevel.Advanced,
    magic: false,
    edelOnly: true,
    requiredSkills: []
};
var emperor = {
    name: "Emperor",
    level: ClassLevel.Master,
    magic: false,
    edelOnly: true,
    requiredSkills: []
};
var highLord = {
    name: "High Lord",
    level: ClassLevel.Advanced,
    magic: false,
    dimitriOnly: true,
    requiredSkills: []
};
var greatLord = {
    name: "Great Lord",
    level: ClassLevel.Master,
    magic: false,
    dimitriOnly: true,
    requiredSkills: []
};
var wyvernMaster = {
    name: "Wyvern Master",
    level: ClassLevel.Advanced,
    magic: false,
    claudeOnly: true,
    requiredSkills: []
};
var barbarossa = {
    name: "Barbarossa",
    level: ClassLevel.Master,
    magic: false,
    claudeOnly: true,
    requiredSkills: []
};
var dancer = {
    name: "Dancer",
    level: ClassLevel.Unique,
    magic: false,
    studentOnly: true,
    requiredSkills: [WeaponSkills.Sword, WeaponSkills.Faith, WeaponSkills.Riding]
};
var deathKnight = {
    name: "Death Knight",
    level: ClassLevel.Unique,
    magic: true,
    jeritzaOnly: true,
    requiredSkills: []
};
//# sourceMappingURL=classes.js.map