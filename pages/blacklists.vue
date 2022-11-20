<template>
    <section class="section">
        <h1>Черные списки</h1>
    </section>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    layout (context) {
        return 'default'
    },
    name: 'BlacklistPage',
    head() {
        return {
            title: 'Test | Черные списки'
        }
    }
})
</script>
