import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {/* {showHero && <Hero />} */}
      <div className="container mx-auto flex-1 py-4 h-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
