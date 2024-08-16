import React from 'react';

const Apinav = () => {
  return (
    <>
      {/* Top title section */}
      <div className="flex justify-center items-center md:text-5xl text-3xl font-bold apitopnav-bg py-14 text-color">
        Book Generator API
      </div>

      {/* Sticky navigation bar */}
      <div className="sticky top-0 z-50 apidownnav-bg shadow-md">
        <div className="flex flex-wrap justify-center items-center text-base font-semibold py-6 md:px-2 px-4 text-color uppercase gap-4 cursor-pointer">
          <a href="#overview" className="hover:text-[rgb(69,164,248)]" aria-label="Overview section">Overview</a>
          <a href="#auth" className="hover:text-[rgb(69,164,248)]" aria-label="Authentication section">Authentication</a>
          <a href="#endpoint" className="hover:text-[rgb(69,164,248)]" aria-label="Endpoint section">Endpoint</a>
          <a href="#tutorial" className="hover:text-[rgb(69,164,248)]" aria-label="Tutorial section">Tutorial</a>
          <a href="#code" className="hover:text-[rgb(69,164,248)]" aria-label="Code examples section">Code Examples</a>
          <a href="#price" className="hover:text-[rgb(69,164,248)]" aria-label="Pricing section">Pricing</a>
        </div>
      </div>
    </>
  );
};

export default Apinav;
