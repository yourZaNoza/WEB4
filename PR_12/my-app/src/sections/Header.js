// src/sections/Header.js
import React from "react";

function Header() {
  return (
    <>
      <style>{`
        .header {
          background-color: white;
          padding-top: 100px;
          margin-bottom: 100px;
        }

        .header__content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 53px;
          box-sizing: border-box;
        }

        .header__logo img {
          width: 190px;
        }

        .nav {
          display: flex;
          align-items: center;
        }

        .nav__list {
          display: flex;
          gap: 24px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav__item-list {
          font-family: Nunito, sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 27px;
          color: #333;
          text-decoration: none;
        }

        .nav__phone {
          border-radius: 30px;
          color: #fff;
          background: linear-gradient(180deg, #FFA992 0%, #FF7852 65%);
          box-shadow: 0px 10px 25px 0px #FF7C544D;
          padding: 17px 35px;
          text-decoration: none;
          font-family: Nunito, sans-serif;
          font-size: 16px;
          font-weight: 600;
          line-height: 22px;
        }

        /* Мобильная версия */
        @media (max-width: 1155px) {
          .nav__phone {
            display: none;
          }
          .nav__list {
            display: none;
          }

          .header__content {
            justify-content: space-between;
            flex-direction: row-reverse;
          }

          .menu-btn {
            display: block;
            width: 50px;
            height: 50px;
            background-color: #FF7852;
            position: relative;
            z-index: 4;
          }

          .menu-btn span,
          .menu-btn span::before,
          .menu-btn span::after {
            position: absolute;
            top: 50%;
            margin-top: -1px;
            left: 50%;
            margin-left: -10px;
            width: 20px;
            height: 2px;
            background-color: #fff;
          }

          .menu-btn span::before,
          .menu-btn span::after {
            content: "";
            transition: 0.5s;
          }

          .menu-btn span::before {
            transform: translateY(-5px);
          }

          .menu-btn span::after {
            transform: translateY(5px);
          }

          .menu-btn_active span::before {
            transform: rotate(45deg);
          }

          .menu-btn_active span::after {
            transform: rotate(-45deg);
          }

          .menu-btn_active span {
            height: 0;
          }

          .menu-btn_active {
            left: 0;
          }

          .nav__list_mob {
            display: none;
            transform-origin: center;
            transform: translateX(30%);
            transition: 0.5s;
            opacity: 0;
          }

          .nav__list_mob_active {
            background-color: #fff;
            position: absolute;
            display: block;
            transform: translateX(0%);
            opacity: 1;
            list-style: none;
            width: 100%;
            left: 0;
            top: 0;
            height: 655px;
            z-index: 3;
            position: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .nav__list_mob > li > a {
            color: #FF7852;
            text-decoration: none;
            font-size: 25px;
          }

          .nav__list_mob > li:not(:last-child) {
            margin-bottom: 20px;
          }

          .nav__list_mob img {
            margin-bottom: 20px;
          }
        }

        @media (max-width: 350px) {
          .header__content {
            flex-direction: column-reverse;
            gap: 40px;
          }
        }
      `}</style>

      <header>
        <div className="header">
          <div className="header__content wrap">
            <img src="/images/Logo.svg" alt="logo" />
            <nav>
              <ul className="nav__list">
                <li className="nav__item-list">Start</li>
                <li className="nav__item-list">Services</li>
                <li className="nav__item-list">About</li>
                <li className="nav__item-list">News</li>
                <li className="nav__item-list">Contact</li>
              </ul>

              <button
                type="button"
                className="menu-btn"
                aria-label="Мобильное меню"
              >
                <span></span>
              </button>

              <ul className="nav__list_mob">
                <li>
                  <a href="/" className="header__logo">
                    <img src="/images/Logo.svg" alt="logo" />
                  </a>
                </li>
                <li className="nav-list__item_mob">
                  <a className="item__link_mob" href="#services">
                    Услуги
                  </a>
                </li>
                <li className="nav-list__item_mob">
                  <a className="item__link_mob" href="#about">
                    О нас
                  </a>
                </li>
                <li className="nav-list__item_mob">
                  <a className="item__link_mob" href="#equipment">
                    Техника
                  </a>
                </li>
                <li className="nav-list__item_mob">
                  <a className="item__link_mob" href="#banners">
                    Партнеры
                  </a>
                </li>
                <li className="nav-list__item_mob">
                  <a className="item__link_mob" href="#licen">
                    Лицензия
                  </a>
                </li>
              </ul>

              <a className="nav__phone" href="tel:384-129-293-39">
                384-129-293-39
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
