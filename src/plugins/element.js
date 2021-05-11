/*
 * @Author: your name
 * @Date: 2021-05-07 19:32:33
 * @LastEditTime: 2021-05-11 21:03:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue_shop_manage\src\plugins\element.js
 */
import Vue from 'vue'
import { Button, Form, FormItem, Input,Container,Header,Aside,Row,Col,Switch,Tooltip,Pagination,MessageBox,
    Main,Menu,Submenu,MenuItemGroup,MenuItem,breadcrumb,BreadcrumbItem,Card,Table,TableColumn,
    Dialog,Tag, Tree,Select,Option,Cascader,Alert,Tabs,TabPane, Checkbox, Divider} from 'element-ui'
import { Message } from 'element-ui'


Vue.use(Divider)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Checkbox)


// 全局挂载
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
