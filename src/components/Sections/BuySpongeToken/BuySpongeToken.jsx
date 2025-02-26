import React from 'react';
import Container from '../Container/Container';
import spongeKid from '@/assets/howToBuy/Group.png'

const BuySpongeToken = () => {
  return (
    <div className='mt-32' id='buy'>
      <Container>
        <div>
          <h1 className='text-[#fff] text-[64px] text-center font-TTRoundsNeue font-bold'>How to buy<span className='text-[#FDF44E]'> SPONGE Token</span></h1>

          <div className='md:flex justify-between items-center gap-7 mt-14'>
            <div className='md:w-1/2'>
              <div className='space-y-7'>
                {/* Card One */}
                <div className='bg-[#0C2251] cusShadow p-10 rounded-[20px]'>
                  <h2 className='text-[#FDF44E] text-[40px] font-TTRoundsNeue font-bold'>1. Click on Buy Button</h2>

                  <p className='text-[#F4F4F4] font-poppins mt-4 leading-7'>Ready to invest in the next big thing? Head to our buy section now and grab your share of the $SPONGE coin revolution. Don't miss out on the moon ride!</p>
                </div>

                {/* Card Two */}
                <div className='bg-[#0C2251] cusShadow p-10 rounded-[20px]'>
                  <h2 className='text-[#FDF44E] text-[40px] font-TTRoundsNeue font-bold'>2. Connect your wallet</h2>

                  <p className='text-[#F4F4F4] font-poppins mt-4 leading-7 2xl:w-[85%]'>Connect your wallet. Seamlessly participate in the fun and wild ride of our community-driven token. Don't miss out!</p>
                </div>

                {/* Card Three */}
                <div className='bg-[#0C2251] cusShadow p-10 rounded-[20px]'>
                  <h2 className='text-[#FDF44E] text-[40px] font-TTRoundsNeue font-bold'>3. Choose Amount to Buy</h2>

                  <p className='text-[#F4F4F4] font-poppins mt-4 leading-7 2xl:w-[50%] xl:pl-[45px]'>Choose the amount to buy and join the community!</p>
                </div>
              </div>
            </div>

            <div className='md:w-1/2'>
              <div className='flex'>
                <img src={spongeKid} alt="Image" className='xl:pb-[10px] w-[410px] 2xl:w-[71%] xl:w-[69%]' />
              </div>

              <div>
                {/* Card Four */}
                <div className='bg-[#0C2251] cusShadow p-10 rounded-[20px] mt-4 xl:w-[90%]'>
                  <h2 className='text-[#FDF44E] text-[40px] font-TTRoundsNeue font-bold xl:w-[75%] xl:leading-[43px] 2xl:leading-[48px] tracking-[0.96px]'>4. Buy SPONGE <span className='xl:pl-[48px]'>token</span></h2>

                  <p className='text-[#F4F4F4] font-poppins mt-4 leading-7 2xl:w-[75%] xl:w-[85%]'>Buy $SPONGE token and join the revolution! Embrace the laughter, fun and potential gains. Secure your spot now. Hurry up!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BuySpongeToken;
