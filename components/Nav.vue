<template>
    <ul class="nav">
        <li class="nav__item" v-for="link in navData" :key="link.id">
            <nuxt-link class="nav__link" :to="link.address" v-html="link.name"></nuxt-link>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Nav',
    computed: {
        ...mapState({
            navData: state => state.navData,
            currentPage: state => state.currentPage
        })
    }
}
</script>

<style scoped lang="scss">
    .nav {
        margin: 90px 0 0 0;
        list-style-type: none;
        padding: 0;

        &__item {
            width: 120px;
            height: 120px;
            margin: 0 0 20px 0;

            &:last-of-type {
                margin: 0;
            }
        }
        

        &__link {
            display: flex;
            align-items: center;
            justify-content: center;
            widows: 100%;
            height: 100%;
            border: 2px solid grey;
            transition: 0;
            color: black;
            padding: 10px;
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            border-radius: 6px;

            &.nuxt-link-exact-active {
                color: lightseagreen;
                border-color: lightseagreen;
            }

            &:hover {
                transition: all 0.3s linear;
                color: green;
                border-color: green;
            }

            &:active {
                transition: 0;
                color: grey;
                border-color: grey;
            }

        }
    }
</style>
