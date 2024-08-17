"use client";

import Email from "@/actions/email";
import { useState } from "react";
import Spinner from "@/components/spinner";
import { cn } from "@/lib/utils";

const inputStyle = "";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [nameValid, setMessageValid] = useState(true);

  return(
    <form 
      action={async (formData: FormData) => {

        setLoading(true);
        const emailSent = await Email(formData);
        setLoading(false);
        
        
      }}
      className="flex flex-col gap-8 w-96 items-center"
    >

      <input
        className="w-full bg-black border-2 p-2 rounded-md outline-none placeholder:text-white"
        placeholder="Name"
        name="name"
        required
      />

      <input
        type="email"
        className="w-full bg-black border-2 p-2 rounded-md outline-none placeholder:text-white"
        placeholder="Email"
        name="email"
        required
      />

      <textarea
        className="w-full bg-black border-2 p-2 rounded-md outline-none placeholder:text-white h-60 text-justify"
        placeholder="Your message"
        name="message"
        required
      />

      <button type="submit" className="flex bg-red-500 p-3 w-32 rounded-lg gap-2 justify-center" disabled={loading}>
        {loading ? <> <Spinner/> Sending... </> : Submit}
      </button>
    </form>
  );
}
