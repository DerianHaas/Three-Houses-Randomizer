$(() => {
    $("#submit").click(() => {
        let route = parseInt($("#routeSelect").val());
        let bylethGender = parseInt($("input[name='gender']:checked").val());
        let numUnits = parseInt($("#numUnits").val());
        let numRecruits = parseInt($("#numRecruits").val());
        let alwaysRetainer = $("#alwaysRetainer").is(":checked");
        let alwaysDancer = $("#alwaysDancer").is(":checked");
        let alwaysHealer = $("#alwaysHealer").is(":checked");
        let includeTeachers = $("#teachers").is(":checked");
        let includeAnna = $("#anna").is(":checked");
        let avoidCanonClasses = $("#canon").is(":checked");
        let avoidRepeats = $("#repeats").is(":checked");
        let chosenChars = chooseUnits(route, bylethGender, alwaysRetainer, numUnits, numRecruits, includeTeachers, includeAnna);
        let result = chooseClasses(chosenChars, alwaysDancer, alwaysHealer, avoidCanonClasses, avoidRepeats);
        $("#result").empty().append("<div>Chosen Units:</div>");
        $("#result").append($("<ul>").append(result.map(res => $("<li>").append(res.char.name + " - " + res.class.name))));
    });
});
//# sourceMappingURL=app.js.map