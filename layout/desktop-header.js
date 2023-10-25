/** @format */

import React, { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Vk,
} from "../public/svg/social/IconSocial";

const background = "img/call.png";

export default function DesktopHeader() {
  const [isActive, setActive] = useState(false);
  const activeTrueFalse = () => setActive(!isActive);

  return (
    <>
      <div className='industify_fn_header'>
        {/* <!-- Header: Top Panel --> */}
        <div className='industify_fn_toppanel'>
          <div className='left_panel'>
            <div className='info'>
              <Link href='tel:07787744741'>
                <a>(0778) 774 - 474 -1</a>
              </Link>
            </div>
            <div className='info'>
              <Link href='mailto:rendycoder.com@gmail.com'>
                <a>trendycoder.com@gmail.com</a>
              </Link>
            </div>
            <div className='industify_fn_social_list'>
              <ul>
                <li>
                  <Link href='#'>
                    <a target='_blank' rel='noreferrer'>
                      <Facebook className='fn__svg' />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a target='_blank' rel='noreferrer'>
                      <Twitter className='fn__svg' />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a target='_blank' rel='noreferrer'>
                      <Instagram className='fn__svg' />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a target='_blank' rel='noreferrer'>
                      <Vk className='fn__svg' />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <a target='_blank' rel='noreferrer'>
                      <Linkedin className='fn__svg' />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- /Header: Top Panel --> */}

        {/* <!-- Header: Bottom Panel --> */}
        <div className='header_inner'>
          <div className='menu_logo'>
            <Link href='/'>
              <a>
                <img
                  className='desktop_logo'
                  src='img/logo-light.png'
                  alt='Industry HTML Template'
                />
                <img
                  className='desktop_logo_dark'
                  src='img/logo-dark.png'
                  alt='Industry HTML Template'
                />
              </a>
            </Link>
          </div>
          <div className='menu_nav'>
            <ul className='industify_fn_main_nav vert_nav'>
              <li className='menu-item-has-children'>
                <Link href='/about-us'>
                  <a>About</a>
                </Link>
                <ul className='sub-menu'>
                  <li>
                    <Link href='/about-us'>
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/our-client'>
                      <a>Our Client</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <Link href='/verticals'>
                  <a>Verticals</a>
                </Link>
                <ul className='sub-menu'>
                  <li>
                    <Link href='/verticals'>
                      <a>All Verticals</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/footwear-and-leather'>
                      <a>Footwear & Leather</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/packaging'>
                      <a>Packaging</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/furniture'>
                      <a>Furniture</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/line-hardware'>
                      <a>Line Hardware / Major Engineering</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/pole-pile'>
                      <a>Pole & Pile</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/vehicle-assembly'>
                      <a>Vehicle Assembly</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/steel-structure-manufacturing'>
                      <a>Steel Structure Manufacturing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/electronic-assembly'>
                      <a>Electronic Assembly</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/bmtf-crafties'>
                      <a>BMTF Crafties</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/cfl-led-bulb'>
                      <a>CFL & LED Bulb</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/health-care-hygiene'>
                      <a>Health Care & Hygiene</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <Link href='/accreditations'>
                  <a>Accreditations</a>
                </Link>
                <ul className='sub-menu'>
                  <li>
                    <Link href='/accreditations'>
                      <a>Accreditations</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/certifications'>
                      <a>Certifications</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <Link href='/notice-board'>
                  <a>Notice Board</a>
                </Link>
                <ul className='sub-menu'>
                  <li>
                    <Link href='/news-tenders'>
                      <a>News & Tenders</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/noc'>
                      <a>NOC & Notices</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <Link href='/image-gallery'>
                  <a>Gallery</a>
                </Link>
                <ul className='sub-menu'>
                  <li>
                    <Link href='/image-gallery'>
                      <a>Image Gallery</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/videos'>
                      <a>Video Gallery</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='menu-item-has-children'>
                <Link href='/contact-us'>
                  <a>Contact</a>
                </Link>
                <ul className='sub-menu'>
                  <li>
                    <Link href='/contact-us'>
                      <a>Contact Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/careers'>
                      <a>Career Opportunities</a>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='toll_free_lang'>
            <div
              className={
                isActive
                  ? "industify_fn_moving_lang opened"
                  : "industify_fn_moving_lang"
              }
              style={{
                position: "absolute",
                left: "1281.16px",
                top: "105.085px",
              }}
            >
              <ul onClick={activeTrueFalse}>
                <li onClick={() => setSelect("Eng")}>
                  <span>Eng</span>
                </li>
                <li onClick={() => setSelect("Spa")}>
                  <span>Spa</span>
                </li>
                <li onClick={() => setSelect("Rus")}>
                  <span>Rus</span>
                </li>
              </ul>
            </div>
            <div className='toll_free'>
              <span className='shape1'></span>
              <span className='shape2'></span>
              <span className='shape3'></span>
              <div className='tf_in'>
                <div
                  className='img_holder'
                  style={{ backgroundImage: `url(${background})` }}
                ></div>
                <p>Ecommerce</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /Header: Bottom Panel --> */}
      </div>
      <div className='my-class'></div>
    </>
  );
}
