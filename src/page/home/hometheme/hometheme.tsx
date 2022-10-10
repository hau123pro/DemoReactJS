import React from 'react';
import { Container, Row, Carousel, Col } from 'react-bootstrap';
import slide01 from "../../../images/banner-01.jpg";
import "./hometheme.css"
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navigation } from "swiper";
const Hometheme: React.FC = () => {


    const cardsDefault = [
        {
            id: "a",
            row: 1,
            col: 1,
            w: 1,
            h: 1,
            filter: ["test", "chart"],
            img: "https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/18-120x183.jpg",
            bname: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)"
        },
        {
            id: "b",
            row: 1,
            col: 1,
            w: 1,
            h: 1,
            filter: ["test", "chart"],
            img: "https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/22-120x183.jpg",
            bname: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)"

        }, {
            id: "c",
            row: 1,
            col: 1,
            w: 1,
            h: 1,
            filter: ["test", "chart"],
            img: "https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/46-120x183.jpg",
            bname: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)"

        }, {
            id: "c",
            row: 1,
            col: 1,
            w: 1,
            h: 1,
            filter: ["test", "chart"],
            img: "https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/30-300x449-1-120x183.jpg",
            bname: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)"
        }
        , {
            id: "c",
            row: 1,
            col: 1,
            w: 1,
            h: 1,
            filter: ["test", "chart"],
            img: "https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/3-120x183.jpg",
            bname: "Think Like a Monk: Train Your Mind for Peace and Purpose Everyday"

        }
        , {
            id: "c",
            row: 1,
            col: 1,
            w: 1,
            h: 1,
            filter: ["test", "chart"],
            img: "https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/23-120x183.jpg",
            bname: "Dark in Death: An Eve Dallas Novel (In Death, Book 46)"
        }
    ];
    return (
        <>
            <div className='wrap-product-selling mt-5' >
                <Container className='space-bottom'>
                    <div style={{ display: "flex", justifyContent: "space-between" }} className="mb-4">
                        <div className='home-title-type'>
                            Feature Categories
                        </div>
                        <div>
                            All Categories
                        </div>
                    </div>


                    <div style={{ width: "100%" }}>
                        <Row>
                            <div style={{ width: "20%" }}>
                                <Col lg={12} md={12} sm={12} xs={12} className="pt-4 pb-5 wrap-category-type" style={{ backgroundColor: "#faf1ff" }}>
                                    <i className="bi bi-images icon-category" style={{ color: "#a200fc" }} ></i>
                                    <div className='name-category'>Arts & Photography</div>
                                    <div>Shop now</div>
                                </Col>
                            </div>

                            <div style={{ width: "20%" }}>
                                <Col lg={12} md={12} sm={12} xs={12} className="pt-4 pb-5 wrap-category-type" style={{ backgroundColor: "#faf4eb" }}>
                                    <i className="bi bi-incognito icon-category" ></i>
                                    <div className='name-category'>Fiction</div>
                                    <div>Shop now</div>
                                </Col>
                            </div>
                            <div style={{ width: "20%" }}>
                                <Col lg={12} md={12} sm={12} xs={12} className="pt-4 pb-5 wrap-category-type" style={{ backgroundColor: "#f4e6e5" }}>
                                    <i className="bi bi-chat-square-heart icon-category" style={{ color: "rgb(248, 48, 48)" }}></i>
                                    <div className='name-category'>Romance</div>
                                    <div>Shop now</div>
                                </Col>
                            </div>
                            <div style={{ width: "20%" }}>
                                <Col lg={12} md={12} sm={12} xs={12} className="pt-4 pb-5 wrap-category-type" style={{ backgroundColor: "#e6f2f4" }}>
                                    <i className="bi bi-lungs icon-category" style={{ color: "#20c4ed" }} ></i>
                                    <div className='name-category'>Arts & Photography</div>
                                    <div>Shop now</div>
                                </Col>
                            </div>
                            <div style={{ width: "20%" }}>
                                <Col lg={12} md={12} sm={12} xs={12} className="pt-4 pb-5 wrap-category-type" style={{ backgroundColor: "#faf4eb" }}>
                                    <i className="bi bi-mortarboard icon-category" style={{ color: "#f79400 " }} ></i>
                                    <div className='name-category'>Education</div>
                                    <div>Shop now</div>
                                </Col>
                            </div>

                        </Row>
                    </div>

                </Container>
                <Container>
                    <div>

                    </div>
                </Container>
                <Container className='space-bottom mt-5'>
                    <div style={{ display: "flex", justifyContent: "space-between" }} className="mb-4">
                        <div className='home-title-type'>
                            Bestselling Books
                        </div>
                        <div>
                            View All
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Navigation]}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        className="mySwiper"
                    >
                        <Row>


                            {
                                cardsDefault.map(
                                    item => {
                                        return (
                                            <SwiperSlide >
                                                <Col key={item.id} lg={10} md={5} sm={6} xs={6} className="item">
                                                    <div className='item-info' style={{ padding: "5%" }}>
                                                        <div style={{ paddingTop: "15%", paddingLeft: "20%", paddingRight: "20%" }}>
                                                            <img style={{ width: "100%" }} src={item.img}></img>
                                                        </div>

                                                        <div className="product-loop-info">
                                                            <div className=' h6 text-lh-md product-mb-2 text-height-2 crop-text-2 '>
                                                                <a href='#'>{item.bname}</a>
                                                            </div>
                                                            <div className='name-author-product'>
                                                                Jessica Simson
                                                            </div>
                                                            <div className='product-price'>
                                                                $20.20
                                                            </div>
                                                        </div>
                                                        <div className='product-hover'>
                                                            <div style={{ marginRight: "30%" }} className="pointer add-to-cart-text">
                                                                <a href=''>Add to cart</a>
                                                            </div>
                                                            <div className="wish-list-icon">
                                                                <i style={{ marginLeft: "23%", marginTop: "10%" }} className="bi bi-heart icon pointer"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </SwiperSlide>
                                        );
                                    }
                                )
                            }


                        </Row>


                    </Swiper>
                </Container>
                <Container className='space-bottom mt-5'>
                    <div className="mb-4">
                        <div className='home-title-type text-center'>
                            Featured Books
                        </div>
                    </div>
                    <ul className='justifi-center mb-5' style={{ display: "flex", listStyle: "none", paddingRight: "2rem" }}>
                        <li className='mx-5' style={{ fontSize: "1.2rem" }}>
                            <a href='#' className='feature-book-active'>Feature</a>
                        </li>
                        <li className='mx-5' style={{ fontSize: "1.2rem" }}>
                            New Arrivals
                        </li>
                        <li className='mx-5' style={{ fontSize: "1.2rem" }}>
                            Most View
                        </li>
                    </ul>
                    <Row>
                        {cardsDefault.map(
                            item => {
                                return (
                                    <Col key={item.id} lg={2} md={5} sm={6} xs={6} className="item">
                                        <div className='item-info' style={{ padding: "5%" }}>
                                            <div style={{ paddingTop: "15%", paddingLeft: "20%", paddingRight: "20%" }}>
                                                <img style={{ width: "100%" }} src={item.img}></img>
                                            </div>

                                            <div className="product-loop-info">
                                                <div className=' h6 text-lh-md product-mb-2 text-height-2 crop-text-2 '>
                                                    <a href='#'>{item.bname}</a>
                                                </div>
                                                <div className='name-author-product'>
                                                    Jessica Simson
                                                </div>
                                                <div className='product-price'>
                                                    $20.20
                                                </div>
                                            </div>
                                            <div className='product-hover'>
                                                <div style={{ marginRight: "65%" }} className="pointer add-to-cart-text">
                                                    <a href=''><i className="bi bi-bag"></i></a>
                                                </div>
                                                <div className="wish-list-icon">
                                                    <i style={{ marginLeft: "26%", marginTop: "10%" }} className="bi bi-heart icon pointer"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            }
                        )
                        }
                    </Row>
                </Container>
                <Container className='space-bottom
                '>
                    <div style={{ display: "flex", justifyContent: "space-between" }} className="mb-4">
                        <div className='home-title-type'>
                            Biographies Books
                        </div>
                        <div>
                            View All
                        </div>
                    </div>
                    <Row>
                        <div style={{ width: "35%" }}>
                            <Col lg={12} md={3} xs={3}>
                                <div style={{ backgroundImage: `url("https://demo4.madrasthemes.com/bookworm/wp-content/plugins/bookwormgb/dist/images/block-banner-with-product-carousel-900x506.44281dc.jpg")`, width: "100%" }}>
                                    <div className='px-5 pt-4 pb-4'>
                                        <div className='mb-4 mb-lg-2'>
                                            <h3 style={{ color: "white" }}>
                                                <div>All Biographies</div>
                                                <div>Discount 30%</div>
                                            </h3>
                                            <a href='#' style={{ color: "white" }}>Shop Now</a>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <img src="https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/img1-23.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div style={{ width: "65%" }}>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={0}
                                navigation={true}
                                modules={[Navigation]}
                                loop={true}
                                loopFillGroupWithBlank={true}
                                className="mySwiper"
                            >
                                <Row>
                                    {
                                        cardsDefault.map(
                                            item => {
                                                return (
                                                    <SwiperSlide >
                                                        <Col key={item.id} lg={10} md={5} sm={6} xs={6} className="item">
                                                            <div className='item-info' style={{ padding: "5%" }}>
                                                                <div style={{ paddingTop: "15%", paddingLeft: "20%", paddingRight: "20%" }}>
                                                                    <img style={{ width: "100%" }} src={item.img}></img>
                                                                </div>

                                                                <div className="product-loop-info">
                                                                    <div className=' h6 text-lh-md product-mb-2 text-height-2 crop-text-2 '>
                                                                        <a href='#'>{item.bname}</a>
                                                                    </div>
                                                                    <div className='name-author-product'>
                                                                        Jessica Simson
                                                                    </div>
                                                                    <div className='product-price'>
                                                                        $20.20
                                                                    </div>
                                                                </div>
                                                                <div className='product-hover'>
                                                                    <div style={{ marginRight: "30%" }} className="pointer add-to-cart-text">
                                                                        <a href=''>Add to cart</a>
                                                                    </div>
                                                                    <div className="wish-list-icon">
                                                                        <i style={{ marginLeft: "23%", marginTop: "10%" }} className="bi bi-heart icon pointer"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </SwiperSlide>
                                                );
                                            }
                                        )
                                    }


                                </Row>


                            </Swiper>
                        </div>
                    </Row>
                </Container>
                <Container className='space-bottom mt-5'>
                    <div style={{ display: "flex", justifyContent: "space-between" }} className="mb-4">
                        <div className='home-title-type'>
                            Favourite Authors
                        </div>
                        <div>
                            View All
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Navigation]}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        className="mySwiper"
                    >
                        <Row>


                            {
                                cardsDefault.map(
                                    item => {
                                        return (
                                            <SwiperSlide >
                                                <Col key={item.id} lg={10} md={5} sm={6} xs={6}>
                                                    <div className='item-info' style={{ padding: "5%" }}>
                                                        <div style={{ paddingTop: "15%", paddingLeft: "15%", paddingRight: "15%", paddingBottom: "10%" }}>
                                                            <img style={{ width: "100%", borderRadius: "50%" }} src="https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/09/4-1.jpg"></img>
                                                        </div>

                                                        <div className="author-loop-info">
                                                            <div className=' h6 text-lh-md product-mb-2 text-height-2 crop-text-2 '>
                                                                <a href='#'>Andre Amaica</a>
                                                            </div>
                                                            <div className='name-author-product'>
                                                                3 Pulish Books
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Col>
                                            </SwiperSlide>
                                        );
                                    }
                                )
                            }


                        </Row>


                    </Swiper>
                </Container>
            </div>
        </>
    )
}
export default Hometheme;