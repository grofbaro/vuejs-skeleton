<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">Vue js skeleton</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="/users" exact exact-active-class="active">Users</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item @click="logout()">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import { mapActions } from "vuex"

    export default {
        name: "NavBar",
        methods: {
            ...mapActions({
               "logout": "authentication/logout"
            })
        }
    }
</script>