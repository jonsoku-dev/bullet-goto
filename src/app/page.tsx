"use client";

import GoogleMapViewer from "@/components/GoogleMapViewer";
import ScrollAppearDiv from "@/components/ScrollApperDiv";
import { cn, openInNewTab } from "@/libs/utils";
import { motion, useScroll } from "framer-motion";
import { Dot, Map } from "lucide-react";
import dynamic from "next/dynamic";
import { Noto_Serif_JP } from "next/font/google";
import Image from "next/image";

const CountdownTimer = dynamic(() => import("@/components/CountdownTimer"), {
  ssr: false,
});

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
      <div className="">
        <header
          role="banner"
          aria-label="Main header"
          className="sticky top-0 bg-fade-bottom w-full z-50 p-4 pb-8 md:p-8"
        >
          <motion.div
            className="relative w-[120px] h-[70px]"
            whileHover={{ scale: [null, 1.2, 1.05] }}
            transition={{ duration: 0.3 }}
            role="img"
            aria-label="Company logo"
          >
            <Image fill src={"/img/top_logo.svg"} alt="Company logo" priority />
          </motion.div>

          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="fixed top-0 left-0 right-0 bg-black h-[4px] z-50 origin-left"
            role="progressbar"
            aria-valuenow={scrollYProgress.get() * 100} // Assuming scrollYProgress is a fraction between 0 and 1.
            aria-label="Page scroll progress"
          />
        </header>
        <main
          role="main"
          aria-label="Event Details"
          className={cn(
            "max-w-4xl mx-auto w-full relative grid grid-cols-1 md:gid-cols-2 p-6 md:p-4"
          )}
        >
          <section
            aria-labelledby="event-description"
            className="relative flex flex-col md:flex-row justify-around items-center gap-4 min-h-screen mt-[-100px]"
          >
            <motion.div
              id="event-description"
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
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={profileVariants}
              transition={{ duration: 0.4 }}
              className={cn(
                "flex flex-col text-right text-7xl w-full font-bold justify-end items-end"
              )}
            >
              <h1>
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
              </h1>
              <div className="text-xs mt-4">
                <strong className="text-sm">일본</strong>에서 활약하고자 하는
                <br /> <strong className="text-sm">한국인들</strong>에게 전하는
                진심어린 이야기
              </div>
            </motion.div>
          </section>

          <ScrollAppearDiv
            aria-labelledby="speaker-introduction"
            className="flex flex-col space-y-32 mb-32 md:flex-row md:space-y-0 md:justify-between"
          >
            <section className="flex flex-col space-y-4">
              <h2 className="font-bold text-2xl" id="speaker-introduction">
                강연자 소개
              </h2>
              <Image
                src={"/img/goto.jpeg"}
                width={320}
                height={180}
                alt="Goto Profile Picture"
              />
              <div>
                <p>이사 CHRO</p>
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-1 underline hover:no-underline cursor-pointer"
                    href="https://bltinc.co.jp/board/"
                  >
                    <strong
                      className={cn(notoSerifJp.className, "font-normal")}
                    >
                      後藤 衛
                    </strong>
                    <span>（Goto Mamoru）</span>
                  </a>
                  <ul role="list" className="text-xs text-slate-600">
                    <li>Bullet Group Corporation Director CHRO</li>
                    <li>Systems development company company president</li>
                  </ul>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="company-introduction"
              className="flex flex-col mb-16 space-y-4"
            >
              <h2 className="font-bold text-2xl" id="company-introduction">
                소속회사 소개
              </h2>
              <div className="flex space-x-8">
                <Image
                  src={"/img/logo_mark.svg"}
                  width={80}
                  height={140}
                  alt="bullet group logo"
                />
                <div className="flex flex-col space-y-2">
                  <h3>Bullet Group 간이정보</h3>
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
                  aria-label="Visit Bullet Group Official Site"
                >
                  Official Site
                </motion.button>
              </div>
            </section>
          </ScrollAppearDiv>

          <ScrollAppearDiv
            className="mb-32 space-y-32"
            aria-labelledby="event-date"
          >
            <div className="space-y-4">
              <h2 className="font-bold text-2xl mb-4" id="event-date">
                일시
              </h2>
              <time dateTime="2023-09-26T19:30:00Z">
                2023년 9월 26일(화) 19:30 ~ 21:30
              </time>
              <p className="text-sm text-slate-600">* 19:15부터 접수시작</p>
              <CountdownTimer
                targetDate={new Date("2023-09-26T19:30:00Z")}
                aria-label="Event countdown timer"
              />
            </div>
          </ScrollAppearDiv>

          <ScrollAppearDiv
            className="mb-32 space-y-32"
            aria-labelledby="event-place"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-1">
                <h2 className="font-bold text-2xl" id="event-place">
                  장소
                </h2>
                <Map
                  className="w-4 h-4 cursor-pointer"
                  onClick={() =>
                    openInNewTab(
                      "https://www.google.com/maps/place/%E3%80%92160-0022+Tokyo,+Shinjuku+City,+Shinjuku,+5-ch%C5%8Dme%E2%88%9215%E2%88%925+%E6%96%B0%E5%AE%BF%E4%B8%89%E5%85%89%E7%94%BA%E3%83%93%E3%83%AB+4f/@35.693766,139.7046307,17z/data=!3m1!4b1!4m5!3m4!1s0x60188cdc104b9ac3:0x6e6f7801e8784e88!8m2!3d35.693766!4d139.7072056?entry=ttu"
                    )
                  }
                />
              </div>
              <address
                className={cn(notoSerifJp.className, "text-sm md:text-base")}
              >
                東京都新宿区新宿５丁目１５−5 新宿三光町ビル 4F{" "}
              </address>
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

          <ScrollAppearDiv
            className="mb-32 space-y-32"
            aria-labelledby="event-listeners"
          >
            <div className="space-y-4">
              <h2 className="font-bold text-2xl" id="event-listeners">
                대상인원
              </h2>
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
          </ScrollAppearDiv>

          <ScrollAppearDiv
            className="mb-32 space-y-32"
            aria-labelledby="event-timetable"
          >
            <div className="space-y-4">
              <h2 className="font-bold text-2xl" id="event-timetable">
                세션 내용
              </h2>
              <div>
                <h3 className="font-bold text-xl mb-2">
                  강연자 특강 (19:30~20:30)
                </h3>
                <ul role="list" className="flex flex-col space-y-1">
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
                <h3 className="font-bold text-xl mb-2">
                  강연자 및 Bullet Group 한국인 현직자 교류회 (20:30~21:30)
                </h3>
                <ul role="list" className="flex flex-col space-y-1">
                  <li className="flex">
                    <Dot className="w-4 h-4" />
                    프리토킹시간
                  </li>
                </ul>
              </div>
            </div>
          </ScrollAppearDiv>

          <ScrollAppearDiv
            className="mb-32 space-y-32"
            aria-labelledby="event-apply"
          >
            <div className="space-y-4">
              <h2 className="font-bold text-2xl" id="event-apply">
                신청하기
              </h2>
              <div>
                <button
                  onClick={() =>
                    openInNewTab("https://forms.gle/WRdKWgjJATVFNrk88")
                  }
                >
                  <Image
                    src={"/img/bullet-qr.svg"}
                    width={120}
                    height={120}
                    alt="google-form-qr"
                    className="w-64 h-64"
                  />
                </button>
              </div>
              <p>
                * PC: <strong>클릭</strong>하시면 해당 페이지로 이동합니다.
              </p>
              <p>
                * MOBILE: <strong>스캔</strong>하시면 해당 페이지로 이동합니다.
              </p>
            </div>
          </ScrollAppearDiv>
        </main>

        <footer
          role="contentinfo"
          aria-label="Footer information"
          className="mt-auto w-full bg-black"
        >
          <div
            className={cn(
              "max-w-4xl mx-auto w-full relative grid grid-cols-1 md:gid-cols-2 p-6 md:p-4",
              "flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-around "
            )}
          >
            <section
              className={cn("flex items-center")}
              aria-labelledby="event-host"
            >
              <h2
                className="text-white mr-4"
                aria-label="Hosted by"
                id="event-host"
              >
                주최
              </h2>
              <Image
                className="cursor-pointer"
                src={"/img/footer_logo.svg"}
                width={120}
                height={80}
                alt="Bullet Group logo"
                aria-label={`Visit Bullet Group Official Site`}
                onClick={() => openInNewTab("https://bltinc.co.jp/")}
              />
            </section>
            <section
              className={cn("flex items-center")}
              aria-labelledby="event-collaboration"
            >
              <h2
                className="text-white mr-4"
                aria-label="In collaboration with"
                id="event-collaboration"
              >
                협력
              </h2>
              <div className="flex space-x-4 justify-center items-center">
                <Image
                  className="cursor-pointer"
                  src={"/img/worldjob_logo.png"}
                  width={130}
                  height={80}
                  alt="world job logo"
                  aria-label={`Visit World Job's Official Site`}
                  onClick={() => openInNewTab("https://www.worldjob.or.kr/")}
                />
                <Image
                  className="cursor-pointer"
                  src={"/img/tamastudy.svg"}
                  width={100}
                  height={70}
                  alt="tamastudy logo"
                  aria-label={`Visit tamastudy official instagram page`}
                  onClick={() =>
                    openInNewTab("https://www.instagram.com/tamastudy__tokyo/")
                  }
                />
              </div>
            </section>
          </div>
          <p className="text-center py-4 text-white text-xs">
            &copy; {new Date().getFullYear()} Tamstudy. All rights reserved.
          </p>
        </footer>
      </div>
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
