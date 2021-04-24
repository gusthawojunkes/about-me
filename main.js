const DEFAULT_CONTENT = {
    full_name: "Gusthawo Junkes",
    f_name: "Gusthawo",
    l_name: "Junkes",
    getAge: () => {
        born_date = new Date("2002/10/17")
        return Math.trunc((new Date() - born_date) / (31557600000))
    }
}

getContentByLang = (lang, type) => {
    for (item in lang[type]) document.getElementById(`info-${type}`).innerHTML += `<li>- ${lang[type][item]}</li>`
}

switchLang = (lang) => {
    let language = lang.toString() == 'EN_US' ? EN_US : PT_BR
    let headLang = lang.toString() == 'EN_US' ? HEADING_EN_US : HEADING_PT_BR

    document.documentElement.lang = lang.toString() == 'EN_US' ? 'en' : 'pt-br'

    for (index in CONTENT_POS) {
        document.getElementById(`info-${index}`).innerHTML = ''
        getContentByLang(language, index)
    }

    for (index in HEADINGS) {
        let element = document.getElementById(HEADINGS[index])
        element.innerHTML = ''
        element.innerHTML += headLang[index]
    }
}

format_date = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const HEADINGS = ['heading-0', 'heading-connect', 'heading-1']

const CONTENT_POS = [
    ABOUT_POS = 0,
    SCHOOLING_POS = 1
]

const HEADING_PT_BR = ['Sobre mim', 'Conecte-se comigo!', 'Escolaridade']
const HEADING_EN_US = ['About me', 'Connect with me!', 'Schooling']

const EN_US = [
    about = { 
        born_text: 'I was born in 2002, I am currently ' + DEFAULT_CONTENT.getAge() + ' years old',
        info1: 'My first contact with programming was in 2018',
        info2: 'The first programming language I learned was Python',
        info3: 'I always prefer the dark theme'
    },
    schooling = {
        info1: 'In 2020, I started studying Software Engineering at the University "Católica de Santa Catarina"',
    }
]

const PT_BR = [
    about = {
        born_text: 'Eu nasci em 2002, atualmente eu tenho ' + DEFAULT_CONTENT.getAge() + ' anos',
        info1: 'Meu primeiro contato com programação foi em 2018',
        info2: 'A primeira linguagem de programação que eu aprendi foi Python',
        info3: 'Eu sempre prefiro o tema escuro'
    },
    schooling = {
        info1: 'Em 2020, comecei a estudar Engenharia de Software na Universidade Católica de Santa Catarina'
    }
]

document.getElementById('nameAndAge').innerHTML += DEFAULT_CONTENT.full_name
switchLang(EN_US)