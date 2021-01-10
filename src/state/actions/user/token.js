export const SET_TOKEN = 'SET_TOKEN'
export const RESET_TOKEN = 'RESET_TOKEN'

export const setToken = (token => ({
    token: 'JWT ' + token,
    type: SET_TOKEN
}));

export const resetToken = (() => ({
    type: RESET_TOKEN
}));