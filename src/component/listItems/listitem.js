import React from 'react';
import './listitem.scss';

class ListItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, desc } = this.props;
        if (!title) { return null; }

        return (
            <div className="ListItem">
                <h2 className="title">{title}</h2>
                <p className="desc">{desc}</p>
                <hr/>
            </div>
        );
    }
}

export default ListItems;
