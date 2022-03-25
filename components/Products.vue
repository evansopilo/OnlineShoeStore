<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Top Products</h1>
          <div class="row">
             <product-card v-for="i in 6" v-bind:key="i"/>
         </div>
      </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue"
export default {
  name: "products",
  components:{
      "product-card":ProductCard
  }
  
};
</script>
