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
        grid-template-columns: 210px auto;
        grid-template-rows: 80px auto;
        @media (max-width: 900px) {
            grid-template-areas:
                "header header"
                "content content";
        }
        .header {
            grid-area: header;
        }
        .sidebar {
            grid-area: sidebar;
            @media (max-width: 900px) {
                display: none;
            }
        }
        .main {
            grid-area: content;
        }
        .section {
            padding: 30px 70px;
            @media (max-width: 900px) {
                padding: 30px;
            }
        }
    }
</style>
  