/** @format */

import React from "react";
import Layout from "../layout/layout";
import PhotoGallery from "../components/Gallery/PhotoGallery";
import Title from "../layout/title";
import Link from "next/link";

export default function Gallery() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <Title title='Image Gallery' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>Image Gallery</h3>
              <div className='industify_fn_breadcrumbs'>
                <ul>
                  <li>
                    <Link href='/'>
                      <a title='Home'>Home</a>
                    </Link>
                  </li>
                  <li className='separator'>
                    <span></span>
                  </li>
                  <li>
                    <span className='bread-current'>Image Gallery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title */}
        {/* Gallery Page */}
        <div
          className='fn_cs_gallery_grid fn_cs_lightgallery imageGalleryDiv'
          data-cols='4'
        >
          <div className='inner container'>
            <PhotoGallery />
          </div>
        </div>
        {/* /Gallery Page */}
      </Layout>
    </>
  );
}
