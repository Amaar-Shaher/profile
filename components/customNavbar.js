import Image from "next/image";
import Link from "next/link";

export default function CustomNavbar() {
    return (
        <>
        <dev>
        <div className="navbar bg-slate-500 rounded-xl">
                <div className="navbar-start">
              <div className="dropdown">

<label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden ">
<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
</label>

  <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-44">
      <li><Link href="/profile">Profile</Link></li>
      <li tabIndex={0}>
          <a className="justify-between">
              Contact Me
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 bg-base-100">
              <li><Link href="https://www.linkedin.com/in/amaar-shaher">LinkedIn</Link></li>
              <li><a>Ammaar.Shaher@gmail.com</a></li>
              <li><a>+966532254675</a></li>
          </ul>
      </li>
      <li><Link href="https://github.com/Amaar-Shaher">Achievements</Link></li>
  </ul>
</div>
</div>
<div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><Link href="/profile">Profile</Link></li>
      <li tabIndex={0}>
          <a className="justify-between">
              Contact Me
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul className="p-2 bg-base-100">
              <li><Link href="https://www.linkedin.com/in/amaar-shaher">LinkedIn</Link></li>
              <li><a>Ammaar.Shaher@gmail.com</a></li>
              <li><a>+966532254675</a></li>
          </ul>
      </li>
      <li><Link href="https://github.com/Amaar-Shaher">Achievements</Link></li>
    </ul>
</div>

            <div className="navbar-end">
                <a className=" btn btn-ghost normal-case text-xl ">
                <Link href="/">
                <Image className="rounded-full" src="/myPhoto.png" height={50} width={50} alt=""/>
                </Link>
                </a>
                </div>
              

             
        </div>
        </dev>
        </>
    )
}