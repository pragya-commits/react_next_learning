function Button({ ButtonText = "pay now" }) {
  return (
    <button className="mt-4 px-4 bg-blue-800 p-2 rounded-lg text-white py-2 hover:bg-blue-600">
      {ButtonText}
    </button>
  );
}
export default Button;
