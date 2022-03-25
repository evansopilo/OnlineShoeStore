<template>
  <div class="home">
    <NavBar/>
    <Hero/>
    <Products/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue"
import Hero from "../../components/Hero.vue"
import Products from  "../../components/Products.vue"
import Footer from "../../components/Footer.vue"
export default {
  name: 'Home',
  components: {
    NavBar,
    Hero,
    Products,
    Footer,
  }
}
</script>
