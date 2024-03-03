import CoreTracks from "@/components/sections/CoreTracks";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import React from "react";

// export const revalidate = 10;
const Home = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* CoreTracks Section */}
        <CoreTracks />
        {/* skills section */}
        <Skills />
        {/* footer  */}
      </main>
    </>
  );
};
export default Home;
