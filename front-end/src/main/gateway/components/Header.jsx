import { useState } from "react";
import { LogIn, UserPlus, Shield } from "lucide-react";
import AuthForm from "./AuthForm";
import { Dialog } from "@headlessui/react";

const Header = () => {
  const [modal, setModal] = useState(null);

  return (
    <header className=" flex justify-between items-center text-white">
      <div className="flex gap-10">
        <button onClick={() => setModal("login")}>
          <LogIn size={24} />
        </button>
        <button onClick={() => setModal("admin")}>
          <Shield size={24} />
        </button>
        <button onClick={() => setModal("signup")}>
          <UserPlus size={24} />
        </button>
      </div>

      {modal && (
        <Dialog open={!!modal} onClose={() => setModal(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 p-6 rounded-lg">
            <AuthForm type={modal} onSuccess={() => setModal(null)} />
            <button onClick={() => setModal(null)} className="mt-2 text-red-400">Close</button>
          </div>
        </Dialog>
      )}
    </header>
  );
};

export default Header;
