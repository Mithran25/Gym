"use client";

import Link from "next/link";
import { useState, useEffect, useReducer } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "@/store/isOpen";

export default function Header() {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.isOpen);

  const handleOpen = () => {
    dispatch(setOpen(!isOpen));
  };
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isOpen]);

  return (
    <nav>
      <div>
        <Link href="/">GYM</Link>
      </div>
      <div id="nav" className={isOpen ? "" : "nav active"}>
        <div className="nav-content">
          <Link href="/">Home</Link>
          <Link href="/class">Fitness</Link>
          <Link href="/">Member</Link>
        </div>
        <div className="login">
          <Link href="/">Login</Link>
        </div>
      </div>
      <div>
        {isOpen ? (
          <FaBars onClick={handleOpen} />
        ) : (
          <MdOutlineCancel onClick={handleOpen} />
        )}
      </div>
    </nav>
  );
}

// .text-choose {
//   transform: translateY(120px);
//   z-index: 999;
//   text-align: center;
// }

// .choose-us {
//   width: 100%;
//   background-color: white;
//   > h3 {
//     position: absolute;
//     width: 100%;
//     padding-top: 30px;
//     text-align: center;
//   }
// }
// .plancontent {
//   margin-top: 100px;
//   position: sticky;
//   top: 0;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: 30px;
//   overflow-x: hidden;
// }
// .plan-content {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: burlywood;
//   > h4 {
//     padding: 20px 0 20px 0;
//   }
// }

// @media (max-width: 540px) {
//   .choose-us {
//     justify-content: center;
//     padding: 10px;
//     > h3 {
//       width: 90%;
//     }
//   }
// }
