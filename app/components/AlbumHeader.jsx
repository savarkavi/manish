"use client";

import React from "react";
import { ArrowLeftSquare } from "lucide-react";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { playfair_display } from "../fonts";
import { Label } from "@/components/ui/label";
import { useAlbum } from "@/context/AlbumContext";

const AlbumHeader = () => {
  const { albumMode, toggleAlbumMode } = useAlbum();

  return (
    <div
      className={`${playfair_display.className} flex justify-between w-screen z-[99] bg-white sticky top-0 h-[50px] items-center px-6 shadow-lg `}
    >
      <Link href="/" className="flex justify-center gap-2 items-center ">
        <ArrowLeftSquare />
        <span>Back to Home</span>
      </Link>
      <div className="flex items-center gap-3" onClick={toggleAlbumMode}>
        <Label htmlFor="album-mode">Album Mode</Label>
        <Switch id="album-mode" />
      </div>
    </div>
  );
};

export default AlbumHeader;
