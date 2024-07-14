"use client";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "../components/CursorContext";
import Image from "next/image";
import ModalVideo from "@/components/ModalVideo";
const Home = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container  mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          {/* text */}
          <div className="w-full text-center xl:text-left xl:w-[500px] pt-[120px]">
            <h1 className="h1">
              Natural Beauty <br />
              Starts here
            </h1>
            <p className="lead max-w-xl mx-auto">
              Tailored skincare solutions for a healthy complexion, offering
              customized care for radiant skin
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-6 max-w-max mx-auto xl:mx-0">
              <button className="btn btn-lg">Book an appointment</button>
              <div>
                <ModalVideo/>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 ">
            <div className="hidden xl:flex fixed bottom-0">
              <Image
                src={"/assets/home/img.png"}
                width={864}
                height={650}
                quality={100}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
