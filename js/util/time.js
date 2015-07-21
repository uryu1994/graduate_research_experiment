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

function timeControll(fps) {
    if(calcSeconds(fps) < limitSeconds && started == true) {
        document.getElementById('reset').disabled = false;
        document.getElementById('start').disabled = true;
        document.getElementById('pause').disabled = false;
        experimentEffect();
        fps++;
    } else if(calcSeconds(fps) >= limitSeconds){
        stopButton();
    }
    return fps;
}
