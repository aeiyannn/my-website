import React, { useState, useCallback } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import MyName from "../components/Home/MyName/MyName";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import ArchitecturePractice from "../components/Home/ArchitecturePractice/ArchitecturePractice";
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import TechnicalToolkit from "../components/Home/TechnicalToolkit/TechnicalToolkit";
import AboutMe from "../components/Home/AboutMe/AboutMe";
import Recommendations from "../components/Home/Recommendations/Recommendations";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import Startup from "../components/Header/StartupLogo/Startup";

export default function Home() {
  const [finishedLoading, setFinishedLoading] = useState(false);
  const handleLoadDone = useCallback(() => setFinishedLoading(true), []);

  const meta = {
    title: "Aeiyan Khan — Full-Stack Engineer & Project Manager",
    description:
      "Full-Stack Engineer and Project Manager based in Hyderabad, Pakistan. Building web apps and leading teams at Samarix. Teaching developers at SMIT.",
    image: "/titofCercle.png",
    url: "https://aeiyankhan.me",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={meta.url} />
        <link rel="canonical" href={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aeiyan Khan" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aeiyankhan" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      {!finishedLoading && <Startup onFinish={handleLoadDone} />}

      <div
        className="relative min-h-screen bg-canvas text-ink selection:bg-accent selection:text-white"
        style={{ opacity: finishedLoading ? 1 : 0, transition: "opacity 0.4s ease" }}
      >
        <Header finishedLoading={finishedLoading} sectionsRef={{}} />
        <SocialMediaArround finishedLoading={finishedLoading} />

        <main id="main-content" tabIndex={-1} className="focus:outline-none">
          <MyName finishedLoading={finishedLoading} />
          <SomethingIveBuilt />
          <ArchitecturePractice />
          <WhereIHaveWorked />
          <TechnicalToolkit />
          <AboutMe />
          <Recommendations />
          <GetInTouch />
        </main>

        <Footer githubUrl="https://github.com/aeiyannn/my-website" hideSocialsInDesktop={true} />
      </div>
    </>
  );
}
