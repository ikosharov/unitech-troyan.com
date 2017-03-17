import React from 'react';

import Banner from './Banner';
import Footer from './Footer';

class Root extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default Root;