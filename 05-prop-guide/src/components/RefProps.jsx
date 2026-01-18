import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-3 text-black">
      <label className="block font-medium mb-1 text-black">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-3 py-2 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
});

CustomInput.displayName = "CustomInput";

export default function RefProps() {
  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const focusFirst = () => firstRef.current?.focus();
  const focusSecond = () => secondRef.current?.focus();
  const getFirstValue = () => alert(firstRef.current?.value || "");
  const clearFirst = () => (firstRef.current.value = "");

  return (
    <div className="p-4 bg-blue-50 text-black">
      <h2 className="text-xl font-bold mb-4 text-black">Try it out:</h2>

      <CustomInput
        ref={firstRef}
        label="First Input (with ref)"
        placeholder="Type something..."
      />

      <CustomInput
        ref={secondRef}
        label="Second Input (with ref)"
        placeholder="Type something else..."
      />

      <div className="flex gap-3 mt-3">
        <button
          onClick={focusFirst}
          className="bg-blue-600 text-white px-3 py-2 rounded-lg"
        >
          Focus First Input
        </button>

        <button
          onClick={focusSecond}
          className="bg-purple-600 text-white px-3 py-2 rounded-lg"
        >
          Focus Second Input
        </button>

        <button
          onClick={getFirstValue}
          className="bg-green-600 text-white px-3 py-2 rounded-lg"
        >
          Get First Input Value
        </button>

        <button
          onClick={clearFirst}
          className="bg-red-600 text-white px-3 py-2 rounded-lg"
        >
          Clear First Input
        </button>
      </div>

      <div className="mt-6 p-3 bg-yellow-50 border-l-4 border-yellow-400 text-black">
        <h3 className="font-semibold mb-1 text-black">When to use refs:</h3>
        <ul className="list-disc list-inside space-y-1 text-black">
          <li>Managing focus, text selection, or media playback</li>
          <li>Triggering imperative animations</li>
          <li>Integrating with third-party DOM libraries</li>
          <li>Accessing DOM measurements (scroll position, element size)</li>
        </ul>
      </div>
    </div>
  );
}
