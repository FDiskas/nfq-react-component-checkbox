import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import CheckBox from '../src/index';

describe('Component', () => {
    let node;

    beforeEach(() => {
        node = document.createElement('div');
    });

    afterEach(() => {
        unmountComponentAtNode(node);
    });

    it('should return different checkbox icon on different status', () => {
        const props = {
            item: {
                label: 'Option 1',
                value: 'option_1',
            },
        };
        const component = render(<CheckBox {...props} />, node, () => {
            expect(node.innerText).toContain('▢ Option 1');
        });
        expect(component.renderState()).toEqual({ __html: '&#9634; Option 1' });
    });

    it('should render item as checked', () => {
        const props = {
            item: {
                label: 'Option 2',
                value: 'option_2',
                checked: true,
            },
        };

        const component = render(<CheckBox {...props} />, node, () => {
            expect(node.innerText).toContain('▣ Option 2');
        });
        expect(component.renderState()).toEqual({ __html: '&#9635; Option 2' });
    });

    it('should render value if label is missing', () => {
        const props = {
            item: {
                value: 'option_2',
                checked: true,
            },
        };

        const component = render(<CheckBox {...props} />, node, () => {
            expect(node.innerText).toContain('▣ option_2');
        });
        expect(component.renderState()).toEqual({ __html: '&#9635; option_2' });
    });

    it('should toggle the state', () => {
        const props = {
            item: {
                value: 'option_3',
                label: 'Options 3',
                checked: true,
            },
        };
        const component = render(<CheckBox {...props} />, node);
        component.handleClick();
        expect(component.state.checked).toEqual(false);
    });

    it('should have default state', () => {
        const props = {
            item: {
                value: 'option_4',
                label: 'Options 4',
            },
        };
        const component = render(<CheckBox {...props} />, node);
        expect(component.state.checked).toEqual(false);
    });

    it('should have updated state on new props', () => {
        const props = {
            item: {
                value: 'option_4',
                label: 'Options 4',
            },
        };
        const component = render(<CheckBox {...props} />, node);
        props.item.checked = true;
        component.componentWillReceiveProps(props);
        expect(component.state.checked).toEqual(true);
    });

    it('should have default state on new props', () => {
        const props = {
            item: {
                value: 'option_4',
                label: 'Options 4',
            },
        };
        const component = render(<CheckBox {...props} />, node);
        props.item.checked = true;
        component.componentWillReceiveProps({});
        expect(component.state.checked).toEqual(false);
    });
});
