"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import {redirect} from "next/navigation"

function Profile() {
  const session = useSession();

  if(session.status === "unauthenticated") redirect("/login")
  return (
    <div className="">
      {session.status === "authenticated" && (
        <Link
          href="https://sawanmehras.web.app/"
          className="flex items-center justify-center p-4 gap-6 h-[80vh] "
        >
          <div>
            <img
              className="rounded-full object-contain h-28"
              src={session?.data?.user?.image}
              alt=""
            />
          </div>
          <div>
            <p className="text-3xl sm:text-4xl text-gray-600">
              {session?.data?.user?.name}
            </p>
            <p className="text-gray-700 text-sm mx-1 my-2">
              {session?.data?.user?.email}
            </p>
          </div>
        </Link>
      ) }
    </div>
  );
}

export default Profile;
