import React from "react";
import SocialBtns from "./SocialBtns";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact({ data, socialData }) {
  const { sectionHeading, contactImg, contactInfo } = data;
  return (
    <section id="contactus" className="section contactus-section">
      <div className="container contactus-container">
        <div className="contactus-box rounded oveflow-hidden gray-bg col-lg-8">
          <div className="row g-0 p-4 p-lg-5 contact-us">
            <div
              className="contactus-title"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <h5>{sectionHeading.title}</h5>
              <p className="m-0">{sectionHeading.subTitle}</p>
            </div>
            <ContactInfo contactInfoData={contactInfo} />
          </div>
          <div className="row g-0 contactus-form p-4 p-lg-5 flex-row-reverse">
            <div className="contact-form">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
