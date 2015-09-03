function initEvent() {
    canvasFrame.addEventListener('mousedown', onDocumentMouseDown, false);

    function onDocumentMouseDown(event) {
        var mx = (event.clientX / canvasFrame.clientWidth) * 2 - 1;
        var my = -(event.clientY / canvasFrame.clientHeight) * 2 + 1;

        var vector = new THREE.Vector3(mx, my, 0.5);

        var projector = new THREE.Projector();

        vector.unproject(mainCameraObject.camera);

        vector = vector.sub(mainCameraObject.camera.position).normalize();

        var raycaster = new THREE.Raycaster(mainCameraObject.camera.position, vector);

        var intersects = raycaster.intersectObjects(rayReceiveObjects);
        if (intersects.length > 0) {
            rayReceiveObjects.some(function(v, i) {
                if (v == intersects[0].object) {
                    rayReceiveObjects.splice(i, 1);
                }

            });
            scene.remove(intersects[0].object);
            document.getElementById("object-count").innerHTML = "残り:" + rayReceiveObjects.length;
        }
        if (rayReceiveObjects.length == 0) {
            clearInterval(experiment_timer);
        }
    }
}
