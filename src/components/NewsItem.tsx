import { Link } from "react-router";
import type { TechNews } from "../data";

export default function ({ place, altText, imageUrl, title, text }: TechNews) {
  return (
    <div className="flex gap-5 md:gap-5">
      <div className="max-w-26 md:max-w-28">
        <img src={imageUrl} alt={altText} />
      </div>
      <div>
        <span className="block pb-2 text-primary-red text-2xl font-extrabold">
          {place}
        </span>
        <Link to="#">
          <h3 className="pb-4 [&:hover,&:active]:text-primary-red text-secondary-darkblue text-xl md:text-[18px] lg:text-xl font-extrabold transition ease-in duration-100">
            {title}
          </h3>
        </Link>
        <p className="text-secondary-darkgray lg:text-[18px] font-semibold">
          {text}
        </p>
      </div>
    </div>
  );
}
