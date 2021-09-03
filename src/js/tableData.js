/*
 * @Author: your name
 * @Date: 2021-08-09 11:48:52
 * @LastEditTime: 2021-08-31 10:39:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\js\tableData.js
 */
const main = {
    tableData: [
        /**
         * name 姓名
         * sex 性别 0-女 1-男
         * age 年龄
         * patientCode 身份证号
         * phone 手机号
         * signTime 签到时间
         * community 单位/社区
         */
        {
            name: "lisa",
            sex: "0",
            age: "24",
            patientCode: "320722199576342558",
            phone: "17612345678",
            signTime: "2020-8-27 15:30",
            community: "绿脑袋胡同"
        },
        {
            name: "张三丰",
            sex: "1",
            age: "101",
            patientCode: "320722199576342558",
            phone: "17612345678",
            signTime: "2020-8-27 15:30",
            community: "绿脑袋胡同"
        },
    ],
    // 咨询师数据
    counselor: [{
        // 头像
        avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        // 电话
        phone: "18812345678",
        // 姓名
        name: "娄萧萧",
        // 性别 0-女 1-男
        sex: "1",
        // 服务范围
        scopeOfServices: "失眠,抑郁,焦虑",
        // 擅长
        beGoodAt: "情绪调节,个人成长",
        // 简介
        briefIntroduction: "有十五年从业经验",
        // 预约总量
        reserveNum: "12",
        // 好评率
        good: "99%",
        // 推荐  0-未推荐 1推荐
        recommend: "1"
    }],
    //人员表格数据
    patientList: [{
            //录入日期
            inDate: '2013-03-03',
            //编号
            code: "10000001",
            //人员类别 0-来访者 1-老年人
            patientType: "1",
            //评估时间
            date: "2016-05-02 ",
            // 手机号
            phone: "18612345678",
            //姓名
            name: "颊文龙",
            //性别
            sex: "1",
            //年龄
            age: "18",
            //评估耗时
            testTime: "12'2",
            //评估名称
            testName: "广泛型焦虑量表",
            //评估结果来源类型  2-录入 1-分发 0-自评
            testFromType: "1",
            //评估类型 0-筛查
            testType: "0",
            //分数
            score: "0",
            //程度             0-正常 1-轻度 2-中度 3-中重度 4-重度 5-有抑郁
            level: "1",
            //门诊
            outpatientService: "不可见",
            //是否有效          1-有效 0无效
            isInUse: "1",
            //是否处理          1-已处理 0-未处理
            isChecked: "0",
            // 预约时间
            appointmentTime: "2020-09-21 14:30",
            // 结束时间
            appointmentEndTime: "15:00",
            // 预约类型 0-面对面咨询 1-视频咨询
            appointmentType: "0",
            // 预约医生
            appointmentDoctor: "徐凤年",
            // 医院
            hospitalName: "江苏省第一人民医院",
            // 状态 0-未预约 1-已预约
            appointmentState: "1"
        },
        {
            //录入日期
            inDate: '2013-03-03',
            //编号
            code: "10000001",
            //人员类别 0-来访者 1-老年人
            patientType: "1",
            //评估时间
            date: "2016-05-02 ",
            // 手机号
            phone: "18612345678",
            //姓名
            name: "周文锦",
            //性别
            sex: "0",
            //年龄
            age: "18",
            //评估耗时
            testTime: "12'0",
            //评估名称
            testName: "工作倦怠量表",
            //评估结果来源类型  2-录入 1-分发 0-自评
            testFromType: "1",
            //评估类型 0-筛查
            testType: "0",
            //分数
            score: "0",
            //程度             0-正常 1-轻度 2-中度 3-中重度 4-重度 5-有抑郁
            level: "1",
            //门诊
            outpatientService: "不可见",
            //是否有效          1-有效 0无效
            isInUse: "1",
            //是否处理          1-已处理 0-未处理
            isChecked: "1",
            // 预约时间
            appointmentTime: "2020-09-22 18:30",
            // 结束时间
            appointmentEndTime: "18:30",
            // 预约类型 0-面对面咨询 1-视频咨询
            appointmentType: "1",
            // 预约医生
            appointmentDoctor: "徐凤年",
            // 医院
            hospitalName: "南京市第一人民医院",
            // 状态 0-未预约 1-已预约
            appointmentState: "1"
        },
        {
            //录入日期
            inDate: '2013-03-03',
            //编号
            code: "10000001",
            //人员类别 0-来访者 1-老年人
            patientType: "1",
            //评估时间
            date: "2016-05-02 ",
            // 手机号
            phone: "18612345678",
            //姓名
            name: "方锦龙",
            //性别
            sex: "1",
            //年龄
            age: "18",
            //评估耗时
            testTime: "15'2",
            //评估名称
            testName: "总体幸福感量表",
            //评估结果来源类型  2-录入 1-分发 0-自评
            testFromType: "1",
            //评估类型 0-筛查
            testType: "0",
            //分数
            score: "0",
            //程度             0-正常 1-轻度 2-中度 3-中重度 4-重度 5-有抑郁
            level: "1",
            //门诊
            outpatientService: "不可见",
            //是否有效          1-有效 0无效
            isInUse: "1",
            //是否处理          1-已处理 0-未处理
            isChecked: "0",
            // 预约时间
            appointmentTime: "2020-09-22 13:30",
            // 结束时间
            appointmentEndTime: "14:00",
            // 预约类型 0-面对面咨询 1-视频咨询
            appointmentType: "0",
            // 预约医生
            appointmentDoctor: "徐凤年",
            // 医院
            hospitalName: "明基医院",
            // 状态 0-未预约 1-已预约
            appointmentState: "1"
        },
        {
            //录入日期
            inDate: '2013-03-03',
            //编号
            code: "10000001",
            //人员类别 0-来访者 1-老年人
            patientType: "1",
            //评估时间
            date: "2016-05-02 ",
            // 手机号
            phone: "18612345678",
            //姓名
            name: "徐凤年",
            //性别
            sex: "1",
            //年龄
            age: "18",
            //评估耗时
            testTime: "12'2",
            //评估名称
            testName: "广泛型焦虑量表",
            //评估结果来源类型  2-录入 1-分发 0-自评
            testFromType: "1",
            //评估类型 0-筛查
            testType: "0",
            //分数
            score: "0",
            //程度           0-正常 1-轻度 2-中度 3-中重度 4-重度 5-有抑郁
            level: "3",
            //门诊
            outpatientService: "不可见",
            //是否有效          1-有效 0无效
            isInUse: "1",
            //是否处理          1-已处理 0-未处理
            isChecked: "1",
            // 预约时间
            appointmentTime: "2020-09-22 10:30",
            // 结束时间
            appointmentEndTime: "11:00",
            // 预约类型 0-面对面咨询 1-视频咨询
            appointmentType: "0",
            // 预约医生
            appointmentDoctor: "徐凤年",
            // 医院
            hospitalName: "中大医院",
            // 状态 0-未预约 1-已预约
            appointmentState: "1"
        },
        {
            //录入日期
            inDate: '2013-03-03',
            //编号
            code: "10000001",
            //人员类别 0-来访者 1-老年人
            patientType: "1",
            //评估时间
            date: "2016-05-02 ",
            // 手机号
            phone: "18612345678",
            //姓名
            name: "谭悠悠",
            //性别
            sex: "0",
            //年龄
            age: "18",
            //评估耗时
            testTime: "8'7",
            //评估名称
            testName: "压力自我评定",
            //评估结果来源类型  2-录入 1-分发 0-自评
            testFromType: "1",
            //评估类型 0-筛查
            testType: "0",
            //分数
            score: "0",
            //程度             0-正常 1-轻度 2-中度 3-中重度 4-重度 5-有抑郁
            level: "1",
            //门诊
            outpatientService: "不可见",
            //是否有效          1-有效 0无效
            isInUse: "1",
            //是否处理          1-已处理 0-未处理
            isChecked: "1",
            // 预约时间
            appointmentTime: "2020-09-22 09:30",
            // 结束时间
            appointmentEndTime: "10:00",
            // 预约类型 0-面对面咨询 1-视频咨询
            appointmentType: "0",
            // 预约医生
            appointmentDoctor: "徐凤年",
            // 医院
            hospitalName: "鼓楼医院",
            // 状态 0-未预约 1-已预约
            appointmentState: "1"
        },
    ],
    // 预约状态转换
    appointmentState: (value) => {
        return value == 0 ? "未预约" : "已预约"
    },
    // 预约类型转换
    appointmentType: (value) => {
        return value == 0 ? "面对面咨询" : "视频咨询"
    },
    //   性别转换
    sex: function (value) {
        return value == 1 ? "男" : "女";
    },
    //   来源类型转换
    testFromType: (value) => {
        return value == 0 ? "自评" : value == 1 ? "分发" : "录入";
    },
    // 人员类别转换
    patientType: (value) => {
        return value == 0 ? "来访者" : value == 1 ? "老年人" : " ";
    },
    //   类型转换
    testType: (value) => {
        return value == 0 ? "筛查" : value == 1 ? " " : " ";
    },
    //   程度转换
    level: (value) => {
        return value == 0 ? "正常" : value == 1 ? "轻度" : value == 2 ? "中度" : value == 3 ? "中重度" : value == 4 ? "重度" : "有抑郁"
    },
    //   是否有效
    isInUse: (value) => {
        return value == 1 ? "有效" : "无效";
    },
    //   是否处理
    isChecked: (value) => {
        return value == 1 ? "已处理" : "未处理";
    },
    // 组织表格数据
    organizationList: [{
            //测查名称
            name: "中央门街道第一次普查",
            //使用场景 0-扫码 1-小程序
            useType: "0",
            //测查范围
            testScope: "中央门街道",
            //人员类型 0-学生 1-患者 其他
            patientType: "3",
            //截止时间
            endTime: "2019-2-20",
            //创建者 0-管理员
            create: "0",
            //创建时间
            createTime: "2019-2-10",
        },
        {
            //测查名称
            name: "玄武路小学第一次普查",
            //使用场景 0-扫码 1-小程序
            useType: "0",
            //测查范围
            testScope: "玄武路小学",
            //人员类型 0-学生 1-患者
            patientType: "0",
            //截止时间
            endTime: "2020-2-20",
            //创建者 0-管理员
            create: "0",
            //创建时间
            createTime: "2020-2-10",
        },
        {
            //测查名称
            name: "中大医院第一次普查",
            //使用场景 0-扫码 1-小程序
            useType: "0",
            //测查范围
            testScope: "中大医院",
            //人员类型 0-学生 1-患者
            patientType: "1",
            //截止时间
            endTime: "2020-2-20",
            //创建者 0-管理员
            create: "0",
            //创建时间
            createTime: "2020-2-10",
        },
        {
            //测查名称
            name: "南京医科大学附属一中第二次筛查",
            //使用场景 0-扫码 1-小程序
            useType: "0",
            //测查范围
            testScope: "南京医科大学附属一中",
            //人员类型 0-学生 1-患者
            patientType: "0",
            //截止时间
            endTime: "2020-2-20",
            //创建者 0-管理员
            create: "0",
            //创建时间
            createTime: "2020-2-10",
        },
        {
            //测查名称
            name: "振道跆拳道培训中心",
            //使用场景 0-扫码 1-小程序
            useType: "0",
            //测查范围
            testScope: "振道跆拳道培训中心",
            //人员类型 0-学生 1-患者
            patientType: "0",
            //截止时间
            endTime: "2020-2-20",
            //创建者 0-管理员
            create: "0",
            //创建时间
            createTime: "2020-2-10",
        },

    ],
    // 组织使用场景转换
    organizationListUseType: (value) => {
        return value == 0 ? "扫码" : "小程序";
    },
    // 组织内人员类型转换
    organizationPatientType: (value) => {
        return value == 0 ? "学生" : value == 1 ? "患者" : "其他";
    },
    // 创建者类型转换
    createType: (value) => {
        return value == 0 ? "管理员" : "";
    },
    // 表头样式
    headerCellClassName: ({
        row,
        column,
        rowIndex,
        columnIndex
    }) => {
        return "cellClass"
    },
    // 单元格样式
    cellClassName: ({
        row,
        column,
        rowIndex,
        columnIndex
    }) => {
        return "cellClass"
    },
    // 不同状态行样式
    tableRowClassName: ({
        row,
        rowIndex
    }) => {
        if (row.isChecked == 0 || row.level >= 3) {
            return "warning-row";
        } else if (row.isChecked == 1 || row.level < 3) {
            return "success-row";
        }
    },
}
// 量表列表
const testData = {
    testTable: [{
            // 编号
            code: "1",
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
        {
            // 编号
            code: "2",
            // 量表名称
            name: "痴呆简易筛查量表",
            // 英文简称
            UKName: "BSSD",
            // 题数
            questions: "18",
            // 类型 0-亲子关系 1-心理健康 2-能力 3-性格 
            testType: "2",
            // 适用年龄
            applicableAge: "12-16",
            // 指导价
            autoPrice: "0.00",
            // 定价
            setPrice: "30.00",
            // 是否推荐 1-是 0-否
            recommend: "1",
        },
        {
            // 编号
            code: "3",
            // 量表名称
            name: "阿森斯失眠抑郁量表",
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
        {
            // 编号
            code: "4",
            // 量表名称
            name: "抑郁自检",
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
        {
            // 编号
            code: "5",
            // 量表名称
            name: "抑郁他评",
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
        {
            // 编号
            code: "6",
            // 量表名称
            name: "自杀风险评估量表",
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
        {
            // 编号
            code: "7",
            // 量表名称
            name: "临床痴呆评定量表",
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
        {
            // 编号
            code: "8",
            // 量表名称
            name: "多动症诊断量表",
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
        {
            // 编号
            code: "9",
            // 量表名称
            name: "青少年自杀意念量表",
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
        {
            // 编号
            code: "10",
            // 量表名称
            name: "中文版冗思反应问卷",
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
    ],
    isRecommend: (value) => {
        return value == 1 ? "是" : "否"
    },
    testType: (value) => {
        return value == 0 ? "亲子关系" : value == 1 ? "心理健康" : value == 2 ? "能力" : "性格"
    }
}
// 导入记录
const joinList = {
    data: [{
        joinTime: "2020-06-09 12:08:16",
        sum: "33",
        ok: "33",
        fail: "0"
    }, {
        joinTime: "2020-09-09 14:38:16",
        sum: "24",
        ok: "24",
        fail: "0"
    }, {
        joinTime: "2020-10-09 13:30:16",
        sum: "123",
        ok: "123",
        fail: "0"
    }, {
        joinTime: "2020-11-09 14:00:00",
        sum: "51",
        ok: "51",
        fail: "0"
    }, {
        joinTime: "2020-12-09 15:00:46",
        sum: "37",
        ok: "37",
        fail: "0"
    }, {
        joinTime: "2021-1-09 09:38:56",
        sum: "93",
        ok: "93",
        fail: "0"
    }, {
        joinTime: "2021-02-09 16:38:16",
        sum: "73",
        ok: "73",
        fail: "0"
    }]
}

const onLineHotTel = {
    // 心理热线列表
    tableData: [{
        name: "张三",
        phone: "13412345678",
        // 性别 1=男 0=女
        sex: "1",
        age: "18",
        site: "江苏省南京市鼓楼区新模范马路"
    }],
    // 咨询室列表
    consulting: [{
            name: "吴三桂",
            // 1-男 0-女
            sex: "1",
            phone: "18688888888",
            consultingRoom: "C-105",
            consultingTime: "2021-9-28 18:30",
            // 状态 0-未处理 1-已处理
            state: "0"
        },
        {
            name: "陈圆圆",
            // 1-男 0-女
            sex: "0",
            phone: "18688888888",
            consultingRoom: "C-106",
            consultingTime: "2021-9-28 18:30",
            // 状态 0-未处理 1-已处理
            state: "1"
        },
        {
            name: "鳌拜",
            // 1-男 0-女
            sex: "1",
            phone: "18688888888",
            consultingRoom: "C-107",
            consultingTime: "2021-9-28 18:30",
            // 状态 0-未处理 1-已处理
            state: "0"
        },
        {
            name: "韦小宝",
            // 1-男 0-女
            sex: "1",
            phone: "18688888888",
            consultingRoom: "C-105",
            consultingTime: "2021-9-28 18:30",
            // 状态 0-未处理 1-已处理
            state: "0"
        },
    ],
    state: (value) => {
        return value == 0 ? "未处理" : "已处理"
    },
    // 不同状态行样式
    tableRowClassName: ({
        row,
        rowIndex
    }) => {
        if (row.state == 0) {
            return "warning-row";
        } else if (row.state == 1) {
            return "success-row"
        }
    },
}

export {
    main,
    testData,
    joinList,
    onLineHotTel
}