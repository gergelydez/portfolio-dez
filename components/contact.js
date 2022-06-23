import React, { Fragment, useRef, useState } from "react";
import { MailIcon, PhoneOutgoingIcon } from "@heroicons/react/outline";
import Modal from "./layout/modal";

function Contact() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  function openModal() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  function success() {
    setModalMessage(
      "our message has been successfully sent. I will contact you very soon! "
    );
    setModalTitle("Thank you for contacting me.");
  }
  function error() {
    setModalMessage("Please fill in all the required fields!");
    setModalTitle("Error");
  }

  function sendMessageHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;
    openModal();
    if (
      !enteredEmail ||
      !enteredEmail.includes("@") ||
      !enteredName ||
      enteredName.trim() === "" ||
      !enteredMessage ||
      enteredMessage.trim() === ""
    ) {
      openModal();
      error();

      return;
    } else {
      openModal();
      success();
    }

    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        message: enteredMessage,
      }),
      headers: { "Content-Type": "application/json" },
    });
    event.target.reset();
  }

  return (
    <Fragment>
      <div className="container mx-auto  glassmorphism ">
        <div className="lg:flex mx-32 glassmorphism ">
          <div className="xl:w-2/5 lg:w-2/5 bg-gradient-to-l from-indigo-700 to-cyan-500 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
              <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                Get in touch
              </h1>
              <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                Got a question about me? Are you interested in partnering with
                me? Have some suggestions or just want to say Hi? Just contact
                me. I am here to asset you.
              </p>
              <a
                href="tel:+36 70 736 9823"
                target="blank"
                className="flex pb-4 items-center"
              >
                <div>
                  <PhoneOutgoingIcon className="h-6 w-6 text-white" />
                </div>

                <p className="pl-4 text-white text-base">+36 70 736 9823</p>
              </a>
              <a href="mailto:dezweb1@gmail.com" className="flex items-center">
                <div>
                  <MailIcon className="h-6 w-6 text-white" />
                </div>
                <p className="pl-4 text-white text-base">dezweb1@gmail.com</p>
              </a>

              <a href="cv/Gergely-Dezso__CV.pdf" download="Gergely-Dezso_CV">
                <p className="text-white text-lg pt-16 font-bold tracking-wide underline">
                  CV-RESUME-VIEW
                </p>
              </a>
            </div>
          </div>
          <div className="xl:w-3/5 lg:w-3/5 bg-white h-full pt-5 pb-5 xl:pr-5 xl:pl-0 my-8 rounded-tr rounded-br ">
            <form
              onSubmit={sendMessageHandler}
              id="contact"
              className="bg-white py-4 px-20 rounded-tr rounded-br "
            >
              <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
                Enter Details
              </h1>
              <div className="block  w-full flex-wrap justify-between mb-6">
                <div className="w-full  mb-6 xl:mb-0 ">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="full_name"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      ref={nameInputRef}
                      required
                      id="full_name"
                      name="full_name"
                      type="text"
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                <div className="w-full  mb-6 xl:mb-0 ">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="email"
                      className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                    >
                      Email
                    </label>
                    <input
                      ref={emailInputRef}
                      required
                      id="email"
                      name="email"
                      type="email"
                      className="focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                      placeholder="Your email adress here"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full mt-6">
                <div className="flex flex-col ">
                  <label
                    className="text-sm font-semibold text-gray-800 mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    ref={messageInputRef}
                    placeholder="Text here..."
                    name="message"
                    className="border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700"
                    rows={8}
                    id="message"
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <Modal
          onClose={closeModal}
          show={showModal}
          title={modalTitle}
          message={modalMessage}
        />
      </div>
    </Fragment>
  );
}

export default Contact;
