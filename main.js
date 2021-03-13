const ABOUT_POS = 0
const SCHOOLING_POS = 1

getContentByLang = (lang, type) => {
    for (item in lang[type]) document.getElementById(`info-${type}`).innerHTML += `<li>- ${lang[type][item]}</li>`
}

const DEFAULT_CONTENT = {
    full_name: "Gusthawo Junkes",
    f_name: "Gusthawo",
    l_name: "Junkes",
    getAge: () => {
        let today = new Date()
        format_date = (date) => {
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        }
        born_date = new Date("2002/10/17")
        return format_date(today)
    }
}

const EN_US = [
    about = {
        born_text: 'I was born in 2002',
        info1: 'My first contact with programming was in 2018',
        info2: 'The first programming language I learned was Python',
        info3: 'I always prefer the dark theme'
    },
    schooling = {
        info1: 'In 2020 I started studying Software Engineering at the University "Católica de Santa Catarina"',
    }
]

const PT_BR = [
    about = {
        born_text: 'Eu nasci em 2002',
        info1: 'Meu primeiro contato com programação foi em 2018',
        info2: 'A primeira linguagem de programação que eu aprendi foi Python',
        info3: 'Eu sempre prefiro o tema escuro'
    },
    schooling = {
        info1: 'Em 2020 comecei a estudar Engenharia de Software na Universidade Católica de Santa Catarina'
    }
]

getContentByLang(EN_US, ABOUT_POS)
getContentByLang(EN_US, SCHOOLING_POS)