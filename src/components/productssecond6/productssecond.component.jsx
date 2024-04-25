import React from "react";
import './productssecond.component.css';
import shirt from '../../assets/images/shirt.png';
import perfume from '../../assets/images/perfume.webp'
import soft from '../../assets/images/soft.png'
import {  ArrowRepeat, Heart} from "react-bootstrap-icons";
export function Productssecond() {
    return (
        <>
            <section className="mt-3">
                <div className="main">
                    {/* <div className="container">
                        <h3>Popular Products</h3>
                        <p>view all<ArrowDownShort></ArrowDownShort></p>
                    </div> */}
                    <div className="p1 container productscontainer">
                        <div className="row img1">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 ">
                                <img src={shirt} alt="" />
                                <p>Yves Saint</p>
                                <div className="p2">
                                    <span>&#x20B9;1000&nbsp;<span className="span">&#x20B9;1200</span></span>
                                    <button className="btn btn-light bhover1">View Details</button>
                                </div>
                                <div className="btnn1">
                                    <button className="bt1"><ArrowRepeat></ArrowRepeat></button>&nbsp;&nbsp;
                                    <button className="bt1"><Heart></Heart></button>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <img src={perfume} alt="" />
                                <div className="p2">
                                    <p>Alezabeth Aden</p>
                                    <span>&#x20B9;2000&nbsp;<span className="span">&#x20B9;2200</span></span>
                                    <button className="btn btn-light bhover1">View Details</button>
                                </div>
                                <div className="btnn1">
                                    <button className="bt1"><ArrowRepeat></ArrowRepeat></button>&nbsp;&nbsp;
                                    <button className="bt1"><Heart></Heart></button>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <img src={soft} alt="" />
                                <div className="p2">
                                    <p>Ali</p>
                                    <span>&#x20B9;4000&nbsp;<span className="span">&#x20B9;4100</span></span>
                                    <button className="btn btn-light bhover1">View Details</button>
                                </div>
                                <div className="btnn1">
                                    <button className="bt1"><ArrowRepeat></ArrowRepeat></button>&nbsp;&nbsp;
                                    <button className="bt1"><Heart></Heart></button>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                <img src={shirt} alt="" />
                                <div className="p2">
                                    <p>Shirt</p>
                                    <span>&#x20B9;1000&nbsp;<span className="span">&#x20B9;1100</span></span>
                                    <button className="btn btn-light bhover1">View Details</button>
                                </div>
                                <div className="btnn1">
                                    <button className="bt1"><ArrowRepeat></ArrowRepeat></button>&nbsp;&nbsp;
                                    <button className="bt1"><Heart></Heart></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}