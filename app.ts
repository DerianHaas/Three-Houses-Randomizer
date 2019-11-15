$(() => {

    let result: { char: Character, class: Class }[];
    let route: Route;
    let avoidCanonClasses: boolean;

    $("#submit").click(() => {
        route = parseInt($("#routeSelect").val() as string);
        let bylethGender: Gender = parseInt($("input[name='gender']:checked").val() as string);
        let numUnits: number = parseInt($("#numUnits").val() as string);
        let numRecruits: number = parseInt($("#numRecruits").val() as string);
        let alwaysRetainer: boolean = $("#alwaysRetainer").is(":checked");
        let alwaysDancer: boolean = $("#alwaysDancer").is(":checked");
        let alwaysHealer: boolean = $("#alwaysHealer").is(":checked");
        let includeTeachers: boolean = $("#teachers").is(":checked");
        let includeAnna: boolean = $("#anna").is(":checked");
        avoidCanonClasses = $("#canon").is(":checked");
        let avoidRepeats: boolean = $("#repeats").is(":checked");

        let chosenChars = chooseUnits(route, bylethGender, alwaysRetainer, numUnits, numRecruits, includeTeachers, includeAnna);
        result = chooseClasses(chosenChars, alwaysDancer, alwaysHealer, avoidCanonClasses, avoidRepeats);
        $("#result").empty().append("<div>Chosen Units:</div><br/>");
        $("#result").append($("<table class='resultTable'>").append(
            $("<tr>").append("<th>Name</th><th>Class</th><th>Proficiency Score</th>"),
            result.map(res => {
                let profScore = calculateClassProficiency(res.char, res.class);
                let scoreClass = "okayScore";
                if (profScore >= 1.5) scoreClass = "goodScore";
                if (profScore <= 0.5) scoreClass = "badScore";
                return $("<tr>").append(
                    $("<td class='nameCell'>").append(res.char.name),
                    $("<td class='classCell'>").append(res.class.name),
                    $("<td class='scoreCell " + scoreClass + "'>").append(""+profScore),
                    $("<td class='buttonCell'>").append(
                        res.char.required ? "" : "<button class='replaceChar'>Reroll Character</button><br/><br/>",
                        "<button class='replaceClass'>Reroll Class</button>"
                    )
                )
            })
        ));
    });

    $("#result").on("click", ".replaceChar", (e) => {
        let row = e.target.closest("tr");
        let charIndex = row.sectionRowIndex - 1;
        let newChar: Character;
        if (result[charIndex].char.baseRoute[route]) {
            if (remainingBase.length === 0) {
                alert("There are no " + Route[route] + " units left as replacements!");
                return;
            }
            let remainingIndex = Math.floor(Math.random() * remainingBase.length);
            newChar = remainingBase[remainingIndex];
            remainingBase[remainingIndex] = Object.assign({}, result[charIndex].char);
        } else {
            if (remainingRecruitable.length === 0) {
                alert("There are no recruitable units left as replacements!");
                return;
            }
            let remainingIndex = Math.floor(Math.random() * remainingRecruitable.length);
            newChar = remainingRecruitable[remainingIndex];
            remainingRecruitable[remainingIndex] = Object.assign({}, result[charIndex].char);
        }
        
        result[charIndex].char = Object.assign({}, newChar);
        let newClass = chooseClass(result[charIndex].char, avoidCanonClasses, []);
        result[charIndex].class = Object.assign({}, newClass);
        $(row).children(".nameCell").text(newChar.name);
        $(row).children(".classCell").text(newClass.name);

        let profScore = calculateClassProficiency(newChar, newClass);
        let scoreClass = "okayScore";
        if (profScore >= 1.5) scoreClass = "goodScore";
        if (profScore <= 0.5) scoreClass = "badScore";
        $(row).children(".scoreCell").removeClass("okayScore goodScore badScore").addClass(scoreClass);
        $(row).children(".scoreCell").text("" + profScore);
    });

    $("#result").on("click", ".replaceClass", (e) => {
        let row = e.target.closest("tr");
        let charIndex = row.sectionRowIndex - 1;
        if (result[charIndex].class === dancer) {
            classWeights.dancer = 1;
        }
        let newClass = chooseClass(result[charIndex].char, avoidCanonClasses, [result[charIndex].class]);
        result[charIndex].class = Object.assign({}, newClass);
        $(row).children(".classCell").text(newClass.name);

        let profScore = calculateClassProficiency(result[charIndex].char, newClass);
        let scoreClass = "okayScore";
        if (profScore >= 1.5) scoreClass = "goodScore";
        if (profScore <= 0.5) scoreClass = "badScore";
        $(row).children(".scoreCell").removeClass("okayScore goodScore badScore").addClass(scoreClass);
        $(row).children(".scoreCell").text("" + profScore);
    });

});
