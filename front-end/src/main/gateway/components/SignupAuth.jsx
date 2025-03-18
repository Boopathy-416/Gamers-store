import React from "react";
import { useState } from "react";
import { UserCircleIcon } from "lucide-react";
import AuthForm from "./AuthForm";
import { Dialog } from "@headlessui/react";
import adminIcon from "/public/Assets/icons/Admin icon.gif"


const SignupAuth = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button onClick={() => setModal(true)}>
        <UserCircleIcon size={22} />
      </button>

      {modal && (
        <Dialog
          open={modal}
          onClose={() => setModal(false)}
          className="fixed inset-0 flex items-center justify-center bg-black  bg-opacity-50"
        >
          <div className=" backdrop-blur-sm px-12 py-15 rounded-lg">
            <img
              src={adminIcon}
              alt="Welcome Admin"
              width="400px"
              height="auto"
            />
            <AuthForm type="signup" onSuccess={() => setModal(false)} />
            <button
              onClick={() => setModal(false)}
              className="mt-2 text-red-400"
            >
              Close
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default SignupAuth;
