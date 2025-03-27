import React from "react";
import SocialBtns from "./SocialBtns";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact({ data, socialData }) {
  const { sectionHeading, contactImg, contactInfo } = data;
  return (
    <section id="contactus" className="section contactus-section">
  <div className="container contactus-container">
    <div className="contactus-box col-lg-8">
      <div className="row g-0 p-4 p-lg-5">
        <div
          className="contactus-title"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <h5>{sectionHeading.title}</h5>
          <p className="m-0">{sectionHeading.subTitle}</p>
        </div>
      </div>
      <div className="row g-0 contactus-form p-4 p-lg-5 flex-row-reverse">
        <div className="contact-form">
          <form id="contact-form" onSubmit={onSubmit}>
            <div className="row gx-3 gy-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    name="name"
                    placeholder="Name *"
                    className="form-control"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Your Email</label>
                  <input
                    name="email"
                    placeholder="Email *"
                    className="form-control"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input
                    name="subject"
                    placeholder="Subject *"
                    className="form-control"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <label className="form-label">Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message *"
                    rows={4}
                    className="form-control"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12">
                <div className="send">
                  <button
                    className={`px-btn w-100 ${loading ? "disabled" : ""}`}
                    type="submit"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    // <section id="contactus" className="section contactus-section">
    //   <div className="container contactus-container">
    //     <div className="contactus-box rounded oveflow-hidden gray-bg col-lg-8">
    //       <div className="row g-0 p-4 p-lg-5">
    //         <div
    //           className="contactus-title"
    //           data-aos="fade-left"
    //           data-aos-duration="1200"
    //           data-aos-delay="200"
    //         >
    //           <h5>{sectionHeading.title}</h5>
    //           <p className="m-0">{sectionHeading.subTitle}</p>
    //         </div>
    //       </div>
    //       <div className="row g-0 contactus-form p-4 p-lg-5 flex-row-reverse">
    //         <div className="contact-form">
    //           <ContactForm />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
