$(() => {
    $("#submit").click(() => {
        let route: Route = parseInt($("#routeSelect").val() as string);
        let bylethGender: Gender = parseInt($("input[name='gender']:checked").val() as string);
        let numUnits: number = parseInt($("#numUnits").val() as string);
        let numRecruits: number = parseInt($("#numRecruits").val() as string);
        let alwaysRetainer: boolean = $("#alwaysRetainer").is(":checked");
        let alwaysDancer: boolean = $("#alwaysDancer").is(":checked");
        let alwaysHealer: boolean = $("#alwaysHealer").is(":checked");
        let includeTeachers: boolean = $("#teachers").is(":checked");
        let includeAnna: boolean = $("#anna").is(":checked");
        let avoidCanonClasses: boolean = $("#canon").is(":checked");
        let avoidRepeats: boolean = $("#repeats").is(":checked");

        let chosenChars = chooseUnits(route, bylethGender, alwaysRetainer, numUnits, numRecruits, includeTeachers, includeAnna);
        let result = chooseClasses(chosenChars, alwaysDancer, alwaysHealer, avoidCanonClasses, avoidRepeats);
        $("#result").empty().append("<div>Chosen Units:</div>");
        $("#result").append($("<ul>").append(
            result.map(res => $("<li>").append(res.char.name + " - " + res.class.name))
        ));
    });

});
