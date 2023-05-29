<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" aria-current="page" to="/">Vue Lab2</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"><router-link class="nav-link" aria-current="page" to="/">Home</router-link></li>
                    <li class="nav-item"><router-link class="nav-link" aria-current="page" to="/error">Error</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
name: "navBar",
};
</script>
<style scoped>
</style>
