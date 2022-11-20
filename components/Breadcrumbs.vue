<template>
    <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
            <nuxt-link :to="'/homepage'" class="breadcrumbs__title">
                Главная
            </nuxt-link>
        </li>
        <li v-for="(item, i) in crumbs" :key="`crumb-${i}`" class="breadcrumbs__item">
            <nuxt-link :to="item.address" class="breadcrumbs__title">
                {{ item.title }}
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Breadcrumbs',
  computed: {
    ...mapState({
        crumbRoutes: state => state.crumbRoutes
    }),
    crumbs () {
      const pathArray = this.$route.path.split('/')
      pathArray.shift()
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          address: breadcrumbArray[idx - 1]
            ? '/' + breadcrumbArray[idx - 1].path + '/' + path
            : '/' + path,
          title: this.crumbRoutes[this.$route.name]
        })
        return breadcrumbArray
      }, [])
      return breadcrumbs
    }
  }
}
</script>

<style scoped lang="scss">
    .breadcrumbs {
        padding: 30px 70px 10px 70px;
        list-style-type: none;
        margin: 0;
        display: flex;
        align-items: center;

        &__item {
            padding: 0 0 0 26px;
            position: relative;
            a {
                color: black;
                font-weight: 600;
            }
            &::before {
                content: '';
                position: absolute;
                left: 0;
                background: url('@/assets/images/common/arrow.png') no-repeat center;
                background-size: 50%;
                width: 26px;
                height: 80%;
                bottom: 0;
            }
            &:first-of-type {
                padding: 0;
                a {
                    color: rgb(63, 65, 177)
                }
                &:before {
                    display: none;
                }
            }
        }
        @media (max-width: 900px) {
            padding: 30px;
        }
    }
</style>
