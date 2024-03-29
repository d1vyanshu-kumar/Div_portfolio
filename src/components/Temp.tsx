'use client'

import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"

const ME = [
    {
      id: 1,
      name: 'Github',
      designation: 'github',
      image:
        'https://images.unsplash.com/photo-1654277041218-84424c78f0ae?q=80&w=2924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Discord',
      designation: 'Discord',
      image:
        'https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Instagram',
      designation: 'Instagram',
      image:
        'https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Gmail',
      designation: 'Gmail',
      image:
        'https://images.unsplash.com/photo-1706879349268-8cb3a9ae739a?q=80&w=2962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

function Contact() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Contact ME</h2>
            <div>
                <a id="contact" />
                </div>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover My world</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={ME} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Contact