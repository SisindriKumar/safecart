import React from "react";
import './productspage.component.css';
import innocent from '../../assets/images/innocent.webp'
import mouse from '../../assets/images/mouse.webp'
import cc from '../../assets/images/cc.webp'
import { ArrowRepeat, Bag, BorderAll, ChevronCompactUp, Eye, Heart, List, PlusLg, Star, StarFill } from "react-bootstrap-icons";
import { Top } from "../header1/top.component";
import { Header } from "../header2/header.component";
import { MainNav } from "../mainnav3/mainnav.component";
import { Footer } from "../footer14/footer.component";
export function ProductsPage() {
    return (
        <>
            <Top></Top>
            <Header></Header>
            <MainNav></MainNav>
            <section className="mt-4 container-fluid">
                <div className=" ppdiv ">
                    <div>
                        <h1>Products</h1>
                        <p>Shop Page</p>
                    </div>
                </div>
            </section>
            <div className="sec container">
                <div className="sidedivtop mt-4">
                    <div className="sidediv">
                        <div className="sidediv1">
                            <div className="borandmenu">
                                <span className="borderall1"><List></List></span>
                                &nbsp;
                                <span className="borderall2"><BorderAll></BorderAll></span>
                            </div>
                            <div className="end">
                                <p className="mt-2">Showing 1-16 of 137 results</p> &nbsp; &nbsp; &nbsp;
                                <select name="cars" id="cars">
                                    <option value="Order By Desc">Order By Desc</option>
                                    <option value="Order By ASC">Order By ASC</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="sidebottom mt-3">
                        <p>Selected Filter:</p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 ">
                            <div className="imgpic kan">
                                <img src={innocent} alt="" />
                                {/* <div className="bicons">
                                    <div className="parent child1"><Bag></Bag></div>
                                    <div className="parent child2"><Heart></Heart></div>
                                    <div className="parent child3"><ArrowRepeat></ArrowRepeat></div>
                                    <div className="parent child4"><Eye></Eye></div>
                                </div> */}
                            </div>
                            <div className="subimg mt-3">
                                <h4>Titan Pro Gaming  Laptop</h4>
                                <br />
                                <h5>Stock Available(154)</h5>
                                <br />
                                <span id="color">&#x20B9;10000&nbsp;<del>&#x20B9;13000</del></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="imgpic">
                                <img src={cc} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>GuardianEye HD Surveilance Camera</h4>
                                <br />
                                <h5>Stock Available(60)</h5>
                                <br />
                                <span id="color">&#x20B9;6000&nbsp;<del>&#x20B9;7000</del></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="imgpic">
                                <img src={mouse} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>Swiftglide Precision Mouse</h4>
                                <br />
                                <h5>Stock Available(54)</h5>
                                <br />
                                <span id="color">&#x20B9;1000&nbsp;<del>&#x20B9;1200</del></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="imgpic">
                                <img src={innocent} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>Titan Pro Gaming  Laptop</h4>
                                <br />
                                <h5>Stock Available(84)</h5>
                                <br />
                                <span id="color">&#x20B9;10000&nbsp;<del>&#x20B9;12000</del></span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="imgpic">
                                <img src={innocent} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>Titan Pro Gaming  Laptop</h4>
                                <br />
                                <h5>Stock Available(124)</h5>
                                <br />
                                <span id="color">&#x20B9;10000&nbsp;<del>&#x20B9;12000</del></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className=" imgpic">
                                <img src={cc} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>Philosopy Rose Perfume</h4>
                                <br />
                                <h5>Stock Available(14)</h5>
                                <br />
                                <span id="color">&#x20B9;300&nbsp;<del>&#x20B9;500</del></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className=" imgpic">
                                <img src={mouse} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>Maison Fransis Perfume</h4>
                                <br />
                                <h5>Stock Available(104)</h5>
                                <br />
                                <span id="color">&#x20B9;10000&nbsp;<del>&#x20B9;12000</del></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="imgpic">
                                <img src={innocent} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>Titan Pro Gaming  Laptop</h4>
                                <br />
                                <h5>Stock Available(44)</h5>
                                <br />
                                <span id="color">&#x20B9;10000&nbsp;<del>&#x20B9;12000</del></span>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="imgpic">
                                <img src={innocent} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>Titan Pro Gaming  Laptop</h4>
                                <br />
                                <h5>Stock Available(94)</h5>
                                <br />
                                <span id="color">&#x20B9;10000&nbsp;<del>&#x20B9;12000</del></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="imgpic">
                                <img src={cc} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>GuardianEye HD Surveilance Camera</h4>
                                <br />
                                <h5>Stock Available(234)</h5>
                                <br />
                                <span id="color">&#x20B9;6000&nbsp;<del>&#x20B9;7000</del></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="imgpic">
                                <img src={mouse} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>Swiftglide Precision Mouse</h4>
                                <br />
                                <h5>Stock Available(54)</h5>
                                <br />
                                <span id="color">&#x20B9;1000&nbsp;<del>&#x20B9;1200</del></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                            <div className="imgpic">
                                <img src={innocent} alt="" />
                            </div>
                            <div className="subimg mt-3">
                                <h4>Titan Pro Gaming  Laptop</h4>
                                <br />
                                <h5>Stock Available(74)</h5>
                                <br />
                                <span id="color">&#x20B9;10000&nbsp;<del>&#x20B9;12000</del></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightside mt-4">
                    <div className="items">
                        <div className="categories">
                            <div className="visit">
                                <h4>Category</h4>
                                <span><ChevronCompactUp></ChevronCompactUp></span>
                            </div>
                            <div className="visit mt-3">
                                <p>Electronics</p>
                                <span><PlusLg></PlusLg></span>
                            </div>
                            <div className="visit mt-2">
                                <p>fashion</p>
                                <span><PlusLg></PlusLg></span>
                            </div>
                            <div className="visit mt-2">
                                <p>Home & Living</p>
                                <span><PlusLg></PlusLg></span>
                            </div>
                            <div className="visit mt-2">
                                <p>Garden & Outdoors</p>
                                <span><PlusLg></PlusLg></span>
                            </div>
                            <div className="visit mt-2">
                                <p>Sports & Fitness</p>
                                <span><PlusLg></PlusLg></span>
                            </div>
                            <div className="visit mt-2">
                                <p>Personal Care & Beauty</p>
                                <span><PlusLg></PlusLg></span>
                            </div>
                            <div className="visit mt-2">
                                <p>Kids & babies</p>
                                <span><PlusLg></PlusLg></span>
                            </div>
                            <div className="visit mt-2">
                                <p>Music & Instruments</p>
                                <span><PlusLg></PlusLg></span>
                            </div>
                            <div className="visit mt-2">
                                <p>Automative & Vehicles</p>
                                <span><PlusLg></PlusLg></span>
                            </div>
                            <div className="visit mt-2">
                                <p>Arts & crafts</p>
                                <span><PlusLg></PlusLg></span>
                            </div>
                        </div>
                    </div>
                    <div className="items mt-5 categories">
                        <div className="items1">
                            <div className="visit">
                                <h4>Prices</h4>
                                <span><ChevronCompactUp></ChevronCompactUp></span>
                            </div>
                            <div>
                                <input type="range" class="form-range" id="customRange1" />
                                {/* <label for="customRange1" class="form-label">Price:</label> */}
                                <div className="sec">
                                    <h5>Price:</h5>&nbsp;
                                    <span> &#x20B9;500- &#x20B9;50000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items mt-5 categories">
                        <div className="items1">
                            <div className="visit">
                                <h4>Color</h4>
                                <span><ChevronCompactUp></ChevronCompactUp></span>
                            </div>
                            <div className="colors">
                                <div className="green child"></div>
                                <div className="blue child"></div>
                                <div className="black child"></div>
                                <div className="red child"></div>
                            </div>
                        </div>
                    </div>
                    <div className="items mt-5 categories">
                        <div className="items1">
                            <div className="visit">
                                <h4>Size</h4>
                                <span><ChevronCompactUp></ChevronCompactUp></span>
                            </div>
                            <div className="sizes">
                                <button className="btn btn-light">Medium</button> &nbsp;
                                <button className="btn btn-light">Large</button>  &nbsp;
                                <button className="btn btn-light">Small</button>
                            </div>
                        </div>
                    </div>
                    <div className="items mt-5 categories">
                        <div className="items1">
                            <div className="visit">
                                <h4>Filter By Rating</h4>
                                <span><ChevronCompactUp></ChevronCompactUp></span>
                            </div>
                            <div className="stars">
                                <div className="check padding">
                                    <input type="checkbox" />&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                </div>
                                <div className="check padding">
                                    <input type="checkbox" />&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <Star className="bdr"></Star>
                                </div>
                                <div className="check padding">
                                    <input type="checkbox" />&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <Star className="bdr"></Star>&nbsp;
                                    <Star className="bdr"></Star>&nbsp;
                                </div>
                                <div className="check padding">
                                    <input type="checkbox" />&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <Star className="bdr"></Star>&nbsp;
                                    <Star className="bdr"></Star>&nbsp;
                                    <Star className="bdr"></Star>&nbsp;
                                </div>
                                <div className="check padding">
                                    <input type="checkbox" />&nbsp;
                                    <span><StarFill></StarFill></span>&nbsp;
                                    <Star className="bdr"></Star>&nbsp;
                                    <Star className="bdr"></Star>&nbsp;
                                    <Star className="bdr"></Star>&nbsp;
                                    <Star className="bdr"></Star>&nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="items mt-5 categories">
                        <div className="items1">
                            <div className="visit">
                                <h4>Brands</h4>
                                <span><ChevronCompactUp></ChevronCompactUp></span>
                            </div>
                            <div className="brands">
                                <div className="padding"><input type="checkbox" />&nbsp;Samsung</div>
                                <div className="padding"><input type="checkbox" />&nbsp;Ikea</div>
                                <div className="padding"><input type="checkbox" />&nbsp;Nike</div>
                                <div className="padding"><input type="checkbox" />&nbsp;Ecopure</div>
                                <div className="padding"><input type="checkbox" />&nbsp;Fitstride</div>
                                <div className="padding"><input type="checkbox" />&nbsp;Apple</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}