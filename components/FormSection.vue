<template>
    <div
        class="form-section"
        :class="{'_sec-type-0': sectionType === 'none', '_sec-type-1': sectionType === 'age', '_sec-type-2': sectionType === 'cardType', '_sec-type-3': sectionType === 'cardStatus'}"
    >
        <div class="form-section__linker">И</div>
        <div class="form-section__wrapper">
            <div class="form-section__left">
                <p class="form-section__number">Условие {{ sectionNumber + 1 }}</p>
            </div>
            <div class="form-section__right">
                <CustomSelect
                    :options="formSelections"
                    :default="formSelections[0]"
                    class="form-section__input _col-lg-9"
                    @input="throwSelect($event)"
                />

                <div v-if="sectionType === 'age'" class="form-section__range">
                    <div v-for="(range, i) in ranges" :key="range.id" class="inputsfield">
                        <p class="inputsfield__or">ИЛИ</p>
                        <p class="inputsfield__name">Тип {{ i + 1 }}</p>
                        <input name="minAge" type="number" class="form-section__input" placeholder="от">
                        <input name="maxAge" type="number" class="form-section__input" placeholder="до">
                    </div>
                    <button @click.prevent="addRange" class="form-section__add-inputs">Добавить диапазон</button>
                </div>

                <div v-if="sectionType === 'cardType'" class="form-section__select">
                    <div v-for="(cardType, i) in cardTypes" :key="cardType.id" class="inputsfield">
                        <p class="inputsfield__or">ИЛИ</p>
                        <p class="inputsfield__name">Тип {{ i + 1 }}</p>
                        <CustomSelect
                            :options="cardTypeValues"
                            :default="{name: 'Выберите тип карты', value: ''}"
                            class="form-section__input _col-lg-9"
                            @input="setCardType($event, i)"
                        />
                    </div>
                    <button @click.prevent="addCardType" class="form-section__add-inputs">Добавить тип</button>
                </div>

                <div v-if="sectionType === 'cardStatus'" class="form-section__select">
                    <div v-for="(cardType, i) in cardStatuses" :key="cardType.id" class="inputsfield">
                        <p class="inputsfield__or">ИЛИ</p>
                        <p class="inputsfield__name">Статус {{ i + 1 }}</p>
                        <CustomSelect
                            :options="cardStatusValues"
                            :default="{name: 'Выберите статус карты', value: ''}"
                            class="form-section__input _col-lg-9"
                            @input="setCardStatus($event, i)"
                        />
                    </div>
                    <button @click.prevent="addCardStatus" class="form-section__add-inputs">Добавить статус</button>
                </div>
            </div>
        </div>
        <button class="form-section__remove" @click.prevent="removeSection">Удалить условие</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import CustomSelect from '@/components/CustomSelect'

export default {
    name: 'FormSection',
    components: {
        CustomSelect
    },
    data() {
        return {
            sectionType: 'none',
            ranges: [],
            cardTypes: [],
            cardStatuses: [],
            typeValues: [],
            statusValues: []
        }
    },
    props: {
        sectionId: {
            required: true
        },
        sectionNumber: {
            required: true
        }
    },
    computed: {
        ...mapState({
            formSelections: state => state.formSelections,
            cardTypeValues: state => state.cardTypes,
            cardStatusValues: state => state.cardStatuses
        })
    },
    methods: {
        throwSelect(selectVal) {
            this.sectionType = selectVal;
        },
        setCardType(value, i) {
            this.typeValues = this.typeValues.filter(item => item.typeSelectId !== i)
            this.typeValues.push({typeSelectId: i, value:value});
            this.$emit('typeChange', this.typeValues)
        },
        setCardStatus(value, i) {
            this.statusValues = this.statusValues.filter(item => item.statusSelectId !== i)
            this.statusValues.push({statusSelectId: i, value:value});
            this.$emit('statusChange', this.statusValues)
        },
        addRange() {
            const newRange = {id: `range-${Date.now()}`}
            this.ranges.push(newRange)
        },
        addCardType() {
            const newCardType = {id: `cardType-${Date.now()}`}
            this.cardTypes.push(newCardType)
        },
        addCardStatus() {
            const newCardStatus = {id: `cardStatus-${Date.now()}`}
            this.cardStatuses.push(newCardStatus)
        },
        removeSection() {
            this.REMOVE_FORM_SECTION(this.sectionId)
        },
        ...mapMutations({
            REMOVE_FORM_SECTION: 'REMOVE_FORM_SECTION'
        })
    }
}
</script>

<style scoped lang="scss">
    .form-section {
        margin-bottom: 22px;
        padding: 25px 20px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        position: relative;

        &._sec-type-0 {
            background-color: lightblue;
        }
        &._sec-type-1 {
            background-color: lightgreen;
        }
        &._sec-type-2 {
            background-color: lightseagreen;
        }
        &._sec-type-3 {
            background-color: lightsalmon;
        }

        &__wrapper {
            display: flex;
        }

        &__left {
            width: 100%;
            max-width: 15%;
        }

        &__right {
            width: 100%;
            max-width: 85%;
        }

        &__number {
            font-size: 20;
            font-weight: 600;
            color: black;
        }

        &__linker {
            position: absolute;
            width: 31px;
            height: 31px;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-transform: uppercase;
            border-radius: 6px;
            background-color: white;
            border: 1px solid grey;
            left: 12px;
            top: -27px;
            z-index: 1;
        }

        &:first-of-type {
            .form-section__linker {
                display: none;
            }
        }

        .custom-select {
            z-index: 2;
            margin: 0 0 22px 0;
        }
        
        &__input {
            background: white;
            border: none;
            margin: 0 22px 0 0;

            &:focus {
                outline: 1px solid grey;
            }

            &._col-lg-9 {
                width: 75%;

                @media (max-width: 900px) {
                    width: 100%;
                }
            }

            &._hidden {
                display: none;
                visibility: hidden;
            }
        }

        &__remove {
            border: 1px solid lightcoral;
            background: white;
            color: red;
            border-radius: 6px;
            padding: 4px 8px;
            align-self: flex-end;
            cursor: pointer;
        }
        &__add-inputs {
            background: white;
            border: 1px solid grey;
            border-radius: 6px;
            color: grey;
            padding: 4px 8px;
            cursor: pointer;
        }
    }
    .inputsfield {
        margin: 0 0 22px 0;
        &__or {
            background-color: rgba(146, 146, 146, 0.5);
            padding: 6px;
            border-radius: 6px;
            display: inline-block;
        }
        &:first-of-type {
            .inputsfield__or {
                display: none;
            }
        }
        &__name {
            font-weight: 600;
            font-size: 14px;
        }
    }
</style>
