<template>
    <div class="modal fade" id="product" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Product</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label for="title" class="form-label">Title</label>
            <input type="text" class="form-control" id="title" placeholder="product title" v-model="title">
            <label for="desc" class="form-label">Desc</label>
            <input type="text" class="form-control" id="desc" placeholder="product description" v-model="desc">
             <label for="exampleFormControlInput1" class="form-label">Price</label>
            <input type="number" class="form-control" id="price" placeholder="product price" v-model="price">
             <label class="form-label">Discount</label>
            <input type="number" class="form-control" id="desc" placeholder="product discount" v-model="discount">
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    props:['product'],
    data() {
        return {
            title : this.$props.product.title,
            desc : this.$props.product.desc,
            price : this.$props.product.price,
            discount : this.$props.product.discount,
        }

    }
}
</script>