/* global THREE, Integer */

/**
 * @author uryu1994
 */

window.addEventListener("load", function() {
    threeStart();
});

var mainCameraObject;

/**
 * three.jsを開始します
 */
function threeStart() {
    initThree();
    mainCameraObject = new MainCameraObject();
    initLight();
    //initObject();
    createObject();
    loop();
}

var renderer,
    scene,
    canvasFrame,
    windowWidth,
    windowHeight;

/**
 * 3次元空間の初期化を行います
 */
function initThree() {
    canvasFrame = document.getElementById('canvas-frame');
    renderer = new THREE.WebGLRenderer();
    if (!renderer)
        alert('three.js の初期化に失敗しました');
    windowWidth = $(window).width();
    windowHeight = $(window).height();
    $(function() {
        $('div#canvas-frame').css('width', windowWidth + 'px');
        $('div#canvas-frame').css('height', windowHeight + 'px');
    });
    renderer.setSize(canvasFrame.clientWidth, canvasFrame.clientHeight);
    canvasFrame.appendChild(renderer.domElement);
    renderer.setClearColorHex(0x000000, 1.0);
    scene = new THREE.Scene();
}

/**
 * 無限ループ関数の定義
 */
function loop() {

    requestAnimationFrame(loop);
    mainCameraObject.camera.up.set(0, 0, 1);
    mainCameraObject.camera.lookAt({
        x: 0,
        y: 0,
        z: 0
    });
    distinctiveObject.functionControll();
    whiteDirectionalLight.functionControll();
    renderer.render(scene, mainCameraObject.camera);
    mainCameraObject.trackball.update();
    mainCameraObject.updateCamera();
}

var requestAnimationFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback, element) {
        window.setTimeOut(callback, 1000 / 60);
    };

var rgbDirectionalLight,
    whiteDirectionalLight;

/**
 * 光源の設定を行います
 */
function initLight() {
    whiteDirectionalLight = new WhiteDirectionalLight();
}

var lastTime;

var axis;
var arrows;

/**
 * 座標軸の初期化を行います
 */
function initObject() {
    axis = new THREE.AxisHelper(1000);
    //scene.add(axis);
    axis.position.set(0, 0, 0);

    var arrows = new THREE.Object3D();
    arrows.add(
        new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0),
            new THREE.Vector3(0, 0, 0), 1000, 0xFF0000));

    arrows.add(
        new THREE.ArrowHelper(new THREE.Vector3(0, 1, 0),
            new THREE.Vector3(0, 0, 0), 1000, 0x00FF00));

    arrows.add(
        new THREE.ArrowHelper(new THREE.Vector3(0, 0, 1),
            new THREE.Vector3(0, 0, 0), 1000, 0x0000FF));

    scene.add(arrows);

}

var cubeRandomObject,
    distinctiveObject;

/**
 * オブジェクトを生成します
 */
function createObject() {
    cubeRandomObject = new CubeRandomObject(990);
    distinctiveObject = new DistinctiveObject(10);
    for (var i = 0; i < cubeRandomObject.objects.length; i++) {
        scene.add(cubeRandomObject.objects[i]);
    }

    for (var j = 0; j < distinctiveObject.obj.length; j++) {
        scene.add(distinctiveObject.obj[j]);
    }
}

/**
 * オブジェクトのカラーを変更
 */
function changeColor(obj) {
    var color = new THREE.Color();
    var specular = new THREE.Color();
    color.setRGB(Math.random(), Math.random(), Math.random());
    specular.setRGB(Math.random(), Math.random(), Math.random());
    obj.material.color.set(color);
    obj.material.specular.set(specular);
}

/**
 * 3次元空間の描画を行います(一度だけ)
 */
function draw() {
    renderer.clear();
    renderer.render(scene, mainCameraObject.camera);
}

/**
 * カメラの座標を記録する
 */
function recordOfCameraPosition() {
    // テーブル取得
    var table = document.getElementById("camera-position");
    // 行を追加
    var row = table.insertRow();
    // セル挿入
    var xCell = row.insertCell();
    var yCell = row.insertCell();
    var zCell = row.insertCell();

    xCell.innerHTML = parseInt(camera.position.x);
    yCell.innerHTML = parseInt(camera.position.y);
    zCell.innerHTML = parseInt(camera.position.z);

}

/**
 * 特定のオブジェクトを記録する
 */
function recordOfDistinctiveObjectPosition(obj) {
    var table = document.getElementById("camera-position");

    var row = table.insertRow();

    var xCell = row.insertCell();
    var yCell = row.insertCell();
    var zCell = row.insertCell();

    xCell.innerHTML = parseInt(obj.position.x);
    yCell.innerHTML = parseInt(obj.position.y);
    zCell.innerHTML = parseInt(obj.position.z);
}
