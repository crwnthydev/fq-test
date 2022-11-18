<template>
    <div class="app _layout-default">
        <Header></Header>
        <Sidebar></Sidebar>
        <main class="main">
            <Nuxt />
        </main>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

export default {
    components: {
        Header,
        Sidebar
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
    }
</style>
  