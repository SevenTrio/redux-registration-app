import * as types from '../constants/actionsTypes';

export const showMenu = () => {
    return {
        type: types.menu.SHOW,
    };
}

export const hideMenu = () => {
    return {
        type: types.menu.HIDE,
    };
}

