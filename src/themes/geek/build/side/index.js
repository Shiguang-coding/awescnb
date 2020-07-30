import './index.scss'
import { getMonth, getQuarter } from '@tools'
import { getUsername } from '@cnblog'

const flat = () => {
    $('#sideBar').appendTo($('#home'))
}

const buildCalendar = () => {
    $('#sidebar_news').before($('#calendar'))
    // https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80
    const background = 'https://api.ixiaowai.cn/mcapi/mcapi.php'
    const month = getMonth()
    const instance = new Date()
    const year = instance.getFullYear()
    const date =
        instance.getDate() < 10 ? '0' + instance.getDate() : instance.getDate()

    // const quarter = Math.floor(
    //     currMonth % 3 == 0 ? currMonth / 3 : currMonth / 3 + 1,
    // )
    const el = `
    <div class="event-wrapper">
        <img src="${background}" class="event-img">
        <div class="event-date">
            <div class="event-month">${month}</div>
            <div class="event-day">${date}</div>
        </div>
        <div class="event-title">${getQuarter()} Wonderland</div>
        <div class="event-subtitle">${date} ${month}, ${year}</div>
    </div>
    `
    $('#calendar').prepend(el)
}

const buildTopBtns = () => {
    // const userName = 'Quan Ha'
    const { avatar } = window.opts.theme
    const el = `
    <div class="account">
        <button class="account-button">
            <li class="fas fa-envelope"></li>
        </button>
        <button class="account-button">
            <a href="https://msg.cnblogs.com/"><li class="fas fa-bell"></li></a>
        </button>
        <span class="account-user">${getUsername()}
            <img src="${avatar}" alt="" class="account-profile">
            <span>▼</span>
        </span>
    </div>`
    $('#sideBarMain').prepend(el)
}

const side = () => {
    flat()
    buildTopBtns()
    buildCalendar()
}

module.exports = side
