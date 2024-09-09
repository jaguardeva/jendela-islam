import MENU from "@/utils/menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center bg-white border-b-2 sticky top-0">
      <div className="w-full flex items-center justify-between max-w-7xl px-4 lg:px-0 h-[80px]">
        <div>
          <h1>Jendela Islam</h1>
        </div>
        <ul className="lg:flex items-center justify-center gap-3 hidden">
          {MENU.map((menu, index) => {
            return (
              <li key={index}>
                <Link
                  href={menu.url}
                  className="flex items-center justify-center font-semibold text-gray-500 py-7 px-4 cursor-pointer hover:text-black"
                >
                  {menu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
