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

var limitSeconds = 10;
var started = false;

/**
 * フレームレートによる時間制御関数
 * @param {number} fps フレームレート
 * @return {number} fps フレームレートを返す
 */
function timeControll(fps) {
    if (calcSeconds(fps) < limitSeconds && started == true) {
        document.getElementById('reset').disabled = false;
        document.getElementById('start').disabled = true;
        document.getElementById('pause').disabled = false;
        experimentEffect();
        fps++;
    } else if (calcSeconds(fps) >= limitSeconds) {
        resetButton();
        fps = 0;
    }
    return fps;
}


var seconds = 0;
var minutes = 0;
var experiment_timer;
function timer() {
    document.getElementById("timer").innerHTML="経過時間:"+("0"+minutes).slice(-2)+":"
    +("0"+seconds).slice(-2);
    seconds++;
    if(seconds == 60) {
        minutes++;
        seconds = 0;
    }
}

function startTimer() {
    experiment_timer = setInterval("timer()", 1000);
}