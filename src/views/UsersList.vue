<template>
    <div class="container">
        <div class="container bg-light">
            <div class="bg-light">
                <h1 class="text-center">Users</h1>
            </div>
          <div class="row">
              <UserCard v-for="i in 30" v-bind:key="i"/>
          </div>
        </div>
    </div>
</template>

<script>
import UserCard from "../../components/UserCard.vue"
export default {
    components:{
        UserCard
    }
}
</script>