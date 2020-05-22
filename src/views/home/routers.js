import { AsyncComponent } from 'spaassy-redux'
import rootRouters from '@views/rootRouters'
import {
    SpaAssyRegister
} from 'spaassy-redux'

const spaassyRegister = new SpaAssyRegister()

const subRouters = spaassyRegister.getRouters()
let subRouterList = []
Object.keys(subRouters).map(o => {
    subRouterList.push(...subRouters[o])
})

const routers = [
    ...rootRouters,
    ...subRouterList
]

export default routers