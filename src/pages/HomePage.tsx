import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import Hero from "@/components/Hero";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="md:grid md:grid-cols-2">
      <div className="flex flex-col gap-10 md:gap-8 md:mt-6 text-center">
        <div className="md:hidden flex justify-center">
          <Hero />
        </div>
        <div className="text-xl md:text-5xl font-bold font-mono tracking-tight text-orange-600 text-center">
          Tuck into a takeway today
        </div>
        <span className="md:text-2xl font-mono">
          Food is just a click away!
        </span>
        <div className="md:px-16">
          <SearchBar placeHolder="City or Town" onSubmit={handleSearchSubmit} />
        </div>
        <div className="gap-5">
          <img src={landingImage} />
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <img src={appDownloadImage} className="md:w-[300px]" />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
