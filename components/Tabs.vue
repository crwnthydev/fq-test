<template lang="html">
    <div class="tabs">
        <div class="tabs-wrapper">
            <ul class="list">
                <li
                    v-for="(tab, index) in tabs"
                    :key="tab.title"
                    class="item"
                    :class="{'tab__selected': (index === selectedIndex)}"
                    @click="selectTab(index)"
                    >
                    {{ tab.title }}
                </li>
            </ul>
        </div>
        <slot />
    </div>
</template>
  
<script>
    export default {
        name: 'tabs',
        props: {

        },
        data () {
            return {
                selectedIndex: 0,
                tabs: []
            }
        },
        created () {
            this.tabs = this.$children
        },
        mounted () {
            this.selectTab(4)
        },
        methods: {
            selectTab (i) {
                this.selectedIndex = i
                this.tabs.forEach((tab, index) => {
                    tab.isActive = (index === i)
                })
            }
        }
    }
</script>
  
<style lang="scss" scoped>
    .tabs {
        .list {
            display: flex;
            overflow-x: auto;
            justify-content: space-between;
            max-width: 100vw;
            margin: 0;
            padding: 0;
        }

        .tabs-wrapper {
            overflow-x: auto;
            max-width: 100vw;
            -ms-overflow-style: none!important;
            scrollbar-width: none!important;
            position: relative;
            border-bottom: 1px solid green;
            margin-bottom: 40px;
        }

        .item {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 130px;
            min-height: 40px;
            letter-spacing: 0.02em;
            color: green;
            background: white;
            padding: 11px 14px;
            margin: 0 24px 0 0;
            cursor: pointer;
            &:last-of-type {
                margin: 0;
            }
            @media (max-width: 1120px) {
                min-width: 70px;
                padding: 10px;
                margin: 0 10px 0 0;
            }
        }

        .tab__selected {
            color: black;
            font-weight: bold;
            border-bottom: 2px solid green;
        }
    }
</style>
  