/*function getManchesterLevelEncoding(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▁∣▔';
      //  AMI = "- 0 _" => - = 1; 0 = 0; _ = -1
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '∣▁∣▔';
        if (parseInt(bits[i].value) == 0) symbol = '▔∣▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '∣▔∣▁';
        result.push(symbol);
    }
    return result;
}*/

function nonReturnToZeroLevel(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋';
        if (parseInt(bits[i].value) == 1) symbol ='|▔';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '▔';
        if (parseInt(bits[i].value) == 0) symbol = '|▁';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '▁';
        result.push(symbol);
    }
    return result;
}


function nonReturnToZeroMark(bits) {
    var result = [];
    let level = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋';
        if (parseInt(bits[i].value) == 1 && level == 0) {
            symbol = '|▔';
            level = 1;
        }
        else if (parseInt(bits[i].value) == 1 && level == 1) {
            symbol = '|▁';
            level = 0;
        }
        if (parseInt(bits[i].value) == 0 && level == 0) symbol = '▁';
        if (parseInt(bits[i].value) == 0 && level == 1) symbol = '▔';
        result.push(symbol);
    }
    return result;
}

function nonReturnToZeroSpace(bits) {
    var result = [];
    let level = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋';
        if (parseInt(bits[i].value) == 0 && level == 0) {
            symbol = '|▔';
            level = 1;
        }
        else if (parseInt(bits[i].value) == 0 && level == 1) {
            symbol = '|▁';
            level = 0;
        }
        if (parseInt(bits[i].value) == 1 && level == 0) symbol = '▁';
        if (parseInt(bits[i].value) == 1 && level == 1) symbol = '▔';
        result.push(symbol);
    }
    return result;
}

function returnToZero(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋⚋';
        if (parseInt(bits[i].value) == 1) symbol = '|▔|▁';
        if (parseInt(bits[i].value) == 0) symbol = '▁';
        result.push(symbol);
    }
    return result;
}

function biphaseLevel(bits) {
    var result = [];
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋';
        if (parseInt(bits[i].value) == 1) symbol = '▔|▁';
        if (parseInt(bits[i].value) == 1 && i > 0 && parseInt(bits[i - 1].value) == 1) symbol = '|▔|▁';
        if (parseInt(bits[i].value) == 0) symbol = '▁|▔';
        if (parseInt(bits[i].value) == 0 && i > 0 && parseInt(bits[i - 1].value) == 0) symbol = '|▁|▔';
        result.push(symbol);
    }
    return result;
}

function biphaseMark(bits) {
    var result = [];
    let level = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋';
        if (parseInt(bits[i].value) == 0 && level == 0) {
            symbol = '|▔';
            level = 1;
        }
        else if (parseInt(bits[i].value) == 0 && level == 1) {
            symbol = '|▁';
            level = 0;
        }
        if (parseInt(bits[i].value) == 1 && level == 0) symbol = '|▔|▁';
        if (parseInt(bits[i].value) == 1 && level == 1) symbol = '|▁|▔';
        result.push(symbol);
    }
    return result;
}

function biphaseSpace(bits) {
    var result = [];
    let level = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋';
        if (parseInt(bits[i].value) == 1 && level == 0) {
            symbol = '|▔';
            level = 1;
        }
        else if (parseInt(bits[i].value) == 1 && level == 1) {
            symbol = '|▁';
            level = 0;
        }
        if (parseInt(bits[i].value) == 0 && level == 0) symbol = '|▔|▁';
        if (parseInt(bits[i].value) == 0 && level == 1) symbol = '|▁|▔';
        result.push(symbol);
    }
    return result;
}

function biphaseLevelDifferential(bits) {
    var result = [];
    let level = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋';
        if (parseInt(bits[i].value) == 1 && level == 0) {
            symbol = '▁|▔';
            level = 1;
        }
        else if (parseInt(bits[i].value) == 1 && level == 1) {
            symbol = '▔|▁';
            level = 0;
        }
        if (parseInt(bits[i].value) == 0 && level == 1) symbol = '|▁|▔';
        if (parseInt(bits[i].value) == 0 && level == 0) symbol = '|▔|▁';
        result.push(symbol);
    }
    return result;
}

function biphaseDelay(bits) {
    var result = [];
    let level = 0;
    for (var i = 0; i < bits.length; i++) {
        let symbol = '⚋';
        if (parseInt(bits[i].value) == 1 && level == 0) {
            symbol = '▁|▔';
            level = 1;
        }
        else if (parseInt(bits[i].value) == 1 && level == 1) {
            symbol = '▔|▁';
            level = 0;
        }
        if (parseInt(bits[i].value) == 0 && level == 1 && i > 0 && parseInt(bits[i-1].value) == 1) symbol = '▔';
        else if(parseInt(bits[i].value) == 0 && level == 1 && i > 0 && parseInt(bits[i-1].value) == 0) {
            symbol = '|▁';
            level = 0;
        }
        else if (parseInt(bits[i].value) == 0 && level == 0 && i > 0 && parseInt(bits[i-1].value) == 1) symbol = '▁';
        else if(parseInt(bits[i].value) == 0 && level == 0 && i > 0 && parseInt(bits[i-1].value) == 0) {
            symbol = '|▔';
            level = 1;
        }
        result.push(symbol);
    }
    return result;
}