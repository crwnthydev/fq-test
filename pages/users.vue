<template>
    <section class="section">
        <h1>Пользователи</h1>
    </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    layout (context) {
        return 'default'
    },
    name: 'UsersPage',
    head() {
        return {
            title: 'Test | Пользователи'
        }
    }
})
</script>
