/**
 * @author uryu1994
 */

/**
 * CubeObjectに変化をもたらせるエフェクト
 * @param  {CubeObject} cube 立方体モデル
 * @param  {num} n    変化をもたらせる番号
 * @return {CubeObject}      変化したCubeObjectを返す
 */
function rotateMoveObject(cube, n) {
    /* x軸の時計回り */
    if (n == 0) {
        cube.obj.position.y =
            Math.cos(cube.obj.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.y -
            Math.sin(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.z;
        cube.obj.position.z =
            Math.sin(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.y +
            Math.cos(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.z;
    } else if (n == 1) {
        cube.obj.position.x =
            Math.cos(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.x +
            Math.sin(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.z;
        cube.obj.position.z =
            Math.cos(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.z -
            Math.sin(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.x;
    } else if (n == 2) {
        cube.obj.position.x =
            Math.cos(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.x -
            Math.sin(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.y;
        cube.obj.position.y =
            Math.sin(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.x +
            Math.cos(cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.y;
    } else if (n == 3) {
        cube.obj.position.y =
            Math.cos(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.y -
            Math.sin(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.z;
        cube.obj.position.z =
            Math.sin(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.y +
            Math.cos(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.z;
    } else if (n == 4) {
        cube.obj.position.x =
            Math.cos(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.x +
            Math.sin(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.z;
        cube.obj.position.z =
            Math.cos(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.z -
            Math.sin(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.x;
    } else if (n == 5) {
        cube.obj.position.x =
            Math.cos(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.x -
            Math.sin(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.y;
        cube.obj.position.y =
            Math.sin(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.x +
            Math.cos(-cube.time.rotateMoveTime * (Math.PI / 180)) * cube.obj_pos.y;
    }

    cube.time.rotateMoveTime++;

    return cube;
}

/**
 * 物体の回転移動
 * @param  {num} cx   x軸方向の回転
 * @param  {num} cy   y軸方向の回転
 * @param  {num} cz   z軸方向の回転
 * @param  {CubeObject} cube 変化させるCubeObject
 * @return {CubeObject}      変化したCubeObjectを返す
 */
function rotateObject(cx, cy, cz, cube) {
    if (cx == 1) {
        cube.obj.rotation.x += 0.1;
    } else if (cx == -1) {
        cube.obj.rotation.x -= 0.1;
    }

    if (cy == 1) {
        cube.obj.rotation.y += 0.1;
    } else if (cy == -1) {
        cube.obj.rotation.y -= 0.1;
    }

    if (cz == 1) {
        cube.obj.rotation.y += 0.1;
    } else if (cz == -1) {
        cube.obj.rotation.z -= 0.1;
    }

    return cube;
}
/**
 * 環境光の色を周期的に変化させる
 * @param  {CubeObject} cube 変化させるCubeObject
 * @return {CubeObject}      変化したCubeObjectを返す
 */
function changeColor(cube) {
    cube.obj.material.color.setRGB(
        Math.pow(Math.sin(cube.time.changeColorTime * (Math.PI / 180)), 2),
        Math.pow(Math.cos(cube.time.changeColorTime * (Math.PI / 180)), 2),
        Math.pow(Math.sin(cube.time.changeColorTime * (Math.PI / 180)), 2)
    );
    cube.time.changeColorTime++;

    return cube;
}

/**
 * 鏡面反射光の色を周期的に変化させる
 * @param  {CubeObject} cube 変化させるCubeObject
 * @return {CubeObject}      変化したCubeObjectを返す
 */
function changeSpecular(cube) {
    cube.obj.material.specular.setRGB(
        Math.pow(Math.sin(cube.time.changeSpecularTime * (Math.PI / 180)), 2),
        Math.pow(Math.cos(cube.time.changeSpecularTime * (Math.PI / 180)), 2),
        Math.pow(Math.sin(cube.time.changeSpecularTime * (Math.PI / 180)), 2)
    );
    cube.time.changeSpecularTime++;
    return cube;
}

/**
 * 周期的に点滅させる
 * @param  {CubeObject} cube 変化させるCubeObject
 * @return {CubeObject}      変化したCubeObjectを返す
 */
function flashObject(cube) {
    cube.obj.material.shininess = Math.sin(
        10 * cube.time.flashTime * (Math.PI / 180)) * 50;
    cube.time.flashTime += 0.1;
    return cube;
}

/**
 * 物体を振動させる
 * @param  {CubeObject} cube 振動させるCubeObject
 * @return {CubeObject}      振動させた後のCubeObjectを返す
 */
function vibrateObject(cube) {
    cube.obj.position.set(
        cube.obj_pos.x + 5 * (Math.random() * 2 - 1),
        cube.obj_pos.y + 5 * (Math.random() * 2 - 1),
        cube.obj_pos.z + 5 * (Math.random() * 2 - 1)
    );
    return cube;
}
