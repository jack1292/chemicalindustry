/**
 * 存储localStorage
 */
export const setLocalStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getLocalStore = name => {
    if (!name) return;
    if (name == 'user') {
        const user = window.localStorage.getItem(name)
        return user ? JSON.parse(user) : '';
    }
    return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeLocalStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}


//  技术需求类型转化
export const subExhibitType = num =>{
    switch (num) {
        case 0:
            return '综合类'
        case 1:
            return '发明专利'
        case 2:
            return '科技论文'
        case 3:
            return '研究报告'
        case 4:
            return '新产品'
        default:
            return ''
    }
}

// 最新技术类型转换
export const needType = num =>{
    switch (num) {
        case 0:
            return '综合类'
        case 1:
            return '合作开发'
        case 2:
            return '合作开发新企业'
        case 3:
            return '科技服务'
        default:
            return ''
    }
}

// 活动会议类型转换
export const activityType = num =>{
    switch (num) {
        case 0:
            return '综合类'
        case 1:
            return '科技交流'
        case 2:
            return '人才培养'
        case 3:
            return '知识产权'
        default:
            return ''
    }
}