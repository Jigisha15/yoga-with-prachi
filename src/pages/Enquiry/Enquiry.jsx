import { useState } from 'react'
import './Enquiry.css'
// import axios from 'axios'

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    whatsapp: '',
    dob: '',
    address: '',
    gender: '',
    healthIssue: '',
    medication: '',
    surgery: '',
    mode: '',
    time: '',
    declaration: '',
  })

  // const handleSubmit = (e) => {
  // const formEle = document.querySelector('form')
  // e.preventDefault()
  // console.log('submitted')
  //   const formData = new formData(formEle)
  //   fetch(
  //     'https://script.google.com/macros/s/AKfycbzl7awdxuN_BpjuXIIH_n2MqYJXBw23QGRNsg4Vzh3xRox2kNsT_c1q4VZrzRKQNqUb9g/exec',
  //     { method: 'POST', body: formData }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('Posted Data')
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }

  //   const change = (e) => {
  //     const { name, value } = e.target
  //     setFormData((prev) => {
  //       return { ...prev, [name]: value }
  //     })
  //   }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  return (
    <div className="enquiry">
      <h1 className="enquiry-title">Kindly fill up the following form</h1>

      <form
        action="https://docs.google.com/spreadsheets/d/1vZ-W9rGRutZ_Ul_xcmWuE2SEm5H5EJRd8kIPiHGYZGE/edit?usp=sharing"
        // onSubmit={(e) => handleSubmit(e)}
        className="enquiry-form"
      >
        <div className="form-display normal">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-display normal">
          <label htmlFor="email">Email ID</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-display normal">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="number"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>

        <div className="form-display normal">
          <label htmlFor="whatsapp">WhatsApp Number</label>
          <input
            type="number"
            name="whatsapp"
            id="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </div>

        <div className="form-display normal">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>

        <div className="form-display normal">
          <label htmlFor="address">Address</label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-display">
          <label htmlFor="gender">Gender</label>
          {/* <input
            className="input"
            type="radio"
            id="male"
            name="gender"
            value="male"
          />
          <label
            htmlFor="gender_male"
            className="label"
          >
            Male
          </label>
          <input
            className="input"
            type="radio"
            id="female"
            name="gender"
            value="female"
            // onChange={change}
          />
          <label
            htmlFor="gender_female"
            className="label"
          >
            Female
          </label> */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Select Mulriple */}
        <div className="form-display">
          {/* <label htmlFor="healthIssue">
            Are you facing any of the following health issues?
          </label>
          <br />

          <span>
            <div className="form-display-inner">
              <label htmlFor="asthama">Asthama</label>
              <input
                type="radio"
                id="asthama"
                name="healthIssue"
                value="asthama"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="epilepsy">Epilepsy</label>
              <input
                type="radio"
                id="epilepsy"
                name="healthIssue"
                value="epilepsy"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="high_bp">High BP</label>
              <input
                type="radio"
                id="high_bp"
                name="healthIssue"
                value="high_bp"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="diabetes">Diabetes</label>
              <input
                type="radio"
                id="diabetes"
                name="healthIssue"
                value="diabetes"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="heart_issues">Heart Issues</label>
              <input
                type="radio"
                id="heart_issues"
                name="healthIssue"
                value="heart_issues"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="back_pain">Back Pain</label>
              <input
                type="radio"
                id="back_pain"
                name="healthIssue"
                value="back_pain"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="pregnancy">Pregnancy</label>
              <input
                type="radio"
                id="pregnancy"
                name="healthIssue"
                value="pregnancy"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="pcod_pcos">PCOD-PCOS</label>
              <input
                type="radio"
                id="pcod_pcos"
                name="healthIssue"
                value="pcod_pcos"
                // onChange={change}
              />
            </div>

            <br />
            <label htmlFor="healthIssue">Other(Please Specify):</label>
            <input
              type="text"
              name="healthIssue"
              //   onChange={change}
            />
          </span> */}

          <select
            name=""
            id=""
            multiple
          >
            <option value="">
              Are you facing any of the following health issues?
            </option>
            <option value="Asthama">Asthama</option>
            <option value="Epilepsy">Epilepsy</option>
            <option value="High BP">High BP</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Heart Issues">Heart Issues</option>
            <option value="Back Pain">Back Pain</option>
            <option value="Pregnancy">Pregnancy</option>
            <option value="PCOD-PCOS">PCOD-PCOS</option>
            <option value="None">None</option>
          </select>
        </div>

        <div className="form-display">
          <label htmlFor="medication">
            Are you currently taking nay prescribed medication?
          </label>
          <br />
          <input
            type="radio"
            name="medication"
            id="medication_yes"
            value="yes"
            // onChange={change}
          />
          <label htmlFor="medication_yes">Yes</label>
          <input
            type="radio"
            name="medication"
            id="medication_no"
            value="no"
            // onChange={change}
          />
          <label htmlFor="medication_no">No</label>
          <br />
          <label htmlFor="medication_specify">If Yes, Please Specify: </label>
          <input
            type="text"
            name="medication"
            id="medication_specify"
            // onChange={change}
          />
        </div>

        <div className="form-display">
          <label htmlFor="surgery">
            Have you ever undergone any surgery in the past?
          </label>
          <br />
          <input
            type="radio"
            name="surgery"
            id="surgery_yes"
            value="yes"
            // onChange={change}
          />
          <label htmlFor="surgery_yes">Yes</label>
          <input
            type="radio"
            name="surgery"
            id="surgery_no"
            value="no"
            // onChange={change}
          />
          <label htmlFor="surgery_no">No</label>
          <br />
          <label htmlFor="surgery_specify">If Yes, Please Specify: </label>
          <input
            type="text"
            name="surgery"
            id="surgery_specify"
            // onChange={change}
          />
        </div>

        <div className="form-display">
          {/* <label htmlFor="mode">Which mode of classes would you prefer?</label>
          <input
            type="radio"
            name="mode"
            id="mode_online"
            value="online"
            // onChange={change}
          />
          <label htmlFor="mode_online">Online</label>
          <input
            type="radio"
            name="mode"
            id="mode_offline"
            value="offline"
            // onChange={change}
          />
          <label htmlFor="mode_offline">Offline</label> */}
          <select
            name="mode"
            id=""
          >
            <option value="">Which mode of classes is suitable for you?</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>

        <div className="form-display">
          {/* <label htmlFor="time">What class time is suitable for you?</label>
          <span>
            <div className="form-display-inner">
              <label htmlFor="timem1">7:00am - 8:00am</label>
              <input
                type="radio"
                value="7:00am-8:00am"
                name="time"
                // onChange={change}
              />
            </div>
            <div className="form-display-inner">
              <label htmlFor="timem2">8:00am-9:00am</label>
              <input
                type="radio"
                value="7:00am-8:00am"
                name="time"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="timem3">9:00am - 10:00am</label>
              <input
                type="radio"
                value="7:00am-8:00am"
                name="time"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="timee1">4:30pm-5:30pm</label>
              <input
                type="radio"
                value="7:00am-8:00am"
                name="time"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="timee2">5:30pm-6:30pm</label>
              <input
                type="radio"
                value="7:00am-8:00am"
                name="time"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="timee3">7:00pm - 8:00pm</label>
              <input
                type="radio"
                value="7:00am-8:00am"
                name="time"
                // onChange={change}
              />
            </div>

            <div className="form-display-inner">
              <label htmlFor="timee4">8:00pm-9:00pm</label>
              <input
                type="radio"
                value="7:00am-8:00am"
                name="time"
                // onChange={change}
              />
            </div>
          </span> */}
          <select
            name="time"
            id=""
          >
            <option value="">What class time is suitable for you?</option>
            <option value="7am-8am">7am-8am</option>
            <option value="8am-9am">8am-9am</option>
            <option value="9am-10am">9am-10am</option>
            <option value="4:30pm-5:30pm">4:30pm-5:30pm</option>
            <option value="5:30pm-6:30pm">5:30pm-6:30pm</option>
            <option value="7pm-9pm">7pm-9pm</option>
            <option value="7pm-9pm">7pm-9pm</option>
          </select>
        </div>

        <div className="form-display declaration">
          <h1>Declaration</h1>
          <input
            type="radio"
            name="declaration"
            id="declaration"
            value="yes"
            required
          />
          {/* <br /> */}
          <label htmlFor="declaration">
            I would like to enroll in a yoga class offered by your studio. I
            acknowledge that yoga is a physical activity and understand that
            there is a risk of injury. I agree to disclose any existing health
            conditions before joining the class and provide a doctor's
            recommendation if necessary.
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Enquiry
