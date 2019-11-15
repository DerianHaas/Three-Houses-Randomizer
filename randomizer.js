let byleths = [mbyleth, fbyleth];
let lords = [edelgard, null, dimitri, claude];
let retainers = [hubert, null, dedue, null];
let allCharacters = [
    ferdinand, linhardt, caspar, bernadetta, dorothea, petra,
    felix, ashe, sylvain, mercedes, annette, ingrid,
    lorenz, raphael, ignatz, lysithea, marianne, hilda, leonie,
    seteth, flayn, hanneman, manuela, gilbert, alois, catherine, shamir, cyril,
    jeritza
];
let possibleClasses = [
    swordmaster, hero, assassin, paladin, warrior, fortress, sniper, grappler, warlock, darkBishop, bishop,
    mortalSavant, falconKnight, warMaster, wyvernLord, greatKnight, bowKnight, gremory, darkKnight, holyKnight,
    enlightenedOne, dancer, emperor, greatLord, barbarossa
];
let classWeights = {};
let remainingBase = [];
let remainingRecruitable = [];
function getBaseUnits(route) {
    return allCharacters.filter(char => char.baseRoute[route]);
}
function getRecruitableUnits(route, includeTeachers) {
    return allCharacters.filter(char => char.recruitableIn[route] && (includeTeachers || !char.teacher));
}
function getPossibleClasses(char) {
    return possibleClasses.filter(cls => {
        if (cls.maleOnly && char.gender === Gender.F)
            return false;
        if (cls.femaleOnly && char.gender === Gender.M)
            return false;
        if (cls.byOnly && !char.name.includes("Byleth"))
            return false;
        if (cls.edelOnly && char.name !== "Edelgard")
            return false;
        if (cls.dimitriOnly && char.name !== "Dimitri")
            return false;
        if (cls.claudeOnly && char.name !== "Claude")
            return false;
        if (cls.lordOnly && !char.lord)
            return false;
        if (cls.studentOnly && char.teacher)
            return false;
        if (cls.jeritzaOnly && char.name !== "Jeritza")
            return false;
        return cls.level === ClassLevel.Advanced || cls.level === ClassLevel.Master || cls.level === ClassLevel.Unique;
    });
}
function initializeClassWeights() {
    possibleClasses.forEach(cls => { classWeights[cls.name] = 1; });
}
function getRandomWeightedIndex(weights) {
    let weightSum = weights.reduce((a, b) => a + b);
    let r = Math.random();
    let s = 0;
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > 0) {
            s += weights[i] / weightSum;
            if (s >= r)
                return i;
        }
    }
    return -1;
}
function chooseUnits(route, bylethGender, alwaysIncludeRetainer, totalUnits, numToRecruit, includeTeachers, includeAnna) {
    let requiredUnits = [];
    let otherUnits = [];
    requiredUnits.push(byleths[bylethGender]);
    if (route !== Route.SS) {
        requiredUnits.push(lords[route]);
        if (route !== Route.VW && alwaysIncludeRetainer) {
            requiredUnits.push(retainers[route]);
        }
    }
    requiredUnits.forEach((char) => char.required = true);
    let baseUnits = getBaseUnits(route);
    if (!alwaysIncludeRetainer && retainers[route]) {
        baseUnits.push(retainers[route]);
    }
    let recruited = [];
    let recruitable = getRecruitableUnits(route, includeTeachers);
    if (includeAnna) {
        recruitable.push(anna);
    }
    for (let i = 0; i < Math.min(totalUnits - requiredUnits.length, numToRecruit); i++) {
        if (recruitable.length > 0) {
            let r = (Math.floor(Math.random() * recruitable.length));
            recruited = recruited.concat(recruitable.splice(r, 1));
        }
    }
    for (let i = 0; i < totalUnits - requiredUnits.length - recruited.length; i++) {
        let r = (Math.floor(Math.random() * baseUnits.length));
        otherUnits = otherUnits.concat(baseUnits.splice(r, 1));
    }
    otherUnits = otherUnits.concat(recruited);
    remainingBase = baseUnits;
    remainingRecruitable = recruitable;
    return requiredUnits.concat(otherUnits);
}
function chooseClasses(chars, alwaysHaveDancer, alwaysHaveHealer, avoidCanonClasses, avoidRepeats) {
    let result = [];
    initializeClassWeights();
    let haveDancer = false;
    let haveHealer = false;
    chars.forEach(char => {
        let chosenClass = chooseClass(char, avoidCanonClasses, []);
        result.push({
            char: Object.assign({}, char),
            class: Object.assign({}, chosenClass)
        });
        if (avoidRepeats) {
            classWeights[chosenClass.name] /= 5;
        }
        if (chosenClass === dancer) {
            classWeights[dancer.name] = 0;
            haveDancer = true;
        }
        else if (chosenClass.magic) {
            haveHealer = true;
        }
    });
    let numToAvoid = -1;
    if (alwaysHaveHealer && !haveHealer) {
        let r = Math.floor(Math.random() * result.length);
        let possibleClasses = getPossibleClasses(result[r].char);
        let magicClasses = possibleClasses.filter(cls => cls.magic);
        let r2 = Math.floor(Math.random() * magicClasses.length);
        if (result[r].class === dancer) {
            haveDancer = false;
        }
        result[r].class = Object.assign({}, magicClasses[r2]);
        result[r].class.name += " - forced healer";
        numToAvoid = r;
    }
    if (alwaysHaveDancer && !haveDancer) {
        while (!haveDancer) {
            let r = Math.floor(Math.random() * result.length);
            if (!result[r].char.teacher || r === numToAvoid) {
                result[r].class = Object.assign({}, dancer);
                result[r].class.name += " - forced dancer";
                haveDancer = true;
            }
        }
    }
    return result;
}
function chooseClass(char, avoidCanonClasses, doNotInclude) {
    let possibleClasses = getPossibleClasses(char);
    let possibleWeights = possibleClasses.map(cls => {
        if (doNotInclude.includes(cls))
            return 0;
        if (avoidCanonClasses && char.canonClasses.includes(cls))
            return 0;
        return classWeights[cls.name];
    });
    return possibleClasses[getRandomWeightedIndex(possibleWeights)];
}
function calculateClassProficiency(char, cls) {
    let prof = 1;
    cls.requiredSkills.forEach(skill => {
        if (char.strengths.includes(skill))
            prof += (1 / cls.requiredSkills.length);
        if (char.weaknesses.includes(skill))
            prof -= (1 / cls.requiredSkills.length);
    });
    return Math.round(prof * 100) / 100;
}
//# sourceMappingURL=randomizer.js.map