import React from "react";
import './signin.component.css';
import { Facebook, Google } from "react-bootstrap-icons";
import { Header } from "../header2/header.component";
import { MainNav } from "../mainnav3/mainnav.component";
import { Footer } from "../footer14/footer.component";
import { Top } from "../header1/top.component";
export function SignIn() {
    return (
        <>
            <Top></Top>
            <Header></Header>
            <MainNav></MainNav>
            <section className="mt-2">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Sign In</h1>
                    </div>
                </div>
            </section>
            <div className="signindiv mt-5">
                <div className="s1">
                    <h4>Sign In</h4>
                    <label className="mt-2"><h6>Email Or User Name</h6></label>
                    <input type="text" placeholder="test_user" className='form-control' />
                    <label className="mt-2 mt-3"><h6>Password</h6></label>
                    <input type="password" placeholder=".........." className='form-control' />
                    <button className="btn form-control mt-3">Sign In</button>
                    <div className="mt-3 checkandfp">
                        <div>
                            <input type="checkbox" />Remember Me
                        </div>
                        <p>Forgot Password</p>
                    </div>
                    <div className="contents">
                        <div className="or">
                            <center><span>OR</span></center>
                        </div>
                        <div className="iconborder mt-4">
                            <span><Google></Google>Login with Google</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span><Facebook></Facebook>Login with Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <Footer></Footer>
        </>
    )
}