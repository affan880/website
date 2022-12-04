import React, { useEffect, useState } from 'react'
import './Home.css'
import Loader from "../../components/loader/Loader"
import Carousel from '../../components/Carousel/Carousel'
import ChaptersCustom from '../../components/chaptersCutomContainer/chaptersCustom'
import Counter from '../../components/counter/counter'
import img1 from '../../assets/img/Nsakcet.jpg'
import img2 from '../../assets/img/ieeeCarousel1.JPG'
import img3 from '../../assets/img/IEEE_SB_grp.webp'
import mission from '../../assets/img/icons/mission.svg'
import vision from '../../assets/img/icons/vision.svg'
import values from '../../assets/img/icons/medal.svg'
import CS from '../../assets/img/logos/CS-logo.png'
import WIE from '../../assets/img/logos/WIE-logo.png'
import RAS from '../../assets/img/logos/RAS-logo.png'
import CAS from '../../assets/img/logos/CAS-logo.png'
import SPS from '../../assets/img/logos/SPS-logo.png'
import OurMotive from '../../components/chaptersCustomCom/ourMotiveCard/ourMotive'
const Home = () => {
  const ourMotives = [
    {
      title: "Mission",
      description: "To promote students empowerment, develop professional skills, organise diverse events and work towards IEEE's mission.",
      img: mission
    },
    {
      title: "Vision",
      description: "The vision of our club is to provide a platform to bring together everyone to sh3re knowledge, promote innovation, and advance technology.",
      img: vision
    },
    {
      title: "Innovation",
      description: "We believe in innovation and creativity. We encourage our members to think out of the box and come up with new ideas.",
      img: values
    }
  ]

  return (
    <div >
      {/* <Loader/> */}
      {/* <NavBar /> */}
    <div className="wrapper">
      <section className="pt-0 pb-0 sm-display-none">
        <div className="hero-half-slider slick">
            <Carousel image={img1} />
            <Carousel image={img2} />
            <Carousel image={img3} />
        </div>
        </section>
        <div class="xl-display white-bg">
          <div style={{
            width: "100%",
          }}>
            <div class="row">
              <div style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}>
                <img
                  className='xl-display mb-20'
                  src={img2}
                  style={{
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                  }}
                />
                <div style={{
                }}>
                  <div className="col-sm-8 section-heading hii">
                    <h5 className="mt-0 text-uppercase primary-h5 font-italic play-font pt-20 pb-20 mb-0">Who We Are </h5>
                    <h2 className="mt-0 font-700"><span className="gradient-color">"</span> IEEE Student Branch of NSAKCET <span className="gradient-color1">is a student community that strives to inform, learn, entertain, and inspire action through the events and experiences we create.</span><span className="gradient-color">"</span> </h2>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>  

        {/* about our community  */}

        <section className="about-us">
          <div className="container">
            <div className="row sm-display-none" style={{
              marginBottom:"50px"
            }}>
              <div className="col-sm-8 section-heading hii">
                <h5 className="mt-0 text-uppercase primary-h5 font-italic play-font pb-20">Who We Are </h5>
                <h2 className="mt-0 font-700"><span className="gradient-color">"</span> IEEE Student Branch of NSAKCET <span className="gradient-color1">is a student community that strives to inform, learn, entertain, and inspire action through the events and experiences we create.</span><span className="gradient-color">"</span> </h2>
              </div>
            </div>
            <div class="row service-box-style-04 margin-Top">  
            {
              ourMotives.map((motive) => (
                <OurMotive Data={motive}/>
              ))
            }
            </div>
          </div>
        </section>

        <section className="white-bg" style={{
          marginTop: "-150px",
        }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 section-heading">
                <h5 className="mt-0 text-uppercase primary-h5 font-italic play-font">Our Chapters</h5>
              </div>
            </div>
            <div className="row mt-10">
              <ChaptersCustom Image={CS} link={"/cs"} />
              <ChaptersCustom Image={WIE} link={"/wie"} />
              <ChaptersCustom Image={RAS} link={"/ras"} />
              <ChaptersCustom Image={CAS} link={"/cas"} />
              <ChaptersCustom Image={SPS} link={"/sps"} />
            </div>
          </div>
        </section>
        <Counter />
        <section class="gradient-bg-6">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 col-md-8 col-sm-10 col-xs-12 centerize-col text-center">
                {/* <h5 class="font-40px font-700 white-color">Let’s talk about your next project</h5> */}
                <h5 class="mb-30 font-30px white-color font-700">Become an <span className="play-font font-italic italic-p"> IEEE Member </span>to join the first student community of Nawab Shah Alam Khan college of Engineering and Technology.</h5>
                <a class="btn btn-xl btn-light btn-circle" href='/joinUs' style={{
                  borderRadius: "50px",
                }} >Join Us</a>
              </div>
            </div>
          </div>
        </section>
        <Counter/>
      </div>
    </div>
  )
}

export default Home