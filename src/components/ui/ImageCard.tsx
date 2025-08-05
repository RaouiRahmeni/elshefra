// components/ui/ImageCard.tsx

type Props = {
  images: string[];
  title: string;
  desc: string;
  tags: string[];
  year: string;
};

const ImageCard = ({ images, title, desc, tags, year }: Props) => {
  return (
    <div className="bg-white text-black rounded-2xl overflow-hidden shadow-md transition-transform hover:scale-[1.02]">
      <img src={images[0]} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm text-gray-700">{desc}</p>
        <div className="flex flex-wrap gap-2 text-xs">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-indigo-600 text-white px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-right text-xs text-gray-500 italic">{year}</p>
      </div>
    </div>
  );
};

export default ImageCard;
