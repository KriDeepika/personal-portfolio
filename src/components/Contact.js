import { useRef } from "react";
import { useGsapInputReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const formRef = useRef(null);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const inputArr = [input1Ref, input2Ref, input3Ref];

  useGsapInputReveal(inputArr);

  const sendEmailHandler = (e) => {
    e.preventDefault();

    const fullname = e.target.querySelector(".fullname").value;
    const email = e.target.querySelector(".email").value;
    const message = e.target.querySelector(".message").value;

    // Construct the mailto URL
    const mailtoURL = `mailto:deepikakummari2088@gmail.com?subject=Contact Form Submission&body=Full Name: ${fullname}%0AEmail: ${email}%0AMessage: ${message}`;

    // Open the default email client with the mailto URL
    window.location.href = mailtoURL;

    // Reset form fields
    e.target.querySelector(".fullname").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

  return (
    <div className="mt-60 md:mt-40 lg:mt-60">
      <div className="contact container mx-auto mt-8 md:mt-16 lg:mt-24" id="contact">
        <SectionTitle title={"Let's Talk"} />

        <form
          onSubmit={sendEmailHandler}
          className="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
          ref={formRef}
        >
          <div className="form-control overflow-hidden" ref={input1Ref}>
            <input
              type="text"
              placeholder="Write your name"
              name="fullname"
              required
              className="fullname bg-transparent py-4 md:py-6 lg:py-8 px-8 md:px-10 lg:px-12 border border-white/20 outline-none rounded-full focus:border-cyan-400 duration-500 w-full"
            />
          </div>
          <div className="form-control overflow-hidden" ref={input2Ref}>
            <input
              type="email"
              placeholder="Write your email"
              name="email"
              required
              className="email bg-transparent py-4 md:py-6 lg:py-8 px-8 md:px-10 lg:px-12 border border-white/20 outline-none rounded-full focus:border-cyan-400 duration-500 w-full"
            />
          </div>
          <div className="form-control overflow-hidden" ref={input3Ref}>
            <textarea
              placeholder="Write your message"
              name="message"
              required
              rows="1"
              cols="30"
              className="message bg-transparent py-4 md:py-6 lg:py-8 px-8 md:px-10 lg:px-12 border border-white/20 outline-none rounded-full focus:border-cyan-400 duration-500 w-full resize-none"
            />
          </div>
          <div className="form-control overflow-hidden">
            <input
              type="submit"
              value="Send Message"
              className="py-4 md:py-6 lg:py-8 px-8 md:px-10 lg:px-12 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full uppercase cursor-pointer"
            />
          </div>
        </form>
      </div>
      </div>
  );
};

export default Contact;
