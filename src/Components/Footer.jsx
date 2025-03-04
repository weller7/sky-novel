import { Github } from "lucide-react";

const Footer = () => {
  return (
    <section className=" px-8 py-3 border-t-2 border-white">
      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>© 2070 Leviathan, Inc. All rights reserved.</div>
        <div className="flex justify-end">
          {" "}
          <a href="https://github.com/weller7">
            {" "}
            <Github size={25} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
