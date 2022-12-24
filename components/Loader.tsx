// Import core
// Import third parts
// Import customs

function Loader() {

  return (
    <div className="loader flex items-center fixed top-0 left-0 cursor-wait select-none w-full h-full z-50">
      <p className="text-center mx-auto text-4xl font-bold z-40">
        <span className="hello italic">Hello,</span>
        <br className="sm:hidden"></br>
        <span className="iam ml-4 mt-4">
          I am <span className="text-red">Federico</span>
        </span>
      </p>
    </div>
  );
}

export default Loader;
