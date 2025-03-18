import { Shield } from "lucide-react";
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { Dialog } from "@headlessui/react";
import adminIcon from "/public/Assets/icons/Admin icon.gif";
import { DoorClosed } from "lucide-react";
import { Tooltip } from "react-tooltip";

const AdminAuth = ({ setUser }) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button onClick={() => setModal(true)}>
        <Shield size={22} />
      </button>

      {modal && (
        <Dialog
          open={modal}
          onClose={() => setModal(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="border-1  backdrop-blur-sm px-12 py-15 rounded-lg">
            <img
              src={adminIcon}
              alt="Welcome Admin"
              width="400px"
              height="auto"
            />
            <AuthForm
              type="admin"
              onSuccess={(user) => {
                setUser(user);
                setModal(false);
              }}
            />
            <button
              onClick={() => setModal(false)}
              data-tooltip-id="close-tooltip"
              className="mt-2 flex items-center gap-2 text-red-500 hover:text-red-700 transition"
            >
              <DoorClosed size={24} /> Close
            </button>

            {/* Tooltip (Hover Effect) */}
            <Tooltip id="close-tooltip" place="top" effect="solid">
              Close and reload the page
            </Tooltip>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default AdminAuth;
