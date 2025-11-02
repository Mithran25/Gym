import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div>
          <h4>Contact</h4>
          <p>Phone : 97898 20791</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.496327071129!2d80.04351838715822!3d13.059583600000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528ba229ad5f55%3A0x8f082c2ddaaaab54!2sS.JARNOLD%20FITNESS%20AND%20GYM%20CENTER!5e0!3m2!1sen!2sin!4v1762081828403!5m2!1sen!2sin"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gym Location Map"
          ></iframe>
        </div>
      </div>
      <div className="footer-copy">
        © 2025 SJArnold Fitness. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
