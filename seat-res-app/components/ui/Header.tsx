import React, { useEffect, useRef } from "react";

const PageHeader = () => {
  // Temp hack to ensure that the header height is taken up on screen to avoid
  // using margin/padding.
  const ref = useRef<HTMLElement>(null);
  return (
    <>
      <header ref={ref} className="fixed w-screen p-6 flex gap-4 bg-white z-10">
        <div className="text-sm cursor-pointer transition-all">
          {/* Export into breadcrumbs component at a later date */}
          <span className="text-gray-900 hover:text-blue-500 hover:underline">Home</span>
          <span className="text-gray-300"> / Reservation</span>
        </div>
      </header>
      <div style={{ height: ref?.current?.offsetHeight }}></div>
    </>
  );
};

export default PageHeader;
