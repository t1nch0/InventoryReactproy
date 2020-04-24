import React, { Component } from 'react'

class Footer extends Component {


    render() {
        return (
            <div className="footer-fixed">
                <footer className="page-footer cyan darken-1">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h6 className="white-text">Software Inventory, a ReactJS project</h6>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            Done By Martin Fernandez 2020
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer
