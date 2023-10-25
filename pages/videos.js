/** @format */

import React from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";
import Link from "next/link";
import VideoCard from "../components/Gallery/VideoGallery";
import videoData from "../lib/videoGallery.json";

export default function Gallery() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <Title title='Video Gallery' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>Video Gallery</h3>
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
                    <span className='bread-current'>Video Gallery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title */}

        {/* client card start */}
        <div className='container clientDiv'>
          {videoData.map((video) => (
            <VideoCard key={video.id} data={video} />
          ))}
        </div>
        {/* client card End */}
      </Layout>
    </>
  );
}
