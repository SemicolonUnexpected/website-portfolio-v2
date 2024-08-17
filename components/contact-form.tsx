"use client";

import Email from "@/actions/email";
import { useState } from "react";
import Spinner from "@/components/spinner";
import { cn } from "@/lib/utils";
import { Input, TextArea } from "@/components/inputs";

const inputStyle = "";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  return(
    <form 
      action={async (formData: FormData) => {

        setLoading(true);
        //const emailSent = await Email(formData);
        setLoading(false);
        
        
      }}
      className="flex flex-col gap-8 w-96 items-center"
    >

      <Input
        placeholder="Name"
        name="name"
        isValid={nameValid}
      />

      <Input
        placeholder="Email"
        name="email"
        type="email"
        isValid={emailValid}
      />

      <TextArea
        className="h-60 text-justify resize-none"
        placeholder="Your message"
        name="message"
        isValid={messageValid}
      />

      <button type="submit" className={cn("flex bg-red-500 p-3 w-32 rounded-lg gap-2 justify-center", loading && "bg-red-700 text-gray-100")} disabled={loading}>
        {loading ? <> <Spinner/> Sending... </> : <> Submit </>}
      </button>
    </form>
  );
}
