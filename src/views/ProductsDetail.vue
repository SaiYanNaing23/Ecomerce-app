<template>
    <div class="container">
        <!-- <h1 >Loading ...</h1>
          <v-progress-circular
            :size="70"
            :width="7"
            color="purple"
            indeterminate
            v-if="loading"
            ></v-progress-circular> -->
            <v-progress-circular
                indeterminate
                :size="70"
                :width="7"
                color="primary"
                v-if="loading"
                class="loading-edit"
            ></v-progress-circular>
            <div v-else class="row mt-5 detail-edit">
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
            <v-footer
                fluid
                dark
                padless
                class="footer"
            >
                <v-card
                flat
                tile
                class="indigo lighten-1 white--text text-center"
                >
                <v-card-text>
                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 white--text"
                    icon
                    >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                    </v-btn>
                </v-card-text>

                <v-card-text class="white--text pt-0">
                    Understanding people is the key to successful leadership. In Shopee, we think it is crucial to understand how to deliver the best experience, for employees, partners and customers.Shopee celebrates its birthday every December 12, with celebrations across our various local offices, and alongside our 12.12 Birthday Sale.
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Doe &mdash; Ko Shop</strong>
                </v-card-text>
                </v-card>
            </v-footer>
    </div>
</template>

<script>
export default {
    name: "ProductsDetail",
    data(){
        return{
            loading : false,
            product :{},
            icons: [
                'mdi-facebook',
                'mdi-twitter',
                'mdi-linkedin',
                'mdi-instagram',
            ],
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
.loading-edit{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.detail-edit{
    position: relative;
    top: 10%;
}
.footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;

}
</style>