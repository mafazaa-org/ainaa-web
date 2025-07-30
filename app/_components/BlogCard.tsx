import { cn } from "@/utils";

const BlogCard = ({
  className,
  title,
  description,
}: {
  className: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className={cn(
        `relative bg-cover bg-center bg-no-repeat min-h-[500px]`,
        className
      )}
    >
      <div className="bg-red-gradient h-full w-full absolute top-0 left-0 " />
      <div className="bg-dark-gradient h-full w-full absolute top-0 left-0 " />
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center text-center text-white relative z-10 h-full w-full">
        <h3 className="text-H3  text-white">{title}</h3>
        <p className="text-very-small mt-4">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
