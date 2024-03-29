/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
"use client";
import Link from "next/link";
import projectInfo from "../data/project_info.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  isFeatured: boolean;
  image: string;
}

function ProjectSection() {
  const projectIdea = projectInfo.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          Welcome to the Project Section
        </h2>
        <div>
          <a id="projects-section" />
        </div>

        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Projects
        </p>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {projectIdea.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="p-4 sm:p-3 flex flex-col items-center text-center flex-grow">
                <div className="w-64 h-64 relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-950 flex-grow">
                  {course.description}
                </p>
                <Link href={course.slug}>
                  <span className="text-orange-200 hover:underline cursor-pointer">
                    Click to see project
                  </span>
                </Link>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div>
        <a id="Talks" />
      </div>
      <div className="mt-20 text-center">
        <Link
          href="#Talks"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          <strong>Talks</strong>
        </Link>
      </div>
    </div>
  );
}

export default ProjectSection;
