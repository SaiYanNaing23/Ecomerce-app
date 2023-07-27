<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 mt-4" v-for="product in products" :key="product.id">
                <div class="card">
                    <div class="card-body text-center">
                        <img :src="product.images[0]" class="p-image" alt="Products Image">
                        <h4 class="mt-4">{{product.title}}</h4>
                        <p class="my-3 text-muted fw-bold">${{product.price}}</p>
                        <router-link :to="`/product/${product.id}`" class="btn btn-primary d-grid">More Detail</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios"
export default {
    name: "ProductsNameVue",
    data(){
        return{
            products : []
        }
    },
    created(){
        // axios.get("https://dummyjson.com/products")
        // .then(Response => {this.products = Response.data})
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(json => {this.products = json.products
        console.log(json,this.products)});
    }
}
</script>

<style>
.p-image{
    height: 150px;
}
</style>