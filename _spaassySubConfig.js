import {
    SpaAssyRegister
} from 'spaassy-redux'
import reducers from '@store'
import routers from '@/views/rootRouters'

// example:
const namespace = process.env.SYSTEMNAME

let option = {
    namespace: namespace,
    routers: [...routers],
    reducers: {
        ...reducers
    }
}
const spaassyRegister = new SpaAssyRegister(option)

spaassyRegister.addRouters()
spaassyRegister.registerReducer()
