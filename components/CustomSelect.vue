<template>
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
        <div class="custom-select__selected" :class="{ open: open }" @click="open = !open">
                <div class="custom-select__icon"></div>
            {{ selected.name }}
        </div>
        <Transition name="slide">
            <div class="custom-select__items"  v-show="open">
                <div class="custom-select__item" :class="{ '_item-selected': option === selected }"
                    v-for="(option, i) of options"
                    :key="i"
                    @click="
                        selected = option;
                        open = false;
                        $emit('input', option.value);
                    "
                    >
                    {{ option.name }}
                </div>
            </div>
        </Transition>
    </div>
</template>
<script>
export default {
    name: 'custom-select',
    props: {
        options: {
            type: Array,
            required: true
        },
        default: {
            required: false,
            default: null
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0
        }
    },
    data() {
        return {
            selected: this.default
            ? this.default
            : this.options.length > 0
            ? this.options[0]
            : null,
            open: false
        }
    }
}
</script>
<style scoped lang="scss">
    .custom-select {
        position: relative;
        width: 100%;
        text-align: left;
        outline: none;
        height: 30px;
        line-height: 30px;

        &__selected {
            background-color: white;
            color: grey;
            padding-left: 2em;
            cursor: pointer;
            user-select: none;
            height: 30px;
        }

        &__icon {
            position: absolute;
            top: 50%;
            right: 22px;
            width: 10px;
            height: 4px;
            transform: rotate(0);
            pointer-events: none;
            &:before,
            &:after {
                content: '';
                position: absolute;
                width: 6px;
                height: 1px;
                background-color: grey;
                transition: all 0.3s linear;
            }
            &:before {
                transform: rotate(40deg);
                left: 0;
            }
            &:after {
                transform: rotate(-40deg);
                right: 0;
            }

            .open & {
                &:before {
                    transform: rotate(-40deg);
                }
                &:after {
                    transform: rotate(40deg);
                }
            }
        }

        &__items {
            color: black;
            overflow: hidden;
            position: absolute;
            background-color: white;
            left: 0;
            right: 0;
            z-index: 1;
            border: 1px solid grey;
            border-top: none;
            z-index: 2;

            div {
                color: black;
                padding-left: 2em;
                cursor: pointer;
                user-select: none;

                &:hover {
                    background-color: grey;
                    color: white;
                }
            }
        }
    }
    .slide-enter-active {
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
    }

    .slide-leave-active {
        -moz-transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;
        -o-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }

    .slide-enter-to, .slide-leave {
        max-height: 100px;
        overflow: hidden;
    }

    .slide-enter, .slide-leave-to {
        overflow: hidden;
        max-height: 0;
    }
</style>
