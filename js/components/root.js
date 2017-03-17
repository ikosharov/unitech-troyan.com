import React from 'react';

import Banner from './Banner';

class Root extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                {this.props.children}
            </div>
        );
    }
}

export default Root;