const user = {
    name: 'Alexander C',
    status: 'Administrator',
    avatar: 'ava.jpg'
}

const navLinks = [
    {
        name: 'Опросы',
        address: '/',
        id: 'nl1'
    },
    {
        name: 'Пользователи',
        address: '/users',
        id: 'nl2'
    },
    {
        name: 'Черные списки',
        address: '/blacklists',
        id: 'nl3'
    },
    {
        name: 'Колл-центр',
        address: '/callcentre',
        id: 'nl4'
    }
]

export const modules = {

}

export const state = () => ({
    currentUser: user,
    navData: navLinks
})

export const actions = {

}

export const mutations = {

}

export const getters = {

}

export default {
    state
}
