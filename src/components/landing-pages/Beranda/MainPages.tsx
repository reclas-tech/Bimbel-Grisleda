import { Link as ScrollLink } from "react-scroll";
import Navbar from "../Navbar";
import Link from "next/link";
import WA from "@/components/landing-pages/Icons/contact/Wa";
import Instagrams from "@/components/landing-pages/Icons/contact/Instagrams";
import Facebook from "@/components/landing-pages/Icons/contact/Facebook";
import Tiktok from "@/components/landing-pages/Icons/contact/Tiktok";
import * as React from "react";
import { Modal, CustomFlowbiteTheme } from "flowbite-react";

interface props {
  member?: number;
  event?: number;
}

const MainPages = ({ member, event }: props) => {
  const [openModal, setOpenModal] = React.useState<boolean>(true);

  const customTheme: CustomFlowbiteTheme["modal"] = {
    body: {
      base: "flex-1 overflow-auto p-6 bg-[#F1C93B]",
      popup: "pt-0",
    },
  };
  return (
    <div className="bg-[url('/assets/latar.png')] h-auto w-full sm:min-h-screen ">
      <div className="h-full gradasi w-full pb-[25%] sm:pb-0   sm:min-h-screen  sm:flex sm:flex-col">
        <div className=" h-full  sm:px-10 ">
          <Navbar />
          <div className=" px-4 sm:px-0 sm:flex sm:justify-center  sm:items-center sm:mt-10 ">
            <div className="w-[358px]  sm:flex sm:flex-col sm:space-y-5 sm:w-[639px]">
              <p className="text-[#FFB700] text-[62.669px] leading-[70px]  font-extrabold my-[16px] sm:text-[120px] sm:leading-[120px]  ">
                Bimbel Griselda
              </p>
              <p className="text-[15px] mb-[20.89px] sm:text-[20px]">
                Selamat datang di Griselda, pintu gerbang ke dunia pembelajaran
                yang menginspirasi. Jelajahi beranda kami untuk merasakan
                pengalaman unik, temukan layanan berkualitas tinggi yang kami
                tawarkan, terinspirasi oleh testimoni pelanggan setia kami, dan
                lihat momen-momen berharga dalam galeri kami.
              </p>
              <ScrollLink
                to="nextSection"
                smooth={true}
                duration={500}
                className=" bg-[#0065FF] w-[166.84px] h-[44.6px] cursor-pointer mb-8 text-white  hover:text-black hover:shadow-[inset_17rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow] flex items-center justify-center rounded-full font-bold  sm:w-[255.05px] sm:h-14 "
              >
                Jelajahi Sekarang
              </ScrollLink>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative  w-[219.634px] h-[245px] flex justify-center items-center  sm:h-[492px] sm:w-[441px] sm:flex sm:justify-center sm:items-center sm:left-0 ">
                <div className="bg-[#0065FF] w-full h-[200.09px] rounded-t-[50px]  sm:h-[401px]  "></div>
                <div className="absolute top-0 left-[12%]">
                  {/* <Image
                    src={maskot}
                    width="330"
                    height="340"
                    className="w-[219.634px] h-[245px] md:h-[492px] md:w-[397px]"
                    alt="maskot"
                  /> */}
                  <img
                    src="/assets/maskot.png"
                    alt="maskot"
                    width={330}
                    height={340}
                    className="w-[219.634px] h-[245px] md:h-[492px] md:w-[397px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center mt-8 sm:flex sm:justify-end sm:items-end  sm:mb-0 ">
          <div className=" text-white w-[267.369px] h-[48.03px] flex   mt-[3%]  sm:w-[501px] sm:h-[90px] sm:flex  ">
            <div className="w-1/3 h-full  bg-[#FFB700] rounded-tl-[26px] sm:rounded-tl-[48px] flex flex-col justify-center items-center ">
              <p className="font-bold text-[19px] sm:text-[34px]">{member}</p>
              <p className="text-[8px] sm:text-[15px]">Member</p>
            </div>
            <div className="w-1/3 h-full bg-[#FFB700] flex flex-col justify-center items-center">
              <p className="font-bold text-[19px] sm:text-[34px]">{event}</p>
              <p className="text-[8px] sm:text-[15px]">Events</p>
            </div>
            <div className="w-1/3 h-full bg-[#0065FF] rounded-tr-[26px] flex justify-center items-center space-x-1 sm:rounded-tr-[0px] sm:flex sm:justify-center sm:items-center sm:space-x-3">
              <Link href="https:\\wa.me/6282233216825">
                <WA
                  fill="#FAFBFD"
                  className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
                />
              </Link>
              <Link href="https:\\www.instagram.com/bimbel_griselda?igsh=NTc4MTIwNjQ2YQ==">
                <Instagrams
                  fill="#FAFBFD"
                  className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
                />
              </Link>
              <Link href="https:\\www.facebook.com/profile.php?id=61551844707061&mibextid=ZbWKwL">
                <Facebook
                  fill="#FAFBFD"
                  className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
                />
              </Link>
              <Link href="https:\\www.tiktok.com/@bimbelgriselda">
                <Tiktok
                  fill="#FAFBFD"
                  className="w-[14px] h-[14px] sm:w-[28px] sm:h-[28px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        theme={customTheme}
        size="4xl"
      >
        <Modal.Body onClick={() => setOpenModal(false)}>
          <div className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0">
            <img
              src="/assets/maskot.png"
              width="330"
              height="340"
              className="w-[215px] flex justify-center h-[241px] md:rotate-[7deg] md:justify-start md:h-[480px] md:w-[390px]"
              alt="maskot"
            />
            <div className="flex-col justify-center space-y-6 md:justify-start">
              <div className="space-y-4 ">
                <div>
                  <p className="text-base ml-0 text-center font-bold uppercase md:text-xl md:text-left md:ml-4">
                    Dapatkan Diskon Hingga
                  </p>
                  <p className=" text-center text-6xl leading-[5rem] font-bold md:text-left md:text-8xl">
                    {" "}
                    50% off
                  </p>
                </div>
                <p className="text-base ml-0 text-center font-thin md:ml-4 md:text-left md:text-xl">
                  SEKARANG JUGA BIMBEL DENGAN GURU YANG EXPERT DAN BERPENGALAMAN
                  DI SELURUH INDONESIA
                </p>
              </div>
              <div className="flex justify-center ">
                <Link
                  href=""
                  className="px-11 py-3 uppercase bg-white text-xl font-bold justify-center items-center rounded-full border border-white"
                >
                  Ambil Kelas
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MainPages;
