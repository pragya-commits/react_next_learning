import Button from "./Button";

function Card({
  title = "default",

  description = "default",
  imageUrl = "default",
}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden transition-shadow justify-center">
      <img
        className="w-full h-70 object-cover p-5"
        alt="sample image"
        src={imageUrl}
      />
      <div className="p-4 items-center">
        <h2 className="text-lg font-semibold text-gray-800 ">{title}</h2>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <Button />
      </div>
    </div>
  );
}
export default Card;
