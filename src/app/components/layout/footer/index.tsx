import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-14 bg-white dark:bg-gray-950">
      <div className="container">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Divider with logo in center */}
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-black dark:bg-white/30" style={{backgroundColor:'#000000ba'}}/>
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-black dark:bg-white/30" style={{backgroundColor:'#000000ba'}}/>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-3 sm:gap-6 text-center sm:text-left text-secondary text-sm sm:text-base">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:dk88628@gmail.com"
                className="text-primary hover:underline break-all"
              >
                dk88628@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">Contact:</span>{" "}
              <a
                href="tel:+919340333890"
                className="text-primary hover:underline"
              >
                +91 9340333890
              </a>
            </p>
            <p>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/danish-khan-b167851a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline break-all"
              >
                linkedin.com/in/danish-khan-b167851a9
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
