/**
 * @author uryu1994
 */

/**
 * CubeObjectのコンストラクタ
 * @constructor
 * @classdesc 立方体関連のクラス
 */
var CubeObject = function() {
    this.geometry = new THREE.BoxGeometry(10, 10, 10);
    this.material = new THREE.MeshPhongMaterial();
    this.color = new THREE.Color();
    this.specular = new THREE.Color();

    this.obj = new THREE.Mesh(this.geometry, this.material);
    this.obj_pos = {
        x: 0,
        y: 0,
        z: 0
    }

    this.time = {
        flashTime: 0,
        rotateTime: 0,
        rotateMoveTime: 0,
        moveTime: 0,
        changeColorTime: 0,
        changeSpecularTime: 0,
        vibrateTime: 0
    };

}

CubeObject.prototype.createCubeObject = function(x, y, z) {
    this.obj.position.set(x, y, z);
    this.obj_pos = $.extend(true, {}, this.obj.position);
    this.color.setRGB(
        Math.random(),
        Math.random(),
        Math.random()
    );
    this.specular.setRGB(
        Math.random(),
        Math.random(),
        Math.random()
    );
    this.material.color.set(this.color);
    this.material.specular.set(this.specular);
    this.material.shininess = 255;
}

/**
 * オブジェクトを振動させる
 */
CubeObject.prototype.vibrateObject = function() {
    this.obj.position.set(
        this.obj_pos.x + 5 * (Math.random() * 2 - 1),
        this.obj_pos.y + 5 * (Math.random() * 2 - 1),
        this.obj_pos.z + 5 * (Math.random() * 2 - 1)
    );
}

/**
 * 円運動
 * @param  {num} n パターン
 */
CubeObject.prototype.rotateMoveObject = function(n) {
    /* x軸の時計回り */
    if (n == 0) {
        this.obj.position.y =
            Math.cos(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.y -
            Math.sin(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.z;
        this.obj.position.z =
            Math.sin(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.y +
            Math.cos(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.z;
    } else if (n == 1) {
        this.obj.position.x =
            Math.cos(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.x +
            Math.sin(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.z;
        this.obj.position.z =
            Math.cos(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.z -
            Math.sin(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.x;
    } else if (n == 2) {
        this.obj.position.x =
            Math.cos(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.x -
            Math.sin(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.y;
        this.obj.position.y =
            Math.sin(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.x +
            Math.cos(this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.y;
    } else if (n == 3) {
        this.obj.position.y =
            Math.cos(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.y -
            Math.sin(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.z;
        this.obj.position.z =
            Math.sin(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.y +
            Math.cos(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.z;
    } else if (n == 4) {
        this.obj.position.x =
            Math.cos(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.x +
            Math.sin(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.z;
        this.obj.position.z =
            Math.cos(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.z -
            Math.sin(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.x;
    } else if (n == 5) {
        this.obj.position.x =
            Math.cos(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.x -
            Math.sin(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.y;
        this.obj.position.y =
            Math.sin(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.x +
            Math.cos(-this.time.rotateMoveTime * (Math.PI / 180)) * this.obj_pos.y;
    }

    this.time.rotateMoveTime++;
}

CubeObject.prototype.changeColor = function() {
    this.obj.material.color.setRGB(
        Math.pow(Math.sin(this.time.changeColorTime * (Math.PI / 180)), 2),
        Math.pow(Math.cos(this.time.changeColorTime * (Math.PI / 180)), 2),
        Math.pow(Math.sin(this.time.changeColorTime * (Math.PI / 180)), 2)
    );
    this.time.changeColorTime++;
}

CubeObject.prototype.changeSpecular = function() {
    this.obj.material.specular.setRGB(
        Math.pow(Math.sin(this.time.changeSpecularTime * (Math.PI / 180)), 2),
        Math.pow(Math.cos(this.time.changeSpecularTime * (Math.PI / 180)), 2),
        Math.pow(Math.sin(this.time.changeSpecularTime * (Math.PI / 180)), 2)
    );
    this.time.changeSpecularTime++;
}

CubeObject.prototype.rotateDistinctiveObject = function() {
    this.obj.rotation.x -= 0.1;
    this.obj.rotation.y -= 0.1;
    this.obj.rotation.z -= 0.1;
}
