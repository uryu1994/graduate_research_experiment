function frame1_button() {
    frame1_select = true;
    for(var i = 0; i < distinctiveObjects.length; i++) {
        distinctiveObjects[i].resetObject();
    }

    for(var j = 0; j < cubeRandomObjects.length; j++) {
        cubeRandomObjects[j].resetObject();
    }
    document.getElementById('frame1').disabled = true;
    document.getElementById('frame2').disabled = false;
}

function frame2_button() {
    frame1_select = false;
    for(var i = 0; i < frame_count; i++) {
        experimentEffect();
    }
    document.getElementById('frame1').disabled = false;
    document.getElementById('frame2').disabled = true;
}
