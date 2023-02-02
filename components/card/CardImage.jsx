import Star from "../Star";

const CardImage = ({ image, url, name, rating }) => {
  return (
    <a href={url} target="_blank" className="block relative image-header">
      <img className="w-full h-full rounded-t-lg" src={image} alt={name} />
      {rating && <Star rating={rating} />}
    </a>
  );
};

export default CardImage;
