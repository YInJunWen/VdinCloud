<template>
  <div class="hello">
    <div class="block">
      <swiper :options="swiperOption" style="height: 18rem;">
        <swiper-slide class="swiper-slide-my" style="background: #abcdef;font-size: 1.5rem;">banner01</swiper-slide>
        <swiper-slide class="swiper-slide-my" style="background: gold;font-size: 1.5rem;">banner02</swiper-slide>
        <swiper-slide class="swiper-slide-my" style="background: pink;font-size: 1.5rem;">banner03</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vdin云主机',
      msg1: '123',
      swiperOption: {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        loop: true,
        // 自动开启（true） 可设置时间
        autoplay: 3000,
        // 用户点击后停止auto
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
  clear:both;
  margin-top: 48px;
}

.swiper-slide-my {
  line-height: 18rem;
}

.swiper-button-next,
.swiper-button-prev {
  height: 2rem;
  margin-top: -1rem;
}
</style>
