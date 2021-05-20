<template>
  <section>
    <div class="searchBox">
      <el-form ref="form" size="small" inline :model="queryFrom">
        <el-form-item>
          <el-select v-model="queryFrom.animal" placeholder="请选择动漫类型" clearable>
            <el-option v-for="(item, index) in options" :key="index" :label="item" :value="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-date-picker style="width:400px" v-model="rangeData" type="daterange" range-separator="至"
            start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd" clearable></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search" class="MyQueryButton" @click="getPage(1)">
            搜索
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="MyCreateButton" size="small" @click="insertEvent">新增人员</el-button>
          <el-button class="MyDeleteButton" size="small" @click="removeEvent({})">删除人员</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :header-cell-style="{background:'#d8effb',color:'#555'}" class="tableBox" stripe border
      highlight-current-row ref="xTable" height="75vh" @selection-change="applySelect" size="mini" :data="tableData">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column type="index" width="50" align="center" label="序号"></el-table-column>
      <el-table-column prop="animal" label="动漫类型" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="time" label="新增时间" align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="power" label="战力" align="center">
      </el-table-column>
      <el-table-column label="操作" width="150" align="center">
        <template slot-scope="scope">
          <el-button type="text" title="编辑" @click="editEvent(scope.row)">
            <svg-icon icon-class='edit' className="ebmsIcon edit-icon" />
          </el-button>
          <el-button type="text" title="介绍" @click="viewEvent(scope.row)">
            <svg-icon icon-class='view' className="ebmsIcon view-icon" />
          </el-button>
          <el-button type="text" title="删除" @click="removeEvent(scope.row)">
            <svg-icon icon-class='delete' className="ebmsIcon delete-icon" />
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-col :span="24" class="toolbar">
      <el-pagination layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange"
        @size-change="handleSizeChange" :page-size="queryFrom.row" :page-sizes="[20,50,100]" :total="total"
        style="float:right;"></el-pagination>
    </el-col>
    <AddEditUser ref="AddEditUser" @updata="updata" :EditRow="currentRow"></AddEditUser>
  </section>
</template>

<script>
  import AddEditUser from '@/components/UserChild/AddEditUser'
  export default {
    components: {
      AddEditUser
    },
    data() {
      return {
        options: [],
        queryFrom: {
          animal: ""
        },
        currentRow: {
          type: Object,
          default: {},
        },
        tableLoading: false,
        purchaseLis: [],
        matAppType: "全新品",
        total: 1,
        rangeData: [], //日期
        selectArr: [], //选中的行
        tableData: [],
        formData: {},
        EditFormData: {},
        selectRow: null,
        rowAndColumn: [],
      }
    },
    methods: {
      updata(val) {
        this.tableData.push(val)
        this.total++
      },

      handleCurrentChange(val) {
        this.queryFrom.page = val;
        this.getPage(val);
      },
      handleSizeChange(val) {
        this.queryFrom.row = val;
        this.getPage(this.queryFrom.page);
      },
      getPage(page) {
        this.queryFrom.page = page
        this.QueryPage()
      },
      update() {
        this.QueryPage()
      },

      async QueryPage() {
        this.tableData = [{
            animal: "海贼王",
            name: "路飞",
            time: "2019-02-18",
            sex: "男",
            power: "9999"
          },
          {
            animal: "R0:从零开始的异世界",
            name: "蕾姆",
            time: "2019-06-18",
            sex: "女",
            power: "6666"
          },
          {
            animal: "火影忍者",
            name: "鸣人",
            time: "2019-06-18",
            sex: "男",
            power: "8885"
          },
          {
            animal: "妖精的尾巴",
            name: "纳兹",
            time: "2020-06-18",
            sex: "男",
            power: "9888"
          },
          {
            animal: "约会大作战",
            name: "折纸鸢一",
            time: "2020-06-18",
            sex: "女",
            power: "5464"
          },
          {
            animal: "迪迦奥特曼",
            name: "迪迦",
            time: "2006-07-14",
            sex: "男",
            power: "1999"
          },
          {
            animal: "overlord",
            name: "飞鼠",
            time: "2015-01-18",
            sex: "男",
            power: "99999"
          },
          {
            animal: "七龙珠",
            name: "孙悟空",
            time: "2018-03-23",
            sex: "男",
            power: "99999999"
          },
        ]
        this.total = this.tableData.length
        this.getAnimaType()
      },

      getAnimaType() {
        this.options = [...new Set(this.tableData.map(x => x.animal))]
      },

      editEvent(row) {
        this.currentRow = row
        this.$refs.AddEditUser.initPage(true)
      },

      viewEvent(row) {},

      applySelect(selection) {
        this.selectArr = selection
      },

      //删除当前行 删除选中
      removeEvent(row) {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.DeleteApply(row)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      },
      async DeleteApply(row) {},

      copyEvent(row) {},

      insertEvent() {
        this.$refs.AddEditUser.initPage(false)
      },
      // 提交申请
      saveEvent() {

      },
      async SubmitApplication() {

      },
    },
    mounted() {
      this.QueryPage()

    }
  }
</script>

<style lang="less" scoped>
  .tableBox {
    margin-top: 10px;

    .ebmsIcon {
      width: 1.2em;
      height: 1.2em;
      cursor: pointer;
      vertical-align: text-top;
      fill: #0066e4
    }
  }

  .searchBox {
    padding: 5px 5px 5px 10px;
    border: rgba(0, 0, 0, 0.1) 1px solid;
    border-radius: 5px;
  }
</style>