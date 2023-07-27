<template>
    <div class="container">
        <h1 v-if="loading">Loading ...</h1>
        <div v-else class="row mt-5">
            <div class="col-md-4 p-5">
                <img :src="product.thumbnail" class="img-fluid" alt="Product Image">
            </div>
            <div class="col-md-6 p-5">
                <h1 class="display-4 mb-3">{{product.title}}</h1>
                <div class="h3 text-muted mb-2">${{product.price}}</div>
                <div class="mb-5">{{product.description}}</div>
                <div class="d-flex justify-content-between">
                    <div>
                        <router-link to="/product" class="btn btn-outline-secondary">Go Back</router-link>
                    </div>
                    <div class="btn btn-primary">Add To Card</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductsDetail",
    data(){
        return{
            loading : false,
            product :{},
        }
    },
    created (){
        this.loading = true,
        fetch(`https://dummyjson.com/products/${this.$route.params.id}`)
        .then(res => res.json())
        .then(json => {this.product = json
        this.loading = false}).catch(() => this.loading = false);
        
    }
}
</script>

<style>

</style>