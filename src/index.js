import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/_all-skins.min.css';
import 'admin-lte/dist/js/app.min';
import axios from 'axios';
import store from './store';
import {Provider} from "react-redux";
axios.defaults.withCredentials = true;

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

