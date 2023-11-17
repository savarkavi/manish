"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { playfair_display } from "../fonts";
import Link from "next/link";
import { ArrowLeftSquare } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const BuyPrint = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0hmb57v",
        "template_8mqtgth",
        form.current,
        "TXviawRA_PqdOgWuU"
      )
      .then(toast("Email has been sent"));
  };

  return (
    <div className="relative bg-black">
      <Toaster />
      <Link
        href="/"
        className="flex justify-center gap-2 items-center z-[99] absolute top-4 left-4 text-white"
      >
        <ArrowLeftSquare />
        <span>Back to Home</span>
      </Link>
      <div className="w-screen h-screen">
        <Image
          src="/black1.jpg"
          alt="email image"
          fill
          className="object-cover blur-sm opacity-80"
        />
      </div>
      <div
        className={` text-white absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-[550px] flex flex-col gap-8 p-4`}
      >
        <motion.h2
          className={`${playfair_display.className} text-center text-5xl`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Want to a buy a print? <br />
          <span className="text-base">
            Just send an Email that you are interested and I will reach out
            ASAP.
          </span>
        </motion.h2>
        <motion.form
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            placeholder="Your Name"
            className="p-4 bg-transparent text-white border border-white rounded-lg outline-none"
            name="from_name"
          />
          <input
            placeholder="Your Email"
            className="p-4 bg-transparent text-white border border-white rounded-lg outline-none"
            name="user-email"
          />
          <textarea
            placeholder="Write your message here..."
            className="p-4 bg-transparent text-white border border-white rounded-lg outline-none h-[200px]"
            name="message"
          />
          <button className="w-full p-3 bg-white text-black rounded-lg text-lg transition-all border border-white">
            Submit
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default BuyPrint;
