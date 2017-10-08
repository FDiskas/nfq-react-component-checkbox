import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.item.checked || false,
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.item && nextProps.item.checked) {
            this.setState({ checked: !!nextProps.item.checked });
        }
    }

    handleClick = () => {
        this.setState({ checked: !this.state.checked });
    }

    renderState() {
        const { label, value } = this.props.item;
        const { checked } = this.state;
        const icon = checked ? '&#9635;' : '&#9634;';

        return { __html: `${icon} ${label || value}` };
    }

    render() {
        const { value, label } = this.props.item;

        return (
            <div
                className={styles.checkbox}
                role="checkbox"
                tabIndex={0}
                aria-checked={this.state.checked}
                onKeyPress={this.handleClick}
                onClick={this.handleClick}
                value={value}
                label={label}
                dangerouslySetInnerHTML={this.renderState()}
            />
        );
    }
}

Checkbox.propTypes = {
    item: PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string,
        checked: PropTypes.bool,
    }).isRequired,
};

export default Checkbox;

