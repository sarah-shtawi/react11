import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary text-white ">
        <div className="container">
          <a className="navbar-brand" href="#">React</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto ms-2 mb-lg-0">
              <li className="nav-item me-3">
                <Link to='/product' className='text-black'>Product</Link>
              </li>
              <li className="nav-item me-3">
                <Link to='/restaurant' className='text-black'>resturaunt</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
