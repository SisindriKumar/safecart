import React from "react";
import './mainnav.component.css';
import { ArrowRepeat, Heart, Cart, Person, ChevronDown, List, MenuAppFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import chair from "../../assets/images/chair.webp";
import table from "../../assets/images/table.webp"
import wood from "../../assets/images/wood.webp"
export function MainNav() {
    return (
        <>
            <div className="file">
                <div className="nan">
                    <ul className="menu">
                        <button class="navbar-toggler btn-color" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <span className="icons"><List /></span>
                        </button>
                        Categories
                        <div class="offcanvas offcanvas-start a" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">All Category</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home & living</a>
                                        <div className="catbox">
                                            <div className="row">
                                                <div className="col-4">
                                                    <h4>Furniture</h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Hall Room Chair</h6>
                                                        <img src={chair} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h4>Kitchen</h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>coffee table</h6>
                                                        <img src={table} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <h4>Home Decor</h4>
                                                    <div className="chairimg mt-2">
                                                        <h6>Wood Cabinet</h6>
                                                        <img src={wood} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="#">Fashion</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Electronics</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Personal Care & Beauty</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Kids & Babies</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Arts & craft</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Health & Wellness</a></li>
                                </ul>
                            </div>
                        </div>
                        <li className="menu-list"><Link className="no">Home Pages<ChevronDown></ChevronDown></Link>
                            <ul className='submenu'>
                                <li><Link className="no" to='/homestyle01'>Home style 01</Link></li><hr />
                                <li><Link className="no" to='/homestyle02'>Home style 02</Link></li><hr />
                                <li><Link className="no" to='/home'>Home style 03</Link></li>
                            </ul>
                        </li>
                        <li className="menu-list"><Link className="no">Shop Page<ChevronDown></ChevronDown></Link>
                            <ul className='submenu1'>
                                <li><Link to='/productlist' className="no" >Product List</Link></li>
                                <hr />
                                <li><Link to='/productlist' className="no" >Grid Product</Link></li>
                                <hr />
                                <li><Link to='/fsp' className="no" >Full Shop Page</Link></li>
                            </ul>
                        </li>
                        <li className="menu-list"><Link to='/about' className="no">About</Link></li>

                        <li className="menu-list"><Link className="no">Pages<ChevronDown></ChevronDown></Link>
                            <ul className='submenu2'>
                                <li><Link to='/terms' className="no">Terms & Conditions</Link></li>
                                <hr />
                                <li><Link to='/privacypolicy' className="no">Privacy Policy</Link></li>
                                <hr />
                                <li><Link to='/faq' className="no">FAQ</Link></li>
                            </ul>
                        </li>
                        <li className="menu-list"><Link className="no">Blog<ChevronDown></ChevronDown></Link>
                            <ul className='submenu3'>
                                <li><Link to='/bloggridstyle' className="no">Blog Grid Style</Link></li>
                                <hr />
                                <li><Link to='/bloglist' className="no">Blog List</Link></li>
                            </ul>
                        </li>
                        <li className="menu-list"><Link className="no" to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="nan1">
                    <ul>
                        <li className="menu-list"><Heart></Heart></li>
                        <li className="menu-list"><Cart></Cart></li>
                        <li className="menu-list"><ArrowRepeat></ArrowRepeat></li>
                        <li className="menu-list"><Person></Person>Login/Register
                            <ul className="submenu4">
                                <li><Link className="no" to='/signin'>Sign In</Link></li>
                                <hr />
                                <li><Link className="no" to='/signup'>Sign Up</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}