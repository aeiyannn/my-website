import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: 0,
        }}
        className=" text-AAsecondary"
      >
        <ReactScrollLink
          to="aboutSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="group flex items-center gap-2"
        >
          <span className="transform transition-transform duration-300 group-hover:rotate-90">
            &gt;
          </span>{" "}
          01.{" "}
          <span className="relative text-white cursor-pointer group-hover:text-AAsecondary">
            About
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-AAsecondary transition-all duration-300 group-hover:w-full"></span>
          </span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: 0,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="WhereIhaveWorkedSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="group flex items-center gap-2"
        >
          <span className="transform transition-transform duration-300 group-hover:rotate-90">
            &gt;
          </span>{" "}
          02.{" "}
          <span className="relative text-white cursor-pointer group-hover:text-AAsecondary">
            Experience
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-AAsecondary transition-all duration-300 group-hover:w-full"></span>
          </span>
        </ReactScrollLink>
      </motion.div>
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: 0,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="SomethingIveBuiltSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="group flex items-center gap-2"
        >
          <span className="transform transition-transform duration-300 group-hover:rotate-90">
            &gt;
          </span>{" "}
          03.{" "}
          <span className="relative text-white cursor-pointer group-hover:text-AAsecondary">
            Work
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-AAsecondary transition-all duration-300 group-hover:w-full"></span>
          </span>
        </ReactScrollLink>
      </motion.div>
      <motion.span
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: 0,
        }}
        className="text-AAsecondary"
      >
        <ReactScrollLink
          to="GetInTouchSection"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="group flex items-center gap-2"
        >
          <span className="transform transition-transform duration-300 group-hover:rotate-90">
            &gt;
          </span>{" "}
          04.{" "}
          <span className="relative text-white cursor-pointer group-hover:text-AAsecondary">
            Contact
            <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-AAsecondary transition-all duration-300 group-hover:w-full"></span>
          </span>
        </ReactScrollLink>
      </motion.span>
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
        <motion.button
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: 0,
          }}
          // onClick={()=>{router.push("/resume.pdf")}}
          className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
        >
          Resume
        </motion.button>
      </a>
    </div>
  );
}
