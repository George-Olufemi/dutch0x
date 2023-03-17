import Image from 'next/image';

export default function Events() {
	return (
		<div className='px-[24px] flex gap-[24px] pb-[100px]'>
			<div className='w-[1092px]'>
				<div className='mb-[8px]'>
					<h3 className='font-[400] text-[24px] leading-[150%] text-[#00000080]'>Events</h3>
				</div>
				{/* have data pulled from api or somewhere, this could be a component then mapped over */}
				<div className="w-[1092px] h-[264px]  border border-[#0000001a] shadow-sm rounded-[8px] bg-[url('/manurebg.svg')]  bg-no-repeat bg-center relative mb-[24px]">
					<div className="w-[1092px] h-[264px] rounded-[8px] bg-[#ffffffcc] backdrop-blur-md flex justify-center items-center">
						<div className="w-[1044px] h-[216px] flex gap-[32px]">
							<div className="">
								<div className="h-[29px] w-[441px] flex gap-[8px] -ml-[24.5px]">
									<div>
										<div className="w-[109px] h-[28px] bg-[#3CAA2A] flex items-center gap-[4px] rounded-r-[8px] pl-[23px]">
											<div>
												<Image src="/Loader.svg" alt="state" width="20" height="20" />
											</div>
											<div>
												<p className="satoshi-bold text-[12px] leading-[150%]">AIRDROP</p>
											</div>
										</div>
									</div>
									<div className="w-[90px] h-[27px] bg-[#0000001a] rounded-[8px] flex gap-[8px] items-center justify-center">
										<div>
											<Image src="/cal.svg" alt="calendar" width="16" height="16" />
										</div>
										<div>
											<p className="satoshi-bold text-[14px] leading-[150%]">Harvest</p>
										</div>
									</div>
									<div className="flex items-center gap-[8px]"><span><Image src="/clock.svg" alt="clock" width="16" height="16" /></span> <span className="satoshi-bold text-[14px] leading-[150%]">Started</span> <span className="text-[14px] leading-[150%]">2022-09-13 08:57:15</span></div>
								</div>
								{/*  */}
								<div className="w-[709px] h-[58px] mt-[12.5px]">
									<div>
										<p>🍎🍌🍍The Fruit Salad Game🍆🥦🥕</p>
									</div>
									<div className="mt-[4px]">
										<p className="satoshi-bold text-[30px] leading-[100%]">Manure <span className="satoshi-normal text-[14px] eading-[150%]">x 100</span></p>
									</div>
								</div>
								{/*  */}
								<div className="w-[426px] h-[21px] mt-[6px] flex items-center gap-[16px]">
									<div>Wallet Transactions:</div>
									<div><span className="satoshi-bold pr-[4px]">44</span>Successful</div>
									<div><span className="satoshi-bold pr-[4px]">8</span>Processing</div>
									<div><span className="satoshi-bold pr-[4px]">8</span>Failed</div>
								</div>
								{/*  */}
								<div className="mt-[12px]">
									<Image src="/manurebar.svg" alt="" width="709" height="16" />
								</div>
								{/*  */}
								<div className="mt-[16px] flex gap-[8px] items-center">
									<div>
										<button className="w-[126px] h-[40px] bg-black rounded-[8px] text-white satoshi-bold text-[16px] leading-[150%]">More Details</button>
									</div>
									<div>
										<button className="w-[82px] h-[40px] border border-black rounded-[8px]">Cancel</button>
									</div>
									<div>
										<div className="flex items-center">
											<input type="checkbox" value="" className="w-4 h-4 text-black bg-black border-black" />
											<label className="ml-[8px] text-[14px] text-black">Recieve Report on email</label>
										</div>
									</div>
								</div>
							</div>
							{/*  */}
							<div className="flex justify-center items-center">
								<Image src="/poop.svg" alt="" width="261" height="261" />
							</div>
						</div>
					</div>
				</div>
				{/*  */}
				<div className="w-[1092px] h-[264px]  border border-[#0000001a] shadow-sm rounded-[8px] bg-[url('/waterbg.svg')] bg-no-repeat bg-center relative">
					<div className="w-[1092px] h-[264px] rounded-[8px] bg-[#ffffffcc] backdrop-blur-md flex justify-center items-center">
						<div className="w-[1044px] h-[216px] flex gap-[32px]">
							<div className="">
								<div className="h-[29px] w-[463px] flex gap-[8px] -ml-[24.5px]">
									<div>
										<div className="w-[109px] h-[28px] bg-[#28458F] flex items-center gap-[4px] rounded-r-[8px] pl-[23px]">
											<div>
												<Image src="/Frame.svg" alt="state" width="20" height="20" />
											</div>
											<div>
												<p className="satoshi-bold text-[12px] leading-[150%]">AIRDROP</p>
											</div>
										</div>
									</div>
									<div className="w-[112px] h-[27px] bg-[#0000001a] rounded-[8px] flex gap-[8px] items-center justify-center">
										<div>
											<Image src="/cal.svg" alt="calendar" width="16" height="16" />
										</div>
										<div>
											<p className="satoshi-bold text-[14px] leading-[150%]">It&apos;s Raining</p>
										</div>
									</div>
									<div className="flex items-center gap-[8px]"><span><Image src="/clock.svg" alt="clock" width="16" height="16" /></span> <span className="satoshi-bold text-[14px] leading-[150%]">Started</span> <span className="text-[14px] leading-[150%]">2022-09-13 08:57:15</span></div>
								</div>
								{/*  */}
								<div className="w-[709px] h-[58px] mt-[12.5px]">
									<div>
										<p>🍎🍌🍍The Fruit Salad Game🍆🥦🥕</p>
									</div>
									<div className="mt-[4px]">
										<p className="satoshi-bold text-[30px] leading-[100%]">Water <span className="satoshi-normal text-[14px] leading-[150%]">x 100</span></p>
									</div>
								</div>
								{/*  */}
								<div className="w-[500px] mt-[6px] h-[21px]  flex items-center gap-[16px]">
									<div>Wallet Transactions:</div>
									<div><span className="satoshi-bold pr-[4px]">100</span>Successful</div>
									<div><span className="satoshi-bold pr-[4px]">0</span>Processing</div>
									<div><span className="satoshi-bold pr-[4px]">0</span>Failed</div>
								</div>
								{/*  */}
								<div className="mt-[12px]">
									<Image src="/waterbar.svg" alt="" width="709" height="16" />
								</div>
								{/*  */}
								<div className="mt-[16px]">
									<div>
										<button className="w-[126px] h-[40px] bg-black rounded-[8px] text-white satoshi-bold text-[16px] leading-[150%]">More Details</button>
									</div>
								</div>
							</div>
							<div className="flex justify-center items-center">
								<Image src="/water.svg" alt="" width="261" height="261" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='w-[348px]'>
				<div className='mb-[8px]'>
					<h3 className='font-[400] text-[24px] leading-[150%] text-[#00000080]'>Overview</h3>
				</div>
				{/*  */}
				<div className='h-[48px] bg-white border shadow-sm rounded-[8px] flex items-center justify-between px-[20px] cursor-pointer mb-[24px]'>
					<div>
						<p className='text-[#00000099]'>Wallet balance</p>
					</div>
					<div className='flex items-center gap-[20px]'>
						<div>
							<p>0.489 ETH</p>
						</div>
						<div>
							<Image width="8" height="13"
								src='/rightarrow.svg'
								alt=''
							/>
						</div>
					</div>
				</div>
				{/* second section */}
				<div className='h-[198px] bg-white border shadow-sm rounded-[8px] mb-[24px]'>
					<div className='h-[48px] px-[20px] pt-[12px] satoshi-bold'>NFTs</div>
					<div className='h-[48px] flex items-center justify-between px-[20px] cursor-pointer'>
						<div className='text-[#00000099]'>NFT Item</div>
						<div className='flex items-center gap-[20px]'>
							<div className=''>187</div>
							<div>
								<Image width="8" height="13"
									src='/rightarrow.svg'
									alt=''
								/>
							</div>
						</div>
					</div>
					{/*  */}
					<div className='h-[48px] flex items-center justify-between px-[20px] cursor-pointer'>
						<div className='text-[#00000099]'>Collections</div>
						<div className='flex items-center gap-[20px]'>
							<div className=''>5</div>
							<div>
								<Image width="8" height="13"
									src='/rightarrow.svg'
									alt=''
								/>
							</div>
						</div>
					</div>
					{/*  */}
					<div className='h-[48px] flex items-center justify-between px-[20px] cursor-pointer'>
						<div className='text-[#00000099]'>Minted</div>
						<div className='flex items-center gap-[20px]'>
							<div className=''>39</div>
							<div>
								<Image width="8" height="13"
									src='/rightarrow.svg'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
				{/* second section */}
				<div className='h-[150px] bg-white border shadow-sm rounded-[8px] mb-[24px]'>
					<div className='h-[48px] px-[20px] pt-[12px] satoshi-bold'>Saved Searches</div>
					<div className='h-[48px] flex items-center justify-between px-[20px] cursor-pointer'>
						<div className='text-[#00000099]'>Green Apple</div>
						<div className=''>
							<div>
								<Image width="8" height="13"
									src='/rightarrow.svg'
									alt=''
								/>
							</div>
						</div>
					</div>
					{/*  */}
					<div className='h-[48px] flex items-center justify-between px-[20px] cursor-pointer'>
						<div className='text-[#00000099]'>Christmas Tree</div>
						<div className=''>
							<div>
								<Image width="8" height="13"
									src='/rightarrow.svg'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
				{/*  */}
				<div className='h-[150px] bg-white border shadow-sm rounded-[8px]'>
					<div className='h-[48px] px-[20px] pt-[12px] satoshi-bold'>Recent Activity</div>
					<div className='h-[48px] flex items-center justify-between px-[20px] cursor-pointer'>
						<div className='text-[#00000099]'>Settings Account</div>
						<div className=''>
							<div>
								<Image width="8" height="13"
									src='/rightarrow.svg'
									alt=''
								/>
							</div>
						</div>
					</div>
					{/*  */}
					<div className='h-[48px] flex items-center justify-between px-[20px] cursor-pointer'>
						<div className='text-[#00000099]'>Sales Report</div>
						<div className=''>
							<div>
								<Image width="8" height="13"
									src='/rightarrow.svg'
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
