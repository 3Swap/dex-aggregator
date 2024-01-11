import Image from 'next/image';
import Head from 'next/head';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';


export default function Home() {
  const features = [
    {
      title: "DEX Made Easy",
      subtitle: 'Fast and Secure Exchange of Digital Assets',
      paragraph: "Our platform provides a seamless and  secure way to exchange your digital assets Embrace the future of finance with easy cryptocurrency swapping.",
      linkURl: '/exchange',
      linkTitle: "Swap"
    },
    {
      title: "Interconnected Asset Swapping",
      subtitle: 'Unifying Digital Assets for Seamless Transactions',
      paragraph: "Our platform offers seamless interoperability, bridging the gap between various digital assets.",
      linkURl: '/exchange',
      linkTitle: "Bridge"
    }
  ]

  return (
    <div>
      <Head>
        <title>3Swap | Dex Aggregator</title>
      </Head>
      <div className="w-full flex flex-col justify-stretch items-center pb-[15rem] relative">
        <Navbar visibleLink={true} />
        <Image src="/bg/planet-cut.svg" width={558} height={722} alt='Planet' className='absolute top-0 left-0 z-0' />
        <div className='w-full p-5 mb-[-20rem] flex flex-col items-start gap-y-5 z-10'>
          <h2 className='sm:text-6xl text-4xl sm:leading-[4.5rem] leading-[3rem] text-white mt-[4rem]'>
            <span className='bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-md bg-clip-text text-transparent shadow-purple-600 font-extrabold'>Trade with Unprecedented <br />
              Freedom</span> - The Decentralized <br />
            Exchange Revolution</h2>
          <Link href="/exchange" className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md">Launch dApp</Link>
        </div>
        <div className='ml-auto sm:mb-[-10rem] mb-[4rem]'>
          <Image src="/bg/planet.svg" width={1096} height={722} alt='planet image' className='' />
        </div>
        <h3 className='sm:text-4xl text-xl font-extrabold text-center text-white'>DeFi / DEX aggregator with the most<br />
          liquidity and the best rates on<br />
          <span className='bg-gradient-to-r from-indigo-600 to-purple-600 drop-shadow-md bg-clip-text text-transparent'>VinuChain, Base chains , EVM</span></h3>
      </div>
      <div className='w-full'>
        <div className="bg-[url('/bg/3d.png')] h-[85vh] w-full bg-no-repeat bg-center bg-cover flex items-center justify-center sm:gap-x-10 gap-y-5 sm:flex-row flex-col p-5">
          {features.map((feature, index) => {
            return (
              <div key={index} className='max-w-[450px] h-[420px] backdrop-blur-lg text-center rounded-xl shadow-xl gap-3 space-y-4 relative'>
                <div className="z-20 flex flex-col items-center justify-center h-full space-y-8 p-3 relative">
                  <h3 className='font-extrabold text-4xl text-white'>{feature.title}</h3>
                  <p className='font-bold text-white'>{feature.subtitle}</p>
                  <p className='text-white'>{feature.paragraph}</p>
                  <Link href={feature.linkURl} className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-md">{feature.linkTitle}</Link>
                </div>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col items-center justify-center my-[15rem]'>
          <h2 className='text-5xl font-extrabold text-white text-center'>First DEFI aggregator <br /> on VinuChain</h2>
          <p className='text-white text-3xl'>Coming soon</p>
        </div>
        <Footer />
      </div>
    </div>
  )
}
