import React from "react";

function Header() {
  return (
    <header className=" text-slate-500 dark:text-indigo-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a href="#hero" className="mr-5 hover:text-indigo-500 dark:hover:text-slate-200">Home</a>
          <a href="#services" className="mr-5 hover:text-indigo-500 dark:hover:text-slate-200">Servises</a>
          <a href="#works" className="mr-5 hover:text-indigo-500 dark:hover:text-slate-200">Works</a>
          <a href="#about" className="mr-5 hover:text-indigo-500 dark:hover:text-slate-200">About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
