import {
    reactive
} from "vue";

/*
 * @Author: your name
 * @Date: 2021-08-30 13:14:27
 * @LastEditTime: 2021-08-30 13:33:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\js\state.js
 */
let globalState = reactive({
    dialogFormVisible: false, //弹窗
})
export default globalState