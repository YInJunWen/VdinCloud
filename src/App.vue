<template>
  <div id="app">
    <div class="TopBar">
      <div class="leftBar"></div>
      <span>中德宏泰</span>
      <div class="rightBar">
        <mu-icon-menu icon="clear_all" slot="right">
          <mu-menu-item title="菜单 1"/>
          <mu-menu-item title="菜单 2"/>
          <mu-menu-item title="菜单 3"/>
          <mu-menu-item title="菜单 4"/>
          <mu-menu-item title="菜单 5"/>
        </mu-icon-menu>
      </div>
    </div>

    <router-view></router-view>

    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
          <mu-bottom-nav-item to="/" value="vdinCloud" title="vdin云" icon="home"/>
          <mu-bottom-nav-item to="/kz" value="控制台" title="控制台" icon="timeline"/>
          <mu-bottom-nav-item to="/news" value="资讯" title="资讯" icon="touch_app"/>
          <mu-bottom-nav-item to="/mine" value="我的" title="我的" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      bottomNav: 'vdinCloud',
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.mu-paper{
  position: fixed;
  bottom: 0;
  /*left: 0;*/
  width: 100%;
  max-width: 640px;
}

.TopBar{
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  height: 48px;
  line-height: 45px;
  color: #fff;
  background: #2196F3;
  padding: 0 8px;
}

.TopBar span{
  font-family: '方正兰亭纤黑_GBK','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: #fff;
}

.leftBar{
  float:left;
  width:48px;
  height: 48px;
  background: url(./assets/logo.svg) no-repeat;
}

.rightBar{
  float: right;
  width: 48px;
  height: 48px;
}

</style>
