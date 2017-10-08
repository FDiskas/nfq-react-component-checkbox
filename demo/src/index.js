import React from 'react';
import { render } from 'react-dom';

import CheckBox from '../../src';
import { name, version } from '../../package';

const Demo = () => (
    <div>
        <h1>{name} v{version} Demo</h1>
        <h3>{CheckBox.name} unchecked Demo</h3>

        <CheckBox item={{ value: 'option_1', label: 'Option 1', checked: false }} />

        <h3>{CheckBox.name} checked Demo</h3>
        <CheckBox item={{ value: 'option_2', label: 'Option 2', checked: true }} />

        <h3>{CheckBox.name} value only Demo</h3>
        <CheckBox item={{ value: 'option_3' }} />
    </div>
);

render(<Demo />, document.querySelector('#demo'));
