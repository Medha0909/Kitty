import React from "react";
import data from "./data.json";
import 'bootstrap/dist/css/bootstrap.css';
import imggg from "../public/photo_6260565397367538119_y.jpg";
import { FaCircleCheck } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { Carousel } from "flowbite-react";
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareRss } from "react-icons/fa6";
import Link from 'next/link';



export default function Home() {

  const setDarkMode=()=>{
    document.querySelector(".navbar")?.setAttribute("data-theme","dark"); 
  };
  const setLightMode=()=>{
    document.querySelector(".navbar")?.setAttribute("data-theme","light"); 
  };
  const togglTheme=(e:any)=>{
    if(e.target.checked){
       setDarkMode();
    }
    else{
      setLightMode();
    }
  };
  return (
    <>
<nav className="bg-gray-800 navbar">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="https://th.bing.com/th/id/OIP.-unsBvWhWFFnEs6YvWw5qQAAAA?w=184&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Your Company"/>
          <a href="/" id="meowish" style={{textDecoration:"none"}}><span className=" block rounded-md px-3 py-1 text-xl font-medium" aria-current="page">Meowish</span></a>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <a href="#foot" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
            <a href="#pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Pricing</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Download</a>
          </div>

        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        
      <label className="inline-flex items-center cursor-pointer">
  <input  type="checkbox" value="" className="sr-only peer" onClick={togglTheme}/>
  <div id="dark" className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span id="dark1" className="ms-3 text-sm font-medium text-900 dark:text-gray-300">Dark</span>
</label>


        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  </div>

  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
  
    <Link href="#foot" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</Link>
      <a href="#pricing" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Pricing</a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Download</a>
    </div>
  </div>
</nav>


<section className="Hero_Section">
<div className="row" style={{maxWidth:"100%"}}>
        <div className="col-lg-6" id="head" style={{marginTop:"90px"}}>
          <h1 style={{color:"#EB9A5C",fontSize:"40px",fontFamily: "Orbitron, sans-serif",fontOpticalSizing: "auto",fontWeight:"800",fontStyle: "normal"}} className="big-heading">{data.hero.headline}</h1>
          <h3 style={{color:"#EB9A5C",paddingBottom:"20px",fontSize:"25px",fontFamily: "Orbitron, sans-serif",fontOpticalSizing: "auto",fontWeight:"800",fontStyle: "normal"}} className="big-heading">{data.hero.subheadline}</h3>
          <p style={{color:"#DC9635",fontSize:"20px",fontFamily: "Orbitron, sans-serif",fontOpticalSizing: "auto",fontWeight:"500",fontStyle: "normal"}} className="big-heading">{data.hero.text1}</p>
          <p style={{color:"#DC9635",fontSize:"20px",fontFamily: "Orbitron, sans-serif",fontOpticalSizing: "auto",fontWeight:"500",fontStyle: "normal"}} className="big-heading">{data.hero.text2}</p>
          <button type="button" style={{background:"#D362A8",marginRight:"10px"}}className="btn btn-dark btn-lg download-button">{data.hero.ctaButtons[0].text}</button>
          <button type="button" style={{background:"#D362A8"}}className="btn btn-dark btn-lg download-button">{data.hero.ctaButtons[1].text}</button>
        </div>
        <div className="col-lg-6 hero">
        <img style={{height:"500px",width:"500px",float:"right"}} src={data.hero.img} alt="..."/>
        </div>
      </div>
  </section>




<section className="white-section"  id="features">
      <div className="container-fluid1">
    <div className="row">
      <div className="feature-box col-lg-4">
        <div className="icon"><FaCircleCheck size={50}/></div>
        <h3 className="feature-title">{data.features[0].title}</h3>
        <p>{data.features[0].description}</p>
      </div>
      <div className="feature-box col-lg-4">
        <div className="icon"><FaBullseye size={50}/></div>
        <h3 className="feature-title">{data.features[1].title}</h3>
        <p>{data.features[1].description}</p>
      </div>
      <div className="feature-box col-lg-4">
      <div className="icon"><FaHeart size={50}/></div>
        <h3 className="feature-title">{data.features[2].title}</h3>
        <p>{data.features[2].description}</p>
      </div>
    </div>
    </div>

  </section>
  <section>
  <div className="h-56 sm:h-44 xl:h-80 2xl:h-96 full">
      <Carousel slideInterval={1500}>
      <table>
        <tbody>
            <tr>
            <td>
              <img className="imgs" src="https://mycatshop.in/wp-content/uploads/2023/02/ezgif.com-gif-maker-24.webp" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://mycatshop.in/wp-content/uploads/2023/02/ezgif.com-gif-maker-22-1.webp" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://mycatshop.in/wp-content/uploads/2023/02/ezgif.com-gif-maker-34.webp" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://mycatshop.in/wp-content/uploads/2023/02/ezgif.com-gif-maker-32.webp" alt="..." />
              </td>
            </tr>
            </tbody>
          </table>
          <table>
          <tbody>
            <tr>
            <td>
              <img className="imgs" src="https://mycatshop.in/wp-content/uploads/2023/02/ezgif.com-gif-maker-30.webp" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://mycatshop.in/wp-content/uploads/2023/02/ezgif.com-gif-maker-29.webp" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://mycatshop.in/wp-content/uploads/2023/02/ezgif.com-gif-maker-28.webp" alt="..." />
              </td>
              <td>
              <img className="imgs" src="https://mycatshop.in/wp-content/uploads/2023/02/ezgif.com-gif-maker-27.webp" alt="..." />
              </td>
            </tr>
            </tbody>
          </table>
      </Carousel>
    </div>
    <div className="abc">
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 full1">
      <Carousel slideInterval={3000} className="abc">
      {data.testimonials.map((data1,index)=>(
        <div className="imgsa">
          <div className="imgsaa"><h4 className=".imgsfeedback">{data.testimonials[index].feedback}</h4></div>
          <table>
            <tbody>
              <tr>
                <td>
                <img className="imgs2" src={data.testimonials[index].avatar} alt="..." />
                </td>
                <td>
                  <div className="imgp"><p>{data.testimonials[index].name}</p></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
        
      </Carousel>
    </div>
    </div>
    </section>


<section className="full" id="pricing">
<div className="container-fluid">
<div className="row a1">

{data.pricing.map((data1,index)=>(
<>
<div className="col" style={{marginBottom:"25px"}}>
  <Card className="card43 border-dark" style={{backgroundColor:"#0E0F19", borderRadius:"15px",background:"#E4D5A8"}}>
<div className="cd4">
<Card.Body>
<div className="cd41img" >
        <img style={{border: "8px solid #7E5D51",height:"160px",width:"160px"}} className="cd4img" src={data.pricing[index].img} alt="card4c"></img>
        </div>
        <Card.Text style={{color:"black",paddingLeft:"15px",fontSize:"small",marginBottom:"5px"}}>
        {data.pricing[index].age}
          </Card.Text>
        <div className="card4Title" style={{paddingLeft:"15px"}} ><Card.Text style={{fontSize: "25px", fontFamily: "Bad Script, cursive" ,fontWeight:"400",fontStyle:"normal"}}>{data.pricing[index].name}
        </Card.Text></div> 
        <div className="card4Text" style={{paddingLeft:"15px"}}>
        <Card.Text>
        {data.pricing[index].content}
        </Card.Text>
        </div>
        <div className="card4Text" style={{paddingLeft:"15px"}}>
        <button type="button" style={{background:"#D362A8"}}className="btn btn-dark btn-sm download-button">{data.pricing[index].price}</button>

        </div>
      </Card.Body>
      </div>
    </Card>
    </div>
    </>
  ))}

</div>
</div>
</section>

<div className="cat">
            <img alt="walking cat" src="https://cdn.dribbble.com/users/755603/screenshots/2975700/hungrysandwichclub_cat.gif"/>
          </div>
        
<div className="imggg1">
<Image className="imggga" src={imggg} alt="..."/>
</div>

<section id="foot">
<footer className="footer">
    <div className="footer-container">
        <div className="footer-column">
            <h3>INFORMATION</h3>
            <ul>
                <li><a href="#">FAQ's</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Expert Advice</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
        <div className="footer-column">
            <h3>CATEGORIES</h3>
            <ul>
                <li><a href="#">Pet Care</a></li>
                <li><a href="#">Pet Sitters</a></li>
                <li><a href="#">Dog Walkers</a></li>
                <li><a href="#">Pet Care Jobs</a></li>
                <li><a href="#">Pet Care Costs</a></li>
            </ul>
        </div>
        
        <div className="footer-column newsletter">
            <h3>GET IN TOUCH</h3>
            <form>
                <input type="email" placeholder="Enter your email here..."/>
                <button type="submit">SEND MESSAGE</button>
            </form>
        </div>
    </div>
    <div className="footer-bottom" >
        <p>Copyright © 2022 <a href="#">Meowish</a> | All Rights Reserved</p>
        <div className="social-icons" >
          <div className="iii">
          <table>
            <tbody>
          <tr>
            <td>
            <a className="a1" href="#"><FaFacebook /></a>
            </td>
            <td>
            <a href="#"><FaTwitter /></a>
            </td>
            <td>
            <a href="#"><FaLinkedin /></a>
            </td>
            <td>
            <a href="#"><PiInstagramLogoFill /></a>
            </td>
            <td>
            <a href="#"><FaSquareRss /></a>
            </td>
          </tr>
          </tbody>
          </table>
          </div>
        </div>
    </div>
</footer>
</section>

</>
  );
}
