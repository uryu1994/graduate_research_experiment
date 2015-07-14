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
            scene.remove(intersects[0].object);
        }
    }
}
