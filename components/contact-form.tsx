"use client";

import Email from "@/actions/email";
import { useState, useRef } from "react";
import Spinner from "@/components/spinner";
import { cn } from "@/lib/utils";
import { Input, TextArea } from "@/components/inputs";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);

  const validateEmail = (value: string) => value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

  const ref = useRef<HTMLFormElement>(null);

  return(
    <form 
      ref={ref}
      action={async (formData: FormData) => {

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        let valuesValid: boolean = true;

        if (name == "") {
          setNameValid(false);
          valuesValid = false;
        }
        else setNameValid(true);
        if (email == "" || !validateEmail(email as string)) {
          setEmailValid(false);
          valuesValid = false;
        }
        else setEmailValid(true);
        if (message == "") {
          setMessageValid(false);
          valuesValid = false;
        }
        else setMessageValid(true);

        if (!valuesValid) return;

        setLoading(true);
        //const emailSent = await Email(formData);
        setLoading(false);

        ref.current?.reset();
      }}
      className="flex flex-col gap-4 w-[350px] md:w-96 items-center text-left"
    >

      <div className="flex flex-col gap-2 w-full h-16">
        <Input
          placeholder="Name"
          name="name"
          isValid={nameValid}
        />
        {!nameValid && <a className="text-red-500">Please input a valid name</a>}
      </div>


      <div className="flex flex-col gap-2 w-full h-16">
        <Input
          placeholder="Email"
          name="email"
          isValid={emailValid}
        />
        {!emailValid && <a className="text-red-500">Please input a valid email</a>}
      </div>

      <div className="flex flex-col gap-2 w-full h-[17rem]">
        <TextArea
          className="h-60 text-justify resize-none"
          placeholder="Your message"
          name="message"
          isValid={messageValid}
        />
        {!messageValid && <a className="text-red-500">Please input a valid message</a>}
      </div>

      <button type="submit" className={cn("flex bg-red-500 p-3 w-32 rounded-lg gap-2 justify-center", loading && "bg-red-700 text-gray-100")} disabled={loading}>
        {loading ? <> <Spinner/> Sending... </> : <> Submit </>}
      </button>
    </form>
  );
}
