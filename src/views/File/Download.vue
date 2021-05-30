<!--
 * @Description: 
-->
<template>
  <div>
    <el-card class="upload-box">
      <div slot="header" class="emoji-title">
        <div>文件下载,并压缩</div>
      </div>
      <el-button size="small" type="primary" @click="downLoad">点击下载</el-button>
      <ul>
        <li v-for="item in fileList" :key="item.name">
          <a :href="item.url">{{item.name}}</a>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
  import JSZip from 'jszip'
  import FileSaver from 'file-saver'
  export default {
    data() {
      return {
        fileList: [{
          name: '1.png',
          url: require('../../assets/img/1.png'),
        }, {
          name: '11.jpg',
          url: require('../../assets/img/11.jpg'),
        }]
      }
    },
    methods: {
      // downloadFile(url, fileName) {
      //   request({
      //     url: url,
      //     method: 'get',
      //     responseType: "blob"
      //   }).then(data => {
      //     console.log(data,"data");
      //     let downloadElement = document.createElement("a");
      //     let href = window.URL.createObjectURL(data); // 创建下载的链接
      //     downloadElement.href = href;
      //     downloadElement.download = fileName; // 下载后文件名
      //     document.body.appendChild(downloadElement);
      //     downloadElement.click(); // 点击下载
      //     document.body.removeChild(downloadElement); // 下载完成移除元素
      //     window.URL.revokeObjectURL(href); // 释放掉blob对象
      //   });
      // },
      //通过url 转为blob格式的数据
      getImgArrayBuffer(url) {
        let _this = this;
        return new Promise((resolve, reject) => {
          //通过请求获取文件blob格式
          let xmlhttp = new XMLHttpRequest();
          xmlhttp.open("GET", url, true);
          xmlhttp.responseType = "blob";
          xmlhttp.onload = function () {
            if (this.status == 200) {
              resolve(this.response);
            } else {
              reject(this.status);
            }
          }
          xmlhttp.send();
        });
      },
      // imgDataUrl 数据的url数组
      BatchDownload(imgDataUrl) {
        let _this = this;
        let zip = new JSZip();
        let cache = {};
        let promises = [];
        _this.title = '正在加载压缩文件';
        for (let item of imgDataUrl) {
          const promise = _this.getImgArrayBuffer(item.url).then(data => {
            // 下载文件, 并存成ArrayBuffer对象(blob)
            zip.file(item.name, data, { binary: true }); // 逐个添加文件
            cache[item.name] = data;
          });
          promises.push(promise);
        }
        Promise.all(promises).then(() => {
          zip.generateAsync({ type: "blob" }).then(content => {
            _this.title = '正在压缩';
            // 生成二进制流
            FileSaver.saveAs(content, _this.fileName); // 利用file-saver保存文件  自定义文件名
            _this.title = '压缩完成';
          });
        }).catch(res => {
          _this.$message.error('文件压缩失败');
        });
      },
      downLoad() {
        this.BatchDownload(this.fileList)
      }
    }
  }
</script>

<style lang="less" scoped>
  .file-upload {
    margin-bottom: 20px;
  }

  .upload-title {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
  }
</style>