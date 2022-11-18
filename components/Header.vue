<template>
    <header class="header">
        <Search />
        <User />
    </header>
</template>

<script>
import User from '@/components/User'
import Search from '@/components/Search'

export default {
    name: 'Header',
    components: {
        User,
        Search
    }
}
</script>

<style lang="scss" scoped>
    .header {
        width: 100%;
        height: 90px;
        background: azure;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid grey;
        padding: 30px 70px;
    }
</style>
