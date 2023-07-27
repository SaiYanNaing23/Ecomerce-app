<template>
<div>
  <img class="img-fluid" src="https://deo.shopeemobile.com/shopee/shopee-careers-live-sg/assets/img/about_banner.e9cf3a60.jpg" alt="">
  <div class="text-center mt-10">
    <h3 class="my-5 fw-bold">Doe &mdash; Shop is the leading e-commerce platform in Southeast Asia and Taiwan.</h3>
    <p class="text-muted mt-5">Launched in 2015, it is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support.
    </p>
    <p>We believe online shopping should be accessible, easy and enjoyable. This is the vision Shopee aspires to deliver on the platform, every single day.</p>
  </div>
  <div class="text-center about-btn-edit animate__animated animate__bounceInLeft ">
    <router-link to="/product" class="btn btn-primary py-2 px-5">Explore Shopping</router-link>
  </div>
</div>
</template>

<script>
export default {
    name: "AboutVue",
}
</script>

<style>
.about-btn-edit {
  margin-top: 3%;
}
.animate__animated.animate__bounceInLeft{
    --animate-duration: 2s;
}
</style>