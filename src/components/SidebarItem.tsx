import { Link } from "react-router";

interface SidebarItemProps {
  title: string;
  text: string;
}

export default function SidebarItem({ title, text }: SidebarItemProps) {
  return (
    <div className="border-b border-secondary-darkgray py-10 last-of-type:border-none">
      <Link to="#">
        <h3 className="text-secondary-white font-semibold text-xl lg:text-2xl mb-3 [&:hover,&:active]:text-primary-orange transition">
          {title}
        </h3>
      </Link>

      <p className="text-secondary-gray md:font-semibold text-base leading-relaxed">
        {text}
      </p>
    </div>
  );
}
