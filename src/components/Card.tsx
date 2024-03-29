'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const CardTestimonials = [
    {
      quote:
        'Exploring the intersection of AI and music has captured my imagination. I am excited to delve deeper into how machine learning can revolutionize music creation and performance.',
      name: 'Divaynshu kumar Nayak',
      title: 'Software Student & Music Enthusiast',
    },
    {
      quote:
        "As a software student, I'm constantly fascinated by the potential of AI in coding. From automating repetitive tasks to building intelligent applications, the possibilities are endless.",
      name: 'Divyanshu kumar Nayak',
      title: 'Aspiring AI Developer',
    },
    {
      quote:
        "The world of AI trading is evolving rapidly, and as a software student, I'm eager to explore its impact on financial markets. It's a thrilling blend of technology and finance.",
      name: 'Divyanshu kumar Nayak',
      title: 'Future AI Trader',
    },
    {
      quote:
        'From healthcare to transportation, AI is reshaping industries worldwide. As a software student, I\'m excited to be at the forefront of innovation, leveraging AI to solve real-world challenges.',
      name: 'Divyanshu Kumar Nayak',
      title: 'AI Innovator in Training',
    },
    {
      quote:
        'One of the most exciting areas of AI is natural language processing. As a software student, I\'m intrigued by its potential in enabling human-like interactions with machines, and I look forward to contributing to its advancements.',
      name: 'Divyanshu kumar Nayak',
      title: 'Future NLP Specialist',
    },
    {
      quote:
        'AI-powered autonomous vehicles represent a significant leap forward in transportation. As a software student with a passion for AI, I\'m eager to contribute to the development of safer, more efficient mobility solutions.',
      name: 'Divyasnshu kumar Nayak',
      title: 'Autonomous Vehicle Enthusiast',
    },
];


function Card() {
  return (
     <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
     <h2 className="text-3xl font-bold text-center mb-8 z-10">Some Tune Often i Hear From My mind</h2>
     <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
         <div className="w-full max-w-6xl">
         <InfiniteMovingCards
             items={CardTestimonials}
             direction="right"
             speed="slow"
   />
         </div>
     </div>
 </div>
  )
}

export default Card