type Class = {
    name: string,
    level: ClassLevel,
    edelOnly?: boolean,
    dimitriOnly?: boolean,
    claudeOnly?: boolean,
    byOnly?: boolean,
    maleOnly?: boolean,
    femaleOnly?: boolean,
    studentOnly?: boolean,
    lordOnly?: boolean,
    jeritzaOnly?: boolean,
    magic: boolean,
    requiredSkills?: WeaponSkills[] 
}


enum ClassLevel {
    Beginner,
    Intermediate,
    Advanced,
    Master,
    Unique
}

enum WeaponSkills {
    Sword,
    Lance,
    Axe,
    Bow,
    Gauntlets,
    Reason,
    Faith,
    Authority,
    HeavyArmor,
    Riding,
    Flying
}

var myrmidon: Class = {
    name: "Myrmidon",
    level: ClassLevel.Beginner,
    magic: false
}
var soldier: Class = {
    name: "Soldier",
    level: ClassLevel.Beginner,
    magic: false
}
var fighter: Class = {
    name: "Fighter",
    level: ClassLevel.Beginner,
    magic: false
}
var monk: Class = {
    name: "Monk",
    level: ClassLevel.Beginner,
    magic: true
}

var lord: Class = {
    name: "Lord",
    level: ClassLevel.Intermediate,
    magic: false,
    lordOnly: true
}
var mercenary: Class = {
    name: "Mercenary",
    level: ClassLevel.Intermediate,
    magic: false,
}
var thief: Class = {
    name: "Thief",
    level: ClassLevel.Intermediate,
    magic: false,
}
var cavalier: Class = {
    name: "Cavalier",
    level: ClassLevel.Intermediate,
    magic: false,
}
var pegasus: Class = {
    name: "Pegasus Knight",
    level: ClassLevel.Intermediate,
    magic: false,
    femaleOnly: true
}
var brigand: Class = {
    name: "Brigand",
    level: ClassLevel.Intermediate,
    magic: false,
}
var armor: Class = {
    name: "Armored Knight",
    level: ClassLevel.Intermediate,
    magic: false,
}
var archer: Class = {
    name: "Archer",
    level: ClassLevel.Intermediate,
    magic: false,
}
var brawler: Class = {
    name: "Brawler",
    level: ClassLevel.Intermediate,
    magic: false,
    maleOnly: true
}
var mage: Class = {
    name: "Mage",
    level: ClassLevel.Intermediate,
    magic: true,
}
var darkMage: Class = {
    name: "Dark Mage",
    level: ClassLevel.Intermediate,
    magic: true,
    maleOnly: true
}
var priest: Class = {
    name: "Priest",
    level: ClassLevel.Intermediate,
    magic: true,
}


var swordmaster: Class = {
    name: "Swordmaster",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Sword]
}
var hero: Class = {
    name: "Hero",
    level: ClassLevel.Advanced,
    magic: false,
    maleOnly: true,
    requiredSkills: [WeaponSkills.Sword, WeaponSkills.Axe]
}
var assassin: Class = {
    name: "Assassin",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Sword, WeaponSkills.Bow]
}
var paladin: Class = {
    name: "Paladin",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Lance, WeaponSkills.Riding]
}
var warrior: Class = {
    name: "Warrior",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Axe]
}
var fortress: Class = {
    name: "Fortress Knight",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Axe, WeaponSkills.HeavyArmor]
}
var wyvernRider: Class = {
    name: "Wyvern Rider",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Axe, WeaponSkills.Flying]
}
var sniper: Class = {
    name: "Sniper",
    level: ClassLevel.Advanced,
    magic: false,
    requiredSkills: [WeaponSkills.Bow]
}
var grappler: Class = {
    name: "Grappler",
    level: ClassLevel.Advanced,
    magic: false,
    maleOnly: true,
    requiredSkills: [WeaponSkills.Gauntlets]
}
var warlock: Class = {
    name: "Warlock",
    level: ClassLevel.Advanced,
    magic: true,
    requiredSkills: [WeaponSkills.Reason]
}
var darkBishop: Class = {
    name: "Dark Bishop",
    level: ClassLevel.Advanced,
    magic: true,
    maleOnly: true,
    requiredSkills: [WeaponSkills.Reason]
}
var bishop: Class = {
    name: "Bishop",
    level: ClassLevel.Advanced,
    magic: true,
    requiredSkills: [WeaponSkills.Faith]
}


var mortalSavant: Class = {
    name: "Mortal Savant",
    level: ClassLevel.Master,
    magic: true,
    requiredSkills: [WeaponSkills.Sword, WeaponSkills.Reason]
}
var falconKnight: Class = {
    name: "Falcon Knight",
    level: ClassLevel.Master,
    magic: false,
    femaleOnly: true,
    requiredSkills: [WeaponSkills.Lance, WeaponSkills.Flying, WeaponSkills.Sword]
}
var warMaster: Class = {
    name: "War Master",
    level: ClassLevel.Master,
    magic: false,
    maleOnly: true,
    requiredSkills: [WeaponSkills.Axe, WeaponSkills.Gauntlets]
}
var wyvernLord: Class = {
    name: "Wyvern Lord",
    level: ClassLevel.Master,
    magic: false,
    requiredSkills: [WeaponSkills.Axe, WeaponSkills.Flying, WeaponSkills.Lance]
}
var greatKnight: Class = {
    name: "Great Knight",
    level: ClassLevel.Master,
    magic: false,
    requiredSkills: [WeaponSkills.Axe, WeaponSkills.Lance, WeaponSkills.HeavyArmor]
}
var bowKnight: Class = {
    name: "Bow Knight",
    level: ClassLevel.Master,
    magic: false,
    requiredSkills: [WeaponSkills.Bow, WeaponSkills.Lance, WeaponSkills.Riding]
}
var gremory: Class = {
    name: "Gremory",
    level: ClassLevel.Master,
    magic: true,
    femaleOnly: true,
    requiredSkills: [WeaponSkills.Reason, WeaponSkills.Faith]
}
var darkKnight: Class = {
    name: "Dark Knight",
    level: ClassLevel.Master,
    magic: true,
    requiredSkills: [WeaponSkills.Reason, WeaponSkills.Riding, WeaponSkills.Flying]
}
var holyKnight: Class = {
    name: "Holy Knight",
    level: ClassLevel.Master,
    magic: true,
    requiredSkills: [WeaponSkills.Faith, WeaponSkills.Riding, WeaponSkills.Lance]
}




var enlightenedOne: Class = {
    name: "Enlightened One",
    level: ClassLevel.Unique,
    magic: true,
    byOnly: true,
    requiredSkills: []
}

var armoredLord: Class = {
    name: "Armored Lord",
    level: ClassLevel.Advanced,
    magic: false,
    edelOnly: true,
    requiredSkills: []
}

var emperor: Class = {
    name: "Emperor",
    level: ClassLevel.Master,
    magic: false,
    edelOnly: true,
    requiredSkills: []
}

var highLord: Class = {
    name: "High Lord",
    level: ClassLevel.Advanced,
    magic: false,
    dimitriOnly: true,
    requiredSkills: []
}

var greatLord: Class = {
    name: "Great Lord",
    level: ClassLevel.Master,
    magic: false,
    dimitriOnly: true,
    requiredSkills: []
}

var wyvernMaster: Class = {
    name: "Wyvern Master",
    level: ClassLevel.Advanced,
    magic: false,
    claudeOnly: true,
    requiredSkills: []
}

var barbarossa: Class = {
    name: "Barbarossa",
    level: ClassLevel.Master,
    magic: false,
    claudeOnly: true,
    requiredSkills: []
}

var dancer: Class = {
    name: "Dancer",
    level: ClassLevel.Unique,
    magic: false,
    studentOnly: true,
    requiredSkills: [WeaponSkills.Sword, WeaponSkills.Faith, WeaponSkills.Riding]
}

var deathKnight: Class = {
    name: "Death Knight",
    level: ClassLevel.Unique,
    magic: true,
    jeritzaOnly: true,
    requiredSkills: []
}



