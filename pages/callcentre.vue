<template>
    <section class="section">
        <h1>Колл-центр</h1>
    </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    layout (context) {
        return 'default'
    },
    name: 'ССPage',
    head() {
        return {
            title: 'Test | Колл-центр'
        }
    }
})
</script>
