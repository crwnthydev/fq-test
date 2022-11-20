<template>
    <aside class="sidebar">
        <Logo />
        <Nav />
        <div class="sidebar__info">
            <span>?</span>
            <p>Информация</p>
        </div>
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
        min-width: 100px;
        background: azure;
        min-height: 100vh;
        border-right: 1px solid grey;
        padding: 30px;

        &__info {
            margin-top: 100px;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 30px;
            border: 2px solid black;
            color: green;
            font-size: 18px;
            font-weight: 600;
            user-select: none;
            cursor: pointer;
            position: relative;

            p {
                position: absolute;
                pointer-events: none;
                opacity: 0;
                padding: 8px;
                background-color: white;
                border: 1px solid black;
                color: black;
                font-size: 15px;
                line-height: 1.3em;
                left: 35px;
                top: -5px;
                min-width: 120px;
                z-index: 1;
            }

            &:hover {
                p {
                    opacity: 1;
                }
            }
        }
    }
</style>
