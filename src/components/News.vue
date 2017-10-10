<template>
    <div class="NewS">
        <h1>{{ msg }}</h1>
    </div>
</template>
<style>
.NewS{
  clear:both;
  margin-top: 48px;
}
</style>
<script>
    export default {
        name: 'NewS',
        data () {
            return {
                msg: '资讯'
            }
        }
    }
</script>
