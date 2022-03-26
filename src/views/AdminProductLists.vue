<template>
    <div class="container">
        <div class="container bg-light">
            <div class="bg-light">
                <h1 class="text-center p-5">Products</h1>
            </div>
          <div class="row m-4">
              <AdminProductCard v-for="i in 30" v-bind:key="i"/>
          </div>
        </div>
    </div>
</template>

<script>
import AdminProductCard from "../../components/AdminProductCard.vue"
export default {
    components:{
        AdminProductCard
    }
}
</script>