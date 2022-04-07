<template>
    <tr>
      <th scope="row">3</th>
      <td>{{ product.title }}</td>
      <td>{{ product.desc }}</td>
      <td>{{ product.image }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.discount }}</td>
      <a class="nav-link" data-bs-toggle="modal" data-bs-target="#product">Edit</a>
    </tr>
<ProductModal v-bind:product="product"/>
</template>

<script>
import ProductModal from "./ProductModal.vue"
export default {
    props:['product'],
    components:{
      ProductModal
    }
}
</script>