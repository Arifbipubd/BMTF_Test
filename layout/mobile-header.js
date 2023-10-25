/** @format */

import React, { useState, useEffect } from "react";
import MetisMenu from "metismenujs";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Vk,
} from "../public/svg/social/IconSocial";

export default function MobileHeader() {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    new MetisMenu("#metismenu");
  }, []);

  return (
    <>
      <div className='industify_fn_mobilemenu_wrap'>
        <div className='industify_fn_toppanel'>
          <div className='left_panel'>
            <div className='info'>
              <Link href='/tel:07787744741'>
                <a>(0778) 774 - 474 -1</a>
              </Link>
            </div>
            <div className='info'>
              <Link href='/mailto:trendycoder.com@gmail.com'>
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
        {/* <!-- TOLL FREE MOBILE --> */}
        <div className='m_toll_free_lang'>
          <div className='m_toll_free'>
            <span className='shape1'></span>
            <span className='shape2'></span>
            <span className='shape3'></span>
            <div className='tf_in'>
              <div
                className='img_holder'
                style={{ backgroundImage: "url(img/call.png)" }}
              ></div>
              <p>
                <span>Toll Free:</span> 1-800-987-6543
              </p>
            </div>
          </div>
        </div>
        {/* <!-- /TOLL FREE MOBILE --> */}
        {/* <!-- LOGO & HAMBURGER --> */}
        <div className='logo_hamb'>
          <div className='in'>
            <div className='menu_logo'>
              <Link href='/'>
                <a>
                  <img src='img/logo-light.png' alt='Industry Template' />
                </a>
              </Link>
            </div>
            <div
              onClick={MobileMenuTrueFalse}
              className={
                !isMobileMenu
                  ? "hamburger hamburger--collapse-r"
                  : "hamburger hamburger--collapse-r is-active"
              }
            >
              <div className='hamburger-box'>
                <div className='hamburger-inner'></div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /LOGO & HAMBURGER --> */}
        {/* <!-- MOBILE DROPDOWN MENU --> */}
        <div
          className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}
        >
          <div>
            <nav>
              <ul className='metismenu' id='metismenu'>
                <li>
                  <Link href='/about-us'>
                    <a className='has-arrow'>About</a>
                  </Link>
                  <ul>
                    <li>
                      <Link href='/about-us'>
                        <a>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-client'>
                        <a>Our CLient</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link href='/all-verticals'>
                    <a>Verticals</a>
                  </Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link href='/all-verticals'>
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
                  <Link href='/gallery'>
                    <a>Gallery</a>
                  </Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link href='/images'>
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
                  <Link href='/contact'>
                    <a>Contact</a>
                  </Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link href='/contact-us'>
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href='/our-location'>
                        <a>Our Locations</a>
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
            </nav>
          </div>
        </div>
        {/* <!-- /MOBILE DROPDOWN MENU --> */}
      </div>
    </>
  );
}
