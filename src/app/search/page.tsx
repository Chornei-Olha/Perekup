"use client";

import SearchLanding from "@/app/components/SearchLanding";
import Slider from "@/app/components/Slider";

export default function Search() {
  return (
    <div className="flex flex-col">
      <SearchLanding />
      <Slider />
    </div>
  );
}
