<!--
 * @Description: 
-->
<template>
  <div class="tab">
    <div class="tab-head">
      tab选项卡
    </div>

    <div class="tab-box" @click="tabClick">
      <div class="tab-active-bar" :style="[{'width':'56px'},{'transform':`translateX(${activeLen})`}]"></div>
      <div v-for="item in tabList" :key="item.name" :class="{'tab-item':true,'active-tab':item.isActive}">{{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false,
        tabList: [{
            name: "未读消息",
            isActive: false
          },
          {
            name: "已读消息",
            isActive: true
          },
          {
            name: "回收站",
            isActive: false
          }
        ],
      }
    },
    methods: {
      tabClick(){
        
      }
    },
    computed: {
      activeLen() {
        const n = this.tabList.length;
        for (let i = 0; i < n; i++) {
          if (this.tabList[i].isActive) {
            return i * 56 + (i * 2 + 1) * 20 + "px"
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .tab {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  .tab-head {
    height: 80px;
    box-sizing: border-box;
    font-size: 20px;
    line-height: 40px;
    font-weight: bolder;
    padding: 20px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }

  .tab-box {
    position: relative;
    white-space: nowrap;
    width: 288px;
  }

  .tab-item {
    display: inline-block;
    padding: 0 20px;
    height: 40px;
    box-sizing: border-box;
    line-height: 40px;
    font-size: 14px;
    color: #303133;
    font-weight: 500;
    list-style: none;
  }

  .active-tab {
    color: #409eff;
  }

  .tab-box::after {
    content: "";
    height: 2px;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-color: #e4e7ed;
    width: 100%;
  }

  .tab-active-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #409eff;
    z-index: 1;
    transition: transform .3s cubic-bezier(.645, .045, .355, 1);
    list-style: none;
  }
</style>