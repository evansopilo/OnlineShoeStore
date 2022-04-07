<template>
    <div class="container">
        <h4 class="m-2">Products Data</h4>
    </div>
    <div class="container">
        <button class="btn btn-primary m-2">Add Product</button>
    </div>
    <div class="container jumbotron mt-2 bg-light">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Desc</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Discount</th>
                </tr>
            </thead>
            <tbody>
                <ProductCard v-for="product in products" v-bind:key="product.id" v-bind:product="product" />
            </tbody>
        </table>
    </div>
</template>

<script>
import ProductCard from "../../../components/admin/ProductCard.vue"
export default {
    components:{
        ProductCard,
    },
    data(){
        return {
        products:[
            {
                "id":2,
                "title":"this is title two",
                "desc":"this is item two description",
                "image":"https://www.image.com/image/2",
                "price":114,
                "discount":8
            },
            {
                "id":2,
                "title":"this is title two",
                "desc":"this is item two description",
                "image":"https://www.image.com/image/2",
                "price":114,
                "discount":8
            },
            {
                "id":1,
                "title":"this is title one",
                "desc":"this is item one description",
                "image":"https://www.image.com/image/1",
                "price":154,
                "discount":12
            },
        ]
        }
    }
}
</script>