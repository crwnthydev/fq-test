<template>
    <aside class="sidebar">
        <Logo />
        <Nav />
    </aside>
</template>

<script>
import Logo from '@/components/Logo'
import Nav from '@/components/Nav'

export default {
    name: 'Sidebar',
    components: {
        Logo,
        Nav
    }
}
</script>

<style lang="scss" scoped>
    .sidebar {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-width: 200px;
        background: azure;
        min-height: 100vh;
        border-right: 1px solid grey;
        padding: 30px;
    }
</style>
