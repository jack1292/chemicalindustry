// import store from '../store/index'

const homeRouter = [
    {
        path: '',
        redirect: 'index'
    },
    {
        path: 'index',
        meta: {
            title: '总览',
        },
        component: () => import('../views/overviewChildren/index'),

    },
    {
        path: 'approval',
        meta: {
            title: '我审批的',
        },
        component: () => import('../views/overviewChildren/approval'),

    },
    {
        path: 'subApproval',
        meta: {
            title: '行政审批',
        },
        component: () => import('../views/overviewChildren/subApproval'),

    },
    {
        path: 'approvalDetail',
        name: 'approval',
        meta: {
            title: '行政审批',
        },
        component: () => import('../views/overviewChildren/approvalDetail'),

    },
    {
        path: 'subMerchants',
        meta: {
            title: '招商资料',
        },
        component: () => import('../views/overviewChildren/subMerchants'),

    },
    {
        path: 'merchantsDetail',
        name: 'merchants',
        meta: {
            title: '招商资料',
        },
        component: () => import('../views/overviewChildren/merchantsDetail'),

    },
    {
        path: 'subSponsor',
        meta: {
            title: '赞助协议',
        },
        component: () => import('../views/overviewChildren/subSponsor'),

    },

    {
        path: 'sponsorDetail',
        name: 'sponsor',
        meta: {
            title: '赞助协议',
        },
        component: () => import('../views/overviewChildren/sponsorDetail'),

    },
    {
        path: 'payment',
        meta: {
            title: '到款',
        },
        component: () => import('../views/overviewChildren/payment'),

    },
    {
        path: 'paymentDetail',
        name: 'payment',
        meta: {
            title: '到款',
        },
        component: () => import('../views/overviewChildren/paymentDetail'),

    },
    {
        path: 'invoice',
        meta: {
            title: '发票',
        },
        component: () => import('../views/overviewChildren/invoice'),

    },
    {
        path: 'invoiceDetail',
        name: 'invoice',
        meta: {
            title: '发票',
        },
        component: () => import('../views/overviewChildren/invoiceDetail'),

    },
    {
        path: 'contract',
        meta: {
            title: '下游合同',
        },
        component: () => import('../views/overviewChildren/contract'),

    },
    {
        path: 'contractDetail',
        name: 'contract',
        meta: {
            title: '下游合同',
        },
        component: () => import('../views/overviewChildren/contractDetail'),

    },
    {
        path: 'pay',
        meta: {
            title: '付款',
        },
        component: () => import('../views/overviewChildren/pay'),

    },
    {
        path: 'payDetail',
        name: 'pay',
        meta: {
            title: '付款',
        },
        component: () => import('../views/overviewChildren/payDetail'),

    },
    {
        path: 'otherPay',
        meta: {
            title: '特殊付款',
        },
        component: () => import('../views/overviewChildren/otherPay'),

    },
    {
        path: 'otherPayDetail',
        name:'otherPay',
        meta: {
            title: '特殊付款',
        },
        component: () => import('../views/overviewChildren/otherPayDetail'),

    },
    {
        path: 'fpr',
        meta: {
            title: '特殊付款',
        },
        component: () => import('../views/overviewChildren/fpr'),

    },
    {
        path: 'fprDetail',
        name:'fpr',
        meta: {
            title: '特殊付款',
        },
        component: () => import('../views/overviewChildren/fprDetail'),

    },
    {
        path: 'send',
        meta: {
            title: '我发起的',
        },
        component: () => import('../views/overviewChildren/send'),

    },
    {
        path: 'cc',
        meta: {
            title: '抄送我的',
        },
        component: () => import('../views/overviewChildren/cc'),

    },
    {
        path: 'systemMsg',
        meta: {
            title: '系统消息',
        },
        component: () => import('../views/overviewChildren/system'),

    },
    {
        path: 'dynamic',
        meta: {
            title: '动态',
        },
        component: () => import('../views/overviewChildren/dynamic'),

    },
    {
        path: 'project',
        meta: {
            title: '项目管理',
        },
        component: () => import('../views/projectChildren/project'),

    },
    {
        path: 'list',
        meta: {
            title: '项目列表',
        },
        component: () => import('../views/projectChildren/list'),

    },
    {
        path: 'detail',
        name: 'detail',
        meta: {
            title: '项目详情',
        },
        component: () => import('../views/projectChildren/detail'),

    },
    {
        path: 'statistics',
        name: 'statistics',
        meta: {
            title: '数据统计',
        },
        component: () => import('../views/projectChildren/statistics'),

    },
    {
        path: 'add',
        meta: {
            title: '新建项目',
        },
        component: () => import('../views/projectChildren/add'),

    },
    {
        path: 'register',
        meta: {
            title: '用章登记',
        },
        component: () => import('../views/projectChildren/register'),

    },
    {
        path: 'xuehui',
        meta: {
            title: '学会管理',
        },
        component: () => import('../views/xuehuiChildren/xuehui'),

    },
    {
        path: 'department',
        meta: {
            title: '部门管理',
        },
        component: () => import('../views/xuehuiChildren/department'),

    },
    {
        path: 'personnel',
        meta: {
            title: '人员管理',
        },
        component: () => import('../views/xuehuiChildren/personnel'),

    },
    {
        path: 'system',
        meta: {
            title: '系统管理',
        },
        component: () => import('../views/systemChildren/system'),

    },
    {
        path: 'passSet',
        meta: {
            title: '密码修改',
        },
        component: () => import('../views/systemChildren/passSet'),

    }


]
export default homeRouter