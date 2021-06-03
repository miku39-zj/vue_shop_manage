<!--
 * @Description: 
-->
<script>
export default {
  data(){
    return {

    }
  },
  props: {
    theme: {
      type: String,
      default: "light"
    },
     btnType: {
      type: String,
      default: "success",
    },
  },
  methods: {
    clickHandle(){
      this.$message.success(`${this.$slots.default[0].text}成功`)
    }
  },
  render(h) {
    let { 
      theme,
      btnType,
      clickHandle 
    } = this
    return (
      <div class={{'tab-mian': true, 'tab-mian-dark': theme === 'dark'}}>
        <ul>
          <li>
            <span>【系统通知】新番转生蜘蛛将于今晚9点更新</span>
            <span>2021-05-25</span>
          </li>
          <li>
            <span>【系统通知】新番咒术回战将于今晚10点更新</span>
            <span>2021-05-25</span>
          </li>
        </ul>
        <button class={{
          'btn': true,
          'success': btnType==='success',
          'warm': btnType === 'warm',
          'danger': btnType === 'danger'
        }}
        onClick={clickHandle}>
          {this.$slots.default[0].text}
        </button>
      </div>
    )
  }
}
</script>

<style lang="less" scoped>
  .tab-mian {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 20px 20px;
  }
  .tab-mian-dark {
    background-color: rgba(28, 34, 48, 0.5);
  }
  ul{
    list-style-type: none;
    padding: 0 ;
    margin: 0;
    // li:nth-child(-n+1){
      
    // }
    li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      padding-bottom: 5px;
      overflow-wrap: break-word;
      margin-bottom: 20px;
      font-size: 14px;
      color: royalblue;
    }
  }
   .btn {
    width: 70px;
    height: 30px;
    pointer-events: auto;
    cursor: pointer;
    border: none;
    padding: 0.4rem 0.9rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit; 
    position: relative;
    display: inline-block;
	  border-radius: 5px;
  }
  .success {
    background-color: #67c23a;
  }
  .warm {
    background-color: #e6a23c;
  }
  .danger {
    background-color: #f56c6c;
  }
</style>
