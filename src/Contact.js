import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect , useRef , useState } from 'react'
import emailjs from '@emailjs/browser';


function Contact() {
  const [username, setFirstName] = useState('');
  const [useremail, setEmail] = useState('');
  const [usersubject, setSubject] = useState('');
  const [usermessage, setMessage] = useState('');
  useEffect(() => {
    AOS.init();
  }, [])
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_m70sn8f', 'template_2pov6dk', form.current, '4bTjCO33g6vqxyOyK')
      .then((result) => {
        alert("Thank you for message");
          console.log(result.text);
          setFirstName("");
          setEmail("");
          setSubject("");
          setMessage("");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div dir='ltr' data-aos="fade-down" data-aos-duration="1600" className='w-full h-100 justify-around xl:mr-16 mt-9 h-100 sm:mr-0 '> 
        <section className="flex flex-col justify-center items-center bg-slate-900 p-10 text-slate-300">
  <div className="mb-10 xl:w-[50%] text-center sm:w-[100%] text-indigo-400">
    <h1 className="text-4xl text-sky-500 font-bold"> Contact me </h1>
  </div>
  <div className="flex flex-col xl:w-[50%]  items-center w-[100%] justify-center">
  <form ref={form} onSubmit={sendEmail} className='form w-[100%] h-96 flex flex-col space-y-8' name="google-sheet">
    <input type="text"  required id="password" value={username} onChange={(e) => setFirstName(e.target.value)}  name="user_name" autoComplete='off' placeholder="Name" className="myname w-full appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800" />
    <input type="email" required id="email" value={useremail} onChange={(e) => setEmail(e.target.value)} name="user_email" autoComplete='off' placeholder="Email" className="w-full appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 " />
    <input type="text" required id="subject" value={usersubject} onChange={(e) => setSubject(e.target.value)} name="subject" autoComplete='off' placeholder="Subject" className="w-full appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 " />
    <input type="text" required id="message" value={usermessage} onChange={(e) => setMessage(e.target.value)} name="message" autoComplete='off' placeholder="Message" className="w-full appearance-none rounded-full border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 " />
    {/* <div>
      <textarea rows={3} cols={30} autoComplete='off' placeholder='Your message' className='w-full appearance-none rounded-3xl resize-none border-0 bg-slate-800/50 p-2 px-4 focus:bg-slate-800 '>
      </textarea>
    </div> */}
    <input type="submit" className="w-full rounded-full bg-sky-500 p-2 px-4 text-[#0F172A] font-bold hover:text-[#0F172A] hover:scale-95 duration-500" name="submit" value="Submit" />
    </form>
  </div>
</section>
    </div>
  )
}

export default Contact
