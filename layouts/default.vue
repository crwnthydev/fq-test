<template>
    <div class="app _layout-default">
        <Header></Header>
        <Sidebar></Sidebar>
        <main class="main">
            <Breadcrumbs />
            <Nuxt />
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Breadcrumbs from '@/components/Breadcrumbs'

export default {
    components: {
        Header,
        Sidebar,
        Breadcrumbs
    }
}
</script>
  
<style lang="scss" scoped>
    .app {
        display: grid;
        max-height: -webkit-fill-available;
        grid-template-areas:
            "sidebar header"
            "sidebar content";
        grid-template-columns: 256px auto;
        grid-template-rows: 80px auto;
        .header {
            grid-area: header;
        }
        .sidebar {
            grid-area: sidebar;
        }
        .main {
            grid-area: content;
        }
        .section {
            padding: 70px;
        }
    }
</style>
  