import React from 'react'
import contact from './image/Contact us.png';
export default function Contact() {
  return (
    <div>
      <div id="contact" className="form">
      <div className="form__container section">
        <div className="row">
          <div className="row--container">
            <div className="col-2-of-3">
              <div className="form__img-box">
                <img src={contact} alt="Contact Us" />
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="form--box">
                <div className="form--heading-text">
                  <h2 className="form--text">Get in touch</h2>
                </div>
                <div className="input--box">
                  <input
                    type="text"
                    className="form__input"
                    name="fname"
                    placeholder="Full Name"
                  /><br />
                  <input
                    type="email"
                    className="form__input"
                    name="email"
                    placeholder="Email Address"
                  /><br />
                  <textarea
                    name="message"
                    rows="10"
                    cols="30"
                    placeholder="Message"
                  ></textarea>
                  <button className="btn btn--submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
