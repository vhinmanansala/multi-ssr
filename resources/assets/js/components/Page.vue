<template>
    <h3>{{ user }}</h3>
</template>

<script>
    export default {
        computed: {
            name() {
                let name = this.$router.name || this.$router.currentRoute.name;
                return `Hello from the ${name} page`;
            },
            user() {
            	return this.$store.state.user
            }
        },
        serverPrefetch () {
            // return the Promise from the action
            // so that the component waits before rendering
            return this.getUser();
        },
        mounted () {
            this.getUser()
        },
        methods: {
            getUser() {
                return this.$store.dispatch('getUser');
            }
        }
    }
</script>
