<template>
    <section class="section">
        <h1>Личный кабинет</h1>
        <p>{{ userData.name }}</p>
        <p>{{ userData.status }}</p>
    </section>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
    layout (context) {
        return 'default'
    },
    name: 'AccountPage',
    computed: {
        ...mapState({
            userData: state => state.currentUser
        })
    },
    head() {
        return {
            title: 'Test | Личный кабинет'
        }
    }
})
</script>
