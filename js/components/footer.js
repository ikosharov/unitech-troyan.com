import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer-copy">
                <div className="container">
                    <p className="animated wow fadeInUp animated animated" data-wow-duration="1200ms" data-wow-delay="500ms">Design by <a href="http://w3layouts.com/">W3layouts</a></p>
                </div>
            </div>
        );
    }
}

export default Footer;