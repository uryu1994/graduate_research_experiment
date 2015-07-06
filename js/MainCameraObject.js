/**
 * @author uryu1994
 */

/**
 * MainCameraObject
 */
var MainCameraObject = function() {

    this.camera = new THREE.PerspectiveCamera(
        45, canvasFrame.clientWidth / canvasFrame.clientHeight, 1, 10000);
    this.trackball = new THREE.TrackballControls(this.camera, canvasFrame);

    this.lineGeometry = new THREE.Geometry();
    this.lineMaterial = new THREE.LineBasicMaterial({
        color: 0xFFFF00,
        opacity: 3.0,
        linewidth: 50
    });

    /* initCamera */
    this.camera.position.set(1000, 1000, 1000);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });

    this.nowCameraPosition = new THREE.Vector3(this.camera.position.x,
        this.camera.position.y,
        this.camera.position.z);
    this.lineGeometry.vertices.push(new THREE.Vector3(this.camera.position.x,
        this.camera.position.y,
        this.camera.position.z));
    this.lines = new THREE.Line(this.lineGeometry, this.lineMaterial);
    this.lines.geometry.dynamic = true;
    this.lines.geometry.verticesNeedUpdate = true;
    this.lines.geometry.lineDistancesNeedUpdate = true;
    scene.add(this.lines);

    this.isExsisted = true;

    /* Function of trackball */
    this.trackball.screen.width = canvasFrame.clientWidth;
    this.trackball.screen.height = canvasFrame.clientHeight;
    this.trackball.screen.offsetLeft = canvasFrame.getBoundingClientRect().left;
    this.trackball.screen.offsetTop = canvasFrame.getBoundingClientRect().top;

    this.trackball.noRotate = false;
    this.trackball.rotateSpeed = 2.0;

    this.trackball.noZoom = false;
    this.trackball.zoomSpeed = 2.0;

    this.trackball.noPan = false;
    this.trackball.panSpeed = 1.0;
    this.trackball.target = new THREE.Vector3(0, 0, 10);

    this.trackball.staticMoving = true;

    this.trackball.dynamicDampingFactor = 0.3;
};

/**
 * カメラの軌跡を更新
 */
MainCameraObject.prototype.updateLine = function() {
    this.lines.geometry.dispose();
    this.lineGeometry.vertices.push(
        new THREE.Vector3(this.camera.position.x,
            this.camera.position.y,
            this.camera.position.z));
    this.lines.geometry.verticesNeedUpdate = true;
    this.lines.geometry.lineDistancesNeedUpdate = true;

    this.nowCameraPosition = new THREE.Vector3(this.camera.position.x,
        this.camera.position.y,
        this.camera.position.z);

};

/**
 * カメラの軌跡を非表示にする
 */
MainCameraObject.prototype.deleteLine = function() {
    scene.remove(this.lines);
    this.isExsisted = false;
};

/**
 * カメラの軌跡を更新するかしないかを判定
 */
MainCameraObject.prototype.updateCamera = function() {
    if (this.nowCameraPosition.x != this.camera.position.x ||
        this.nowCameraPosition.y != this.camera.position.y ||
        this.nowCameraPosition.z != this.camera.position.z) {
        this.updateLine();
    }
};

/**
 * 「軌跡」ボタンを押したときの動作
 */
MainCameraObject.prototype.cameraLineControll = function() {
    if (this.isExsisted == true) {
        this.deleteLine();
    } else {
        scene.add(this.lines);
        this.updateLine();
        this.isExsisted = true;
    }
};
