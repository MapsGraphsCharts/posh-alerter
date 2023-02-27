import AppShell from '../components/AppShell';
import 'tailwindcss/tailwind.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
    return (
        <AppShell>
            <Component {...pageProps} />
        </AppShell>
    );
}

export default MyApp;