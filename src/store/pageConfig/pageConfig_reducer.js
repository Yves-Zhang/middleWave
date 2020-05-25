import { createReducer } from 'spaassy-redux';

let initial = {
	config: null
};

export default createReducer(initial, {
	['SETCONFIG']: (state, data) => {
		return Object.assign({}, state, {
			config: data
		});
	}
});
