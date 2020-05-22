import React from 'react';
import ReactDom from 'react-dom';
import App from '@views/app';
import { SpaAssyProvider } from 'spaassy-redux'
import 'lodash'
import './common';

import rootReducers from '@store'

const appEle = document.getElementById('app');
const namespace = process.env.SYSTEMNAME

ReactDom.render(
    <SpaAssyProvider
        rootReducers={rootReducers}
        namespace={namespace}
        mainProject
    >
        <App />
    </SpaAssyProvider>,
    appEle
);

if (module.hot) {
    console.log('启用热加载更新！')
    module.hot.accept();
}