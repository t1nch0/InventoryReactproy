import React, { Component } from 'react';


class Login extends Component {

    render() {
        return (
            <div className="container">

                <div className="row">
                    <form className="col s6">
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    placeholder="Insert username"


                                    name="username"
                                    type="text"
                                    class="validate"></input>
                                <label htmlFor="username">Username</label>
                            </div>

                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    placeholder="Insert password"


                                    name="password" type="password"
                                    class="validate"></input>
                                <label htmlFor="email">Password</label>
                                {/* <span className="helper-text" data-error="wrong" data-success="right">Insert password</span> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input type="submit"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

export default Login
