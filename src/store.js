import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = (state = {
    UserLoggedIn: localStorage.getItem('user')
}, action) => {
    switch (action.type) {
        case 'SWITCH_LOGGED_IN':
            localStorage.setItem('user',JSON.stringify(action.payload));
            const user = localStorage.getItem('user');
            state = {
                ...state,
                UserLoggedInID: user
            };
            break;
    }

    return state;
};

const store = createStore(
    combineReducers({root: rootReducer, form: formReducer})
);

export default store;



