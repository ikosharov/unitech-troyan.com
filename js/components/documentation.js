import React, { Component } from 'react';

class Documentation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="typo">
                <div className="container">
                    <h2 className="title">Below you can find manuals for the machines that we offer and information about them to help you achieve your goals</h2>
                    <div className="grid_3 grid_4">
                        <h3 className="hdg">S315CNC</h3>
                        <div className="bs-example">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><a href="PDFs/CNC/Manual_VSM_BG_CNC.pdf">Ръководство за обслужване и експлоатация на вертикални дълбачни (щос) машини</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/CNC/Manual_VSM_DE_CNC.pdf">Bedienungs - Und Betriebsanleitung für vertikale Stoßmaschinen</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="hdg">S200DR & S315DR</h3>
                        <div className="bs-example">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><a href="PDFs/DR/Manual_VSM_BG_DR.pdf">Ръководство за обслужване и експлоатация на вертикални дълбачни машини</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/DR/Manual_VSM_DE_DR.pdf">Bedienungs - Und Betriebsanleitung für vertikale Stoßmaschinen</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/DR/Manual_VSM_ESP_DR.pdf">MANUAL de servicio y explotación de máquinas mortajadoras verticales</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/DR/Manual_VSM_DR_IT.pdf">MANUALE di funzionamento e manutenzione delle stozzatrici verticali</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="hdg">S200TGI & S315TGI</h3>
                        <div className="bs-example">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td><a href="PDFs/TGI/Manual_VSM_En.pdf">Manual for operation and maintenance of Vertical Slotting Machines</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/TGI/Manual_VSM_Fr.pdf">Instruction de service et d’exploitation des mortaiseuses verticales</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/TGI/Manual_VSM_RU.pdf">Руководство по обслуживанию и эксплуатации вертикальных долбежных машин</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/TGI/Manual_VSM_IT.pdf">Manuale di uso e manutenzione di macchina verticale di scanalatura</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/TGI/Manual_VSM_bg.pdf">Ръководство за обслужване и експлоатация на вертикални дълбачни машини</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/TGI/Manual_VSM_ESP.pdf">MANUAL de servicio y explotación de máquinas mortajadoras verticales</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/TGI/Manual_VSM_DE.pdf">Bedienungs - Und Betriebsanleitung für vertikale Stoßmaschinen</a></td>
                                    </tr>
                                    <tr>
                                        <td><a href="PDFs/TGI/Manual_VSM_PL.pdf">INSTRUKCJA obsługi i eksploatacji dłutarek pionowych (rowkowych)</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Documentation;