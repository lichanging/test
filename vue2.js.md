1.	什么时候用vuex？
  （1）	Vuex可以帮助我们管理共享状态，但也附带了更多的概念和框架。所以在中大型的项目中建议引入，小型项目不建议
  （2）	使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。
  将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。例如某个状态仅仅只属于某个父子组件之间的内容就别放在vuex里了。

2.  mapGetters({ 
      goods_list: 'goods_list',
      userInfo:'userInfo'
    });
    这种写法跟下面的写法是等价的。为了写的更简单一目了然,当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    mapGetters([
      // 映射 this.goods_list 为 store.getters.goods_list
      'goods_list',
      // 映射 this.userInfo 为 store.getters.userInfo
      'userInfo'
    ])
      
3.  前端vue项目中，各个组件（非父子关系也可）之间可以通过声明this.$root.$on('functionName',callback) 全局Bus进行事件通信，调用this.$root.$emit("事件名", 参数1, 参数2, ...);  
    该方法存在问题：
        有时候会发生事件只被emit触发了一次，但是回调函数却被执行了多次的现象。这种现象往往发生在页面跳转退出后重新进入的时候。
    解决方案：
        在vue组件的beforeDetory钩子函数中将本vue组件往Bus容器中添加的时间监听器全部手动移除：this.$root.off("事件名");

4.  axios异步调用，如果要保证axios做更新操作之后才做查询操作，则要将查询操作放在.then(){}方法中，不然会导致查询结果先返回

5.  vue可以使用watch监控变量值的变化，这样可以解决redux中的state在刷新浏览器时因为异步存储其它的组件在调用时获取到的值为undefined的问题

6.  在code之前一定要把大致架构想清楚了，在模棱两可的情况下就去码代码，只会事半功倍

7.  变量在data中没有声明。在方法里面，如果  
      let attr = false
      if(ture){
         this.attr = true
      }
    这样attr就声明到全局了

8.  vue和react一样变量可以用来存放div 
    const a = <div> </div>

9.  element dialog自定义，
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handle()">确 定</el-button>
    </span>
    handle()是不能从当前表格中获取值的，可以自定义一个方法去判断dialogVisible，并可以在data中创建一个变量存储该值
    可以参考 https://segmentfault.com/q/1010000010176928/a-1020000010177906

10.  axios异步调用，要想获取返回值，需要在then中还有axios之前增加return语句

11.  elementUI事件回调函数传默认值和自定义参数的问题  https://blog.csdn.net/wangchaohpu/article/details/85697771