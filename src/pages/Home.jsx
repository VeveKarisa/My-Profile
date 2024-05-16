import { ReactTyped } from "react-typed";
import { useRef } from "react";
import ScrollInto from "react-scroll-into-view";

const Home = () => {
    return (
      <div>
        <div className="bg-red-100 w-full h-screen flex items-center justify-center text-center font-black text-2xl">
            <p>
                Welcome to{" "}
                <ReactTyped strings={["My Portfolio"]} typeSpeed={150} loop />
            </p>
        </div>
        <div id="about" className="bg-red-400 w-full h-screen flex items-center justify-center text-center font-black text-2xl">
            <p>
                Welcome to{" "}
                <ReactTyped strings={["My Portfolio"]} typeSpeed={150} loop />
            </p>
        </div>

      </div>
    );
};

export default Home;
