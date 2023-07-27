<template>
  <div class="container mt-5">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body text-center my-4">
          <img src="@/assets/profile.svg" alt="profile image" width="100px" class="mb-5">
          <h1 class="mb-5">Sai Yan Naing</h1>
          <p class="text-muted fw-bold">saiyannaing@gmail.com</p>
          <p class="mb-5">+959799790472</p>
          </div>
          <div class="card-footer text-end">
            <router-link to="/product" class="btn btn-outline-primary">Show Products</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name : "ProfileVue"
}
</script>

<style>

</style>