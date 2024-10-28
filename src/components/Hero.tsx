import hero from "../assets/hero.jpg";
const Hero = () => {
  return (
    <img
      src={hero}
      className="mt-10 md:mt-0 max-h-[250px] md:w-full md:max-h-screen"
    />
  );
};

export default Hero;
