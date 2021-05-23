<!--
 * @Description: 
 * @Date: 2021-05-20 15:05:31
-->

<template>
  <el-dialog title="新增人员" :visible.sync="dialogVisible" width="30%">
    <el-form ref="AddFormDataRef" label-position="right" size="small" :rules="rules" label-width="80px"
      :model="formLabelAlign">
      <el-form-item label="动漫类型" prop="animal">
        <el-input v-model="formLabelAlign.animal" :disabled="isEdit"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formLabelAlign.name" :disabled="isEdit"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-input v-model="formLabelAlign.sex"></el-input>
      </el-form-item>
      <el-form-item label="战力" prop="power">
        <el-input v-model="formLabelAlign.power"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button class="MyCancelButton" @click="dialogVisible = false" size="small">取 消</el-button>
      <el-button class="MyCreateButton" @click="sureAdd" size="small">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        isEdit: {
          type: Boolean,
          default: false
        },
        formLabelAlign: {
          animal: "",
          name: "",
          sex: "",
          power: "",
        },
        rules: {
          animal: [{
            required: true,
            message: '请输入动漫类型',
            trigger: 'blur'
          }, ],
          name: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }, ],
          sex: [{
            required: true,
            message: '请输入性别',
            trigger: 'blur'
          }, ],
          power: [{
            required: true,
            message: '请输入战力',
            trigger: 'blur'
          }, ],
        },
        dialogVisible: false
      };
    },
    methods: {
      // 新增 编辑
      initPage(val, row) {
        this.isEdit = val
        this.dialogVisible = true
        if (val) {
          this.formLabelAlign = row
        }
        this.$nextTick(_ => {
          this.$refs.AddFormDataRef.resetFields()
        })

      },

      sureAdd() {
        this.$refs.AddFormDataRef.validate(async (valid) => {
          if (!valid) return
          this.formLabelAlign.time = this.$moment(new Date()).format('YYYY-MM-DD')
          this.$emit("updata", this.formLabelAlign)
          this.dialogVisible = false
        })
      },
    }
  }
</script>

<style lang="less" scoped>

</style>