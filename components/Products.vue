<template>
  <section style="background-color: #eee;">
    <div class="container py-5">
      <div class="row justify-content-center">
        <ProductCard v-for="i in 9" v-bind:key="i"/>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCard from "../components/ProductCard.vue"
export default {
  name: "products",
  components:{
      ProductCard
  }
};
</script>
