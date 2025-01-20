const TopBanner = () => {
  return (
    <div className="px-10 py-2 bg-[#191E1B] flex justify-between items-center text-[#FFFDF3]">
      <div className="flex items-center space-x-2">
        <img src="https://krete.club/cdn/shop/t/3/assets/icon-percent-green.svg?v=22138563809999306131703400184" />
        <h1 className="text-xs">20% Discount (click here)</h1>
      </div>
      <div className="flex items-center space-x-2">
        <img src="https://krete.club/cdn/shop/t/3/assets/icon-box-green.svg?v=12713005264556522901703400183" />
        <h1 className="text-xs">Free Shipping On All Orders</h1>
      </div>
      <div className="flex items-center space-x-2">
        <img src="https://krete.club/cdn/shop/t/3/assets/icon-return-green.svg?v=9833618794026257001703400201" />
        <h1 className="text-xs">Satisfaction Guaranteed</h1>
      </div>
    </div>
  );
};

export default TopBanner;
