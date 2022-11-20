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

const crumbRouteNames = {
    index: 'Опросы',
    users: 'Пользователи',
    blacklists: 'Черные списки',
    callcentre: 'Колл-центр',
    account: 'Личный кабинет'
}

const pageTabs = [
    {
        tabId: 'tab01',
        tabTitle: 'Параметры'
    },
    {
        tabId: 'tab02',
        tabTitle: 'Вопросы'
    },
    {
        tabId: 'tab03',
        tabTitle: 'Логика'
    },
    {
        tabId: 'tab04',
        tabTitle: 'Условия'
    },
    {
        tabId: 'tab05',
        tabTitle: 'Респонденты'
    }
]

const formTypes = [
    {
        value: 'none',
        name: 'Выберите условие'
    },
    {
        value: 'age',
        name: 'Возраст респондента'
    },
    {
        value: 'cardType',
        name: 'Тип карты лояльности'
    },
    {
        value: 'cardStatus',
        name: 'Статус карты лояльности'
    }
]


const formCardTypes = [
    {name: 'Тип 1', value: 'cardtype1'}, 
    {name: 'Тип 2', value: 'cardtype2'}, 
    {name: 'Тип 3', value: 'cardtype3'}
]

const formCardStatuses = [
    {name: 'Статус 1', value: 'cardstatus1'},
    {name: 'Статус 2', value: 'cardstatus2'},
    {name: 'Статус 3', value: 'cardstatus3'}
]

export const modules = {

}

export const state = () => ({
    currentUser: user,
    navData: navLinks,
    tabsData: pageTabs,
    crumbRoutes: crumbRouteNames,
    formSections: [{id: 0}],
    formSelections: formTypes,
    cardTypes: formCardTypes,
    cardStatuses: formCardStatuses,
})

export const actions = {

}

export const mutations = {
    ADD_FORM_SECTION (state, section) {
        state.formSections.push(section)
    },
    REMOVE_FORM_SECTION (state, id) {
        state.formSections = state.formSections.filter(i => i.id !== id)
    }
}

export const getters = {

}

export default {
    state,
    mutations
}
