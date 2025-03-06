export default function Input({ type, label, value, onChange }) {
    return (
      <div>
        <label className="block text-gray-300">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  }
  