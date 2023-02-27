import {uiActions} from "./ui-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(
                'https://udemy-react-336c3-default-rtdb.firebaseio.com/cart.json'
            );
            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }
            const data = await response.json;
            return data;
        };
        try {
            const cartData = await fetchData()
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Ruh Roh! Something went wrong when sending the cart data!'
            }))
        }
    };
};
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'sending',
                message: 'sending cart data'
            })
        );

        const sendRequest = async () => {
            const response = await fetch('https://udemy-react-336c3-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });
            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }
        }
        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'success',
                message: 'Winning! Data successfully sent!'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Ruh Roh! Something went wrong when sending the cart data!'
            }))
        }
    }
} // sendCartData