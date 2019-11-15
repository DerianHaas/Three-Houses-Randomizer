enum Route {
    CF,
    SS,
    AM,
    VW
}

enum Gender {
    M, F
}

type Character = {
    name: string,
    lord: boolean,
    retainer: boolean,
    teacher: boolean,
    baseRoute: boolean[],
    recruitableIn: boolean[],
    gender: Gender,
    canonClasses: Class[],
    required?: boolean,
    strengths: WeaponSkills[],
    weaknesses: WeaponSkills[]
}

var mbyleth: Character = {
    name: "Byleth (M)",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [true, true, true, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [enlightenedOne],
    gender: Gender.M,
    strengths: [WeaponSkills.Sword, WeaponSkills.Gauntlets, WeaponSkills.Authority, WeaponSkills.Faith],
    weaknesses: []
};
var fbyleth: Character = {
    name: "Byleth (F)",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [true, true, true, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [enlightenedOne],
    gender: Gender.F,
    strengths: [WeaponSkills.Sword, WeaponSkills.Gauntlets, WeaponSkills.Authority, WeaponSkills.Faith],
    weaknesses: []
};
var edelgard: Character = {
    name: "Edelgard",
    lord: true,
    retainer: false,
    teacher: false,
    baseRoute: [true, false, false, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [armoredLord,emperor],
    gender: Gender.F,
    strengths: [WeaponSkills.Sword, WeaponSkills.Axe, WeaponSkills.Authority, WeaponSkills.HeavyArmor, WeaponSkills.Reason],
    weaknesses: [WeaponSkills.Bow, WeaponSkills.Faith]
};
var hubert: Character = {
    name: "Hubert",
    lord: false,
    retainer: true,
    teacher: false,
    baseRoute: [true, false, false, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [darkBishop],
    gender: Gender.M,
    strengths: [WeaponSkills.Bow, WeaponSkills.Reason, WeaponSkills.Authority, WeaponSkills.Lance],
    weaknesses: [WeaponSkills.Axe, WeaponSkills.Faith, WeaponSkills.Flying]
};
var ferdinand: Character = {
    name: "Ferdinand",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [paladin,greatKnight],
    gender: Gender.M,
    strengths: [WeaponSkills.Sword, WeaponSkills.Axe, WeaponSkills.Lance, WeaponSkills.Riding, WeaponSkills.HeavyArmor],
    weaknesses: []
};
var linhardt: Character = {
    name: "Linhardt",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [bishop],
    gender: Gender.M,
    strengths: [WeaponSkills.Reason, WeaponSkills.Faith],
    weaknesses: [WeaponSkills.Axe, WeaponSkills.Gauntlets]
};
var caspar: Character = {
    name: "Caspar",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [grappler, warMaster],
    gender: Gender.M,
    strengths: [WeaponSkills.Axe, WeaponSkills.Gauntlets],
    weaknesses: [WeaponSkills.Bow, WeaponSkills.Reason, WeaponSkills.Authority]
};
var bernadetta: Character = {
    name: "Bernadetta",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [sniper, bowKnight],
    gender: Gender.F,
    strengths: [WeaponSkills.Lance, WeaponSkills.Bow, WeaponSkills.Riding],
    weaknesses: [WeaponSkills.Sword, WeaponSkills.Axe, WeaponSkills.Gauntlets, WeaponSkills.HeavyArmor]
};
var dorothea: Character = {
    name: "Dorothea",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [warlock, gremory],
    gender: Gender.F,
    strengths: [WeaponSkills.Sword, WeaponSkills.Reason, WeaponSkills.Faith],
    weaknesses: [WeaponSkills.Riding, WeaponSkills.Flying]
};
var petra: Character = {
    name: "Petra",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [assassin],
    gender: Gender.F,
    strengths: [WeaponSkills.Sword, WeaponSkills.Axe, WeaponSkills.Bow, WeaponSkills.Flying],
    weaknesses: [WeaponSkills.Reason, WeaponSkills.Faith]
};
var jeritza: Character = {
    name: "Jeritza",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [true, false, false, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [darkKnight],
    gender: Gender.M,
    strengths: [WeaponSkills.Sword, WeaponSkills.Lance, WeaponSkills.Gauntlets, WeaponSkills.Riding, WeaponSkills.Flying],
    weaknesses: [WeaponSkills.Faith, WeaponSkills.Authority]
};



var dimitri: Character = {
    name: "Dimitri",
    lord: true,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [greatLord, highLord],
    gender: Gender.M,
    strengths: [WeaponSkills.Sword, WeaponSkills.Lance, WeaponSkills.Authority, WeaponSkills.Riding],
    weaknesses: [WeaponSkills.Axe, WeaponSkills.Reason]
};
var dedue: Character = {
    name: "Dedue",
    lord: false,
    retainer: true,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [fortress, greatKnight],
    gender: Gender.M,
    strengths: [WeaponSkills.Lance, WeaponSkills.Axe, WeaponSkills.Gauntlets, WeaponSkills.HeavyArmor],
    weaknesses: [WeaponSkills.Riding, WeaponSkills.Faith, WeaponSkills.Flying]
};
var felix: Character = {
    name: "Felix",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [swordmaster],
    gender: Gender.M,
    strengths: [WeaponSkills.Sword, WeaponSkills.Bow, WeaponSkills.Gauntlets, WeaponSkills.Reason],
    weaknesses: [WeaponSkills.Reason, WeaponSkills.Authority]
};
var ashe: Character = {
    name: "Ashe",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [sniper, bowKnight],
    gender: Gender.M,
    strengths: [WeaponSkills.Lance, WeaponSkills.Axe, WeaponSkills.Bow],
    weaknesses: [WeaponSkills.Reason]
};
var sylvain: Character = {
    name: "Sylvain",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [paladin],
    gender: Gender.M,
    strengths: [WeaponSkills.Lance, WeaponSkills.Axe, WeaponSkills.Riding, WeaponSkills.Reason],
    weaknesses: [WeaponSkills.Bow]
};
var mercedes: Character = {
    name: "Mercedes",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [bishop, gremory],
    gender: Gender.F,
    strengths: [WeaponSkills.Reason, WeaponSkills.Faith, WeaponSkills.Bow],
    weaknesses: [WeaponSkills.Sword, WeaponSkills.Lance, WeaponSkills.Axe, WeaponSkills.HeavyArmor]
};
var annette: Character = {
    name: "Annette",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [warlock, gremory],
    gender: Gender.F,
    strengths: [WeaponSkills.Axe, WeaponSkills.Reason, WeaponSkills.Authority],
    weaknesses: [WeaponSkills.Bow, WeaponSkills.HeavyArmor]
};
var ingrid: Character = {
    name: "Ingrid",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [falconKnight],
    gender: Gender.F,
    strengths: [WeaponSkills.Sword, WeaponSkills.Lance, WeaponSkills.Riding, WeaponSkills.Flying],
    weaknesses: []
};


var claude: Character = {
    name: "Claude",
    lord: true,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [wyvernMaster, barbarossa],
    gender: Gender.M,
    strengths: [WeaponSkills.Sword, WeaponSkills.Bow, WeaponSkills.Authority, WeaponSkills.Flying, WeaponSkills.Axe],
    weaknesses: [WeaponSkills.Lance, WeaponSkills.Faith]
};
var lorenz: Character = {
    name: "Lorenz",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [paladin, darkKnight],
    gender: Gender.M,
    strengths: [WeaponSkills.Lance, WeaponSkills.Reason, WeaponSkills.Riding],
    weaknesses: [WeaponSkills.Gauntlets]
};
var raphael: Character = {
    name: "Raphael",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [grappler, warMaster],
    gender: Gender.M,
    strengths: [WeaponSkills.Axe, WeaponSkills.Gauntlets, WeaponSkills.HeavyArmor],
    weaknesses: [WeaponSkills.Bow, WeaponSkills.Reason, WeaponSkills.Riding]
};
var ignatz: Character = {
    name: "Ignatz",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [sniper],
    gender: Gender.M,
    strengths: [WeaponSkills.Sword, WeaponSkills.Bow, WeaponSkills.Authority, WeaponSkills.Reason],
    weaknesses: [WeaponSkills.Flying]
};
var lysithea: Character = {
    name: "Lysithea",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [warlock, gremory],
    gender: Gender.F,
    strengths: [WeaponSkills.Reason, WeaponSkills.Faith, WeaponSkills.Authority, WeaponSkills.Sword],
    weaknesses: [WeaponSkills.Lance, WeaponSkills.Axe, WeaponSkills.HeavyArmor]
};
var marianne: Character = {
    name: "Marianne",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [bishop, holyKnight],
    gender: Gender.F,
    strengths: [WeaponSkills.Sword, WeaponSkills.Faith, WeaponSkills.Riding, WeaponSkills.Flying, WeaponSkills.Lance],
    weaknesses: [WeaponSkills.Gauntlets, WeaponSkills.HeavyArmor]
};
var leonie: Character = {
    name: "Leonie",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [paladin],
    gender: Gender.F,
    strengths: [WeaponSkills.Lance, WeaponSkills.Bow, WeaponSkills.Riding],
    weaknesses: []
};
var hilda: Character = {
    name: "Hilda",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [false, true, true, false],
    canonClasses: [warrior],
    gender: Gender.F,
    strengths: [WeaponSkills.Lance, WeaponSkills.Axe, WeaponSkills.HeavyArmor],
    weaknesses: [WeaponSkills.Faith, WeaponSkills.Authority]
};


var seteth: Character = {
    name: "Seteth",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [wyvernRider, wyvernLord],
    gender: Gender.M,
    strengths: [WeaponSkills.Sword, WeaponSkills.Lance, WeaponSkills.Axe, WeaponSkills.Flying, WeaponSkills.Authority],
    weaknesses: [WeaponSkills.Riding]
};
var flayn: Character = {
    name: "Flayn",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, true, true, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [bishop],
    gender: Gender.F,
    strengths: [WeaponSkills.Lance, WeaponSkills.Faith, WeaponSkills.Reason],
    weaknesses: [WeaponSkills.HeavyArmor, WeaponSkills.Riding]
};
var hanneman: Character = {
    name: "Hanneman",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [warlock],
    gender: Gender.M,
    strengths: [WeaponSkills.Bow, WeaponSkills.Reason, WeaponSkills.Riding],
    weaknesses: [WeaponSkills.HeavyArmor, WeaponSkills.Flying]
};
var manuela: Character = {
    name: "Manuela",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [bishop, assassin],
    gender: Gender.F,
    strengths: [WeaponSkills.Sword, WeaponSkills.Faith, WeaponSkills.Flying],
    weaknesses: [WeaponSkills.Reason, WeaponSkills.HeavyArmor]
};
var gilbert: Character = {
    name: "Gilbert",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, true, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [fortress, greatKnight],
    gender: Gender.M,
    strengths: [WeaponSkills.Lance, WeaponSkills.Axe, WeaponSkills.HeavyArmor, WeaponSkills.Riding],
    weaknesses: []
};
var alois: Character = {
    name: "Alois",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [warrior],
    gender: Gender.M,
    strengths: [WeaponSkills.Axe, WeaponSkills.Gauntlets, WeaponSkills.HeavyArmor],
    weaknesses: [WeaponSkills.Reason, WeaponSkills.Flying]
};
var catherine: Character = {
    name: "Catherine",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [false, true, true, true],
    canonClasses: [swordmaster],
    gender: Gender.F,
    strengths: [WeaponSkills.Sword, WeaponSkills.Gauntlets],
    weaknesses: [WeaponSkills.Reason]
};
var shamir: Character = {
    name: "Shamir",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [sniper, bowKnight],
    gender: Gender.F,
    strengths: [WeaponSkills.Lance, WeaponSkills.Bow],
    weaknesses: [WeaponSkills.Faith]
};
var cyril: Character = {
    name: "Cyril",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, false],
    recruitableIn: [false, true, true, true],
    canonClasses: [wyvernRider, wyvernLord],
    gender: Gender.M,
    strengths: [WeaponSkills.Lance, WeaponSkills.Bow, WeaponSkills.Riding, WeaponSkills.Flying, WeaponSkills.Axe],
    weaknesses: [WeaponSkills.Reason, WeaponSkills.Faith]
};
var anna: Character = {
    name: "Anna",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [myrmidon],
    gender: Gender.F,
    strengths: [WeaponSkills.Sword, WeaponSkills.Axe, WeaponSkills.Bow, WeaponSkills.Faith, WeaponSkills.Riding],
    weaknesses: [WeaponSkills.Reason, WeaponSkills.Authority]
};