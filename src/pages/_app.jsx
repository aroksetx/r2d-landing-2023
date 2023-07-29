if (typeof window !== "undefined") {
    require("bootstrap/dist/js/bootstrap");
}
import { persistStore } from 'redux-persist';
import { store } from '../redux/store';
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../styles/index.scss";
import SEO from '@components/seo';
import { PersistGate } from 'redux-persist/integration/react';
import Preloader from '@components/preloader';
import AppProvider from '../components/context/AppContext';

let persistor = persistStore(store)
function MyApp({ Component, pageProps }) {
    return (
        <>
            <SEO font={'https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&family=Roboto:wght@400;500&display=swap'} />
            <Provider store={store}>
                <PersistGate loading={<Preloader />} persistor={persistor}>
                    <AppProvider>
                        <Component {...pageProps} />
                        <ToastContainer />
                    </AppProvider>
                </PersistGate>
            </Provider>
        </>
    );
}

export default MyApp;


