<template>
    <div class="search">
        <form action="" class="search__form">
            <input type="text" class="search__input">
            <button type="submit" class="search__button">
                <img :src="require('~/assets/images/common/search-icon.png')" alt="">
            </button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped lang="scss">
    .search {
        display: flex;
        align-items: center;
        position: relative;
        height: 30px;
        width: 300px;

        &__form {
            width: 100%;
            height: 100%;
        }

        &__input {
            background-color: white;
            border: 1px solid grey;
            width: 100%;
            height: 100%;
            padding: 10px 7px;
            outline: none;
            &:focus {
                border-color: black;
            }
        }

        &__button {
            position: absolute;
            right: 0;
            top: 0;
            width: 30px;
            height: 30px;
            background: transparent;
            outline: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid transparent;
            transition: all 0.4s linear;

            img {
                width: 80%;
                height: 80%;
                max-width: 80%;
                max-height: 80%;
                object-fit: contain;

            }

            &:hover {
                border-color: black;
                background: azure;
            }
        }
    }
</style>
