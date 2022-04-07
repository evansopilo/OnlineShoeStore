<template>
    <div class="col-md-8 col-lg-6 col-xl-4 mt-3">
      <div style="margin: 3rem auto; width: 20rem">
        <div class="card">
          <img
            src="https://www.kindacode.com/wp-content/uploads/2021/08/phone.jpg"
            class="card-img-top"
            alt="Phone"
          />
          <div class="card-body">
            <h5 class="card-title">Super Phone</h5>
            <h6 class="card-subtitle mb-2 text-muted">199$</h6>
            <p class="card-text">
              This is an awesome smartphone that can help you do a lot of thing in
              this modern era. 
            </p>
            <button class="btn btn-dark" v-on:click="addToCart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
 
  methods:{
    addToCart(){
      console.log('Add To Cart')
    }
  }
}
</script>