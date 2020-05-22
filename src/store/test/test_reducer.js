import {
    createReducer
} from 'spaassy-redux'

let initial = {
    str: 'welcome to spaassy!'
}

export default createReducer(initial, {
    ['SETTEST']: (state, data) => {
        return Object.assign({}, state, {
            str: data
        })
    }
})