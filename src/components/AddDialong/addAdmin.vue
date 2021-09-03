<!-- 添加用户 -->
<template>
    <el-dialog
        :before-close="state.beforeClose"
        center
        append-to-body
        destroy-on-close
        title="添加"
        v-model="globalState.dialogFormVisible"
    >
        <el-form :model="state.form">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="姓名" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="年龄" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="服务机构" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="账号等级" :label-width="state.formLabelWidth">
                        <el-select
                            style="width: 335px;"
                            placeholder="请选择"
                            v-model="state.form.role"
                        >
                            <el-option label="心理咨询师" value="0"></el-option>
                            <el-option label="街道负责人" value="1"></el-option>
                            <el-option label="学校负责人" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="性别" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电话" :label-width="state.formLabelWidth">
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