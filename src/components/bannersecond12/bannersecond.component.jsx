import React from "react";
import './bannersecond.component.css';
import man from '../../assets/images/man.webp'
import nail from '../../assets/images/nail.webp'
import women1 from '../../assets/images/women1.webp'
import { ArrowDown, Check2 } from "react-bootstrap-icons";
export function Bannersecond() {
    return (
        <>
            {/* <section>
                <div className="container mt-5 list1">
                    <div>
                        <ul>
                            <li><button className="btn btn-light">Top rated</button></li>
                            <li><button className="btn btn-light">Top Selling</button></li>
                            <li><button className="btn btn-light">Weekly Top</button></li>
                        </ul>
                    </div>
                    <div style={{marginRight:'40px'}}>
                        <p style={{color:'green',fontSize:'25px'}}>View All <span><ArrowDown></ArrowDown></span> </p>
                    </div>
                </div>
            </section> */}

            <div className="maindiv mt-5">

                <div className="bannerr3">
                    <div className=" roww row">
                        <div className=" secbann col-6 ">
                            <h2 style={{ color: 'blue', marginLeft: '2.5rem', fontSize: '50px' }}>WINTER</h2>
                            <h3 style={{ color: 'blue', marginLeft: '2.5rem' }}>ON THE DOOR</h3>
                            <div className="list">
                                <ul >
                                    <li><span><Check2></Check2></span>&nbsp;Skin care</li>
                                    <li><span><Check2></Check2></span>&nbsp;Fashion Wear</li>
                                    <li><span><Check2></Check2></span>&nbsp;Electronic Items</li>
                                    <li><span><Check2></Check2></span>&nbsp;Furniture</li>
                                </ul>
                            </div>
                            <div className="qn ">
                                <button className="btn btn-primary">Get Offers</button>
                            </div>
                        </div>
                        <div className="imgg3 col-6">
                            <img src={women1} alt="" />
                        </div>
                    </div>
                </div>
                <div className="seccdiv">
                    <div className="bannerr1  row">
                        <div className="col-6 bj">
                            <h5>ENJOY TEXAS</h5>
                            <h4>STYLE  WINTER</h4>
                            <h4>FASHION 2023</h4>
                            <button className="btn btn-warning mt-4">GET OFFER</button>
                        </div>
                        <div className="col-6 imagee mr-1 ">
                            <img src={man} alt="" />
                        </div>
                    </div>
                    <div className="bannerr2  row">
                        <div className="col-6 h3">
                            <h3>NAILS CARE ?</h3>
                            <h3>GET YOUR WINTER KIT NOW</h3>
                        </div>
                        <div className="col-6 nailimg">
                            <img src={nail} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}