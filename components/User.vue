<template>
    <nuxt-link to="/account" class="user">
        <div class="user__avatar">
            <img :src="require(`~/assets/images/common/${userData.avatar}`)" alt="">
        </div>
        <div class="user__information">
            <p class="user__name">{{ userData.name }}</p>
            <p class="user__status">{{ userData.status }}</p>
        </div>
    </nuxt-link>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'User',
    computed: {
        ...mapState({
            userData: state => state.currentUser
        })
    }
}
</script>

<style scoped lang="scss">
    .user {
        display: flex;
        align-items: center;

        &__avatar {
            width: 40px;
            height: 40px;
            border-radius: 40px;
            margin: 0 15px 0 0;
            overflow: hidden;

            img {
                widows: 100%;
                height: 100%;
                object-fit: coover;
            }
        }

        &__information {
            p {
                margin: 0;
                color: black;
                line-height: 1.1em;
            }
        }

        &__name {
            margin: 0 0 10px 0;
            font-weight: 900;
        }
    }
</style>
