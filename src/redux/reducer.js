import { LIGHT_THEME, DARK_THEME } from './actions';
// ------------------------------------------------------
import { COUNTER_INC, COUNTER_DECR } from './actions';

const defaultStore = {
    theme: 'светлая тема', 
    count: 0
};

const reducer = (state = defaultStore, action) => {
    switch(action.type) {
        case "LIGHT_THEME":
            return {...state, theme: LIGHT_THEME.payload};
        case "DARK_THEME":
            return {...state, theme: DARK_THEME.payload};
        case "COUNTER_INC":
            return {...state, count: ++state.count};
        case "COUNTER_DECR":
            return {...state, count: --state.count};

        default:
            return state;
    }
};


export default reducer;