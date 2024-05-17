import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Storyboard1() {
  return (
    <div className="w-[1440px] h-[10634px] relative bg-white">
      <div className="w-[1283px] h-[0px] left-[157px] top-[824px] absolute border border-yellow-950"></div>
      <div className="left-[314px] top-[178px] absolute">
        <div className="left-0 top-0 absolute text-yellow-950 text-[100px] font-light font-['Agrandir'] leading-[112px] tracking-[4px]">
          Savory.
          <br />
          Adventurous.
        </div>
        <div className="left-[243px] top-[229px] absolute text-yellow-950 text-[100px] font-light font-['Agrandir'] leading-[124px] tracking-[4px]">
          Delightful
        </div>
      </div>
      <div className="h-[276px] left-[512px] top-[2066px] absolute flex-col justify-start items-start gap-[72px] inline-flex w-[846] max-w-7xl">
        <div className="self-stretch text-yellow-950 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
          Indulge in a culinary journey that nourishes both body and planet. Our
          commitment to sustainable sourcing, fresh ingredients, and authentic
          flavors embodies a harmony of taste and responsibility.
        </div>
        <div className="self-stretch text-yellow-950 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
          Discover our mission to bring conscious Chinese cuisine to mankind.
        </div>
        <div className="text-yellow-950 text-[22px] font-bold font-['Agrandir'] underline leading-[42px] tracking-wide">
          EXPLORE OUR MISSION
        </div>
      </div>
      <img
        className="w-[1500px] h-[1001px] left-[-226px] top-[617px] absolute"
        src="https://res.cloudinary.com/dlq9o1289/image/upload/v1715970605/g2242_a9uvvl.png"
      />
      <div className="w-[1443px] h-[962px] left-[-1px] top-[7794px] absolute">
        <img
          className="w-[962px] h-[1443px] left-[1443px] top-0 absolute origin-top-left rotate-90"
          src="https://via.placeholder.com/962x1443"
        />
        <div className="left-[629px] top-[863px] absolute text-zinc-400 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
          Unmatched Flavors
        </div>
        <div className="w-[1103px] h-[0px] left-[-526px] top-[885px] absolute border border-zinc-400"></div>
        <div className="left-[166px] top-[73px] absolute justify-start items-start gap-3.5 inline-flex">
          <div className="w-4 h-4 rounded-full border-2 border-white" />
          <div className="text-white text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
            Made by Chef Daze
          </div>
        </div>
      </div>
      <div className="w-[762px] left-[512px] top-[1780px] absolute text-yellow-950 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-[2.48px]">
        The Finest Chinese Cuisine, Kind to You and the Earth.
      </div>
      <div className="w-[82px] h-[82px] top-[679px] absolute left-[1292px]">
        <div className="w-[82px] h-[82px] left-0 top-0 absolute rounded-full border-2 border-yellow-950" />
        <div className="w-[42px] h-[42px] left-[20px] top-[20px] absolute">
          <Image
            alt={"Pasted Image"}
            fetchpriority={undefined}
            loading={"lazy"}
            width={84}
            height={84}
            decoding={"async"}
            data-nimg={"1"}
            className={"w-full h-full"}
            style={{
              color: "transparent",
            }}
            sizes={undefined}
            srcSet={undefined}
            src={"/images/tempo-image-20240517T185612127Z.png"}
            onLoad={() => console.log("onLoad")}
            onError={() => console.log("onError")}
          />
        </div>
      </div>
      <div className="w-72 h-[232.21px] left-[76px] top-[1474.17px] absolute">
        <img
          className="w-72 h-[232.21px] left-0 top-0 absolute"
          src="https://res.cloudinary.com/dlq9o1289/image/upload/v1715973034/Group_48099715_tcmpet.png"
        />
        <div className="w-[71.56px] h-[71.56px] left-[108.22px] top-[80.08px] absolute">
          <div className="w-[71.56px] h-[71.56px] left-0 top-0 absolute bg-white/opacity-25 rounded-full border-2 border-white" />
          <div className="w-[36.65px] h-[36.65px] left-[20.95px] top-[17.45px] absolute" />
        </div>
      </div>
      <div className="w-[394px] h-[311.82px] left-[1004px] top-[2419.42px] absolute"></div>
      <div className="w-[1440px] h-[1001px] left-0 top-[2845px] absolute">
        <div className="w-[1500px] h-[1001px] left-[-30px] top-0 absolute bg-black/opacity-20" />
        <div className="left-[166px] top-[73px] absolute justify-start items-start gap-3.5 inline-flex">
          <div className="w-4 h-4 rounded-full border-2 border-white" />
          <div className="text-white text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
            Made by Chef Daze
          </div>
        </div>
      </div>
      <div className="w-[180px] h-[180px] p-2.5 left-[708px] top-[2296px] absolute rounded-[100px] border border-yellow-950 justify-center items-center gap-2.5 inline-flex">
        <div className="text-yellow-950 text-[100px] font-light font-['Agrandir'] leading-[112px] tracking-widest">
          1
        </div>
      </div>
      <div className="w-[1440px] h-[3948px] left-0 top-[3846px] absolute bg-yellow-800">
        <img
          className="w-[816px] h-[544px] left-[675px] top-[2839px] absolute"
          src="https://via.placeholder.com/816x544"
        />
        <div className="w-[938px] h-[427.29px] left-[252px] top-[1983px] absolute">
          <div className="origin-top-left -rotate-90 w-[354.41px] h-[354.41px] left-0 top-[427.29px] absolute"></div>
        </div>
        <div className="w-[180px] h-[180px] p-2.5 left-[826px] top-[788px] absolute rounded-[100px] border border-amber-700 justify-center items-center gap-2.5 inline-flex">
          <div className="w-[78px] text-orange-200 text-[100px] font-light font-['Agrandir'] leading-[112px] tracking-widest">
            2
          </div>
        </div>
        <div className="w-[180px] h-[180px] p-2.5 left-[1093px] top-[2700px] absolute rounded-[100px] border border-amber-700 justify-center items-center gap-2.5 inline-flex">
          <div className="w-[78px] text-orange-200 text-[100px] font-light font-['Agrandir'] leading-[112px] tracking-widest">
            3
          </div>
        </div>
        <div className="h-[41px] left-[1093px] top-[2839px] absolute justify-end items-end gap-2.5 inline-flex">
          <div className="w-[180px] h-[180px] p-2.5 rounded-[100px] border border-white justify-center items-center gap-2.5 flex">
            <div className="w-[78px] text-orange-200 text-[100px] font-light font-['Agrandir'] leading-[112px] tracking-widest">
              3
            </div>
          </div>
        </div>
        <div className="w-[1103px] left-[169px] top-[129px] absolute text-orange-200 text-[100px] font-light font-['Agrandir'] leading-[112px] tracking-widest">
          Unlock our cuisines, all yours
        </div>
        <div className="h-[188px] left-[602px] top-[646px] absolute flex-col justify-start items-start gap-[72px] inline-flex">
          <div className="self-stretch text-orange-200 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
            "Experience the rich tapestry of Chinese culinary traditions,
            crafted with passion and precision. Indulge in the finest selections
            awaited to tempt your palate."
          </div>
          <div className="text-orange-200 text-[22px] font-bold font-['Agrandir'] underline leading-[42px] tracking-wide">
            DISCOVER OUR PRODUCT
          </div>
        </div>
        <div className="h-[146px] left-[885px] top-[2608px] absolute flex-col justify-start items-start gap-[72px] inline-flex">
          <div className="self-stretch text-orange-200 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
            Embark on a flavorful journey to authentic Chinese cuisine
            excellence
          </div>
          <div className="text-orange-200 text-[22px] font-bold font-['Agrandir'] underline leading-[42px] tracking-wide">
            DISCOVER OUR RECIPES
          </div>
        </div>
        <img
          className="w-[515.33px] h-[773px] left-0 top-[468px] absolute"
          src="https://via.placeholder.com/515x773"
        />
        <img
          className="w-[601px] h-[902px] left-0 top-[2917px] absolute"
          src="https://via.placeholder.com/601x902"
        />
        <div className="w-[670px] left-[602px] top-[468px] absolute text-orange-200 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
          The best chinese food awaits{" "}
        </div>
        <div className="w-[652px] left-[169px] top-[2608px] absolute text-orange-200 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
          Ultimate chinese experiences{" "}
        </div>
        <div className="w-[1103px] h-[0px] left-[169px] top-[1648px] absolute border border-amber-700"></div>
        <img
          className="w-[816px] h-[544px] left-[690px] top-[1007px] absolute"
          src="https://via.placeholder.com/816x544"
        />
        <div className="left-[555px] top-[2224px] absolute text-orange-200 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
          Guy Fieri
        </div>
        <div className="w-[1105px] left-[184px] top-[1860px] absolute text-center text-orange-200 text-[100px] font-light font-['Agrandir'] leading-[112px] tracking-widest">
          "Food is not just eating energy. It's an experience." -{" "}
        </div>
        <div className="w-[1103px] h-[0px] left-[169px] top-[2480px] absolute border border-amber-700"></div>
      </div>
      <div className="w-[1442px] h-[1878px] left-0 top-[8756px] absolute bg-orange-200">
        <div className="left-[169px] top-[800px] absolute origin-top-left -rotate-90 text-yellow-950 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
          Latest Recipes
        </div>
        <div className="left-[879px] top-[1166px] absolute text-yellow-950 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
          Mission
        </div>
        <div className="left-[740px] top-[1180px] absolute text-yellow-950 text-[32px] font-light font-['Agrandir'] leading-[72px] tracking-wide">
          01
        </div>
        <div className="left-[740px] top-[1280px] absolute text-yellow-950 text-[32px] font-light font-['Agrandir'] leading-[72px] tracking-wide">
          02
        </div>
        <div className="left-[740px] top-[1380px] absolute text-yellow-950 text-[32px] font-light font-['Agrandir'] leading-[72px] tracking-wide">
          03
        </div>
        <div className="left-[740px] top-[1480px] absolute text-yellow-950 text-[32px] font-light font-['Agrandir'] leading-[72px] tracking-wide">
          04
        </div>
        <div className="left-[879px] top-[1266px] absolute text-yellow-950 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
          Product
        </div>
        <div className="left-[879px] top-[1366px] absolute text-yellow-950 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
          Recipes
        </div>
        <div className="left-[879px] top-[1466px] absolute text-yellow-950 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
          Order Now
        </div>
        <div className="left-[296px] top-[126px] absolute text-yellow-950 text-[22px] font-bold font-['Agrandir'] underline leading-[42px] tracking-wide">
          DISCOVER OUR RECIPES
        </div>
        <div className="w-[601px] h-[601px] left-[296px] top-[215px] absolute">
          <img
            className="w-[601px] h-[601px] left-0 top-0 absolute"
            src="https://via.placeholder.com/601x601"
          />
          <div className="w-[521px] h-40 left-[40px] top-[69px] absolute flex-col justify-start items-center gap-7 inline-flex">
            <div className="justify-start items-start gap-3.5 inline-flex">
              <div className="w-4 h-4 rounded-full border-2 border-orange-200" />
              <div className="text-orange-200 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
                Made by Chef Daze
              </div>
            </div>
            <div className="w-[521px] text-center text-orange-200 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
              General Tso's Chicken
            </div>
          </div>
        </div>
        <div className="left-[161px] top-[1181px] absolute text-yellow-950 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
          Contact
        </div>
        <div className="left-[161px] top-[1311px] absolute text-yellow-950 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
          Instagram
        </div>
        <div className="left-[451px] top-[1181px] absolute text-yellow-950 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
          FAQ
        </div>
        <div className="left-[451px] top-[1311px] absolute text-yellow-950 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
          Terms
        </div>
        <div className="w-[601px] h-[601px] left-[936px] top-[215px] absolute">
          <img
            className="w-[601px] h-[601px] left-0 top-0 absolute"
            src="https://via.placeholder.com/601x601"
          />
          <div className="w-[422px] h-40 left-[90px] top-[69px] absolute flex-col justify-start items-center gap-7 inline-flex">
            <div className="justify-start items-start gap-3.5 inline-flex">
              <div className="w-4 h-4 rounded-full border-2 border-orange-200" />
              <div className="text-orange-200 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
                Made by Chef Daze
              </div>
            </div>
            <div className="w-[422px] text-center text-orange-200 text-[62px] font-light font-['Agrandir'] leading-[72px] tracking-wider">
              Szechuan Noodles
            </div>
          </div>
        </div>
        <div className="w-[526px] left-[161px] top-[1436px] absolute text-yellow-950 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
          Learn more about our mission to bring a consicous chinese food recipe
          to mankind.
        </div>
        <div className="w-[155px] h-[36.25px] left-[161px] top-[1591px] absolute" />
        <div className="w-24 h-[0px] left-[740px] top-[1166px] absolute border border-yellow-950"></div>
        <div className="w-24 h-[0px] left-[740px] top-[1266px] absolute border border-yellow-950"></div>
        <div className="w-24 h-[0px] left-[740px] top-[1366px] absolute border border-yellow-950"></div>
        <div className="w-24 h-[0px] left-[740px] top-[1466px] absolute border border-yellow-950"></div>
        <div className="left-[516px] top-[1777px] absolute text-center text-yellow-950 text-[22px] font-normal font-['Agrandir'] leading-[42px] tracking-wide">
          © Copyright 2024, All Rights Reserved
        </div>
        <div className="origin-top-left -rotate-90 w-[235.31px] h-[305.96px] left-[941.68px] top-[1938.63px] absolute"></div>
      </div>
      <div className="w-[155px] h-[36.25px] left-[76px] top-[19.88px] absolute">
        <Image
          alt={"Pasted Image"}
          fetchpriority={undefined}
          loading={"lazy"}
          width={310}
          height={74}
          decoding={"async"}
          data-nimg={"1"}
          className={"w-full h-full"}
          style={{
            color: "transparent",
          }}
          sizes={undefined}
          srcSet={undefined}
          src={"/images/tempo-image-20240517T184146655Z.png"}
          onLoad={() => console.log("onLoad")}
          onError={() => console.log("onError")}
        />
      </div>
      <div className="w-[254px] left-[1110px] top-[19px] absolute justify-between items-start inline-flex">
        <div className="px-3.5 py-2 rounded-[100px] border border-yellow-950 justify-start items-center gap-[7px] flex">
          <div className="w-6 h-6 relative">
            <Image
              alt={"Pasted Image"}
              fetchpriority={undefined}
              loading={"lazy"}
              width={96}
              height={96}
              decoding={"async"}
              data-nimg={"1"}
              className={"w-full h-full"}
              style={{
                color: "transparent",
              }}
              sizes={undefined}
              srcSet={undefined}
              src={"/images/tempo-image-20240517T185344261Z.png"}
              onLoad={() => console.log("onLoad")}
              onError={() => console.log("onError")}
            />
          </div>
          <div className="text-yellow-950 text-[22px] font-normal leading-normal tracking-wide">
            Cart
          </div>
        </div>
        <div className="px-3.5 py-2 rounded-[100px] border border-yellow-950 justify-start items-center gap-[7px] flex">
          <div className="w-6 h-6 relative">
            <Image
              alt={"Pasted Image"}
              fetchpriority={undefined}
              loading={"lazy"}
              width={96}
              height={96}
              decoding={"async"}
              data-nimg={"1"}
              className={"w-full h-full"}
              style={{
                color: "transparent",
              }}
              sizes={undefined}
              srcSet={undefined}
              src={"/images/tempo-image-20240517T184327200Z.png"}
              onLoad={() => console.log("onLoad")}
              onError={() => console.log("onError")}
            />
          </div>
          <div className="text-yellow-950 text-[22px] font-normal font-['Agrandir'] leading-normal tracking-wide">
            Menu
          </div>
        </div>
      </div>
      <div className="w-[265px] h-[265px] left-[275px] top-[428px] absolute">
        <div className="w-[265px] h-[265px] left-0 top-0 absolute">
          <Image
            alt={"Pasted Image"}
            fetchpriority={undefined}
            loading={"lazy"}
            width={537}
            height={537}
            decoding={"async"}
            data-nimg={"1"}
            className={"w-full h-full"}
            style={{
              color: "transparent",
            }}
            sizes={undefined}
            srcSet={undefined}
            src={"/images/tempo-image-20240517T185719089Z.png"}
            onLoad={() => console.log("onLoad")}
            onError={() => console.log("onError")}
          />
        </div>
        <div className="w-[265px] left-0 top-[189px] absolute justify-center items-center inline-flex">
          <div className="w-[265px] h-[265px] relative"></div>
        </div>
      </div>
      <img
        className="w-[444px] h-[665.33px] left-0 top-[1857px] absolute"
        src="https://via.placeholder.com/444x665"
      />
    </div>
  );
}
