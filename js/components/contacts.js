import React, { Component } from 'react';
import styles from '../styles/contacts';

class Contacts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact">
                <div className="container">
                    <h2>Contacts</h2>
                    <p className="wt">You can contact us via phone, fax and e-mail</p>
                    <div className="mail-grids wthree-22">
                        <div className="col-md-6 mail-grid-left">
                            <div className="mail-grid-left1">
                                <img src="images/map.jpg" style={styles.fullWidth} />
                            </div>
                        </div>
                        <div className="col-md-6 mail-grid-right">
                            <div className="mail-grid-right1 agile-22">
                                <ul>
                                    <li><i className="glyphicon glyphicon-map-marker" aria-hidden="true"></i></li>
                                    <li>Bulgaria<span>5600 Troyan</span><span>229 General Kartzov Str.</span><span>Unitech-Troyan Ltd. </span></li>
                                </ul>
                                <ul>
                                    <li><i className="glyphicon glyphicon-send" aria-hidden="true"></i></li>
                                    <li><a href="mailto:office@unitech-troyan.com">office@unitech-troyan.com</a><span><a href="mailto:unitech.ood@gmail.com">unitech.ood@gmail.com</a></span></li>
                                </ul>
                                <ul>
                                    <li><i className="glyphicon glyphicon-earphone" aria-hidden="true"></i></li>
                                    <li>Phone/Fax: +359 670 5 21 17<span>Mobile: +359 885 32 96 93</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contacts;