<template>
  <section>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="header-msg">
          <div class="user-info">
            <img src="../assets/img/333.jpg" class="user-avator" alt />
            <div class="user-info-cont">
              <div class="user-info-name">
                admin
                <svg-icon icon-class='rain' className="rain-icon" />
              </div>
              <div class="use-info-titel">
                <p>早上好,admin,祝你新的一天工作愉快</p>
                <p>今天小雨转阴天,21~27°,天凉,注意加衣</p>
              </div>
            </div>
          </div>
          <div class="user-info-list">
            上次登录时间：
            <span>2020-10-01</span>
          </div>
          <div class="user-info-list">
            上次登录地点：
            <span>伟大航路</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="10">
        111111111
      </el-col>
    </el-row>

  </section>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .header-msg {
    height: 250px;
  }


  .user-info {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(106, 163, 216);
    margin-bottom: 20px;
  }



  .user-avator {
    margin-right: 20px;
    width: 120px;
    height: 120px;
    border-radius: 50%;

  }

  .user-info-name {
    .rain-icon {
      margin-left: 250px;
      width: 1em;
      height: 1em;
      vertical-align: middle;
    }
  }

  .use-info-titel {
    height: 56px;
  }

  .user-info-cont div:first-child {
    font-size: 30px;
    color: #222;
  }

  .user-info-list {
    font-size: 14px;
    color: #999;
    line-height: 25px;
  }

  .user-info-list span {
    margin-left: 40px;
  }
</style>