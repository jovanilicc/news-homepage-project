import heroImgD from "../assets/images/image-web-3-desktop.jpg";
import heroImgM from "../assets/images/image-web-3-mobile.jpg";
import Sidebar from "./Sidebar";
import { Link } from "react-router";
import SidebarItem from "./SidebarItem";
import { latestNews } from "../data.ts";
import NewsSection from "./NewsSection";
export default function Hero() {
  const latestNewsList = latestNews.map((item) => (
    <SidebarItem key={item.title} title={item.title} text={item.text} />
  ));

  return (
    <main>
      <section className="md:flex gap-7 pb-16">
        <div className="basis-5/8 xl:basis-7/10 ">
          <picture className="block mx-auto">
            <source className="" srcSet={heroImgM} media="(max-width: 768px)" />

            <img
              src={heroImgD}
              alt="Web3 news article image"
              className="mx-auto"
            />
          </picture>

          <div className="md:flex pt-6 pb-16 md:pb-0 md:pt-10 md:gap-8 xl:gap-16 ">
            <div>
              <h1 className="text-5xl pb-5 md:pb-0 md:text-6xl font-extrabold max-w-[400px]">
                The Bright Future of Web 3.0?
              </h1>
            </div>
            <div className="flex flex-col ">
              <p className="text-xl pb-7 md:pb-0 font-semibold text-secondary-darkgray max-w-[480px]">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fullfiling its promise?
              </p>

              <Link
                className="text-center mt-6 xl:mt-auto block text-xl md:text-base max-w-56 md:max-w-52 font-bold [&:hover,&:active]:text-secondary-white [&:hover,&:active]:bg-secondary-darkblue transition bg-primary-red py-4 md:py-3 tracking-widest"
                to="#"
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
        <Sidebar title="New">{latestNewsList}</Sidebar>
      </section>
      <NewsSection />
    </main>
  );
}
