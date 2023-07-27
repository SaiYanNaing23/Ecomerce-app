<template>
  <div class="contain mt-5">
    <div class="row justify-content-center">
        <div class="d-flex justify-content-center mt-5 edit">
            <div><img src="@/assets/login.png" alt="Login Photo" width="400px" class="img-fluid"></div>
            <div class="card col-md-4 ms-5">
                <div class="card-body">
                    <div class="alert alert-danger" v-if="message">{{message}}</div>
                    <h3 class="mt-2">Login</h3>
                    <form @submit.prevent="login">
                        <div class="input-group mt-5 mb-3">
                            <input v-model="email" type="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input v-model="password" type="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="d-grid"><button type="submit" class="btn btn-primary  mt-4">Login</button></div>
                    </form>
                </div>
                <div class="card-footer py-3">
                    <small><span class="text-muted">Don't have an account?</span> <a href="">Register</a></small>
                </div>
            </div>
        </div>
        <div class="card col-md-4 mt-5">
            <h4 class="text-center p-4">Please use this email and password to Login</h4>
            <p><span class="me-5">Email:</span> saiyannaing@user.com</p>
            <p><span class="me-3">Password:</span> 3333333</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "LoginVue",
    data(){
        return{
            email : "",
            password : "",
            message : "",
        }
    },
    methods : {
        login(){
            if(this.email === "saiyannaing@user.com" && this.password === "3333333"){
                localStorage.setItem("auth",this.email)
                this.$router.push("/profile");
            }else{
                this.message = "Email or Password is incorrect"
            }
            this.email = "";
            this.password = "";
        }
    }
}
</script>

<style>

</style>