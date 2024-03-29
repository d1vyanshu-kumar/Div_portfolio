"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function Uses() {
    const featured = [
      {
        title: "Coding",
        description:
          "VSCode - Vs code is the best code editor which i used for coding ",
        slug: "understanding-coding",
        isFeatured: true,
      },
      {
        title: "The Art of Songwriting",
        description:
          "Learn the craft of songwriting from experienced musicians and songwriters.",
        slug: "the-art-of-songwriting",
        isFeatured: true,
      },
      {
        title: "Mastering Your Instrument",
        description:
          "Advanced techniques to master your musical instrument of choice. Fl studio is the best Insturment in which you create and learn how much music is beautifull",
        slug: "mastering-your-instrument",
        isFeatured: true,
      },
      {
        title: "Coding Chalenges",
        description:
          "Engaging in coding challenges on platforms like LeetCode and CodeChef is an enriching experience, where I delve into a world of real code and learn invaluable insights. Participating in coding competitions on these platforms adds an exhilarating dimension to my learning journey.",
        isFeatured: true,
      },
      // Added two more webinars
      {
        title: "music",
        description:
          "the spotify is best for listning music but i like soundcloud",
        slug: "performance-techniques",
        isFeatured: true,
      },
      {
        title: "Trading",
        description:
          "you can learn trading from investopidea as i am learning",
        slug: "Trading",
        isFeatured: true,
      },
    ];
    return (
      <div className="p-12 bg-gray-900">
        <div>
                <a id="use" />
                </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
          
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              I often get messages asking about specific pieces of software or
              hardware I use. This not a static page, it's a living document
              with everything that I'm using nowadays.
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              {" "}
              Tools. Apps. Gear.
            </p>
          </div>

          <div className="mt-10">
            <HoverEffect
              items={featured.map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: "#use",
              }))}
            />
          </div>

          <div className="mt-10 text-center">
          <div>
                <a id="contact" />
                </div>
            <Link
              href="#contact"
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    );
  }


export default Uses;
