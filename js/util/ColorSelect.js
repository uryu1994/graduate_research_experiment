/**
 * @author uryu1994
 */

var colordata = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 255)",
    "rgb(139, 69, 19)"
];

var distinctiveColor = [-1, -1, -1];

var colorLabel = ["赤", "緑", "青", "黄", "水色", "紫", "茶色"];

/**
 * 特徴あるオブジェクトの色を選択します
 * @return {[type]} [description]
 */
function distinctiveColorPattern() {
    for(var i =0; i < distinctiveColor.length; i++) {
        distinctiveColor[i] = Math.floor(Math.random() * 8);
    }
}

/**
 * 色を選択します
 * @param  {number}     type    特徴あるオブジェクトか、それ以外か
 * @param  {number}     num     何番目か
 * @return {THREE.Color}        THREE.Colorオブジェクトを返します
 */
function selectColor(type, num) {
    var select_color;
    if(type == 1) {
        select_color = new THREE.Color(colordata[distinctiveColor[num]]);
    } else {
        select_color = new THREE.Color(colordata[Math.floor(Math.random() * 8)]);
    }

    return select_color;
}

function randomSort() {
    return Math.random() - 0.5;
}
