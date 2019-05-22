import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Logger from './Logger'

class ListItem extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.no !== nextProps.no || this.props.item !== nextProps.item;
    // }
    
    render() {
        console.log('ListItem');

        return (
            <li className="list-group-item list-group-item-success">
                {this.props.no} : {this.props.item}
            </li>
        );
    }
}

ListItem.propTypes = {
    no: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired
};

export default Logger(ListItem);