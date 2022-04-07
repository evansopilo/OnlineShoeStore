<template>
    <div class="hero" style="height:92vh">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content text-white">
                <h1 class="hero-title">
                  Shoe Shop
                </h1>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos numquam tempora, iure delectus totam minus quam aperiam ratione dolores magni voluptates ut necessitatibus odio ipsum fuga, voluptas ab praesentium nihil?
                </h5>
                <div class="hero-btn mt-5">
                    <button class="btn btn-dark m-2">Explore</button>
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
  .hero{
    background-image: url("https://wallpapercave.com/wp/ZqJ3XLB.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>