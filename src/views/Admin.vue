<template>
    <h2 class="text-center mt-2">Dashboard</h2>
    <div class="container d-flex text-center">
        <router-link class="nav-link" aria-current="page" to="/admin/products">Products</router-link>
        <router-link class="nav-link" aria-current="page" to="/admin/users">Users</router-link>
    </div>
    <router-view/>
</template>