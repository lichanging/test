1.	什么时候用vuex？
（1）	Vuex可以帮助我们管理共享状态，但也附带了更多的概念和框架。所以在中大型的项目中建议引入，小型项目不建议
（2）	使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。
将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。例如某个状态仅仅只属于某个父子组件之间的内容就别放在vuex里了。

2.
      mapGetters({ 
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
      
3.xx
