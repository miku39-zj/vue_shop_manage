<!--
 * @Description: tab页
-->
<template>
  <div class="tab">
    <div class="tab-head">
      tab选项卡
    </div>
    <div class="tab-box" @click="tabClick">
      <div class="tab-active-bar" :style="[{'width':`${tabItemWidth}px`},{'transform':`translateX(${activeLen})`}]">
      </div>
      <div v-for="item in tabList" :key="item.name" :id="`itemtab${item.id}`"
        :class="{'tab-item':true,'active-tab':item.isActive}">{{item.name}}
      </div>
    </div>
    <div class="tab-contain">
      <msg :is="compontent" :theme="light" :btnType="btnType" keep-alive>
        {{text}}
      </msg>
    </div>
  </div>
</template>

<script>
  import UnreadMsg from '@/components/TabChild/UnreadMsg'
  import ReadMsg from '@/components/TabChild/ReadMsg'
  import RecycleBin from '@/components/TabChild/RecycleBin'
  export default {
    components: {
      UnreadMsg,
      ReadMsg,
      RecycleBin,
    },
    data() {
      return {
        btnType: "warm",
        text: "回收",
        light: "light",
        compontent: "ReadMsg",
        isActive: false,
        tabList: [{
            id: 1,
            name: "未读消息",
            compontent: "UnreadMsg",
            text: "标记已读",
            btn: "success",
            isActive: false
          },
          {
            id: 2,
            name: "已读消息",
            compontent: "ReadMsg",
            text: "回收",
            btn: "warm",
            isActive: true
          },
          {
            id: 3,
            name: "回收站",
            compontent: "RecycleBin",
            text: "清空",
            btn: "danger",
            isActive: false
          }
        ],
      }
    },
    methods: {
      tabClick(e) {
        this.tabList.forEach(x => {
          x.isActive = false
          if (e.toElement.innerText === x.name) {
            x.isActive = true
            this.compontent = x.compontent
            this.text = x.text
            this.btnType = x.btn
          }
        });
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
      },
      tabItemWidth() {
        const n = this.tabList.length;
        for (let i = 0; i < n; i++) {
          if (this.tabList[i].isActive) {
            return 14 * (this.tabList[i].name.length)
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
    background-color: #fff;
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
    // width: 288px;
    margin: 10px;
    user-select: none;
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
    cursor: pointer;
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

  .tab-contain {
    padding: 0 20px;
  }
</style>