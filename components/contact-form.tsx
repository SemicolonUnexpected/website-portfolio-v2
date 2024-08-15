"use client";

export default function ContactForm() {
  return(
    <form action={() => null} className="flex flex-col gap-8 w-96 items-center">
      <input className="w-full bg-black border-2 p-2 rounded-md outline-none placeholder:text-white" placeholder="Name"/>

      <input type="email" className="w-full bg-black border-2 p-2 rounded-md outline-none placeholder:text-white" placeholder="Email"/>

      <textarea className="w-full bg-black border-2 p-2 rounded-md outline-none placeholder:text-white h-60 text-justify" placeholder="Your message"/>

      <button type="submit" className="bg-red-500 p-3 w-32 rounded-lg">Submit</button>
    </form>
  );
}
