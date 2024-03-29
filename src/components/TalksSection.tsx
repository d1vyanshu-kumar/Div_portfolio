/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "AI and Technology",
      description:
        "Problem: Implementing ethical AI algorithms to mitigate biases in decision-making processes. Solution: Integrating fairness metrics and interpretability techniques to ensure transparency and accountability in AI systems.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          AI and Technology
        </div>
      ),
    },
    {
      title: "Frontend Engineering",
      description:
        "Problem: Enhancing user experience across different devices and browsers while maintaining performance and accessibility. Solution: Employing responsive design principles, progressive web apps (PWAs), and continuous testing to create seamless user interfaces.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          {/* <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          /> */}
        </div>
      ),
    },
    {
      title: "Backend Engineering",
      description:
        "Problem: Scaling backend infrastructure to handle increasing user loads and data volumes without compromising reliability or speed. Solution: Utilizing microservices architecture, containerization (e.g., Docker), and cloud-native technologies for efficient resource allocation and scalability",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Backend Engineering
        </div>
      ),
    },
    {
      title: "Quantum Engineering",
      description:
        "Problem: Developing practical applications for quantum computing that leverage its unique capabilities while overcoming hardware limitations and noise. Solution: Exploring quantum algorithms for optimization, cryptography, and simulation, and collaborating with interdisciplinary teams to tackle challenges in quantum error correction and fault tolerance",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Quantum Engineering
        </div>
      ),
    },
  ];

function TalksSection() {
  return (
    <div>
       <a id="Talk" />
        <StickyScroll content={content} />
    </div>
  )
}

export default TalksSection;
