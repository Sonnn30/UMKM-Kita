'use client';
import HomeIcon from "@/public/home.svg";
import DirectionIcon from "@/public/direction.svg";
import BookmarkIcon from "@/public/bookmark.svg";
import NightModeIcon from "@/public/night-mode.svg";
import SettingIcon from "@/public/setting.svg";
import ExitIcon from "@/public/exit.svg";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isActive, setIsActive] = useState('home')
  return (
    <div className="fixed flex flex-col gap-30 w-20 h-[680px] py-6 items-center mx-5 my-5 rounded-2xl border-2">
      <div className="flex flex-col">
        <img src="/logoWeb.png" alt="logoweb" width={42} height={42} />
      </div>

      <div className="flex flex-col gap-8" >
        <Link href="/" onClick={() => setIsActive('home')}>
            <HomeIcon className={`w-9 h-9 hover:fill-[#FF8E3C] transition-colors cursor-pointer ${
                isActive === 'home' ? "fill-[#FF8E3C]" : "hover:fill-[#FF8E3C]"
            }`}/>
        </Link>
        <Link href="/direction" onClick={() => setIsActive('direction')}>
            <DirectionIcon className={`w-9 h-9 hover:fill-[#FF8E3C] transition-colors cursor-pointer ${
                isActive === 'direction' ? "fill-[#FF8E3C]" : "hover:fill-[#FF8E3C]"
            }`}/>
        </Link>
        <Link href="/savedList" onClick={() => setIsActive('savedList')}>
            <BookmarkIcon  className={`w-9 h-9 hover:fill-[#FF8E3C] transition-colors cursor-pointer ${
                isActive === 'savedList' ? "fill-[#FF8E3C]" : "hover:fill-[#FF8E3C]"
            }`} />
        </Link>
        <NightModeIcon className="w-9 h-9  hover:fill-[#FF8E3C] transition-colors cursor-pointer" />
      </div>

      <div className="flex flex-col gap-8">
        <Link href="/setting" onClick={() => setIsActive('setting')}>
            <SettingIcon className={`w-9 h-9 hover:fill-[#FF8E3C] transition-colors cursor-pointer ${
                isActive === 'setting' ? "fill-[#FF8E3C]" : "hover:fill-[#FF8E3C]"
            }`} />
        </Link>
        <ExitIcon className="w-9 h-9 hover:stroke-[#FF8E3C] transition-colors cursor-pointer" />
      </div>
    </div>
  );
}
