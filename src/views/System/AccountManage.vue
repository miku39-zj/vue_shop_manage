<!--
 * @Description: 
-->
<template>
  <div class="account">
    <el-row :gutter="15">
      <el-col :span="8" class="account-tree">
        <el-card class="tree-card">
          <div class="tree-head">
            <span class="tree-title">部门列表</span>
            <div class="tree-search">
              <el-input placeholder="请输入内容" v-model="input" class="tree-input" size="mini">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              <el-dropdown @command="handleTags">
                <span class="el-dropdown-link">
                  <svg-icon icon-class='more' className="more-icon" />
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="allClose">全部折叠</el-dropdown-item>
                  <el-dropdown-item command="allOpen">全部展开</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <el-tree ref="tree" :data="data" :props="defaultProps"></el-tree>
        </el-card>
      </el-col>
      <el-col :span="16" class="account-main">
        <el-card class="search-card">
          <el-form ref="form" :model="form" inline label-width="80px" size="small">
            <el-form-item label="邮箱">
              <el-input v-model="form.email" clearable></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="form.name" clearable></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
        </el-card>
        <el-card class="table-card">
          <el-table :data="tableData" style="width: 100%" size="big" border stripe fit>
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column prop="user" label="用户名" width="180">
            </el-table-column>
            <el-table-column prop="part" label="部门" width="180">
            </el-table-column>
            <el-table-column prop="email" label="邮箱">
            </el-table-column>
            <el-table-column prop="desc" label="描述">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    closeAllnode
  } from "@/utils/index";
  export default {
    data() {
      return {
        form: {

        },
        tableData: [{
            user: '路飞',
            part: '海贼部门',
            email: '5566@one.com',
            desc: "获取one piece"
          }, {
            user: '黄猿',
            part: '海军部门',
            email: 'yuanyuan@one.com',
            desc: "莫西莫西"
          },
          {
            user: '索隆',
            part: '海贼部门',
            email: '111111111@one.com',
            desc: "绿藻头, 路痴"
          },
          {
            user: '纳兹',
            part: '妖精的尾巴部门',
            email: 'firefore@one.com',
            desc: "晕交通工具"
          },
          {
            user: 'mio',
            part: '轻音部门',
            email: 'mmiomio@one.com',
            desc: "蓝白碗"
          },
          {
            user: '鸣人',
            part: '木叶村部门',
            email: 'nbnbnb@one.com',
            desc: "嘴遁"
          },
          {
            user: '格雷',
            part: '妖精的尾巴部门',
            email: 'lllllll@one.com',
            desc: "暴露狂"
          },
          {
            user: 'yui',
            part: '轻音分部',
            email: 'daidaidai@one.com',
            desc: "天然"
          }
        ],
        input: "",
        data: [{
            id: 1,
            label: '海贼王分部',
            children: [{
              id: 4,
              label: '海贼部门',
            }, {
              id: 5,
              label: '海军部门',
            }]
          }, {
            id: 2,
            label: '妖精的尾巴分部',
            children: [{
              id: 6,
              label: '妖精的尾巴部门'
            }, {
              id: 7,
              label: '冥府之门部门'
            }]
          }, {
            id: 3,
            label: '火影忍者分部',
            children: [{
              id: 8,
              label: '木叶村部门'
            }, {
              id: 9,
              label: '云隐村部门'
            }]
          },
          {
            id: 10,
            label: '轻音分部',
            children: [{
              id: 11,
              label: '轻音部门'
            }]
          }
        ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleTags(val) {
        if (val === "allClose") {
          closeAllnode(this, this.$refs.tree.root, false)
        } else {
          closeAllnode(this, this.$refs.tree.root, true)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .account-tree {
    height: 86vh;
  }

  .account-main {
    height: 86vh;
  }

  .tree-card {
    height: 100%;
  }

  .tree-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: .45em;
  }

  .tree-search {
    width: 70%;
  }

  .tree-input {
    width: 90%;
  }

  .search-card {
    height: 10%;
  }

  .table-card {
    margin-top: 15px;
    height: calc(90% - 15px);
  }
</style>