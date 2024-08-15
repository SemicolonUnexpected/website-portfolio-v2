import Spinner from "@/components/spinner";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center text-center pt-10 gap-4 basis-3/5">
        <h1 className="text-2xl">Any questions?</h1>
        <a>Please feel free to contact me with any feedback or queries about this website or my projects using the form below</a>
        <Spinner/>
      </div>
    </div>
  );
}
