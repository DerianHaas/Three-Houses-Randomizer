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
}


enum ClassLevel {
    Beginner,
    Intermediate,
    Advanced,
    Master,
    Unique
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
}
var hero: Class = {
    name: "Hero",
    level: ClassLevel.Advanced,
    magic: false,
    maleOnly: true
}
var assassin: Class = {
    name: "Assassin",
    level: ClassLevel.Advanced,
    magic: false,
}
var paladin: Class = {
    name: "Paladin",
    level: ClassLevel.Advanced,
    magic: false,
}
var warrior: Class = {
    name: "Warrior",
    level: ClassLevel.Advanced,
    magic: false,
}
var fortress: Class = {
    name: "Fortress Knight",
    level: ClassLevel.Advanced,
    magic: false,
}
var wyvernRider: Class = {
    name: "Wyvern Rider",
    level: ClassLevel.Advanced,
    magic: false,
}
var sniper: Class = {
    name: "Sniper",
    level: ClassLevel.Advanced,
    magic: false,
}
var grappler: Class = {
    name: "Grappler",
    level: ClassLevel.Advanced,
    magic: false,
    maleOnly: true
}
var warlock: Class = {
    name: "Warlock",
    level: ClassLevel.Advanced,
    magic: true,
}
var darkBishop: Class = {
    name: "Dark Bishop",
    level: ClassLevel.Advanced,
    magic: true,
    maleOnly: true
}
var bishop: Class = {
    name: "Bishop",
    level: ClassLevel.Advanced,
    magic: true,
}


var mortalSavant: Class = {
    name: "Mortal Savant",
    level: ClassLevel.Master,
    magic: true,
}
var falconKnight: Class = {
    name: "Falcon Knight",
    level: ClassLevel.Master,
    magic: false,
    femaleOnly: true
}
var warMaster: Class = {
    name: "War Master",
    level: ClassLevel.Master,
    magic: false,
    maleOnly: true
}
var wyvernLord: Class = {
    name: "Wyvern Lord",
    level: ClassLevel.Master,
    magic: false,
}
var greatKnight: Class = {
    name: "Great Knight",
    level: ClassLevel.Master,
    magic: false,
}
var bowKnight: Class = {
    name: "Bow Knight",
    level: ClassLevel.Master,
    magic: false,
}
var gremory: Class = {
    name: "Gremory",
    level: ClassLevel.Master,
    magic: true,
    femaleOnly:true
}
var darkKnight: Class = {
    name: "Dark Knight",
    level: ClassLevel.Master,
    magic: true,
}
var holyKnight: Class = {
    name: "Holy Knight",
    level: ClassLevel.Master,
    magic: true,
}




var enlightenedOne: Class = {
    name: "Enlightened One",
    level: ClassLevel.Unique,
    magic: true,
    byOnly: true
}

var armoredLord: Class = {
    name: "Armored Lord",
    level: ClassLevel.Advanced,
    magic: false,
    edelOnly: true
}

var emperor: Class = {
    name: "Emperor",
    level: ClassLevel.Master,
    magic: false,
    edelOnly: true
}

var highLord: Class = {
    name: "High Lord",
    level: ClassLevel.Advanced,
    magic: false,
    dimitriOnly: true
}

var greatLord: Class = {
    name: "Great Lord",
    level: ClassLevel.Master,
    magic: false,
    dimitriOnly: true
}

var wyvernMaster: Class = {
    name: "Wyvern Master",
    level: ClassLevel.Advanced,
    magic: false,
    claudeOnly: true
}

var barbarossa: Class = {
    name: "Barbarossa",
    level: ClassLevel.Master,
    magic: false,
    claudeOnly: true
}

var dancer: Class = {
    name: "Dancer",
    level: ClassLevel.Unique,
    magic: false,
    studentOnly: true
}

var deathKnight: Class = {
    name: "Death Knight",
    level: ClassLevel.Unique,
    magic: true,
    jeritzaOnly: true
}



