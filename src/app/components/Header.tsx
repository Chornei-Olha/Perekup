import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="relative px-4 sm:px-16">
      <div className="flex flex-col md:flex-row justify-between items-left sm:items-center">
        {/* Logo */}
        <div className="flex flex-col mb-[25px] sm:mb-0">
          <Link href="/">
            <h1 className="font-['Inter'] font-bold text-xl sm:text-5xl text-white">
              PEREKUP-PRO
            </h1>
            <p className="font-['Inter'] text-sm text-gray-400">
              Сервис для профессионалов автобизнеса
            </p>
          </Link>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-left sm:items-center space-x-6">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="font-['Open_Sans'] font-light font-sm text-white">
              Украина
            </span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            <span className="font-['Open_Sans'] font-light font-sm text-white">
              pekekuppro7@gmail.com
            </span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            <span className="font-['Open_Sans'] font-light font-sm text-white">
              +38(050) 044-11-32
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
