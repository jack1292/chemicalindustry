import vue from 'vue'
import axios from './axios'

const apiContent = {
    /*
    * 登录注册
    * */
    //  密码登录接口
    passLogin: (data) => {
        return axios('/Home/User/login', data)
    },
    //  手机验证码登录接口
    codeLogin: (data) => {
        return axios('', data)
    },
    //  找回密码
    resetPass: (data) => {
        return axios('/Home/User/forget', data)
    },
    //  修改密码
    setPass: (data) => {
        return axios('/Home/User/setPass', data)
    },
    //  获取验证码
    sendMsg: (data) => {
        return axios('/Home/Index/sms_send', data)
    },
    //  ：总览--数据统计
    getCount: (data) => {
        return axios('/Home/Index/getCount', data)
    },
    //  获取系统通知列表
    getNotice: (data) => {
        return axios('Home/Notice/getNotice', data)
    },

    /*
    * 行政审批
    * */
    //  获取学会列表
    getSociety: (data) => {
        return axios('/Home/Index/getSociety', data)
    },
    //  获取我审批的列表
    getApprovls: (data) => {
        return axios('/Home/Shenpi/myShenpi', data)
    },
    //  获取项目列表
    getProject: (data) => {
        return axios('/Home/Index/getProject', data)
    },
    //  获取招商资料列表
    getMerchants: (data) => {
        return axios('/Home/Index/getZhaoshang', data)
    },
    //  获取审批人列表
    getApprovalMembers: (data) => {
        return axios('/Home/Index/getShenpi', data)
    },
    //  获取人员列表--选择审批人、抄送人
    getAllUser: (data) => {
        return axios('/Home/Index/getAllUser', data)
    },
    //  发布行政审批
    approvalXz: (data) => {
        return axios('/Home/Shenpi/xingzheng', data)
    },
    // 行政审批--获取详情
    getXingzheng: (data) => {
        return axios('/Home/Shenpi/getXingzheng', data)
    },
    // 撤销审批
    revoke: (data) => {
        return axios('/Home/Shenpi/revoke', data)
    },
    // 审批
    shenpi: (data) => {
        return axios('/Home/Shenpi/shenpi', data)
    },
    // 行政审批--添加用印文件
    xingzhengFile: (data) => {
        return axios('/Home/Shenpi/xingzhengFile', data)
    },
    //  招商资料--发起招商资料审批
    approvalZs: (data) => {
        return axios('/Home/Shenpi/zhaoshang', data)
    },
    //  招商资料--获取招商资料详情
    getZhaoshang: (data) => {
        return axios('/Home/Shenpi/getZhaoshang', data)
    },
    //  招商资料---添加用印文件
    zhaoshangFile: (data) => {
        return axios('Home/Shenpi/zhaoshangFile', data)
    },
    //  赞助协议--发起赞助协议审批
    approvalZz: (data) => {
        return axios('/Home/Shenpi/zanzhu', data)
    },
    //  赞助协议--获取赞助协议详情
    getZanzhu: (data) => {
        return axios('/Home/Shenpi/getZanzhu', data)
    },
    //  赞助协议--上传用印文件
    zanzhuFile: (data) => {
        return axios('/Home/Shenpi/zanzhuFile', data)
    },
    //  赞助协议--获取赞助协议列表
    getZanzhuList: (data) => {
        return axios('/Home/Index/getZanzhu', data)
    },
    //  到款--发起到款审批
      approvalDk: (data) => {
          return axios('/Home/Shenpi/daokuan', data)
      },
    //  到款--获取到款详情
    getDaokuan: (data) => {
        return axios('/Home/Shenpi/getDaokuan', data)
    },
    //  发票--发起发票申请
    approvalFP: (data) => {
        return axios('/Home/Shenpi/fapiao', data)
    },
    //  发票---获取发票详情
    getFapiao: (data) => {
        return axios('/Home/Shenpi/getFapiao', data)
    },
    //  合同--发起到款审批
    approvalHt: (data) => {
        return axios('/Home/Shenpi/hetong', data)
    },
    //  合同--发起到款详情
    getHetong: (data) => {
        return axios('/Home/Shenpi/getHetong', data)
    },
    //  付款--获取普通付款
    approvalFk: (data) => {
        return axios('/Home/Shenpi/fukuan', data)
    },
    //  付款--获取普通付款详情
    getFukuan: (data) => {
        return axios('/Home/Shenpi/getFukuan', data)
    },
    //  特殊付款--发起特殊付款审批
    approvalTSFk: (data) => {
        return axios('/Home/Shenpi/teshu', data)
    },
    //  ：特殊付款--获取特殊付款详情
    getTeshu: (data) => {
        return axios('/Home/Shenpi/getTeshu', data)
    },
    //  结项---发起结项审批
    approvalJX: (data) => {
        return axios('/Home/Shenpi/jiexiang', data)
    },
    //  结项---发起结项审批
    getJiexiang: (data) => {
        return axios('/Home/Shenpi/getJiexiang', data)
    },
    //  我发起的列表
    myInitiate: (data) => {
        return axios('/Home/Shenpi/myInitiate', data)
    },
    //  抄送我的列表
    myCopy: (data) => {
        return axios('/Home/Shenpi/myCopy', data)
    },
    //  设置优先级
    setLevel: (data) => {
        return axios('/Home/Shenpi/setLevel', data)
    },
    /**
     * 项目管理
     */
    //获取项目列表
    getProjectList: (data) => {
        return axios('/Home/Project/getList', data)
    },
    //添加项目列表
    addProject: (data) => {
        return axios('/Home/Project/add', data)
    },
    //  获取项目类别
    getProjectCat: (data) => {
        return axios('/Home/Project/getProjectCat', data)
    },
    //  项目添加
    projectAdd:(data) => {
        return axios('/Home/Project/add',data)
    },
    //  获取项目详情
    getProjectDetail:(data) => {
        return axios('/Home/Project/detail',data)
    },
    //  修改资金统计数据
    setFund:(data) => {
        return axios('/Home/Project/setFund',data)
    },
    //  修改资金统计记录
    getFund:(data) => {
        return axios('/Home/Project/getFund',data)
    },


    //  会议统计--赞助汇总表 表x1--获取统计数据
    tablex1xStatistics:(data) => {
        return axios('/Home/Statistics/tablex1',data)
    },
    //  会议统计--赞助汇总表 表x1--修改费率
    setRate:(data) => {
        return axios('/Home/Project/setRate',data)
    },
    //  会议统计--赞助汇总表 表x1--添加数据
    tablex1Add:(data) => {
        return axios('/Home/Statistics/tablex1_add',data)
    },
    //  会议统计--赞助汇总表 表x1--编辑数据
    tablex1Edit:(data) => {
        return axios('/Home/Statistics/tablex1_edit',data)
    },
    //  会议统计--赞助汇总表 表x1--删除数据
    tablex1Del:(data) => {
        return axios('/Home/Statistics/tablex1_del',data)
    },
    // 会议统计--赞助汇总表 表x2--获取统计数据
    tablex2xStatistics:(data) => {
        return axios('/Home/Statistics/tablex2',data)
    },
    //  会议统计--赞助汇总表 表x1--添加数据
    tablex2Add:(data) => {
        return axios('/Home/Statistics/tablex2_add',data)
    },
    //  会议统计--赞助汇总表 表x1--编辑数据
    tablex2Edit:(data) => {
        return axios('/Home/Statistics/tablex2_edit',data)
    },
    //  会议统计--赞助汇总表 表x1--删除数据
    tablex2Del:(data) => {
        return axios('/Home/Statistics/tablex2_del',data)
    },
    //  公章用印登记
    table1Statistics:(data) => {
        return axios('/Home/Statistics/table1',data)
    },
    //  合同章用印登记
    table4Statistics:(data) => {
        return axios('/Home/Statistics/table4',data)
    },
    /*
    * 部门管理
    * */
    //  获取部门列表
    bumen: (data) => {
        return axios('/Home/User/bumen', data)
    },
    // 添加部门
    bumenAdd: (data) => {
        return axios('/Home/User/bumenAdd', data)
    },
    // 修改部门
    bumenEdit: (data) => {
        return axios('/Home/User/bumenEdit', data)
    },
    // 删除部门
    bumenDel: (data) => {
        return axios('/Home/User/bumenDel', data)
    },
    // 获取人员列表
    userList: (data) => {
        return axios('/Home/User/getList', data)
    },
    // 获取职位列表
    getJobList: (data) => {
        return axios('/Home/Index/getJob', data)
    },
    // 添加人员
    userAdd: (data) => {
        return axios('/Home/User/add', data)
    },
    // 修改人员
    userEdit: (data) => {
        return axios('/Home/User/edit', data)
    },
    // 删除人员
    userDel: (data) => {
        return axios('/Home/User/del', data)
    },
    // 重置密码
    userResetPass: (data) => {
        return axios('Home/User/reset', data)
    },
    // 设置启用/停用
    setLock: (data) => {
        return axios('/Home/User/setLock', data)
    },
}
const api = {
    apiContent
}
vue.prototype.$api = api