import {
    reactive,
} from "@vue/reactivity";
import {
    globalMethods
} from "./until";

/*
 * @Author: your name
 * @Date: 2021-08-19 09:39:22
 * @LastEditTime: 2021-08-31 15:59:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\js\content.js
 */
const content = reactive({
    /**
     * 新增自有量表
     * 量表名称 -name
     * 英文简称- UKName
     * 题数 -questions
     * 类型 -testType
     * 适用年龄 applicableAge
     * 指导价 autoPrice
     * 定价 setPrice
     * 是否推荐 1-是 0-否 recommend
     */
    addScale: {
        // 量表名称
        name: "青少年学生生活满意度量表",
        // 英文简称
        UKName: "",
        // 题数
        questions: "38",
        // 类型 0-亲子关系 1-心理健康 2-能力 3-性格 
        testType: "0",
        // 适用年龄
        applicableAge: "12-16",
        // 指导价
        autoPrice: "30.00",
        // 定价
        setPrice: "0.00",
        // 是否推荐 1-是 0-否
        recommend: "1",
    },
    /**
     * 新增量表分发
     * 测查名称 - name
     * 使用场景 - 0-扫码 1-小程序 useType
     * 测查范围 -                testScope
     * 人员类型 - 0-学生 1-患者   patientType
     * 创建时间 -                createTime
     * 截止时间 -                endTime
     * 创建者   - 0-管理员        create
     */
    addTest: {
        name: "",
        useType: "",
        testScope: "",
        patientType: "",
        endTime: "",
        // create: "0",
        createTime: globalMethods.formatDate(new Date().getTime()),
    },
    /**
     * 添加用户
     * name-姓名
     * sex-性别
     * age-年龄
     * area-住址
     */
    addForm: {
        name: "",
        sex: "",
        age: "",
        area: ""
    },
    /**
     * 文章列表
     * surfacePlot    封面图
     * title          文章标题
     * subTitle       副标题
     * from           来源
     * isShow         是否发布
     * isUp           是否置顶
     * 
     */
    tableData: [{
            surfacePlot: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            title: "[北极之旅]心灵之约水水水水水水水水水水水",
            subTitle: "为进一步推动全区社会心理服务",
            from: "钢铁是怎样炼成的",
            isShow: true,
            isUp: false
        },
        {
            surfacePlot: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            title: "[沙游之旅]心灵之约水水水水水水水水水水水",
            subTitle: "为进一步推动全区社会心理服务",
            from: "钢铁是怎样炼成的",
            isShow: true,
            isUp: false
        },
        {
            surfacePlot: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            title: "[畅游大海]心灵之约水水水水水水水水水水水",
            subTitle: "为进一步推动全区社会心理服务",
            from: "钢铁是怎样炼成的",
            isShow: true,
            isUp: false
        }
    ],
    /**
     * 视频列表
     * title         视频标题
     * playCount     播放次数
     * surfacePlot   封面图
     * 
     */
    videoList: [{
            title: "爸爸的偏爱",
            playCount: "2",
            surfacePlot: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        },
        {
            title: "我究竟该听谁的",
            playCount: "2",
            surfacePlot: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        }
    ],
    /**
     * 账号管理列表
     * code                 编号
     * ID                   账号
     * name                 姓名
     * role                 角色
     * facilitatingAgency   服务机构
     * controlLimit         管理范围
     * scopeBusiness        行业范围
     * patientType          人员类型
     * caseHistory          病案
     * case                 病例
     * state   1-正常 0-异常 账号状态
     */
    setPageOne: [

        {
            code: "92",
            ID: "10004",
            name: '张居正',
            role: "心理咨询师",
            facilitatingAgency: "其他",
            controlLimit: "银河系",
            scopeBusiness: "机关",
            patientType: "司法服务类对象",
            caseHistory: "1",
            case: "1",
            state: "1"
        },
        {
            code: "192",
            ID: "10004",
            name: '何勇',
            role: "心理咨询师",
            facilitatingAgency: "其他",
            controlLimit: "银河系",
            scopeBusiness: "机关",
            patientType: "司法服务类对象",
            caseHistory: "1",
            case: "1",
            state: "0"
        },
        {
            code: "122",
            ID: "10004",
            name: '简子曦',
            role: "超级管理员",
            facilitatingAgency: "其他",
            controlLimit: "银河系",
            scopeBusiness: "机关",
            patientType: "司法服务类对象",
            caseHistory: "1",
            case: "1",
            state: "1"
        },
    ],
    /**
     * 权限列表
     * code     序号
     * roleName 角色名称
     */
    roleList: [{
            code: "009",
            roleName: "单位基本用户"
        },
        {
            code: "003",
            roleName: "心理测量师"
        },
        {
            code: "002",
            roleName: "组别管理员"
        },
        {
            code: "004",
            roleName: "心理咨询师"
        },
        {
            code: "001",
            roleName: "超级管理员"
        },
    ],
    /**
     * 辖区列表
     * name                 街道名
     * num                  街道内组织数量
     */
    popedomList: [{
            name: "全部",
            num: "1311451",
            style: ""
        },
        {
            name: "马群街道",
            num: "13451"
        },
        {
            name: "新模范马路街道",
            num: "13451"
        },
        {
            name: "新城街道",
            num: "13451"
        },
        {
            name: "六合",
            num: "13451"
        },
        {
            name: "江宁",
            num: "13451"
        },
        {
            name: "玄武湖",
            num: "13451"
        },
        {
            name: "夫子庙",
            num: "13451"
        },
        {
            name: "老门东",
            num: "13451"
        },
    ],
    /**
     * 街道下的组织列表
     * name                 组织名称
     * scopeBusiness        行业范围
     * subordinateUnits     隶属单位
     * visitor              来访人数
     * order                预约咨询
     * riskAssessment       潜在风险评估
     */
    streetScene: [{
            name: "南京外国语小学",
            scopeBusiness: "学校",
            subordinateUnits: "市教育局",
            visitor: "1947",
            order: "655",
            riskAssessment: "123"
        },
        {
            name: "音琴雅诗钢琴培训",
            scopeBusiness: "培训机构",
            subordinateUnits: "工商部",
            visitor: "47",
            order: "234",
            riskAssessment: "41"
        },
        {
            name: "正道跆拳道",
            scopeBusiness: "培训机构",
            subordinateUnits: "工商局",
            visitor: "194",
            order: "152",
            riskAssessment: "123"
        },
        {
            name: "正道跆拳道(卡子门)",
            scopeBusiness: "培训机构",
            subordinateUnits: "其他",
            visitor: "131",
            order: "23",
            riskAssessment: "346"
        },
        {
            name: "南京航空航天大学(明故宫)",
            scopeBusiness: "学校",
            subordinateUnits: "卫监局",
            visitor: "2356",
            order: "2345",
            riskAssessment: "15"
        },
        {
            name: "南京第三军区总医院",
            scopeBusiness: "医院",
            subordinateUnits: "战区司令部",
            visitor: "6755",
            order: "725",
            riskAssessment: "24"
        },
        {
            name: "南京外国语小学(龙江)",
            scopeBusiness: "学校",
            subordinateUnits: "市教育局",
            visitor: "735",
            order: "523",
            riskAssessment: "345"
        },
        {
            name: "仁恒江湾城(一期)",
            scopeBusiness: "小区",
            subordinateUnits: "仁恒物业",
            visitor: "345",
            order: "63",
            riskAssessment: "13"
        },

        {
            name: "仁恒江湾城(二期)",
            scopeBusiness: "小区",
            subordinateUnits: "仁恒物业",
            visitor: "145",
            order: "45",
            riskAssessment: "324"
        },

        {
            name: "仁恒江湾城(三期)",
            scopeBusiness: "小区",
            subordinateUnits: "仁恒物业",
            visitor: "256",
            order: "42",
            riskAssessment: "24"
        },

        {
            name: "育才中学",
            scopeBusiness: "学校",
            subordinateUnits: "市教育局",
            visitor: "234",
            order: "133",
            riskAssessment: "234"
        },
        {
            name: "育才小学",
            scopeBusiness: "学校",
            subordinateUnits: "市教育局",
            visitor: "786",
            order: "134",
            riskAssessment: "56"
        },
    ],
    /**
     * 系统设置>人员类别
     * type:{
     * 0-来访者
     * 1-老年人
     * 2-门诊人员
     * 3-住院病人
     * 4-司法服务类对象
     * 5-公安服务类对象
     * 6-信访服务类对象
     * 7-残联服务类对象
     * 8-民政服务类对象
     * 9-医学隔离观察对象
     * 10-孕产妇
     *   }
     * isShow:{
     * 1-显示
     * 0-不显示}
     */
    patientTypeList: [{
            ID: "0001",
            type: "1",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0002",
            type: "2",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0003",
            type: "3",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0004",
            type: "4",
            isShow: "0",
            sort: "1"
        },
        {
            ID: "0005",
            type: "5",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0006",
            type: "6",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0007",
            type: "7",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0008",
            type: "8",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0009",
            type: "9",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0010",
            type: "10",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0011",
            type: "2",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0012",
            type: "3",
            isShow: "1",
            sort: "1"
        },
        {
            ID: "0013",
            type: "4",
            isShow: "0",
            sort: "1"
        }
    ],
    /**
     * 年份设置
     * grade:{
     * 1-小学一年级
     * 2-小学二年级
     * 3-小学三年级
     * 4-小学四年级
     * 5-小学五年级
     * 6-小学六年级
     * 7-初中一年级
     * 8-初中二年级
     * 9-初中三年级
     * 10-高中一年级
     * 11-高中二年级
     * 12-高中三年级
     * }
     */
    gradeList: [{
            ID: 8,
            grade: "1",
            isShow: "1",
            sort: "0"
        },
        {
            ID: 8,
            grade: "2",
            isShow: "1",
            sort: "0"
        },
        {
            ID: 8,
            grade: "3",
            isShow: "1",
            sort: "0"
        },
        {
            ID: 8,
            grade: "4",
            isShow: "1",
            sort: "0"
        },
        {
            ID: 8,
            grade: "5",
            isShow: "1",
            sort: "0"
        },
        {
            ID: 8,
            grade: "6",
            isShow: "1",
            sort: "0"
        },
        {
            ID: 8,
            grade: "7",
            isShow: "1",
            sort: "0"
        },
        {
            ID: 8,
            grade: "8",
            isShow: "1",
            sort: "0"
        },
        {
            ID: 8,
            grade: "9",
            isShow: "1",
            sort: "0"
        },
        {
            ID: 8,
            grade: "10",
            isShow: "1",
            sort: "0"
        },
        {
            ID: 8,
            grade: "11",
            isShow: "1",
            sort: "0"
        },
    ],
    /**
     * 心理咨询室列表
     * name-名称
     * linkman-联系人
     * phone-联系电话
     * linkmanJob-联系人职务
     * area-地址
     * isShow 1-显示 0-隐藏
     */
    consultingList: [{
        name: "认知障碍治疗室",
        linkman: "吴三桂",
        phone: "13912345678",
        linkmanJob: "院长",
        area: "江苏省南京市鼓楼区新模范马路街道",
        isShow: "1"
    }],
    // 城市列表
    china: {
        su: {
            city: "南京",
            code: "021",
            districts: [{
                    label: "鼓楼",
                    value: 1
                },
                {
                    label: "建业",
                    value: 2
                },
                {
                    label: "江宁",
                    value: 3
                },
                {
                    label: "溧水",
                    value: 4
                },
                {
                    label: "高淳",
                    value: 5
                },
                {
                    label: "栖霞",
                    value: 6
                },
                {
                    label: "秦淮",
                    value: 7
                },
            ]
        },
    }
})
export {
    content
}