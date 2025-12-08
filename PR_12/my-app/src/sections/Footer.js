// src/sections/Footer.js
import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__content wrap">
          <div className="footer__info">
            <img src="../images/logoFooter.svg" alt="" className="logo" />
            <p className="desc desc_lg text_gray">
              Quisque id leo non dolor tempor elementum quis ac urna. Nam
              pharetra, ligula eget finibus dignissim, turpis ipsum sollicitudin
            </p>
            <div className="form">
              <input className="form__input-text" type="email" name="" id="" />
              <input
                className="button button_red"
                type="submit"
                value="Subscribe"
              />
            </div>
          </div>
          <div className="footer__address">
            <h4 className="title title_lt text_black">Address</h4>
            <p className="desc desc_lg text_gray">+23 384 485 29</p>
            <p className="desc desc_lg text_gray">vet@shamim.com</p>
            <p className="desc desc_lg text_gray">
              123 king street, Melbrown <br />
              Victoria 3000, Australia
            </p>
          </div>
          <div className="footer__links">
            <h3 className="title title_lt text_black">Links</h3>
            <p className="desc desc_lg text_gray">About Us</p>
            <p className="desc desc_lg text_gray">Groomers</p>
            <p className="desc desc_lg text_gray">Contact Us</p>
            <p className="desc desc_lg text_gray">Privacy Policy</p>
            <p className="desc desc_lg text_gray">Tearms</p>
          </div>
          <div className="footer__work">
            <h3 className="title title_lt text_black">Opening Hours</h3>
            <p className="desc desc_lg text_gray">Monday-Tuesday 09:00-18:00</p>
            <p className="desc desc_lg text_gray">Wednesday 09:00-18:00</p>
            <p className="desc desc_lg text_gray">
              Thrusday-Friday 09:00-18:00
            </p>
            <p className="desc desc_lg text_gray">Saturday 10:00-17:00</p>
            <p className="desc desc_lg text_gray">Sunday 10:30-16:00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
