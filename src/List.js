import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Logger from './Logger'

class List extends Component {
    
    render() {
        console.log('List');

            let items = this.props.itemList2.map((item) => {
                return (<ListItem isLog={process.env.NODE_ENV==='development'} key={item.no} {...item} />)
            });
    
        return (
            <ul className="list-group">
               {items}
            </ul>
        )
    }
}

List.propTypes = {
    itemlist : PropTypes.arrayOf(PropTypes.object)
};


export default Logger(List);