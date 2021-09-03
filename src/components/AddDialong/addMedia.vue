<!--
 * @Author: your name
 * @Date: 2021-08-31 15:16:00
 * @LastEditTime: 2021-08-31 15:28:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\components\AddDialong\addMedia.vue
-->
<!-- 添加视频 -->
<template>
    <el-dialog
        :before-close="state.beforeClose"
        center
        append-to-body
        destroy-on-close
        title="添加文件"
        v-model="globalState.dialogFormVisible"
    >
        <el-form :model="state.form">
            <el-row>
                <el-col :span="24">
                    <el-form-item label>
                        <el-input v-model="state.form.name" placeholder="请输入标题" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
        >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
            </div>
            <template #tip>
                <!-- <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div> -->
            </template>
        </el-upload>
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
        area: ""
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