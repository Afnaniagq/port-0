import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { SiGithub } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoAngular } from "react-icons/io5";


function Home(){
  return(
    <main className="bg-slate-700">
    <section className="text-white flex flex-col justify-between h-screen max-w-screen-[1500px] w-full mx-auto">
<div className=" mt-[260px] mr-3 flex text-[#b0b2c3] relative" >
  <div className="max-w-screen-lg mx-auto w-full px-4">
    <h2 className="text-[64px] text-white">Afnan Imran</h2>
<IoLogoAngular className="size-80 text-blue-800 relative"/>
</div>
      <ul className="space-y-[15px] ml-auto absolute right-8" >
        <li><a href="https://www.linkedin.com/in/afnan-imran-6619a0267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><FaLinkedin className="size-7 fill-current   hover:text-white"/></a></li>
        <li ><a href="#" target="_blank"><RiInstagramFill  className="size-7 fill-current   hover:text-white"/></a></li>
        <li><a href="#" target="_blank"><RiTwitterXFill   className="size-7 fill-current   hover:text-white"/></a></li>
        <li><a href="mailto:afnanzagq@gmal.com" target="blank"><IoIosMail  className="size-7 fill-current   hover:text-white"/></a></li>
        <li><a href="https://github.com/Afnaniagq"target="blank"><SiGithub  className="size-7 fill-current   hover:text-white"/></a></li>
      </ul>
     </div>
     <button>Latest Works</button>
     </section>   
    </main>
  )
 }

 export default Home