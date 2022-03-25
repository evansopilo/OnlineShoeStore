<template>
    <div class="hero" style="height:90vh">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Shoe Shop
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                </p>
                <div class="hero-btn mt-5">
                    <button class="btn btn-primary m-2">Explore</button>
                    <button class="btn btn-outline-secondary m-2">Products</button>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <!-- <img src="../images/sport-running-shoes.jpg" alt=""> -->
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "hero",
  props: {
    msg: String
  }
};
</script>

<style scoped>
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }
</style>