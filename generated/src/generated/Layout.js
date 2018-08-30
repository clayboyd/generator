import React from 'react'
import { Provider } from 'react-redux';

import store from './Store'
import All from './All'

function Layout(props) {
    return (
        <Provider store={store}>
            <All />
        </Provider>
    )
}
export default Layout;
