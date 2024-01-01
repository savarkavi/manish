import React from "react";

import cloudinary from "cloudinary";
import AlbumAnimation from "../components/AlbumAnimation";

const Album = async () => {
  const result = await cloudinary.v2.api.resources({ max_results: 100 });
  const urls = result.resources.map((image) => image.url);

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden">
      <AlbumAnimation urls={urls} />
    </div>
  );
};

export default Album;
