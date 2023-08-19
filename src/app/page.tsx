"use client";

import GoogleMapViewer from "@/components/GoogleMapViewer";
import ScrollAppearDiv from "@/components/ScrollApperDiv";
import { cn, openInNewTab } from "@/libs/utils";
import { motion, useScroll } from "framer-motion";
import { Dot, Map } from "lucide-react";
import { Noto_Serif_JP } from "next/font/google";
import Image from "next/image";

const profileVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

// If loading a variable font, you don't need to specify the font weight
const notoSerifJp = Noto_Serif_JP({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <main className="">
        <header className="sticky top-0 bg-fade-bottom w-screen z-50 p-4 pb-8 md:p-8">
          <Image
            width={12}
            height={12}
            className="w-24 h-12 "
            src={"/img/top_logo.svg"}
            alt="logo"
          />
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="fixed top-0 left-0 right-0 bg-black h-[4px] z-50 origin-left"
          />
        </header>
        <div
          className={cn(
            "max-w-4xl mx-auto w-full relative grid grid-cols-1 md:gid-cols-2 p-6 md:p-4"
          )}
        >
          <div className="relative flex flex-col md:flex-row justify-around items-center gap-4 min-h-screen mt-[-100px]">
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={profileVariants}
              transition={{ duration: 0.4 }}
              className="text-normal order-last md:order-first"
            >
              <strong className=" text-2xl">&apos;사람&apos;</strong>을 소중히
              여기는 전략적 비전
              <br />
              소통의 힘으로 혁신적 기회를 찾는 리더 <br />
              고토 마모루가 전하는 진정한 글로벌 인재의 조건과 그만의 관점
            </motion.div>
            <motion.h2
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={profileVariants}
              transition={{ duration: 0.4 }}
              className={cn(
                "flex flex-col text-right text-7xl w-full font-bold justify-end items-end"
              )}
            >
              <motion.p
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Goto
              </motion.p>
              <motion.p
                initial={{ y: -30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
              >
                Mamoru
              </motion.p>
              <motion.p
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-2"
              >
                관점 특강
              </motion.p>
              <div className="text-xs mt-4">
                <strong className="text-sm">일본</strong>에서 활약하고자 하는
                <br /> <strong className="text-sm">한국인들</strong>에게 전하는
                진심어린 이야기
              </div>
            </motion.h2>
          </div>

          <ScrollAppearDiv className="flex flex-col space-y-32 mb-32 md:flex-row md:space-y-0 md:justify-between">
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-2xl">강연자 소개</h3>
              <Image
                src={"/img/goto.jpeg"}
                width={320}
                height={180}
                alt="goto"
              />
              <div>
                <p>이사 CHRO</p>
                <div>
                  <h3
                    className="mb-1 underline hover:no-underline cursor-pointer"
                    onClick={() => openInNewTab("https://bltinc.co.jp/board/")}
                  >
                    <span className={notoSerifJp.className}>後藤 衛</span>
                    <span>（Goto Mamoru）</span>
                  </h3>
                  <ul className="text-xs text-slate-600">
                    <li>Bullet Group Corporation Director CHRO</li>
                    <li>Systems development company company president</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col mb-16 space-y-4">
              <h3 className="font-bold text-2xl">소속회사 소개</h3>
              <div className="flex space-x-8">
                <Image
                  src={"/img/logo_mark.svg"}
                  width={80}
                  height={140}
                  alt="goto"
                />
                <div className="flex flex-col space-y-2">
                  <h4>Bullet Group 간이정보</h4>
                  <ul className="text-xs text-slate-600 flex flex-col space-y-1">
                    <li className="flex">
                      <Dot className="w-2 h-2" />
                      설립11年
                    </li>
                    <li className="flex">
                      <Dot className="w-2 h-2" />
                      작년도 매출 140억
                    </li>
                    <li className="flex">
                      <Dot className="w-2 h-2" />
                      일본국내 5거점
                    </li>
                    <li className="flex">
                      <Dot className="w-2 h-2" />
                      종업원 200명(이 중 절반 엔지니어)
                    </li>
                    <li className="flex">
                      <Dot className="w-2 h-2" />
                      디지털 마케팅과 시스템 개발이 주 사업
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end mr-2">
                <motion.button
                  initial="initial"
                  whileHover="hover"
                  variants={variants}
                  transition={{ duration: 0.2 }}
                  className="border border-black rounded-sm px-2 py-1 text-xs transition-colors duration-200 ease-in-out"
                  onClick={() => openInNewTab("https://bltinc.co.jp/")}
                >
                  Official Site
                </motion.button>
              </div>
            </div>
          </ScrollAppearDiv>

          <ScrollAppearDiv className="mb-32 space-y-32">
            <div className="space-y-4">
              <h3 className="font-bold text-2xl">일시</h3>
              <p>2023년 9월 26일(화) 19:30 ~ 21:30</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                <h3 className="font-bold text-2xl">장소</h3>
                <Map
                  className="w-4 h-4 cursor-pointer"
                  onClick={() =>
                    openInNewTab(
                      "https://www.google.com/maps/place/%E3%80%92160-0022+Tokyo,+Shinjuku+City,+Shinjuku,+5-ch%C5%8Dme%E2%88%9215%E2%88%925+%E6%96%B0%E5%AE%BF%E4%B8%89%E5%85%89%E7%94%BA%E3%83%93%E3%83%AB+4f/@35.693766,139.7046307,17z/data=!3m1!4b1!4m5!3m4!1s0x60188cdc104b9ac3:0x6e6f7801e8784e88!8m2!3d35.693766!4d139.7072056?entry=ttu"
                    )
                  }
                />
              </div>
              <p className={cn(notoSerifJp.className, 'text-sm md:text-base')}>東京都新宿区新宿５丁目１５−5 新宿三光町ビル 4F </p>
              <div className="w-[275px] h-[320px] md:w-96 md:h-96">
                <GoogleMapViewer
                  styles={{
                    container: {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                  center={{
                    lat: 35.69390538661898,
                    lng: 139.70722705476535,
                  }}
                  zoom={15}
                />
              </div>
            </div>
          </ScrollAppearDiv>

          <ScrollAppearDiv className="mb-32 space-y-32">
            <div className="space-y-4">
              <h3 className="font-bold text-2xl">대상인원</h3>
              <div>
                <p>
                  일본에서의 외국인 대상 커리어강연 참가희망 인원{" "}
                  <strong>최대 20명</strong>
                </p>
                <span className="text-xs text-slate-600">
                  IT직종 관련 혹은 전직희망자 우대
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-2xl">세션 내용</h3>
              <div>
                <h4 className="font-bold text-xl mb-2">
                  강연자 특강 (19:30~20:30)
                </h4>
                <ul className="flex flex-col space-y-1">
                  <li className="flex">
                    <Dot className="w-4 h-4" />
                    Bullet Group 소개
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4" />
                    고토상의 커리어
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4" />
                    외국인인재가 일본기업에서 확약한 이전 예시와 팁
                  </li>
                  <li className="flex">
                    <Dot className="w-4 h-4" />
                    일본기업들이 외국인에게 원하는 인재상이나 역할
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">
                  강연자 및 Bullet Group 한국인 현직자 교류회 (20:30~21:30)
                </h4>
                <ul className="flex flex-col space-y-1">
                  <li className="flex">
                    <Dot className="w-4 h-4" />
                    프리토킹시간
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-2xl">신청하기</h3>
              <button
                onClick={() =>
                  openInNewTab("https://forms.gle/WRdKWgjJATVFNrk88")
                }
              >
                <Image
                  src={"/img/google-forms.svg"}
                  width={32}
                  height={32}
                  alt="google-form"
                  className="w-12 h-12"
                />
              </button>
            </div>
          </ScrollAppearDiv>
        </div>

        <div className="mt-auto w-screen bg-black">
          <div
            className={cn(
              "max-w-4xl mx-auto w-full relative grid grid-cols-1 md:gid-cols-2 p-6 md:p-4",
              "flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-around "
            )}
          >
            <div className={cn("flex items-center")}>
              <h4 className="text-white mr-4">주최</h4>
              <div className="flex space-x-4 justify-center items-center">
                <Image
                  className="cursor-pointer"
                  src={"/img/worldjob_logo.png"}
                  width={130}
                  height={80}
                  alt="world job"
                  onClick={() => openInNewTab("https://www.worldjob.or.kr/")}
                />
                <Image
                  className="cursor-pointer"
                  src={"/img/tamastudy.svg"}
                  width={100}
                  height={70}
                  alt="Tamastudy"
                  onClick={() =>
                    openInNewTab("https://www.instagram.com/tamastudy__tokyo/")
                  }
                />
              </div>
            </div>
            <div className={cn("flex items-center")}>
              <h4 className="text-white mr-4">주관</h4>
              <Image
                className="cursor-pointer"
                src={"/img/footer_logo.svg"}
                width={120}
                height={80}
                alt="Bullet Group"
                onClick={() => openInNewTab("https://bltinc.co.jp/")}
              />
            </div>
          </div>
          <p className="text-center py-4 text-white text-xs">
            &copy; {new Date().getFullYear()} Tamstudy. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}

const variants = {
  initial: {
    backgroundColor: "#FFFFFF",
    borderColor: "#000000",
    color: "#000000",
  },
  hover: {
    backgroundColor: "#000000",
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
  },
};
