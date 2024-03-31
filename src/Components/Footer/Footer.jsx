import React from "react"
import { MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => 
<div id="page-container">
<div id="content-wrap">
<footer className="footer--pin fixed-bottom text-center font-small" style={{width: '100%'}}>
  <div className="container p-2 pb-0">
      <div className="container-fluid">
        <div className="sm-3">
          <a className="fb-ic fa-xs white-text mr-md-5 mr-3 fa-sm" href="https://en-gb.facebook.com" style = {{ color: 'rgba(26, 225, 232)', margin: '20px'}}>
            <MDBIcon icon='facebook'/>
          </a>
          <a className="tw-ic fa-lg white-text mr-md-5 mr-3 fa-sm" href="https://twitter.com" style = {{ color: "rgba(26, 225, 232)", margin: '20px'}}>
          <MDBIcon icon='twitter'/> 
          </a>
          <a className="gplus-ic fa-lg white-text mr-md-5 mr-3 fa-sm" href="https://github.com" style = {{ color: "rgba(26, 225, 232)", margin: '20px'}}>
          <MDBIcon icon='github'/>
          </a>
          <a className="li-ic fa-lg white-text mr-md-5 mr-3 fa-sm" href="https://linkedin.com" style = {{ color: "rgba(26, 225, 232)", margin: '20px'}}>
          <MDBIcon icon='linkedin'/>
          </a>
          <a className="ins-ic fa-lg white-text mr-md-5 mr-3 fa-sm" href="https://instagram.com" style = {{ color: "rgba(26, 225, 232)", margin: '20px'}}>
          <MDBIcon icon='instagram'/>
          </a>
        </div>
    </div>
  </div>
  <div className="footer-copyright text-center " style={{color: "black"}}>© 2024 Copyright:
    <a href="/" style = {{ color: "rgba(26, 225, 232)", textDecoration: 'none'}}> TEAM 18</a>
  </div>
</footer>
</div>
</div>

export default Footer