<template>
    <NavBar/>
    <div class="products-list">
        <div class="container">
          <h1 class="text-center p-5">Our Products</h1>
          <div class="row">
              <ProductCard v-for="i in 30" v-bind:key="i"/>
          </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue"
import ProductCard from "../../components/ProductCard.vue"
import Footer from "../../components/Footer.vue"
export default {
   components:{
       NavBar,
       ProductCard,
       Footer
   }
}
</script>