import React from 'react';

function DesignCard({ key, src, name }) {
  return (
    <div
      key={key}
      className="w-full sm:w-[100%] md:w-[49%] h-60 sm:h-72 rounded-xl relative mb-16"
    >
      <video
        autoPlay
        muted
        loop
        src={src}
        className="rounded-xl w-full h-full object-cover"
      ></video>

      <h1 className="text-white text-xl sm:text-2xl md:text-3xl z-50 pixel mt-2">
        {name}
      </h1>
    </div>
  );
}

export default DesignCard;
