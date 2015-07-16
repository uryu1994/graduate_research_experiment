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

function timeControll(fps) {

    if(calcSeconds(fps) < limitSeconds) {
        experimentEffect();
        fps++;
    } else {
    }

    return fps;
}
