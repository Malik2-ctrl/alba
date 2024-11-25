export default function Footer() {
  return (
    <div
      style={{ zIndex: 1000 }}
      className="sm:fixed text-xs sm:text-sm bottom-0 bg-white w-full font-satoshithin px-4 pb-2 flex justify-between"
    >
      <div className="w-6/12 md:w-4/12">Producer, Supper Club Founder</div>
      <div className="md:w-4/12 w-3/12 justify-center flex">
        London, England
      </div>
      <a
        className="md:w-4/12 w-3/12 justify-end flex"
        target="_blank"
        href="https://www.instagram.com/albaaelena/"
      >
        @albaaelena
      </a>
    </div>
  );
}
