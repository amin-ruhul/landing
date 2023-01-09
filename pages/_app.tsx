import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import store from "../store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
      <ToastContainer />
    </div>
  );
}
