/** @format */

import React from "react";
import Layout from "../layout/layout";
import Title from "../layout/title";
import Link from "next/link";
import ClientCard from "../components/client/ClientCard";
import clientData from "../lib/clientData.json";

export default function Gallery() {
  return (
    <>
      <Layout>
        {/* Page Title */}
        <Title title='Our Client' />
        <div className='industify_fn_pagetitle'>
          <div className='container'>
            <div className='title_holder'>
              <h3>Our Client</h3>
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
                    <span className='bread-current'>Our Client</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Title */}

        {/* client card start */}
        <div className='container clientDiv'>
          {clientData.map((client) => (
            <ClientCard key={client.id} data={client} />
          ))}
        </div>
        {/* client card End */}
      </Layout>
    </>
  );
}
