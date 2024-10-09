export default function TemplateCard({ imageUrl, title }) {
  return (
    <div className="w-full bg-gray-800 text-white rounded-md overflow-hidden shadow-lg">
      <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
}
