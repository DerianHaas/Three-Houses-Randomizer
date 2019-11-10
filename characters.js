var Route;
(function (Route) {
    Route[Route["CF"] = 0] = "CF";
    Route[Route["SS"] = 1] = "SS";
    Route[Route["AM"] = 2] = "AM";
    Route[Route["VW"] = 3] = "VW";
})(Route || (Route = {}));
var Gender;
(function (Gender) {
    Gender[Gender["M"] = 0] = "M";
    Gender[Gender["F"] = 1] = "F";
})(Gender || (Gender = {}));
var mbyleth = {
    name: "Byleth",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [true, true, true, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [enlightenedOne],
    gender: Gender.M
};
var fbyleth = {
    name: "Byleth",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [true, true, true, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [enlightenedOne],
    gender: Gender.F
};
var edelgard = {
    name: "Edelgard",
    lord: true,
    retainer: false,
    teacher: false,
    baseRoute: [true, false, false, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [armoredLord, emperor],
    gender: Gender.F
};
var hubert = {
    name: "Hubert",
    lord: false,
    retainer: true,
    teacher: false,
    baseRoute: [true, false, false, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [darkBishop],
    gender: Gender.M
};
var ferdinand = {
    name: "Ferdinand",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [paladin, greatKnight],
    gender: Gender.M
};
var linhardt = {
    name: "Linhardt",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [bishop],
    gender: Gender.M
};
var caspar = {
    name: "Caspar",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [grappler, warMaster],
    gender: Gender.M
};
var bernadetta = {
    name: "Bernadetta",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [sniper, bowKnight],
    gender: Gender.F
};
var dorothea = {
    name: "Dorothea",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [warlock, gremory],
    gender: Gender.F
};
var petra = {
    name: "Petra",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [true, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [assassin],
    gender: Gender.F
};
var jeritza = {
    name: "Jeritza",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [true, false, false, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [darkKnight],
    gender: Gender.M
};
var dimitri = {
    name: "Dimitri",
    lord: true,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [greatLord, highLord],
    gender: Gender.M
};
var dedue = {
    name: "Dedue",
    lord: false,
    retainer: true,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [fortress, greatKnight],
    gender: Gender.M
};
var felix = {
    name: "Felix",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [swordmaster],
    gender: Gender.M
};
var ashe = {
    name: "Ashe",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [sniper, bowKnight],
    gender: Gender.M
};
var sylvain = {
    name: "Sylvain",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [paladin],
    gender: Gender.M
};
var mercedes = {
    name: "Mercedes",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [bishop, gremory],
    gender: Gender.F
};
var annette = {
    name: "Annette",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [warlock, gremory],
    gender: Gender.F
};
var ingrid = {
    name: "Ingrid",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, true, false],
    recruitableIn: [true, true, false, true],
    canonClasses: [falconKnight],
    gender: Gender.F
};
var claude = {
    name: "Claude",
    lord: true,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [wyvernMaster, barbarossa],
    gender: Gender.M
};
var lorenz = {
    name: "Lorenz",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [paladin, darkKnight],
    gender: Gender.M
};
var raphael = {
    name: "Raphael",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [grappler, warMaster],
    gender: Gender.M
};
var ignatz = {
    name: "Ignatz",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [sniper],
    gender: Gender.M
};
var lysithea = {
    name: "Lysithea",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [warlock, gremory],
    gender: Gender.F
};
var marianne = {
    name: "Marianne",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [bishop, holyKnight],
    gender: Gender.F
};
var leonie = {
    name: "Leonie",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [true, true, true, false],
    canonClasses: [paladin],
    gender: Gender.F
};
var hilda = {
    name: "Hilda",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, true],
    recruitableIn: [false, true, true, false],
    canonClasses: [warrior],
    gender: Gender.F
};
var seteth = {
    name: "Seteth",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, true, false, false],
    recruitableIn: [false, false, true, true],
    canonClasses: [wyvernRider, wyvernLord],
    gender: Gender.M
};
var flayn = {
    name: "Flayn",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, true, true, true],
    recruitableIn: [false, false, false, false],
    canonClasses: [bishop],
    gender: Gender.F
};
var hanneman = {
    name: "Hanneman",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [warlock],
    gender: Gender.M
};
var manuela = {
    name: "Manuela",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [bishop, assassin],
    gender: Gender.F
};
var gilbert = {
    name: "Gilbert",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, true, false],
    recruitableIn: [false, false, false, false],
    canonClasses: [fortress, greatKnight],
    gender: Gender.M
};
var alois = {
    name: "Alois",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [warrior],
    gender: Gender.M
};
var catherine = {
    name: "Catherine",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [false, true, true, true],
    canonClasses: [swordmaster],
    gender: Gender.F
};
var shamir = {
    name: "Shamir",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [sniper, bowKnight],
    gender: Gender.F
};
var cyril = {
    name: "Cyril",
    lord: false,
    retainer: false,
    teacher: false,
    baseRoute: [false, false, false, false],
    recruitableIn: [false, true, true, true],
    canonClasses: [wyvernRider, wyvernLord],
    gender: Gender.M
};
var anna = {
    name: "Anna",
    lord: false,
    retainer: false,
    teacher: true,
    baseRoute: [false, false, false, false],
    recruitableIn: [true, true, true, true],
    canonClasses: [myrmidon],
    gender: Gender.F
};
//# sourceMappingURL=characters.js.map