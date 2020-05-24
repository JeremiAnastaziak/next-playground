import '@material/react-button/dist/button.min.css';
import '@material/react-text-field/dist/text-field.css';
import '@material/react-select/dist/select.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab-scroller/dist/tab-scroller.css';
import '@material/react-tab/dist/tab.css';
import '@material/react-tab-indicator/dist/tab-indicator.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
    return<><Head><link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                  rel="stylesheet"/> </Head><Component {...pageProps} /> </>
}
