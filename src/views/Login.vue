<template>
    <div class="login-ct">
        <h3>Login</h3>
        <b-form-group label="Email" label-for="email">
            <b-form-input
                    id="email" v-model="credential.email" placeholder="Enter email" type="email" :state="validateState('email')"></b-form-input>
        </b-form-group>
        <b-form-group label="Password" label-for="password">
            <b-form-input id="password" v-model="credential.password" placeholder="Enter your password" type="password" :state="validateState('password')"></b-form-input>
        </b-form-group>
        <b-button type="button" @click="submit()">
            Login
            <b-spinner v-if="status == 'loading'" label="Spinning" :small="true"></b-spinner>
        </b-button>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import {required, email} from 'vuelidate/lib/validators';

    export default {
        name: 'Login',
        data() {
            return {
                credential: {
                    email: '',
                    password: ''
                }
            }
        },
        validations: {
            credential: {
                email: {required, email},
                password: {required}
            }
        },
        methods: {
            ...mapActions({
                'login': 'authentication/login'
            }),
            validateState(name) {
                const { $dirty, $error } = this.$v.credential[name];
                return $dirty ? !$error : null;
            },
            submit() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    this.login(this.credential);
                }
            }
        },
        computed: {
            ...mapState({
                status: state => state.authentication.status,
            }),
        }
    }
</script>

<style lang="scss">
    .login-ct {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 20px;
        border: 1px solid grey;
        width: 350px;
    }
</style>