import logo from "../assets/logo.svg";

const Loader = () => {
  return (
    <div className="absolute h-screen w-screen bg-[rgba(0,0,0,0.1)] opacity-65 flex items-center justify-center z-50 top-0 left-0">
      <div className=" animate-ping aspect-square w-32 flex justify-center items-center">
        <img src={logo} className="animate-spin" alt="" />
      </div>
    </div>
  );
};

export default Loader;
