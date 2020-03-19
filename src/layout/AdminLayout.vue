<template>
    <div>
        <nav-bar></nav-bar>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import NavBar from "../components/NavBar";

    export default {
        name: "AdminLayout",
        components: {NavBar}
    }
</script>