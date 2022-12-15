import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../src/user/user.action";
import { Buttons } from "../lib/utils";

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className="h-[max-content]
    border-t-4  border-red-500 border-opacity-50
    relative
    shadow-lg
    text-white
    py-3
    md:flex md:flex-row
     justify-between rounded-md font-space items-center px-4 bg-desaturatedDark"
    >
      <h2
        className="
    text-2xl font-bold font-space 
      "
      >
        <Link href="/">Blink.</Link>
      </h2>
      <ul
        className={`space-x-4 md:space-x-5 items-center 
        text-md md:flex
        ${toggle ? "flex" : "hidden"}
      `}
      >
        <li>
          <Link href="/about">About</Link>
        </li>
     
        {user ? (
          <>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/message">
                <FontAwesomeIcon height={20} width={20} icon={faMessage} />
              </Link>
            </li>
            {user.user.admin && (
              <li>
                <Link href="/accounts">
                  <FontAwesomeIcon height={20} width={20} icon={faDatabase} />
                </Link>
              </li>
            ) }
          </>
        ) : (
          <></>
        )}
        <div className="flex">
          {!user ? (
            <>
              <button className={`${Buttons.login}`}>
                <Link href="/login">login</Link>
              </button>
              <button className={`${Buttons.signup}`}>
                <Link href="/signup">signup</Link>
              </button>
            </>
          ) : (
            <button
              onClick={() => dispatch(setCurrentUser(null))}
              className={`${Buttons.signout} + " absolute left-0 top-20 rounded-sm md:relative md:top-0 md:left-0
                `}
            >
              signout
            </button>
          )}
        </div>
      </ul>
      <div
        onClick={() => setToggle(!toggle)}
        className={`absolute
      transition-all duration-500 ease-in-out
      md:hidden
        top-4 right-5 
        flex flex-col
      `}
      >
        <div
          className={`w-[25px] h-[5px] bg-white
                mb-1
                transition-all duration-500 ease-in-out
            ${toggle ? "rotate-45 translate-y-2" : "rotate-0"}
            `}
        ></div>
        <div
          className={`w-[25px] h-[5px] bg-white
                mb-1
                transition-all duration-500 ease-in-out
            ${toggle ? "-rotate-45 " : "rotate-0"}
            `}
        ></div>
      </div>
    </nav>
  );
};

export default Nav;
