import React from "react";
import './signup.component.css';
import { Top } from "../header1/top.component";
import { Header } from "../header2/header.component";
import { MainNav } from "../mainnav3/mainnav.component";
import { Footer } from "../footer14/footer.component";
export function SignUp() {
    return (
        <>
        <Top></Top>
        <Header></Header>
        <MainNav></MainNav>
            <section className="mt-2">
                <div className=" aboutdiv ">
                    <div>
                        <h1>Register</h1>
                    </div>
                </div>
            </section>
            <div className="signupdiv mt-5">
                <div className="su1">
                    <h2>Create Account</h2>
                    <input type="text" placeholder="Name" className='form-control' />
                    <br />
                    <input type="text" placeholder="Username" className='form-control' />
                    <br />
                    <input type="email" placeholder="Email" className='form-control' />
                    <br />
                    <input type="text" placeholder="Country" className='form-control' />
                    <br />
                    <input type="password" placeholder="Password" className='form-control' />
                    <br />
                    <input type="password" placeholder="Confirm Password" className='form-control' />
                    <br />
                    <input type="checkbox" /><h6>Accept all Terms and Conditions & Privacy Policy</h6>
                    <br />
                    <br />
                    <button className="btn btn-success form-control">Create Account</button>
                    <br />
                    <br />
                    <div className="block">
                        <p>Already Have account?</p>&nbsp;<span style={{fontWeight:'700'}}>Sign in</span>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}