<!--
 * @Author: your name
 * @Date: 2021-08-31 15:42:13
 * @LastEditTime: 2021-08-31 15:43:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\components\AddDialong\addPopedom.VUE
-->
<!-- 添加用户 -->
<template>
    <el-dialog
        :before-close="state.beforeClose"
        center
        append-to-body
        destroy-on-close
        title="添加分区"
        v-model="globalState.dialogFormVisible"
    >
        <el-form :model="state.form">
            <el-row>
                <el-col :span="24">
                    <el-form-item label="区名" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="globalState.dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="globalState.dialogFormVisible = false">确 定</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { reactive } from 'vue';
import globalState from '../../js/state';
import { content } from "@/js/content.js"
import { ElMessageBox } from 'element-plus';
const state = reactive({
    // dialogFormVisible: globalState.dialogFormVisible,
    form: {
        name: '',
        age: "",
        sex: "",
        phone: "",
        area: "",
        scopeBusiness: "",
        role: ""
    },
    formLabelWidth: '120px',
    beforeClose: done =>
        ElMessageBox.confirm('确认关闭?')
            .then(_ => {
                done();
            })
            .catch(_ => { })
});


</script>