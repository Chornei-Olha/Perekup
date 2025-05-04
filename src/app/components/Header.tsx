import { Mail, MapPin, Phone } from "lucide-react";

export default function Header() {
  return (
    <div className="relative z-20 container mx-auto">
      <div className="flex flex-col sm:flex-row sm: justify-between items-left sm:items-center">
        {/* Logo */}
        <div className="flex flex-col mb-[25px] sm:mb-0">
          <h1 className="text-xl sm:text-5xl font-bold text-white">
            PEREKUP-PRO
          </h1>
          <p className="text-sm text-gray-400">
            Сервис для профессионалов автобизнеса
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-left sm:items-center space-x-6">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            <span className="text-white">Украина</span>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-2" />
            <span className="text-white">pekekuppro7@gmail.com</span>
          </div>
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-2" />
            <span className="text-white">+38(050) 044-11-32</span>
          </div>
        </div>
      </div>
    </div>
  );
}
