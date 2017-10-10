<template>
    <div class="Mine">
        <h1>{{ msg }}</h1>
    </div>
</template>
<style>
.Mine{
  clear:both;
  margin-top: 48px;
}
</style>
<script>
    export default {
        name: 'Mine',
        data () {
            return {
                msg: '我的'
            }
        }
    }
</script>
