export default function Category({ category: { id, title, image } }) {
  return (
    <div className=" group flex flex-col group text-center p-4 items-center transition-all hover:bg-purple-50 ">
      <a href="/">
        <img
          src={image}
          alt={title}
          className=" w-12 rounded border border-gray-100 "
        />
      </a>
      <span className="text-gray-700 text-sm font-semibold group-hover:text-brand-color tracking-tighter  ">
        {title}
      </span>
    </div>
  );
}
