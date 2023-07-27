<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Doe &mdash; Ko Shop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
        <router-link to="/" class="nav-link active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/product" class="nav-link" href="#">Products</router-link>
        </li>
        <li class="nav-item">
        <router-link to="/about" class="nav-link" href="#">About</router-link>

        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link" href="#">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" href="#">Login</router-link>
        </li>
        <li class="nav-item">
          <a @click="logout"  class="nav-link" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "NavBar",
    data(){
      return{
        item : localStorage.getItem("auth")
      }
    },
    methods :{
      logout(){
        localStorage.clear()
        this.$router.push("/login")
      }
    }
}
</script>

<style>

</style>