/**
 * @author uryu1994
 */

/**
 * フレームレートを秒に変換する
 * @param  {num} fps フレームレート
 * @return {num}     秒を返す
 */
function calcSeconds(fps) {
    return fps / 60;
}

var frame1_select = true;

/**
 * フレームレートによる時間制御関数
 * @param {number} fps フレームレート
 * @return {number} fps フレームレートを返す
 */
function timeControll(fps) {
    return fps;
}


var frame1_seconds = 0;
var frame2_seconds = 0;
var experiment_timer;

function timer() {
    document.getElementById("frame1-timer").innerHTML = "1フレーム目:" + frame1_seconds +"秒";
    document.getElementById("frame2-timer").innerHTML = "2フレーム目:" + frame2_seconds + "秒";

    if(frame1_select==true) {
        frame1_seconds++;
    } else {
        frame2_seconds++;
    }

}

function startTimer() {
    experiment_timer = setInterval("timer()", 1000);
}
