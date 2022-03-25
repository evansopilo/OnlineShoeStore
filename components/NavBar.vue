<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link class="navbar-brand" aria-current="page" to="/">Shoe Shop</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" aria-current="page" to="/products">Products</router-link>
                </li>
                 <li class="nav-item">
                    <a class="nav-link" href="#">Cart</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User Icon
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#profile">Profile</a></li>
                    <li><a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#signIn">Sign In</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Log Out</a></li>
                </ul>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
    <Profile/>
    <SignIn/>
</template>

<script>
import Profile from "../components/Profile.vue"
import SignIn from "../components/SignIn.vue"
export default {
    components:{
        Profile,
        SignIn
    }
}
</script>