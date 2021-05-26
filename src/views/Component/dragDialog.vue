<template>
  <section>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>弹框示例</span>
        <el-button style=" margin: 3px 50px" type="primary" size="medium" @click="layerOut">点击弹出</el-button>
      </div>
      <div>使用了vue-layer组件,访问<a href="https://layer.zuoyanit.com/">layer.zuoyanit.com</a>/</div>
    </el-card>
  </section>
</template>

<script>
  import dialog from '@/components/ComponentChild/dialog'
  export default {
    components: {
      dialog
    },
    methods: {
      layerOut() {
        const id = this.$layer.iframe({
          title: "查看审核意见",
          // area: 'auto',
          area: ["50vw", "65vh"],
          content: {
            content: dialog, //组件         
            parent: this, //vue实例 传入实例 弹窗组件内才能获取laydata
            data: {
              info: {},
              // NoAsin: false
            }
          },
          canmove: true, //true可以拖动 false不能拖动
          shade: false,
          resize: true, //是否允许拉伸，默认是不允许
          scrollbar: true, //是否允许浏览器出现滚动条:默认是允许
          maxmin: true, //开启最大化最小化
          tipsMore: false, //是否允许多个tips
          lazy: true,
          //弹窗成功 id弹窗的id
          success: (id) => {},
          //弹窗关闭/取消
          end: () => {},
          //弹窗关闭/取消之前，id弹窗的id close关闭弹窗, return false阻止关闭  return true不阻止
          // beforeClose:(id,close)=>{
          //   setTimeout(()=>{
          //      close(id)
          //    },2000)
          //    return false
          //  },
          //还原状态回调 id弹窗的id state：1 是由最小化还原 2是由最大化还原
          maxminiCallback: (id, state) => {},
          //最小化回调 id弹窗的id
          miniCallback: (id) => {},
          //最大化回调 id弹窗的id
          maxCallback: (id) => {},
        });
      },
    },

  }
</script>

<style lang="less" scoped>
  .box-card {
    width: 100%;
    height: 20vh;
  }
</style>