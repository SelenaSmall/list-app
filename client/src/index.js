import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie'
import registerServiceWorker from './registerServiceWorker';
import TokenAuth from './components/auth/TokenAuth'
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
    <CookiesProvider>
        <TokenAuth />
    </CookiesProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();