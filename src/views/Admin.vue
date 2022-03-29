<template>
    <!-- Admin navbar-->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <div class="navbar-nav ms-auto">
                <router-link class="nav-link m-2" aria-current="page" to="/">Home</router-link>
                <router-link class="nav-link m-2" aria-current="page" to="/admin/products">Products</router-link>
                <router-link class="nav-link m-2" aria-current="page" to="/admin/users">Users</router-link>
            </div>
        </div>
    </nav>
    <!-- end of admin navbar-->

    <!-- router view to display admin windows -->
    <router-view/>
    <!-- end of router view to display admin windows -->
</template>