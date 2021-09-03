<!--
 * @Author: your name
 * @Date: 2021-08-31 16:00:09
 * @LastEditTime: 2021-08-31 16:01:39
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\components\AddDialong\addConsu.vue
-->
<!-- 添加用户 -->
<template>
    <el-dialog
        :before-close="state.beforeClose"
        center
        append-to-body
        destroy-on-close
        title="添加咨询室"
        v-model="globalState.dialogFormVisible"
    >
        <el-form :model="state.form">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="咨询室名称" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系人" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="联系电话" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="负责人" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="地址" :label-width="state.formLabelWidth">
                        <el-select
                            style="width: 335px;"
                            v-model="state.form.area"
                            placeholder="请选择"
                        >
                            <el-option
                                v-for="item in content.china.su.districts"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="详细地址" :label-width="state.formLabelWidth">
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