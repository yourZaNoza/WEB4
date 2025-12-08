// src/App.js
// import React from "react";
// import Header from "./sections/Header";
// import Hero from "./sections/Hero";
// import Care from "./sections/Care";
// import Success from "./sections/Success";
// import Team from "./sections/Team";
// import Service from "./sections/Service";
// import Professional from "./sections/Professional";
// import Footer from "./sections/Footer";
// import Copyright from "./sections/Copyright";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <Care />
//       <Success />
//       <Team />
//       <Service />
//       <Professional />
//       <Footer />
//       <Copyright />
//     </div>
//   );
// }

// export default App;

import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Section from "./components/Section";
import "./App.css";

function App() {
  const careServices = [
    {
      icon: "/images/iconCare1.svg",
      title: "Pet Grooming",
      description:
        "There are many variatio of passage of Lorem for a Ipsum available",
    },
    {
      icon: "/images/iconCare1.svg",
      title: "Pet Grooming",
      description:
        "There are many variatio of passage of Lorem for a Ipsum available",
    },
    {
      icon: "/images/iconCare1.svg",
      title: "Pet Grooming",
      description:
        "There are many variatio of passage of Lorem for a Ipsum available",
    },
    {
      icon: "/images/iconCare1.svg",
      title: "Pet Grooming",
      description:
        "There are many variatio of passage of Lorem for a Ipsum available",
    },
  ];

  const teamMembers = [
    {
      imageUrl: "/images/team1.png",
      title: "Rosalina Wiliam",
      description: "CEO & Founder",
    },
    {
      imageUrl: "/images/team1.png",
      title: "Rosalina Wiliam",
      description: "CEO & Founder",
    },
    {
      imageUrl: "/images/team1.png",
      title: "Rosalina Wiliam",
      description: "CEO & Founder",
    },
    {
      imageUrl: "/images/team1.png",
      title: "Rosalina Wiliam",
      description: "CEO & Founder",
    },
  ];

  const servicePackages = [
    {
      title: "Regular Pack",
      description: "3 Days",
      price: "$150Per Visit",
      features: [
        "Pet Shower",
        "Fitness Checkup",
        "Pet Grooming",
        "Hair and Nail Cut",
        "Control Hair Falling",
      ],
      variant: "left",
    },
    {
      title: "Exclusive Pack",
      description: "10 Days",
      price: "$350Per Visit",
      features: [
        "Pet Shower",
        "Fitness Checkup",
        "Pet Grooming",
        "Hair and Nail Cut",
        "Control Hair Falling",
        "Brush & Blow Dry",
        "Pet Park And Games",
      ],
      variant: "main",
    },
    {
      title: "Premium Pack",
      description: "30 Days",
      price: "$550Per Visit",
      features: [
        "Pet Shower",
        "Fitness Checkup",
        "Pet Grooming",
        "Hair and Nail Cut",
        "Control Hair Falling",
      ],
      variant: "right",
    },
  ];

  return (
    <div className="App">
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
              <a href="#" className="menu-btn">
                <span></span>
              </a>
            </nav>
            <Button href="tel:384-129-293-39" variant="red">
              384-129-293-39
            </Button>
          </div>
        </div>
      </header>

      <Section className="hero">
        <div className="hero__content wrap">
          <div className="hero__info">
            <h1 className="title title_lg text_black title__hero">
              For Your Pet's Natural Life & Care
            </h1>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt
            </p>
            <div className="buttons">
              <Button variant="red">Our Services</Button>
              <Button variant="green">Make Appointment</Button>
            </div>
          </div>
          <div className="hero__img">
            <img src="/images/dogHero.png" alt="Happy dog" />
          </div>
        </div>
      </Section>

      <Section className="care">
        <div className="care__content wrap">
          <div className="title__care">
            <p className="desc desc_md text_red">Care For Your Pet</p>
            <h2 className="title title_md text_black">What We Do</h2>
          </div>
          <div className="care__cards">
            {careServices.map((service, index) => (
              <Card
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="success">
        <div className="success__content wrap">
          <div className="success__info">
            <div className="success__title">
              <p className="desc desc_sm text_red">Our Success Story</p>
              <h2 className="title title_md text_black">
                Experience Vet Clinic
                <br />
                And Services
              </h2>
            </div>
            <p className="desc desc_md text_black">
              Aliquam erat volutpat In id fermentum augue, ut pellentesque
              Maecenas at arcu risus. Donec commodo sodales ex, scelerisque
              laoreet nibh hakso hendrerit id. In aliquet magna nec lobortis
              maximus.
            </p>
            <ul className="success__list-item">
              <li className="success__item">
                Donec commodo scelerisque laoreet nibh hendrerit
              </li>
              <li className="success__item">
                In aliquet magna nec lobortis maximus. Etiam a dolor placerat
              </li>
              <li className="success__item">
                Etiam dolor nec elementum ipsum convall Maecinas
              </li>
            </ul>
            <Button variant="red">Know More About Us</Button>
          </div>
          <img src="/images/StoryDog.png" alt="Success story dog" />
        </div>
      </Section>

      <Section className="team">
        <div className="team__content wrap">
          <div className="title__team">
            <p className="desc desc_sm text_red">Our Team</p>
            <h2 className="title title_md text_black">Meet Our Groomers</h2>
          </div>
          <div className="team__cards">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                imageUrl={member.imageUrl}
                title={member.title}
                description={member.description}
                variant="team"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="service">
        <div className="service__content wrap">
          {servicePackages.map((pkg, index) => (
            <Card
              key={index}
              title={pkg.title}
              description={pkg.description}
              features={pkg.features}
              price={pkg.price}
              variant={pkg.variant}
            >
              <Button variant={pkg.variant === "main" ? "while" : "red"}>
                Purchase Pack
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="professional">
        <div className="professional__content wrap">
          <div className="professional__info">
            <h3 className="title title_md text_black">Professional Pet Care</h3>
            <p className="desc desc_lg text_gray">
              Pet owners trust us to look after the needs of their beloved
              companions. We are specialists committed to delivering the very
              highest of veterinary care and affection.
            </p>
            <Button variant="red">Contact Us Now</Button>
          </div>
          <img src="/images/PrDog.png" alt="Professional dog care" />
        </div>
      </Section>

      <footer>
        <div className="footer">
          <div className="footer__content wrap">
            <div className="footer__info">
              <img src="/images/logoFooter.svg" alt="" className="logo" />
              <p className="desc desc_lg text_gray">
                Quisque id leo non dolor tempor elementum quis ac urna. Nam
                pharetra, ligula eget finibus dignissim, turpis ipsum
                sollicitudin
              </p>
              <div className="form">
                <input
                  className="form__input-text"
                  type="email"
                  placeholder=""
                />
                <Button type="submit" variant="red">
                  Subscribe
                </Button>
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
              <p className="desc desc_lg text_gray">
                Monday-Tuesday 09:00-18:00
              </p>
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

      <div className="copiryte">
        <div className="coopiryte__content wrap">
          <p className="desc text_gray desc_md">
            © Copyright 2021 - 2024 | Pet Theme by Md Shamim Hossain | All
            Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
