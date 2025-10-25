import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function ProjectItem({ project, index }) {
  const router = useRouter();
  // Determine layout based on index (even/odd)
  const isOdd = index % 2 !== 0;

  // Conditionally set Tailwind classes for layout
  const contentOrder = isOdd ? "md:order-1" : "";
  const contentAlignment = isOdd ? "items-start" : "md:items-end text-right";
  const contentCols = isOdd
    ? "xl:col-span-6 col-span-8"
    : "xl:col-span-6 xl:col-start-7 col-start-5 col-span-8";
  const imageCols = isOdd ? "col-start-6 col-span-7" : "col-span-7";
  const techAlignment = isOdd ? "md:justify-start" : "md:justify-end";
  const textAlignment = isOdd ? "text-left" : "md:text-right";
  const titleLink = project.link.startsWith("/") ? (
    <Link href={project.link}>
      <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">{project.title}</span>
    </Link>
  ) : (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">{project.title}</span>
    </a>
  );

  return (
    <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
      {/* Left/Right Desktop Image */}
      <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
        <div className={`relative rounded w-full h-full ${imageCols}`}>
          <a href={project.link} target="_blank" rel="noreferrer">
            <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
          </a>
          <Img src={project.image} alt="Project Screenshot" className="w-full rounded h-full" />
        </div>
      </div>

      {/* Project Content */}
      <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
        {/* Mobile Background Image */}
        <div className=" w-full h-full bg-opacity-70 z-0 md:order-2">
          <div className="relative w-full h-full">
            <Img src={project.image} alt="Project Background" className="w-full h-full" />
          </div>
        </div>

        <div className={`px-8 pt-8 sm:pt-12 md:py-0 flex flex-col items-start space-y-3 ${contentCols} ${contentAlignment} ${contentOrder}`}>
          <div className="flex flex-col space-y-1 z-10">
            <span className="text-AAsecondary text-base">{project.projectType}</span>
            {titleLink}
          </div>
          <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
            <p className={`text-gray-300 md:text-gray-400 ${textAlignment}`}>{project.description}</p>
          </div>
          <ul className={`flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 ${techAlignment}`}>
            {project.tech.map((techItem) => (
              <span key={techItem} className="pr-4 z-10">{techItem}</span>
            ))}
          </ul>
          <div className="z-10 flex flex-row space-x-5">
            {project.github && <GithubIcon link={project.github} />}
            <a href={project.link} target="_blank" rel="noreferrer">
              <ExternalLink url={project.link} router={router} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}