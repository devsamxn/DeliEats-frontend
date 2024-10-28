import hero from "../assets/hero.jpg";
import hero2 from "../assets/hero2.jpg";

const Hero = () => {
  return (
    <div className="flex gap-2 p-2">
      <img
        src={hero}
        className="mt-10 md:mt-0 max-h-[135px] md:w-full md:max-h-screen"
      />
      <img src={hero2} className="md:hidden max-h-[200px] max-w-[220px]" />
    </div>
  );
};

export default Hero;
