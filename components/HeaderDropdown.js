import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {Divider} from "@nextui-org/react";
import { useState } from "react";
import Snackbar from "@mui/joy/Snackbar";




export default function App() {
      const session = useSession();
      const router = useRouter();
      const [open, setOpen] = useState(false);

      const googleSignOut = () => {
        setOpen(true);
        signOut("google");
      };
    


  return (
    <div className="flex items-center gap-4">
     
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: session?.data?.user?.image,
            }}
            className="transition-transform"
            // description={session?.data?.user?.email}
            // name={session?.data?.user?.image && session?.data?.user?.name ? session?.data?.user?.name : "Name" }
          />
        </DropdownTrigger>

        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="">Signed in as -</p>
            <p className="font-bold text-slate-800">{session?.data?.user?.email}</p>

          </DropdownItem>

          <DropdownItem onClick={() => router.push("/profile")} key="configurations">Profile</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem onClick={googleSignOut} key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>



      <Snackbar
        autoHideDuration={5000}
        open={open}
        variant="soft"
        color="primary"
        onClose={(event, reason) => {
          if (reason === "clickaway") {
            return;
          }
          setOpen(false);
        }}
      >
        Logging out ....
      </Snackbar>
    </div>
  );
}
