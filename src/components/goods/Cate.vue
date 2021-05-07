<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图 -->
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary" @click="showAddCatDialog">添加分类</el-button>
        </el-col>
      </el-row>

      <!-- 表格 -->
      <tree-table
        class="treeTable"
        :data="catelist"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
        :show-row-hover="false"
      >
        <!-- 是否有效模板 -->
        <template slot="isok" slot-scope="scope">
          <i
            class="el-icon-success"
            v-if="scope.row.cat_deleted === false"
            style="color: lightgreen;"
          ></i>
          <i class="el-icon-error" v-else style="color: red;"></i>
        </template>

        <!-- 排序 -->
        <template slot="order" slot-scope="scope">
          <el-tag size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
          <el-tag type="success" size="mini" v-else-if="scope.row.cat_level === 1">二级</el-tag>
          <el-tag type="warning" size="mini" v-else>三级</el-tag>
        </template>

        <!-- 操作模板 -->
        <template slot="opt" slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
        </template>
      </tree-table>

      <!-- 分页区域 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="querInfo.pagenum"
        :page-sizes="[3, 5, 10, 15]"
        :page-size="querInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </el-card>

    <!-- 添加分类的对话框 -->
    <el-dialog title="添加分类" :visible.sync="addCatDialogVisible" width="50%" @close="addCatDialogClose">
      <el-form
        :model="addCateForm"
        :rules="addCateFormRules"
        ref="addCateFormRef"
        label-width="100px"
      >
        <!-- prop 验证规则   -->
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="addCateForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类">
          <!-- 级联 opthins 指定数据源  props指定配置对象 -->
          <el-cascader
            v-model="selectedKeys"
            :options="parentCateList"
            :props="{ expandTrigger: 'hover',value: 'cat_id',label: 'cat_name', children: 'children'}"
            @change="parentCateChange"
            clearable
          ></el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addCatDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addCate">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 查询条件
      querInfo: {
        type: 3,
        pagenum: 1,
        pagesize: 5,
      },
      total: 0,
      // 商品分类列表
      catelist: [],

      // 为table 指定列的定义
      columns: [
        {
          label: '分类名称',
          prop: 'cat_name',
        },
        {
          label: '是否有效',

          // 表示将当前列定义为模板列
          type: 'template',
          // 使用的模板名称
          template: 'isok',
        },
        {
          label: '排序',

          // 表示将当前列定义为模板列
          type: 'template',
          // 使用的模板名称
          template: 'order',
        },
        {
          label: '操作',

          // 表示将当前列定义为模板列
          type: 'template',

          // 使用的模板名称
          template: 'opt',
        },
      ],

      //   分类对话框的显示与隐藏
      addCatDialogVisible: false,

      // 添加分类的表单数据对象
      addCateForm: {
        // 将要添加的分类名称
        cat_name: '',
        // 父级分类id
        cat_pid: 0,
        // 分类等级
        cat_level: 0,
      },

      //   添加分类表单的验证规则对象
      addCateFormRules: {
        cat_name: [
          { required: true, message: '请输入分类名称', trigger: 'blur' },
        ],
      },
      //   父级分类数组
      parentCateList: [],

      //   选中的父级分类的id数组
      selectedKeys: [],
    }
  },
  created() {
    this.getCateList()
  },
  methods: {
    async getCateList() {
      const { data: res } = await this.$http.get('categories', {
        params: this.querInfo,
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取商品分类失败')
      }
      // 获取商品分类列表
      this.catelist = res.data.result
      // 总数
      this.total = res.data.total
    },
    // 监听 pagesize 改变的事件
    handleSizeChange(newSize) {
      this.querInfo.pagesize = newSize
      this.getCateList()
    },

    // 监听pagenum值
    handleCurrentChange(newPage) {
      this.querInfo.pagenum = newPage
      this.getCateList()
    },

    // 点击添加分类按钮，弹出对话框
    showAddCatDialog() {
      // 先获取父级分类列表
      this.getParentCate()
      this.addCatDialogVisible = true
    },

    // 获取父级分类的数据列表
    async getParentCate() {
      const { data: res } = await this.$http.get('categories', {
        params: { type: 2 },
      })
      if (res.meta.status !== 200) {
        return this.$message.error('获取父级分的数据列表失败')
      }
      //赋值
      this.parentCateList = res.data
    },

    // 选择项发生改变触发
    parentCateChange() {
      console.log(this.selectedKeys)
      // 如果selectedKeys 数组的长度length 大于0 证明选中父级分类,反之,则没选中
      if(this.selectedKeys.length > 0){
           //父级分类的id
           this.addCateForm.cat_pid = this.selectedKeys[this.selectedKeys.length-1]
           //为当前分类的等级复制
           this.addCateForm.cat_level = this.selectedKeys.length
           return
      } else {
          this.addCateForm.cat_pid = 0
          this.addCateForm.cat_level = 0
      }
    },

    //点击按钮,添加分类
    addCate(){
        // 预验证
        this.$refs.addCateFormRef.validate(async vild => {
            if(!valid) return
            const {data: res} = await this.$http.post('categories',this.addCateForm)
            if(res.meta.status !== 201){
                return this.$message.error('添加失败')
            }
            this.$message.success('添加成功')
            this.getCateList()
            this.addCatDialogVisible = false
        })
    },

    //监听对话框的关闭事件 重置表单数据
    addCatDialogClose(){
        this.$refs.addCateFormRef.resetFields()
        this.selectedKeys = []
        this.addCateForm.cat_level = 0
        this.addCateForm.cat_pid = 0
    }
  },
}
</script>

<style lang="less" scoped>
.treeTable {
  margin-top: 15px;
}
.el-cascader {
  width: 100%;
}
</style>

<style lang="less">
.el-cascader-menu {
  min-width: 180px !important;
  height: 250px !important;
  overflow-y: auto !important;
}
</style>