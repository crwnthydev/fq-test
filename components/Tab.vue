<template lang="html">
    <div v-show="isActive" class="tab">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'tab',
        props: {
            title: {
                type: String,
                default: 'Tab'
            }
        },
        data () {
            return {
                isActive: true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tab-component {
        padding-top: 15px;
    }
</style>