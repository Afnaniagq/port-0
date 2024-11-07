import Link from "next/link";
import { IoLogoAngular } from "react-icons/io5";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
 



function Header(){
    return(
        <body>
        <header className=" bg-slate-800 flex justify-between text-white  mt-2 items-center max-w-screen-2xl mx-auto ">
    {/* logo */}
        <IoLogoAngular className="size-24"/>

            <ul className="hidden md:block">
            <li  className="space-x-5 text-[25px] font-serif">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            </li>
            </ul>
            <div className="flex space-x-2">
     {/* sun icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-3">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
           </svg>
    {/* moon icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-3">
           <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
        <div className="flex">
    {/* menu */}
          <Sheet >
  <SheetTrigger className=" md:hidden"> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-menu mr-4 size-10 mb-8 mt-4"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg></SheetTrigger>
  <SheetContent>
            <ul className="md:hidden">
            <li  className="space-x-5 text-[25px] font-serif text-black py-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            </li>
            </ul>
  </SheetContent>
</Sheet>
</div>
</div> 
</header>

        </body>
    )
}

export default Header