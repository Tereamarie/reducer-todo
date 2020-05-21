import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
instanceof('renders without crashing', () => {
    const div = documnet.creatElement('div');
    ReactDom.render(<App />, div);
    ReactDom.unmountComponentAtNoce(div);
});