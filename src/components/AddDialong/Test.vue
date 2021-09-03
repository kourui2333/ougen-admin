<!--
 * @Author: your name
 * @Date: 2021-08-30 16:51:06
 * @LastEditTime: 2021-08-31 10:34:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\components\AddDialong\Test.vue
-->
<!-- 添加自有量表 -->
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
                    <el-form-item label="量表名称" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="英文简称" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.UKName" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="量表题数" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.questions" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="量表类型" :label-width="state.formLabelWidth">
                        <el-select
                            style="width: 330px;"
                            v-model="state.form.testType"
                            placeholder="请选择"
                        >
                            <el-option label="亲子关系" value="0"></el-option>
                            <el-option label="心理健康" value="1"></el-option>
                            <el-option label="能力" value="2"></el-option>
                            <el-option label="性格" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="适用年龄" :label-width="state.formLabelWidth">
                        <el-select
                            style="width: 330px;"
                            placeholder="请选择"
                            v-model="state.form.applicableAge"
                        >
                            <el-option label="小于6岁" value="0"></el-option>
                            <el-option label="6-12岁" value="1"></el-option>
                            <el-option label="12-18岁" value="2"></el-option>
                            <el-option label="18-25岁" value="3"></el-option>
                            <el-option label="大于25" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="指导价格" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.autoPrice" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="指定价格" :label-width="state.formLabelWidth">
                        <el-input v-model="state.form.setPrice" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="是否推荐" :label-width="state.formLabelWidth">
                        <el-select
                            style="width: 330px;"
                            placeholder="请选择"
                            v-model="state.form.recommend"
                        >
                            <el-option label="是" value="1"></el-option>
                            <el-option label="否" value="0"></el-option>
                        </el-select>
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
import { ElMessageBox } from 'element-plus';
const state = reactive({
    // dialogFormVisible: globalState.dialogFormVisible,
    form: {
        // 量表名称
        name: "",
        // 英文简称
        UKName: "",
        // 题数
        questions: "",
        // 类型 0-亲子关系 1-心理健康 2-能力 3-性格 
        testType: "",
        // 适用年龄
        applicableAge: "",
        // 指导价
        autoPrice: "",
        // 定价
        setPrice: "0.00",
        // 是否推荐 1-是 0-否
        recommend: "",
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