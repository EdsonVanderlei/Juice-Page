"use client";
import Image from "next/image";
import Logo from "../../public/JuiceLogo.png";
import MangoJuiceSmallSize from "../../public/MangoJuiceSmallSize.png";
import MangoJuiceBigSize from "../../public/MangoJuiceBigSize.png";
import LycheeJuiceSmallSize from "../../public/LycheeJuiceSmallSize.png";
import LycheeJuiceBigSize from "../../public/LycheeJuiceBigSize.png";
import OrangeJuiceSmallSize from "../../public/OrangeJuiceSmallSize.png";
import MangoBackground from "../../public/MangoBackground.png";
import LycheeBackground from "../../public/LycheeBackground.png";
import OrangeBackground from "../../public/OrangeBackground.png";
import OrangeJuiceBigSize from "../../public/OrangeJuiceBigSize.png";
import { Poppins } from "next/font/google";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export default function Home() {
  const rotateRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      node.style.height = `${node.clientWidth}px`;
      window.addEventListener("resize", () => {
        node.style.height = `${node.clientWidth}px`;
      });
    }
  }, []);

  const tabItem = useRef<HTMLDivElement>(null);

  const Fruits = useMemo(() => {
    return [
      {
        bg: MangoBackground.src,
        image: MangoJuiceSmallSize.src,
        title: "Mango",
        text: "Pure Mango Bliss: Crafted from the finest, sun-ripened mangoes, our Mango Juice is bursting with the natural sweetness and succulent goodness of this exotic fruit. Every glass of our juice embodies the essence of a sun-kissed mango orchard, delivering an unparalleled taste experience that will leave you craving for more.",
        color: "bg-orange-600",
      },
      {
        bg: LycheeBackground.src,
        image: LycheeJuiceSmallSize.src,
        title: "Lychee",
        text: "Taste of Tropical Bliss: Our Lychee Juice is a celebration of the unique lychee fruit's natural essence. With a harmonious blend of sweetness and floral undertones, it offers a distinctive flavor that will leave you longing for more. Our expert juicers skillfully extract the purest juices from the juiciest lychees, ensuring every drop is brimming with authentic taste and goodness.",
        color: "bg-pink-600",
      },
      {
        bg: OrangeBackground.src,
        image: OrangeJuiceSmallSize.src,
        title: "Orange",
        text: "Harvesting Nature's Each glass of Orange Juice is a celebration of nature's bountiful harvest. Handpicked from lush orchards, the ripest and juiciest oranges are carefully selected to ensure the finest quality. With each bottle, you experience the essence of sun-drenched groves and the care put into crafting this thirst-quenching masterpiece.",
        color: "bg-yellow-600",
      },
    ];
  }, []);
  const [index, setIndex] = useState<number>(0);

  const rotate = ["rotate-90", "rotate-0", "-rotate-90"];
  const tabRef = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        node.style.width = `${tabItem.current?.clientWidth}px`;
        node.style.transform = `translateX(${
          (node.clientWidth + 20) * index
        }px)`;
      }
    },
    [index]
  );

  const imageRef = useCallback((node: HTMLDivElement) => {
    if (node) {
      window.addEventListener("resize", () => {
        node.style.height = `${node.clientWidth}px`;
      });
      node.style.height = `${node.clientWidth}px`;
    }
  }, []);

  const mainRef = useCallback(
    (node: HTMLDivElement) => {
      if (node) {
        node.style.backgroundImage = `url(${Fruits[index].bg})`;
      }
    },
    [index, Fruits]
  );
  return (
    <main
      ref={mainRef}
      className="bg-orange-600 w-screen h-screen overflow-hidden bg-no-repeat bg-cover transition-all duration-[2000] px-52"
    >
      <div className="flex flex-col h-full w-full m-auto">
        <div className="flex justify-between items-center py-3">
          <div className="w-40 relative h-16 shrink-0">
            <Image src={Logo.src} alt="Logo Juice" fill={true} />
          </div>
          <div className="flex items-center gap-12  text-white text-3xl">
            <p className="cursor-pointer">Flavors</p>
            <p className="cursor-pointer">Find us</p>
            <p className="cursor-pointer">About Us</p>
            <p className="cursor-pointer">Franchise</p>
          </div>
          <button className="border-4 text-white border-white px-6 text-2xl py-2">
            ONLINE STORE
          </button>
        </div>
        {}
        <div className="flex items-end flex-1">
          <div className="flex flex-col z-10 h-full justify-center gap-8 text-white flex-1">
            <p className="text-9xl">{Fruits[index].title}</p>
            <p className="text-xl pr-16" style={poppins.style}>
              {Fruits[index].text}
            </p>
            <div className="flex items-center w-full gap-5 relative">
              {Fruits.map((_, i) => {
                return (
                  <div ref={tabItem}>
                    <Image
                      className="cursor-pointer"
                      onClick={() => setIndex(i)}
                      key={i}
                      src={_.image}
                      alt="Juice"
                      width={200}
                      height={200}
                    />
                  </div>
                );
              })}
              <div
                ref={tabRef}
                className="h-1 absolute transition-transform duration-700 w-full rounded-xl bg-white -bottom-1 left-0"
              ></div>
            </div>
          </div>
          <div className="h-full flex-1 relative flex items-end">
            <div
              ref={rotateRef}
              className={
                "w-[65vw] transition-transform  absolute duration-700 bg-opacity-30 bg-white -bottom-[110%] left-1/2 -translate-x-1/2 rounded-full " +
                rotate[index]
              }
            >
              <div
                ref={imageRef}
                className="-top-[50%] w-[75%] rotate-0 absolute left-1/2 -translate-x-1/2 "
              >
                <Image src={LycheeJuiceBigSize.src} alt="Juice" fill={true} />
              </div>
              <div
                ref={imageRef}
                className="top-1/2 -left-[50%]  w-[75%] -rotate-90 absolute -translate-y-1/2 "
              >
                <Image src={MangoJuiceBigSize.src} alt="Juice" fill={true} />
              </div>
              <div
                ref={imageRef}
                className="top-1/2 -right-[50%]  w-[75%] absolute rotate-90 -translate-y-1/2  "
              >
                <Image src={OrangeJuiceBigSize.src} alt="Juice" fill={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
