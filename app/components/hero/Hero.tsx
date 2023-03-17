import Image from 'next/image';
interface CardProps {
  bgcolor: string;
  banner: string;
  subtext: string;
}

function Card({ bgcolor, banner, subtext }: CardProps ) {
  return (
    <div className="">
      <div className={`h-[151px] rounded-[8px] w-[265.2px] ${bgcolor} rounded-[8px] flex justify-center items-center mb-[8px]`}>
        <Image width="65" height="65" src={banner} alt="banner" />
      </div>
      <div className="text-center">
        <p className="text-[16px] leading-[150%] text-black satoshi-bold">{subtext}</p>
      </div>
    </div>
  );
};

interface HeroProps {}

export default function Hero({}: HeroProps) {
  return (
    <div className="bg-white h-auto pt-[24px] px-[24px] pb-[26px] mb-[24px]">
      <div className="h-[185px] grid grid-cols-5 gap-[16px]">
        <Card bgcolor="bg-[#C1EEC1]" banner="/nft.svg" subtext="NFT Management" />
        <Card bgcolor="bg-[#FCF7DA]" banner="/holders.svg" subtext="Find Holders" />
        <Card bgcolor="bg-[#D4F3F9]" banner="/pent.svg" subtext="Airdrop" />
        <Card bgcolor="bg-[#ECDAF4]" banner="/trade.svg" subtext="Trade-in" />
        <Card bgcolor="bg-[#F9DDEE]" banner="/sales.svg" subtext="Sales" />
      </div>
    </div>
  );
};
