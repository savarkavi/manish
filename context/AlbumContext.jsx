"use client";

import { createContext, useContext, useState } from "react";

const AlbumContext = createContext();

export const AlbumProvider = ({ children }) => {
  const [albumMode, setAlbumMode] = useState(false);

  const toggleAlbumMode = () => {
    setAlbumMode((prevState) => !prevState);
  };

  return (
    <AlbumContext.Provider value={{ albumMode, toggleAlbumMode }}>
      {children}
    </AlbumContext.Provider>
  );
};

export const useAlbum = () => {
  return useContext(AlbumContext);
};
