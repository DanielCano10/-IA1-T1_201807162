function reflexAgent(location, state) {
    if (state === "DIRTY") {
        return 'CLEAN';
    } else if (location === 'A') {
        return 'RIGHT';
    } else if (location === 'B') {
        return 'LEFT';
    }
}

function generateAllStates(locations, cleanliness) {
    let states = [];
    for (let loc of locations) {
        for (let stateA of cleanliness) {
            for (let stateB of cleanliness) {
                states.push([loc, stateA, stateB]);
            }
        }
    }
    return states;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test(location, stateA, stateB) {
    let states = [location, stateA, stateB];
    while (true) {
        location = states[0];
        let state = (location === 'A') ? states[2] : states[1];
        let action = reflexAgent(location, state);
        document.getElementById("log").innerHTML += `<br>Location: ${location} | Action: ${action}`;

        if (states.slice(1).every(s => s === "CLEAN")) {
            document.getElementById("log").innerHTML += "<br>---------------------------------------------------";
            break;
        }

        if (action === "CLEAN") {
            states[1] = "CLEAN";
            states[2] = "CLEAN";
        } else if (action === "RIGHT") {
            states[0] = 'B';
        } else if (action === "LEFT") {
            states[0] = 'A';
        }

        await sleep(1000);
    }
}

let locations = ["A", "B"];
let cleanliness = ["DIRTY", "CLEAN"];

let possibleStates = generateAllStates(locations, cleanliness);

possibleStates.forEach(state => {
    test(...state);
});
