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
    canonClasses: Class[]
}

var mbyleth: Character = {
    name: "Byleth",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [true, true, true, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [enlightenedOne],
    gender: Gender.M
};
var fbyleth: Character = {
    name: "Byleth",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [true, true, true, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [enlightenedOne],
    gender: Gender.F
};
var edelgard: Character = {
    name: "Edelgard",
    lord: true,
    retainer: false,
    teacher: false,
    baseRoute: [true, false, false, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [armoredLord,emperor],
    gender: Gender.F
};
var hubert: Character = {
    name: "Hubert",
    lord: false,
    retainer: true,
    teacher: false,
    baseRoute: [true, false, false, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [darkBishop],
    gender: Gender.M
};
var ferdinand: Character = {
    name: "Ferdinand",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [paladin,greatKnight],
    gender: Gender.M
};
var linhardt: Character = {
    name: "Linhardt",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [bishop],
    gender: Gender.M
};
var caspar: Character = {
    name: "Caspar",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [grappler, warMaster],
    gender: Gender.M
};
var bernadetta: Character = {
    name: "Bernadetta",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [sniper, bowKnight],
    gender: Gender.F
};
var dorothea: Character = {
    name: "Dorothea",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [warlock, gremory],
    gender: Gender.F
};
var petra: Character = {
    name: "Petra",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [assassin],
    gender: Gender.F
};var jeritza: Character = {
    name: "Jeritza",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [true, false, false, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [darkKnight],
    gender: Gender.M
};



var dimitri: Character = {
    name: "Dimitri",
    lord: true,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [greatLord, highLord],
    gender: Gender.M
};
var dedue: Character = {
    name: "Dedue",
    lord: false,
    retainer: true,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [fortress, greatKnight],
    gender: Gender.M
};
var felix: Character = {
    name: "Felix",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [swordmaster],
    gender: Gender.M
};
var ashe: Character = {
    name: "Ashe",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [sniper, bowKnight],
    gender: Gender.M
};
var sylvain: Character = {
    name: "Sylvain",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [paladin],
    gender: Gender.M
};
var mercedes: Character = {
    name: "Mercedes",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [bishop, gremory],
    gender: Gender.F
};
var annette: Character = {
    name: "Annette",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [warlock, gremory],
    gender: Gender.F
};
var ingrid: Character = {
    name: "Ingrid",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [falconKnight],
    gender: Gender.F
};


var claude: Character = {
    name: "Claude",
    lord: true,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [wyvernMaster, barbarossa],
    gender: Gender.M
};
var lorenz: Character = {
    name: "Lorenz",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [paladin, darkKnight],
    gender: Gender.M
};
var raphael: Character = {
    name: "Raphael",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [grappler, warMaster],
    gender: Gender.M
};
var ignatz: Character = {
    name: "Ignatz",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [sniper],
    gender: Gender.M
};
var lysithea: Character = {
    name: "Lysithea",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [warlock, gremory],
    gender: Gender.F
};
var marianne: Character = {
    name: "Marianne",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [bishop, holyKnight],
    gender: Gender.F
};
var leonie: Character = {
    name: "Leonie",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [paladin],
    gender: Gender.F
};
var hilda: Character = {
    name: "Hilda",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [false, true, true, false],
    canonClasses: [warrior],
    gender: Gender.F
};


var seteth: Character = {
    name: "Seteth",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [wyvernRider, wyvernLord],
    gender: Gender.M
};
var flayn: Character = {
    name: "Flayn",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, true, true, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [bishop],
    gender: Gender.F
};
var hanneman: Character = {
    name: "Hanneman",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [warlock],
    gender: Gender.M
};
var manuela: Character = {
    name: "Manuela",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [bishop, assassin],
    gender: Gender.F
};
var gilbert: Character = {
    name: "Gilbert",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, true, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [fortress, greatKnight],
    gender: Gender.M
};
var alois: Character = {
    name: "Alois",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [warrior],
    gender: Gender.M
};
var catherine: Character = {
    name: "Catherine",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [false, true, true, true],
    canonClasses: [swordmaster],
    gender: Gender.F
};
var shamir: Character = {
    name: "Shamir",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [sniper, bowKnight],
    gender: Gender.F
};
var cyril: Character = {
    name: "Cyril",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, false],
    recruitableIn: [false, true, true, true],
    canonClasses: [wyvernRider, wyvernLord],
    gender: Gender.M
};
var anna: Character = {
    name: "Anna",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [myrmidon],
    gender: Gender.F
};