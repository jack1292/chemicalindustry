import Vue from 'vue'
import md5 from 'js-md5';


// 时间戳转时间 now：当前时间  type:1 年月日时分秒  else
function ZHDate(now, type) {
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    if (type == 1) {
        return year + "-" + getzf(month) + "-" + getzf(date) + "  " + getzf(hour) + ":" + getzf(minute)
    } else if (type == 2) {
        return getzf(hour) + ":" + getzf(minute)
    } else if (type == 6) {
        return year + "-" + getzf(month) + "-" + getzf(date) + "  " + getzf(hour) + ":" + getzf(minute) + ":" + getzf(second)
    } else {
        return year + "-" + getzf(month) + "-" + getzf(date)
    }
}

function getzf(num) {
    if (parseInt(num) < 10) {
        num = '0' + num
    }
    return num
}


function checkTel(tel) {   //验证手机号
    if (!(/^1[3456789]\d{9}$/.test(tel))) {
        return true
    } else {
        return false
    }
}



const tools = {
    ZHDate,
    checkTel
}

Vue.prototype.$md5 = md5;
Vue.prototype.$tools = tools;

