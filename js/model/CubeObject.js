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
    this.obj.rotation.set(
        Math.random() * 360 * (Math.PI / 180),
        Math.random() * 360 * (Math.PI / 180),
        Math.random() * 360 * (Math.PI / 180)
    );
    this.material.color.set(this.color);
    this.material.specular.set(this.specular);
    this.material.shininess = 255;
}
