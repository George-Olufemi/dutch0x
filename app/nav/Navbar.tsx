import Image from 'next/image';

export default function Nav() {
  return (
    <div className="h-[80px] bg-white w-[100%] flex items-center px-[24px]">
      <div className="flex items-center gap-[32px] mr-[32px]">
        <div>
          <Image width="145" height="36" src="/Dutch0x Logo.svg" alt="dutch logo" />
        </div>
        <div>
          <ul className="flex items-center gap-[32px]">
            <li className="text-[16px] leading-[150%] text-black cursor-pointer satoshi-bold mt-[5px]">
              Dashboard
              <div className="flex justify-center items-center">
                <Image src="/dot.svg" alt="dpt" width="5" height="5" />
              </div>
            </li>
            <li className="font-[400] text-[16px] leading-[150%] text-[#00000099] cursor-pointer">Create</li>
            <li>
              <p className="mt-[18px] font-[400] text-[16px] leading-[150%] text-[#00000099] cursor-not-allowed">Marketplace</p>
              <p className="font-[500] text-[12px] leading-[150%] text-[#FF4800]">Coming soon</p>
            </li>
            <li className="font-[400] text-[16px] leading-[150%] text-[#00000099] cursor-pointer">Learn</li>
          </ul>
        </div>
      </div>
      <div className="w-[902.69px] h-[36px] flex items-center gap-[32px]">
        <div className="w-[631.69px] border h-[36px]  flex items-center gap-[12px] pl-[12.5px] rounded-[8px]">
          <div>
            <Image width="14" height="14" src="/seach.svg" alt="search icon" />
          </div>
          <div>
            <input className="outline-none w-[545.69px] h-[24px]" type="text" placeholder="Find Holders" />
          </div>
          <div>
            <Image width="24" height="24" src="/slash.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-[25px] items-center">
          <div>
            <div className="h-[26px] w-[71px] rounded-[4px] bg-[#3caa2a33] flex gap-[4px] px-[8px] items-center">
              {/* can use useSate to toggle between colors */}
              <div>
                <Image width="7" height="7" src="color.svg" alt="" />
              </div>
              <p className="uppercase text-[#3CAA2A] text-[12px] leading-[150%] satoshi-bold">status</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image width="18" height="19" src="/bell.svg" alt="bell icon" />
          </div>
          <div className="cursor-pointer">
            <Image width="19" height="18" src="/wallet.svg" alt="wallet icon" />
          </div>
          <div className="cursor-pointer">
            <Image width="16" height="21" src="/profile.svg" alt="profile icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

