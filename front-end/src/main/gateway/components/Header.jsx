import { useState } from "react";
import { LogIn, UserPlus, Shield } from "lucide-react";
import AuthForm from "./AuthForm";
import { Dialog } from "@headlessui/react";

const Header = () => {
  const [modal, setModal] = useState(null);

  return (
    <header className="p-4 flex justify-between items-center bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">Gamer's Store</h1>
      <div className="flex gap-4">
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
