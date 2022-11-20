<template>
    <section class="section">
        <h1>Главная</h1>
    </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    layout (context) {
        return 'default'
    },
    name: 'Homepage',
    head() {
        return {
            title: 'Test | Главная'
        }
    }
})
</script>
