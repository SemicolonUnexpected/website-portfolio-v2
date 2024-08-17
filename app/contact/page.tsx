import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center text-center pt-10 px-2 gap-8 md:basis-4/5">
        <h1 className="text-3xl md:text-4xl">Any questions?</h1>
        <a>Please feel free to contact me with any feedback or queries about this website or my projects using the form below</a>
        <ContactForm/>
      </div>
    </div>
  );
}
