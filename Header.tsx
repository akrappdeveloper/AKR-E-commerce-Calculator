import { SiFlipkart, SiAmazon } from "react-icons/si";
import { Calculator } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            E-commerce Calculator
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <SiFlipkart className="h-6 w-6 text-[#2874f0]" />
          <SiAmazon className="h-6 w-6 text-[#ff9900]" />
          <span className="text-2xl font-bold text-[#EA4E87]">meesho</span>
        </div>
      </div>
    </header>
  );
}
