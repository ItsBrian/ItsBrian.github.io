function dLay(processRaw){
    finalOutput = "true";
    delays = [];
    processClean = processRaw.toString().replace((/^\s+/gm),"");
    processLines = processClean.split("\n");
    for (line in processLines){
        currentLine = processLines[line];
        currentParts = currentLine.split(" ");
        if (currentParts[0] == "sleep"){
            finalOutput = finalOutput + ";setTimeout(function(){";
            delays.push(currentParts[1]);
        }
        else {
            finalOutput = finalOutput + ";" + currentLine;
        }
    }
    while (delays.length > 0){
        finalOutput = finalOutput + "}, "+delays[0]+");";
        delays.shift();
    }
    return finalOutput;
}
