"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="max-w-[1900px] min-w-[360px] md:mx-auto ">
        <header className=" flex justify-between items-center md:justify-between md:items-center pr-5 md:pr-20 pl-5 md:pl-20 pt-6 pb-6">
          <div className="md:w-28 h-5 md:h-full">
            <Image
              src={"/logo.png"}
              width={1000}
              height={1000}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex space-x-3 ">
            <button className="border border-primarycolor p-2 md:p-4 rounded-lg text-primarycolor">
              Login
            </button>
            <button className="border border-black p-2 md:p-4 rounded-lg bg-black text-white">
              Get Started
            </button>
          </div>
        </header>
        <div className="md:pr-48 md:pl-48">
          <div>
            <h1 className=" text-center text-gray-800 text-3xl md:text-5xl mb-6 ">
              <p>Discovering Tastes</p> Together: Your Friendly <p></p>
              <l className="text-primarycolor">Food Journey</l> Companion
            </h1>
            <p className="text-xs text-center pr-5 pl-5 md:pr-36 md:pl-36 text-gray-400">
              "Explore a world of allergy-friendly dining options with our food
              companion app. Discover safe and delicious meals tailored to your
              dietary needs, ensuring every bite is a delightful experience."
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:flex-wrap md:justify-center md:flex text-xs">
            <button className="border border-primarycolor p-2 md:p-3 rounded-xl text-primarycolor mt-5 ml-4">
              Allergy Awareness
            </button>
            <button className="border border-primarycolor p-2 md:p-3 rounded-xl text-primarycolor mt-5 ml-4">
              Personalized Recommendations
            </button>
            <button className="border border-primarycolor p-2 md:p-3 rounded-xl text-primarycolor mt-5 ml-4">
              Discover New Options
            </button>
            <button className="border border-primarycolor p-2 md:p-3 rounded-xl text-primarycolor mt-5 ml-4">
              Ingredients Substitution
            </button>
            <button className="border border-primarycolor p-2 md:p-3 rounded-xl text-primarycolor mt-5 ml-4">
              Nutritional Assessments
            </button>
            <button className="border border-primarycolor p-2 md:p-3 rounded-xl text-primarycolor mt-5 ml-4">
              Recipe Suggestions
            </button>
            <button className="border border-primarycolor p-2 md:p-3 rounded-xl text-primarycolor mt-5 ml-4">
              Health Condition Analytics
            </button>
          </div>
          <div>
            <div className="">
              <Slider {...settings}>
                <div className="flex gap-2 items-center text-xs ">
                  <div className="w-[200px]">
                    <Image
                      src={"/image.png"}
                      width={1000}
                      height={1000}
                      alt="Food"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p> Eat a Variety of Foods</p>
                    <p>
                      {" "}
                      Include a diverse range of foods in your diet to ensure
                      you get a wide spectrum of nutrients. Aim for a balanced
                      intake of fruits, vegetables, whole grains, lean proteins,
                      and healthy fats.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center text-xs ">
                  <div className="w-[200px]">
                    <Image
                      src={"/image.png"}
                      width={1000}
                      height={1000}
                      alt="Food"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p> Eat a Variety of Foods</p>
                    <p>
                      {" "}
                      Include a diverse range of foods in your diet to ensure
                      you get a wide spectrum of nutrients. Aim for a balanced
                      intake of fruits, vegetables, whole grains, lean proteins,
                      and healthy fats.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center text-xs ">
                  <div className="w-[200px]">
                    <Image
                      src={"/image.png"}
                      width={1000}
                      height={1000}
                      alt="Food"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <p> Eat a Variety of Foods</p>
                    <p>
                      {" "}
                      Include a diverse range of foods in your diet to ensure
                      you get a wide spectrum of nutrients. Aim for a balanced
                      intake of fruits, vegetables, whole grains, lean proteins,
                      and healthy fats.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
