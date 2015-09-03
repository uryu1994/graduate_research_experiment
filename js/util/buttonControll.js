function buttonPushed(action) {
    if (action.value == "reset") {
        resetButton();
    } else if (action.value == "start") {
        startButton();
    } else if (action.value == "pause") {
        pauseButton();
    }
}

function resetButton() {
    for (var i = 0; i < cubeRandomObjects.length; i++) {
        cubeRandomObjects[i].resetObject();
    }

    for (var j = 0; j < distinctiveObjects.length; j++) {
        distinctiveObjects[j].resetObject();
    }
    fps = 0;
    started = false;
    document.getElementById('reset').disabled = true;
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
}

function stopButton() {
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = true;
    document.getElementById('reset').disabled = false;
    started = false;
}

function startButton() {
    document.getElementById('start').disabled = true;
    document.getElementById('pause').disabled = false;
    document.getElementById('reset').disabled = false;
    started = true;
}

function pauseButton() {
    document.getElementById('start').disabled = false;
    document.getElementById('pause').disabled = true;
    document.getElementById('reset').disabled = false;
    started = false;
}