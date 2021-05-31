<!--
 * @Description: 
-->

<template>
  <div>
    <el-card class="tab-box">
      <div slot="header" class="tab-title">
        <div>个人管理</div>
      </div>
      <el-tabs tab-position="left">
        <el-tab-pane label="基本设置">
          <el-card>
            <div slot="header" class="base-set-head">基本设置</div>
            <el-row :gutter="10">
              <el-col :span="12">
                <el-card>
                  <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="邮箱">
                      <el-input v-model="form.email" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                      <el-input v-model="form.name" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="个人简介">
                      <el-input v-model="form.introduce" type="textarea" :rows="2" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                      <el-input v-model="form.phone" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="所在地区">
                      <el-input v-model="form.area" clearable></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary">立即创建</el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </el-col>
              <el-col :span="12">
                <div class="avtar-box">
                  <div class="avtar">
                    <div>头像</div>
                    <img src="../../assets/img/34.png" alt="">
                    <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                      :show-file-list="false">
                      <el-button size="small">
                        <svg-icon icon-class='upload' className="upload-icon" />
                        更换头像
                      </el-button>
                    </el-upload>
                    <!-- <el-button size="small" class="upload">
                      <svg-icon icon-class='upload' className="upload-icon" />
                    </el-button> -->
                  </div>
                </div>

              </el-col>
            </el-row>

          </el-card>
        </el-tab-pane>
        <el-tab-pane label="安全设置">
          <el-card>
            <div slot="header" class="save-set-head">安全设置</div>
            <div class="save-set">
              <div>
                <div class="set-title">账户密码</div>
                <div class="set-foot">当前密码强度 : 中 </div>
              </div>
              <div class="set-edit">修改</div>
            </div>
            <div class="save-set">
              <div>
                <div class="set-title">密保手机</div>
                <div class="set-foot">已绑定手机：：3939****9 </div>
              </div>
              <div class="set-edit">修改</div>
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="账号绑定">
          <el-card>
            <div slot="header" class="account-set-head">账号绑定</div>
            <h1>无</h1>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="消息通知">
          <el-card>
            <div slot="header" class="base-set-head">消息通知</div>
            <h1>无</h1>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: "miku@39.com",
          name: "泡泡茶壶",
          introduce: "热爱动漫、编程",
          phone: "39393939",
          area: "新世界",
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .avtar-box {
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.1);
    justify-content: center;
    padding: 1em;
    border-radius: 5px;
  }

  .avtar {
    width: 50%;
    height: 100%;

    img {
      margin-bottom: 15px;
      border-radius: 50%;
      width: 150px;
      height: 150px;
    }
  }

  .avatar-uploader {
    position: relative;
    color: royalblue;
    left: 2em;

    .upload-icon {
      width: 1.25em;
      height: 1.25em;
      color: royalblue;
    }
  }

  .save-set {
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1em;
  }

  .set-foot {
    font-size: 13px;
    color: #c2c2c5;
    margin-top: 0.25em;
  }

  .set-edit {
    font-size: 15px;
    padding: 1em;
    color: royalblue;
  }

</style>