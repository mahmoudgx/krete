interface Props {
  image: string;
  title: string;
}

const FormulasCard = ({ image, title }: Props) => {
  return (
    <div className="border-[1px] border-black bg-[#FFFDF3] p-3 sm:p-5 rounded-xl">
      <div className="flex items-center space-x-3 sm:space-x-5">
        <img src={image} alt={title} className="w-8 sm:w-auto" />
        <h1 className="text-sm sm:text-lg">{title}</h1>
      </div>
    </div>
  );
};

export default FormulasCard;
