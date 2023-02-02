import React from 'react'
import contact from './image/Contact us.png';
export default function Contact() {
  return (
    <div>
      <div id="contact" class="form">
      <div class="form__container section">
        <div class="row">
          <div class="row--container">
            <div class="col-2-of-3">
              <div class="form__img-box">
                <img src={contact} alt="Contact Us" />
              </div>
            </div>
            <div class="col-1-of-3">
              <div class="form--box">
                <div class="form--heading-text">
                  <h2 class="form--text">Get in touch</h2>
                </div>
                <div class="input--box">
                  <input
                    type="text"
                    class="form__input"
                    name="fname"
                    placeholder="Full Name"
                  /><br />
                  <input
                    type="email"
                    class="form__input"
                    name="email"
                    placeholder="Email Address"
                  /><br />
                  <textarea
                    name="message"
                    rows="10"
                    cols="30"
                    placeholder="Message"
                  ></textarea>
                  <button class="btn btn--submit">Submit</button>
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
