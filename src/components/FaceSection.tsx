import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
import Image from 'next/image'
function FaceSection() {
  return (
    <div className="h-auto md:h-[60rem] w-full rounded-md flex flex-col md:flex-row items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="w-full max-w-sm md:w-1/5 md:h-1/2 overflow-hidden mb-20">
  <Image src="/div.png" width={200} height={100} alt="Your Image" className="w-full h-auto border" />
</div>


      <div className="w-full md:w-1/2 p-4 relative z-10">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hi There!!!
        </h1>
        <p className="text-lg font-semibold leading-relaxed">
  Welcome! I am <span className="font-serif">Divyanshu Kumar</span>, hailing from the vibrant city of <span className="font-serif">Madhubani</span> in <span className="font-serif">Bihar</span>. In <span className="font-serif">2023</span>, I embarked on my academic journey, marking the commencement of my first year at the esteemed <span className="font-serif">Function Up School of Technology</span>, specializing in <span className="font-serif">Computer Science and Engineering (CSE)</span>.
</p>
<p className="mt-4 leading-relaxed">
  My fascination with the intricate world of machines and computers dates back to my early childhood. The enchanting notion of how software orchestrates the dance of hardware has always captivated me. After successfully completing my <span className="font-serif">12th-grade education</span>, I decided to pursue my passion by selecting <span className="font-serif">Computer Science and Engineering</span> as my field of study.
</p>
<p className="mt-4 leading-relaxed">
  Beyond my love for technology, I am also a fervent music enthusiast. I aspire to harness the power of AI to craft unique beats and melodies, pushing the boundaries of musical creation. Its the perfect blend of art and technology that ignites my creativity.
</p>

        <div className="mt-9 ml-40">
          <Link href="https://drive.google.com/file/d/1uC-qoLdWcG65N7PgVvdRSqIJuup-j0NM/view?usp=sharing">
            <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FaceSection;
