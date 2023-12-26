import React from "react";
import { Header } from "./header/header";
import { Navbar } from "./navbar/navbar";
import { Hero } from "./hero/hero";
import { Solution } from "./solution/solution";
import { Workflow } from "./workflow/workflow";
import { Community } from "./community/community";
import { Footer } from "./footer/footer";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
      </div>
      <hr className="w-[100%] border-[0.4px]" />
      <div className="container">
        <Hero />
        <Solution />
        <Workflow />
        <Community />
        <Footer />
      </div>
    </div>
  );
};
