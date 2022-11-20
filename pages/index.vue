<template>
    <section class="section">
        <div class="wrapper">
            <Tabs>
                <Tab v-for="tab in tabsData" :key="tab.tabId" :title="tab.tabTitle">
                    <Form 
                        v-if="tab.tabId === 'tab05'" 
                        :heading="'Добавить опрос'"
                    />
                </Tab>
            </Tabs>
        </div>
    </section>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'

import Tab from '@/components/Tab'
import Tabs from '@/components/Tabs'
import Form from '@/components/Form'

export default Vue.extend({
    layout (context) {
        return 'default'
    },
    name: 'IndexPage',
    head() {
        return {
        title: 'Test | Опросы'
        }
    },
    components: {
        Tabs,
        Tab,
        Form
    },
    computed: {
        ...mapState({
            tabsData: state => state.tabsData
        })
    }
})
</script>

<style scoped lang="scss">
    .wrapper {
        width: 100%;
        max-width: 980px;
    }
</style>
