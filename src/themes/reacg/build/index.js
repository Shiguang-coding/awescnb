import { pageName } from '@tools'
import footer from './footer'
import mobileMenu from './mobileMenu'
import mode from './mode'
import avatar from './avatar'
import scroll from './scroll'
import catalog from './catalog'
import indexList from './indexList'
import notice from './notice'
import setIcons from './icons'
import comments from './comments'

function init() {
    // 调整 header 位置
    if (pageName() === 'index') {
        $('#header').css('padding-left', '12vw')
    }
}

function build() {
    init()
    mobileMenu()
    mode()
    avatar()
    scroll()
    catalog()
    footer()
    indexList()
    notice()
    setIcons()
    comments()
}

export default build

module.exports = build
