import React from "react";
import AlbumPhotos from "./AlbumPhotos";

const AlbumPhotosFetch = async () => {
  const result = await cloudinary.v2.api.resources({ max_results: 100 });
  const urls = result.resources.map((image) => image.url);

  return <AlbumPhotos urls={urls} />;
};

export default AlbumPhotosFetch;
