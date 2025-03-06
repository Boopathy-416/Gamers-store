export default function Button({ text, type = "button", onClick }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded"
      >
        {text}
      </button>
    );
  }
  