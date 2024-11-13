import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Button from "../components/button/Button";
import NavbarItem from "../components/navbar/NavbarItem";
import NavbarLogo from "../components/navbar/NavbarLogo";
import { useEffect, useState } from "react";
import "../components/navbar/navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1025) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // useeffect for resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className=" bg-gradient-to-b from-gray-50 to-[#d2d6db] h-dvh">
      {isMobile && !isOpen && (
        <nav className="flex flex-col  h-dvh bg-white">
          <div className="navbar-container flex flex-col h-full  gap-6 pt-8 pb-4 px-4 ">
            <div className="flex justify-between items-center">
              <NavbarLogo />
              <div>
                <Button onClick={() => setIsOpen(true)} color="linkGray">
                  <Icon icon="ri:menu-line" />
                </Button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {isOpen && (
        <div className=" bg-gradient-to-b from-gray-50 to-[#d2d6db] h-dvh">
          <nav className="flex flex-col  h-dvh  bg-black bg-opacity-50 z-30 ">
            <div className="navbar-container flex flex-col h-full  gap-6 pt-8 pb-4 px-4 z-50 bg-white w-11/12">
              <div className="flex justify-between items-center">
                <NavbarLogo />
                <div>
                  <Button onClick={() => setIsOpen(false)} color="linkGray">
                    <Icon icon="ri:close-line" className="text-xl" />
                  </Button>
                </div>
              </div>
              <div className="flex-1">
                <ul className="navbar-menu flex flex-col gap-3">
                  <NavbarItem text="Home" href="#" />
                  <NavbarItem text="Features" href="#" />
                  <NavbarItem text="Pricing" href="#" />
                  <NavbarItem text="About us" href="#" />
                  <NavbarItem text="Contact" href="#" />
                </ul>
              </div>
              <div className="flex flex-col gap-4 items-center w-full">
                <Button
                  size="lg"
                  color="secondary"
                  style={{
                    width: "100%",
                  }}
                >
                  Learn more
                </Button>
                <Button
                  style={{
                    width: "100%",
                  }}
                  size="lg"
                >
                  Try it out
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}

      {!isMobile && (
        <nav className="  flex items-center justify-center w-full">
          <div className="flex items-center w-full container    mx-28  mt-4 xl:gap-24 lg:gap-6 ">
            <NavbarLogo />

            <ul className="navbar-menu flex flex-1">
              <NavbarItem text="Home" href="#" />
              <NavbarItem text="Features" href="#" />
              <NavbarItem text="Pricing" href="#" />
              <NavbarItem text="About us" href="#" />
              <NavbarItem text="Contact" href="#" />
            </ul>

            <div className="flex gap-4 items-center justify-center w-fit ">
              <Button size="lg" color="secondary">
                Learn more
              </Button>
              <Button size="lg">See Pricing</Button>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
