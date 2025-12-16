function Card({
  title = "default",
  buttonText = "default",
  description = "default",
  imageUrl = "default",
}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow">
      <img
        className="w-full h-70 object-cover p-5"
        alt="sample image"
        src={imageUrl}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 ">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <button className="mt-4 px-4 bg-blue-800 p-2 rounded-lg text-white py-2 hover:bg-blue-600">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
export default Card;
