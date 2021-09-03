import {
    reactive
} from "vue"
import globalState from "./state"
/*
 * @Author: your name
 * @Date: 2021-08-19 15:36:22
 * @LastEditTime: 2021-08-31 15:26:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\js\until.js
 */
const globalMethods = reactive({
    add: () => {
        globalState.dialogFormVisible = true
        console.log(globalState.dialogFormVisible);
    },
    /**
     * 
     * @param {*} timestamp 
     * @param {*} type number
     * @returns 
     */
    formatDate: (timestamp, type) => {
        if (!timestamp) {
            return '--'
        }
        var myDate = new Date(timestamp);
        var y = myDate.getFullYear(); //年
        var m = (myDate.getMonth() + 1).toString().padStart(2, '0'); //月
        var d = myDate.getDate().toString().padStart(2, '0'); //日
        var hh = myDate.getHours().toString().padStart(2, '0');
        var mm = myDate.getMinutes().toString().padStart(2, '0');
        var ss = myDate.getSeconds().toString().padStart(2, '0');

        if (type == 1) { //yyyy-mm
            return [y, m].join('-');
        } else if (type == 2) { //yyyy-mm-dd
            return [y, m, d].join('-');
        } else if (type == 3) { //2020年02月
            return y + '年' + m + '月';
        } else if (type == 4) { //2020.02.02 00:00:00
            return [y, m, d].join('.') + ' ' + [hh, mm, ss].join(':');
        } else if (type == 5) { //2020.02.02
            return [y, m, d].join('.');
        } else { //2020-02-02 00:00:00
            return [y, m, d].join('-') + ' ' + [hh, mm, ss].join(':');
        }
    },
    // 预约状态转换
    appointmentState: (value) => {
        return value == 0 ? "未预约" : "已预约"
    },
    // 预约类型转换
    appointmentType: (value) => {
        return value == 0 ? "面对面咨询" : "视频咨询"
    },
    //   性别转换
    sex: (value) => {
        return value == 1 ? "男" : "女";
    },
    //   来源类型转换
    testFromType: (value) => {
        return value == 0 ? "自评" : value == 1 ? "分发" : "录入";
    },
    // 人员类别转换
    patientType: (value) => {
        return value == 0 ? "来访者" :
            value == 1 ? "老年人" :
            value == 2 ? "门诊人员" :
            value == 3 ? "住院病人" :
            value == 4 ? "司法服务类对象" :
            value == 5 ? "公安服务类对象" :
            value == 6 ? "信访服务类对象" :
            value == 7 ? "残联服务类对象" :
            value == 8 ? "民政服务类对象" :
            value == 9 ? "医学隔离观察对象" :
            value == 10 ? "孕产妇" : ""

    },
    // 年级转换
    gradeType: (value) => {
        return value == 1 ? "小学一年级" :
            value == 2 ? "小学二年级" :
            value == 3 ? "小学三年级" :
            value == 4 ? "小学四年级" :
            value == 5 ? "小学五年级" :
            value == 6 ? "小学六年级" :
            value == 7 ? "初中一年级" :
            value == 8 ? "初中二年级" :
            value == 9 ? "初中三年级" :
            value == 10 ? "高中一年级" :
            value == 11 ? "高中二年级" :
            value == 12 ? "高中三年级" : ""

    },
    //   是否显示
    isShow: (value) => {
        return value == 0 ? "不显示" : value == 1 ? " 显示" : " ";
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
    // 账号状态转换
    IDState: (value) => {
        return value == 1 ? "正常" : "异常";
    },
    //   是否处理
    isChecked: (value) => {
        return value == 1 ? "已处理" : "未处理";
    },
    // 组织使用场景转换
    organizationListUseType: (value) => {
        return value == 0 ? "扫码" : "小程序";
    },
    // 组织内人员类型转换
    organizationPatientType: (value) => {
        return value == 0 ? "学生" : "患者";
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
        } else if (row.state == 0) {
            return "warning-row";
        }
    },
    //   pageSize改变时
    handleSizeChange: (val) => {
        console.log(`每页 ${val} 条`);
    },
    //   currentPage 改变时会触发
    handleCurrentChange: (val) => {
        console.log(`当前页: ${val}`);
    },
    // 进出场动画切换
    /**
     * 
     * @param {*} url 点击的地址
     * @param {*} key 地址的key
     * @param {*} list 地址列表
     * @param {*} className 进出场动画类名
     * @param {*} router 路由
     */
    menuChange: (url, key, list, className, router) => {
        className = "mainOut"
        console.log(className);
        setTimeout(() => {
            router.push(url).then(() => {
                className = "main"
                for (let a = 0; a < list.length; a++) {
                    if (list[a] == list[key]) {
                        list[a].isActive = true;
                    } else {
                        list[a].isActive = false;
                    }
                }

            })
        }, 90);
    }
})
export {
    globalMethods
}