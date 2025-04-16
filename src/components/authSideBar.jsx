import sideImage from "../assets/sideImage.png";

const AuthSideBar = () => {
  return (
    <section className="text-white max-w-xl mt-10 lg:mt-0">
      <h1 className="text-4xl font-bold">Design with up</h1>
      <p className="text-[#FFFFFFCC] mt-4 text-xl max-w-md">
        Access to thousands of design resources and templates
      </p>
      <img
        src={sideImage}
        alt="side"
        className="max-w-[538px] max-h-[538px] mt-10"
      />
    </section>
  );
};

export default AuthSideBar;
