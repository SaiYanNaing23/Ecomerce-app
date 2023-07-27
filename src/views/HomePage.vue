<template>
<div>
      <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
    class="my-8"
  >
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        color="success"
        v-bind="attrs"
        v-on="on"
      >Previous slide</v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        color="info"
        v-bind="attrs"
        v-on="on"
      >Next slide</v-btn>
    </template>
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
   
    >
      <v-sheet
        :color="colors[i]"
        max-height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 text-center">
            <img :src="images[i]" class="img-fluid" alt="">
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-7">
            <h1 class="display-5 header-edit">ONLINE SHOPPING PLATFORM</h1>
            <p class="mt-10 para-edit">The feature is now available to users in Singapore, Malaysia, Thailand, Indonesia and VietnamThe largest online code league in the region the event hopes to nurture tech talent and enthusiasts, and allow them to connect from across the globe.</p>
            <div class="animate__animated animate__backInLeft mt-10">
                <router-link to="/product" class="btn btn-outline-primary">Explore Shopping</router-link>
            </div>
        </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    name:"HomePage",
     data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        images : [
            "https://www.apple.com/v/ipad-pro/am/images/overview/chip/performance_hero__cxya4f2p5euu_large.jpg",
            "https://theperfectmediagroup.com/wp-content/uploads/2021/03/IMG_20190906_180143-scaled-1024x576.jpg",
            "https://cdn-edjcg.nitrocdn.com/VBWSxyKIMetGynBOPkcprlqWleWuyTij/assets/images/optimized/rev-a533177/wp-content/uploads/2019/12/AdImage-zkryt2-1762x482-73980b78.png",
            "https://down-sg.img.susercontent.com/file/sg-50009109-26118f0308e23a3757edfd719e5cfe04",
            "https://cdn-edjcg.nitrocdn.com/VBWSxyKIMetGynBOPkcprlqWleWuyTij/assets/images/optimized/rev-a533177/wp-content/uploads/2019/12/AdImage-j2yp85-1762x482-930c2196.png"
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
}
</script>
<style>
.header-edit{
    word-spacing: 1px;
    font-weight: bolder;
}
.para-edit{
    letter-spacing: 1px;
    word-spacing: 1px;
    line-height: 1.8;
}
.animate__animated.animate__backInLeft{
    --animate-duration: 2s;
}
.btn-primary:link,
.btn-primary:visited {
    color: #fff;
}
</style>
