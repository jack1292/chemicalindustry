import Vue from 'vue'
import md5 from 'js-md5';

import vue from "../main";
import store from '../store/index'
import CryptoJS from 'crypto-js'

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

function goBack() {
    vue.$router.go(-1)
}

function checkTel(tel) {   //验证手机号
    if (!(/^1[3456789]\d{9}$/.test(tel))) {
        return true
    } else {
        return false
    }
}

function SHA256(value, key) {
    let obj = objKeySort(value)
    let str = serialize(obj) + '&key=' + store.state.user.key
    let a = CryptoJS.HmacSHA256(str, key);
    var hashInBase64 = CryptoJS.enc.Hex.stringify(a).toUpperCase()
    return hashInBase64
}


// js对象中的key按照a-z排序 字典升序
function objKeySort(arys) {
    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    var newkey = Object.keys(arys).sort();
    //console.log('newkey='+newkey);
    var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
    for (var i = 0; i < newkey.length; i++) {
        //遍历newkey数组
        newObj[newkey[i]] = arys[newkey[i]];
        //向新创建的对象中按照排好的顺序依次增加键值对

    }
    return newObj; //返回排好序的新对象
}

function serialize(obj, prefix) {
    var str = [], p;
    for (p in obj) {

        var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
        if (v !== '') {
            str.push((v !== null && typeof v === "object") ?
                serialize(v, k) :
                // encodeURIComponent(k) + "=" + encodeURIComponent(v));
                k + '=' + v)
        }
    }
    return str.join("&");
}


function requestTime() {
    return Date.parse(new Date()) / 1000
}

function sealTypes() {
    return [//1公章 2合同章 3法人章 4其他
        {
            value: 1,
            label: '公章'
        }, {
            value: 2,
            label: '合同章'
        },
        {
            value: 3,
            label: '法人章'
        },
        {
            value: 4,
            label: '其他'
        }
    ]
}

function getSealTypes(type) {
    return [//1公章 2合同章 3法人章 4其他
        '公章','合同章','法人章','其他'
    ](type-1)
}

const tools = {
    ZHDate,
    goBack,
    checkTel,
    SHA256,
    requestTime,
    sealTypes,
    getSealTypes
}

Vue.prototype.$md5 = md5;
Vue.prototype.$tools = tools;

