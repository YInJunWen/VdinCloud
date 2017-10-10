<template>
    <div class="ConS">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="云主机" name="first">云主机</el-tab-pane>
            <el-tab-pane label="云盘" name="second">云盘</el-tab-pane>
            <el-tab-pane label="日志" name="third">日志</el-tab-pane>
            <el-tab-pane label="工单" name="fourth">工单</el-tab-pane>
            <el-tab-pane label="快照" name="fifth">快照</el-tab-pane>
            <el-tab-pane label="管理" name="sixth">管理</el-tab-pane>
        </el-tabs>
    </div>
</template>
<style>
.ConS{
  clear:both;
  margin-top: 48px;
}
.el-tabs__item{
  padding: 0 19px;
}
</style>
<script>
    export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
