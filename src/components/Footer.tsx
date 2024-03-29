import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="mr-5">
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4 mr-6">
            Coding is the art of crafting intricate solutions from abstract
            ideas, navigating through a labyrinth of logic and syntax. Each line
            typed is a stroke of creativity, shaping digital worlds from mere
            concepts. Its a symphony of logic, where every character plays a
            crucial role in the final masterpiece.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#projects-section"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Talks"
                className="hover:text-white transition-colors duration-300"
              >
                Talks
              </a>
            </li>
            <li>
              <a
                href="#use"
                className="hover:text-white transition-colors duration-300"
              >
                Uses
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Connect With Me</h2>
          <div className="flex flex-col">
            <a
              href="https://www.linkedin.com/in/divyanshu-kumar-24026b296/"
              className="hover:text-white transition-colors duration-300"
            >
              Linkedin
            </a>
            <a
              href="https://twitter.com/NykDivyanshu"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/divyanshu_k.__nayak__/"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://discord.gg/FxdgME8R"
              className="hover:text-white transition-colors duration-300"
            >
              Discord
            </a>
            <a
              href="mailto:kumardivyanshu118@gmail.com"
              className="hover:text-white transition-colors duration-300"
            >
              Email
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Me</h2>
          <p>Madhubani, India</p>
          <p>Bihar 847308</p>
          <p>Email: kumardivyanshu118@gmail.com</p>
          <p>Phone: +91 9871103875</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© 2024. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
