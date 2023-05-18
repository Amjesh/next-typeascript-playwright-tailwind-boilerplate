/* eslint-disable space-before-function-paren */
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { useStore, Provider } from 'react-redux';
import { wrapper } from '@/store';
import AuthMiddleware from '@/utils/authMiddleware';
import Cookies from '@/components/cookies';

function App({ Component, pageProps }: AppProps) {
  const store: any = useStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={store.__persistor} loading={null}>
        <AuthMiddleware />
        <ToastContainer theme="colored" />
        <Cookies />
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
export default wrapper.withRedux(appWithTranslation(App));
