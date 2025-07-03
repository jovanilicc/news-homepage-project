import { techNews } from "../data";
import NewsItem from "./NewsItem";

export default function NewsSection() {
  const newsList = techNews.map((item) => (
    <NewsItem
      key={item.title}
      title={item.title}
      text={item.text}
      altText={item.altText}
      imageUrl={item.imageUrl}
      place={item.place}
    />
  ));
  return (
    <section className="pb-16 flex flex-col md:flex-row justify-between gap-8 md:gap-3 xl:gap-28">
      {newsList}
    </section>
  );
}
