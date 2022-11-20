<template>
    <form class="form" action="/api/form" @submit.prevent="submitForm">
        <h3 class="form__heading">{{ heading }}</h3>
        <div class="form__wrapper">
            <h3 v-if="formSections.length === 0" class="form__empty">Пожалуйста, добавьте новое условие</h3>
            <FormSection
                v-for="(section, i) in formSections"
                :key="`form-section-${i}`"
                :sectionId="section.id"
                :sectionNumber="i"
                @typeChange="typesDataUpdate"
                @statusChange="statusesDataUpdate"
            />
            <button class="form__submit" type="submit">Далее</button>
            <button class="form__add-section" @click.prevent="addSection">
                <span>+</span>
                <p>Нажмите, чтобы добавить новое условие выборки.<br>Все условия связываются между собой логическим "И"</p>
            </button>
        </div>
        <div ref="alerts" class="alerts" @click="hideAlert">
            <div class="alert">
                <p class="alert__message">{{ alertMessage }}</p>
            </div>
        </div>
    </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CustomSelect from '@/components/CustomSelect'
import FormSection from '@/components/FormSection'

export default {
    name: 'Form',
    data() {
        return {
            ageValues: [],
            formTypesData: [],
            formStatusesData: [],
            alertMessage: ''
        }
    },
    components: {
        CustomSelect,
        FormSection
    },
    props: {
        heading: {
            type: String,
            default: 'Форма'
        }
    },
    computed: {
        ...mapState({
            formSections: state => state.formSections
        })
    },
    methods: {
        callAlert() {
            this.$refs.alerts.classList.add('_visible')
        },
        hideAlert(event) {
            this.$refs.alerts.classList.remove('_visible');
            this.alertMessage = ''
        },
        throwSelect(selectVal) {
            this.$refs.selectValue1.value = selectVal;
            console.debug(this.$refs.selectValue1.value)
        },
        addSection() {
            const newSection = {id: Date.now()}
            this.ADD_FORM_SECTION(newSection)
        },
        ...mapMutations({
            ADD_FORM_SECTION: 'ADD_FORM_SECTION'
        }),
        getAgesData(event) {
            if(event.target.elements.minAge && event.target.elements.maxAge) {
                if(event.target.elements.minAge.length > 1 && event.target.elements.maxAge.length > 1) {
                event.target.elements.minAge.forEach((age, index) => {
                    const newPair = {};
                    newPair.ageFrom = age.value;
                    newPair.ageTo = event.target.elements.maxAge[index].value
                    this.ageValues.push(newPair)
                })
                } else {
                    const newPair = {};
                    newPair.ageFrom = event.target.elements.minAge.value;
                    newPair.ageTo = event.target.elements.maxAge.value;
                    this.ageValues.push(newPair)
                }
            }
        },
        typesDataUpdate(data) {
            this.formTypesData = data
        },
        statusesDataUpdate(data) {
            this.formStatusesData = data
        },
        packFormData() {
            const thisFormData = [];
            if (this.ageValues.length > 0) {
                thisFormData.push(this.ageValues)
            }
            if (this.formTypesData.length > 0) {
                thisFormData.push(this.formTypesData)
            }
            if (this.formStatusesData.length > 0) {
                thisFormData.push(this.formStatusesData)
            }
            return thisFormData
        },
        submitForm(event) {
            const formUrl = event.target.action;
            this.getAgesData(event);
            if(this.packFormData().length === 0) {
                this.alertMessage = 'Пожалуйста, введите данные'
                this.callAlert()
            } else {
                const newJson = JSON.stringify(this.packFormData())
                fetch(formUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: newJson
                }).then(async (response) => {
                    if (response.status == 200) {
                        this.alertMessage = 'Данные успешно отправлены'
                        this.callAlert();
                    } else {
                        this.alertMessage = "Данные не были отправлены";
                        this.callAlert();
                    }
                }).catch((error) => {
                    console.error(error);
                })
            }
        },
    }
}
</script>

<style scoped lang="scss">
    .form {
        padding: 24px;
        background: lightgoldenrodyellow;
        border: 1px solid grey;
        border-radius: 6px;
        &__heading {
            margin: 0 0 22px 0;
            padding: 0 0 16px 0;
            border-bottom: 2px solid grey;
            font-size: 16px;
            line-height: 1.3em;
            font-weight: 600;
            opacity: 0.9;
            color: grey;
        }
        &__wrapper {
            display: flex;
            flex-direction: column;
        }
        &__submit {
            align-self: flex-end;
            border: 1px solid green;
            background: white;
            color: green;
            border-radius: 6px;
            padding: 4px 24px;
            align-self: flex-end;
            margin-right: 20px;
            cursor: pointer;
        }
        &__add-section {
            margin: 22px 20px 0 20px;
            background-color: white;
            border: 1px solid green;
            color: green;
            border-radius: 6px;
            padding: 8px;
            cursor: pointer;

            span {
                font-size: 22px;
                font-weight: 600;
                margin: 0 0 10px 0;
                cursor: pointer;
            }
            p,span {
                pointer-events: none;
            }
        }
    }
    .alerts {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: none;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 22;

        &._visible {
            display: flex;
        }

        .alert {
            padding: 30px 25px;
            border-radius: 6px;
            border: 1px solid grey;
            background-color: white;
            display: flex;
            align-items: center;
            justify-content: center;

            &__message {
                color: black;
                font-weight: 600;
                font-size: 16px;
                line-height: 1.2em;
            }
        }
    }
</style>
