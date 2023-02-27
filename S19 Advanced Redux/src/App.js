import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useDispatch, useSelector} from "react-redux";
import {Fragment, useEffect} from "react";
import {uiActions} from "./components/Store/ui-slice";
import Notification from "./components/UI/notification/Notification";

function App() {
    const showCart = useSelector(state => state.ui.cartIsVisible)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const notification = useSelector(state => state.ui.notification)

    useEffect(() => {
            // eslint-disable-next-line no-unused-vars
            const sendCartData = async () => {
                dispatch(uiActions.showNotification({
                    status: 'pending',
                    title: 'sending',
                    message: 'sending cart data'
                }))
                const response = await fetch('https://udemy-react-336c3-default-rtdb.firebaseio.com/cart.json', {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                });
                if (!response.ok) {
                    throw new Error('Sending cart data failed')
                }
                dispatch(uiActions.showNotification({
                    status: 'success',
                    title: 'success',
                    message: 'Winning! Data successfully sent!'
                }))

                sendCartData().catch((error) => {
                    dispatch(uiActions.showNotification({
                        status: 'error',
                        title: 'Error',
                        message: 'Ruh Roh! Something went wrong when sending the cart data!'
                    }))
                })
            }
        }
        ,
        [cart, dispatch]);

    return (
        <Fragment>
            {notification && <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}
            <Layout>
                {showCart && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>
    );
}

export default App;
