import React, {useState} from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import emailjs from "emailjs-com";


const Contact = () => {
  
  const [ButValue, setbutvalue] = useState('Send Message');
  const [missing, setMissing] = useState('');
  const formSubmit = (e) => {
    e.preventDefault();
    
  if(
      e.target.fullname.value.length === 0
    || e.target.phone.value.length === 0 
    || e.target.email.value.length === 0 
    || e.target.subject.value.length === 0 
    || e.target.message.value.length === 0 
    )
  {
    setMissing('Some data are missing!')
  }else{
    setMissing('')
  }

     const serviceID = 'template_4vfddo2';
     const templateID = 'user_KN6onEDmY9xuSdvv7Z1I5';

     if(
      e.target.fullname.value.length > 0
      && e.target.phone.value.length > 0
      && e.target.email.value.length > 0
      && e.target.subject.value.length > 0
      && e.target.message.value.length > 0
    )
     {
     setbutvalue("Sending ...")
        emailjs.sendForm('gmail', serviceID, e.target, templateID, this)
         .then(() => {
          setbutvalue("Sending")
         }, (err) => {
           alert(JSON.stringify(err));
         }).finally(()=>
         {setbutvalue("Send Message")
         e.target.reset()}
         );
        }
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='imgcontact1'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Ibrahim Serhane </h1>
                  <p>Full Stack Developer</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +961 71591109</p>
                  <p>Email: ibrahim.serhane1996@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className='btn_shadow'>
                    <i className='fab fa-linkedin-in'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form  onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname'   
                    />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone'/>
                  </div>
                </div>
                
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message'>
                   </textarea>
                </div>
                <div className="endForm">
                <button id='butt' className='btn_shadow'>
                  {ButValue} <i className='fa fa-long-arrow-right'></i>
                </button>
                <div className="missing">{missing && <label> {missing}  </label>}</div> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
