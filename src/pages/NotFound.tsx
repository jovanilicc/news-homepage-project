import { Link } from "react-router";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="bg-amber-100 p-10 max-w-3xl mx-auto mt-14">
        <h1 className="text-amber-500 font-bold text-4xl text-center">
          404 Page not found.
          <br /> You can go back to homepage by clicking button bellow{" "}
        </h1>
        <p className="text-center pt-5">
          <Link
            className="text-white font-extrabold py-2 px-5 bg-amber-500 rounded-3xl [&:hover,&:active]:opacity-70 transition"
            to="/"
          >
            HomePage
          </Link>
        </p>
      </div>
    </>
  );
}
