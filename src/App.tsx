import React, { useState } from 'react';
import {
  Wallet,
  Shield,
  Globe,
  Rocket,
  Binary,
  Blocks,
  Zap,
  Lock,
  TrendingUp,
  Users,
  ExternalLink,
  Star,
  Cpu,
  ChevronRight,
  Lightbulb,
  Link,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnected(true);
      } catch (error) {
        console.error('User denied account access');
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const carouselImages = [
    {
      url: 'src/2carrousel',
      caption: 'Dominating the crypto market',
    },
    {
      url: 'src/5carrousel',
      caption: 'Eagke leading global success',
    },
        {
      url: 'src/4carrousel',
      caption: 'Power and Technology united by MTC',
    },
    {
      url: 'src/3carrousel',
      caption: 'Interplanetary expansion of MTC',
    },
    {
      url: 'src/1carrousel',
      caption: 'The currency that connects worlds',
    },
  ];

  return (
    <div className="min-h-screen bg-mtc-dark text-white">
      {/* Header */}
      <header className="fixed w-full bg-mtc-darker bg-opacity-95 backdrop-blur-sm z-50 border-b border-mtc-gold/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <img
              src="src/MuskTrumpCoin - MTC  .png"
              alt="MuskTrumpCoin Logo"
              className="w-12 h-12"
            />
            <span className="text-xl sm:text-2xl font-bold">MuskTrumpCoin</span>
          </div>
          <button
            onClick={connectWallet}
            className="bg-mtc-gold text-mtc-navy px-6 py-2 rounded-full font-bold hover:bg-yellow-300 transition-colors w-full sm:w-auto"
          >
            {connected ? 'Connected' : 'Connect Wallet'}
          </button>
        </div>
      </header>

      {/* Hero Section with Carousel */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-mtc-darker">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Star className="w-6 h-6 text-mtc-gold" />
                <span className="text-mtc-gold font-bold">
                  American Innovation
                </span>
                <img 
                  src='src/MuskTrumpCoin - MTC  .png'
                  alt='MuskTrumpCoin Logo'
                  className='w-24 sm:w-32 md:w40 lg:w-48 h-auto'
                />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                The Key to Digital Economy
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-mtc-gold mb-4">
                More Than Just a Cryptocurrency
              </p>
              <p className="text-lg sm:text-xl text-gray-400 mb-8">
                With advanced technology, fast transactions, and low fees,
                MuskTrumpCoin is ready to transform fintech, DeFi, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <button className="bg-mtc-gold text-mtc-navy px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Join the Revolution
                </button>
                <button className="border-2 border-mtc-gold text-mtc-gold px-8 py-3 rounded-full font-bold hover:bg-mtc-gold hover:text-mtc-navy transition-colors flex items-center justify-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                className="w-full aspect-square rounded-2xl shadow-2xl"
              >
                {carouselImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative w-full h-full">
                      <img
                        src={image.url}
                        alt={image.caption}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <p className="text-white text-lg font-bold">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-mtc-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Visionary Leadership</h2>
            <p className="text-xl text-gray-300 mb-12">
              Backed by the vision of industry titans Elon Musk and Donald
              Trump, MuskTrumpCoin is positioned to revolutionize the
              cryptocurrency landscape and create a new era of digital finance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-mtc-darker p-8 rounded-xl border border-mtc-gold/10">
                <img
                  src="https://images.unsplash.com/photo-1562114808-b4b33cf60f4f?auto=format&fit=crop&w=800&q=80"
                  alt="Innovation Leader"
                  className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Innovation & Technology
                </h3>
                <p className="text-gray-400">
                  Leading the charge in technological advancement and
                  sustainable innovation
                </p>
              </div>
              <div className="bg-mtc-darker p-8 rounded-xl border border-mtc-gold/10">
                <img
                  src="https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?auto=format&fit=crop&w=800&q=80"
                  alt="Business Vision"
                  className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
                />
                <h3 className="text-2xl font-bold mb-4">Business Acumen</h3>
                <p className="text-gray-400">
                  Bringing unparalleled business expertise and market
                  understanding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Breakdown */}
      <section className="py-20 bg-gradient-to-b from-mtc-navy to-mtc-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Revolutionary Technology
          </h2>
          <p className="text-center text-mtc-gold mb-12 text-xl">
            Built for the Future of Finance
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-mtc-darker p-8 rounded-xl border border-mtc-gold/10">
              <Cpu className="w-16 h-16 text-mtc-gold mb-6" />
              <h3 className="text-2xl font-bold mb-4">Robust Infrastructure</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Scalable architecture for growing demands
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    High-performance transaction processing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Advanced security protocols
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-mtc-darker p-8 rounded-xl border border-mtc-gold/10">
              <Blocks className="w-16 h-16 text-mtc-gold mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ecosystem Integration</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Seamless DeFi platform compatibility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Cross-chain bridge functionality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Smart contract interoperability
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-mtc-darker p-8 rounded-xl border border-mtc-gold/10">
              <Lightbulb className="w-16 h-16 text-mtc-gold mb-6" />
              <h3 className="text-2xl font-bold mb-4">Future Innovation</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    AI-powered trading features
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Quantum-resistant encryption
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    Revolutionary governance model
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Polygon Network Integration */}
      <section className="py-20 bg-mtc-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">
              Polygon Network Integration
            </h2>
            <div className="bg-mtc-darker p-8 rounded-2xl border border-mtc-gold/10 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                <div className="flex items-center gap-4">
                  <img
                    src="https://cryptologos.cc/logos/polygon-matic-logo.png"
                    alt="Polygon Logo"
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="text-2xl font-bold">MUSKTRUMPCOIN (MTC)</h3>
                    <p className="text-mtc-gold">Powered by Polygon Network</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-mtc-navy/50 px-4 py-2 rounded-lg">
                  <Link className="w-5 h-5 text-mtc-gold" />
                  <span className="text-sm font-mono text-gray-300 break-all">
                    0xD3675B7a26C6d6C4788c9b27eD417B7BD9c7C71F
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-mtc-navy/30 p-6 rounded-xl">
                  <h4 className="text-mtc-gold font-bold mb-2">
                    Current Price
                  </h4>
                  <p className="text-2xl font-bold">$0.000001</p>
                  <span className="text-green-400 text-sm">+5.2% (24h)</span>
                </div>
                <div className="bg-mtc-navy/30 p-6 rounded-xl">
                  <h4 className="text-mtc-gold font-bold mb-2">Market Cap</h4>
                  <p className="text-2xl font-bold">$1.2M</p>
                  <span className="text-sm text-gray-400">Fully Diluted</span>
                </div>
                <div className="bg-mtc-navy/30 p-6 rounded-xl">
                  <h4 className="text-mtc-gold font-bold mb-2">24h Volume</h4>
                  <p className="text-2xl font-bold">$50,234</p>
                  <span className="text-sm text-gray-400">On DEXes</span>
                </div>
              </div>

              <div className="bg-mtc-navy/30 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-4">Price Chart (7 Days)</h4>
                <div className="aspect-[16/9] bg-mtc-navy/50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">Chart data loading...</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-mtc-darker p-6 rounded-xl border border-mtc-gold/10">
                <h3 className="text-xl font-bold mb-4">How to Buy MTC</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="bg-mtc-gold text-mtc-navy w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      1
                    </span>
                    <div>
                      <p className="font-bold">Set Up MetaMask</p>
                      <p className="text-gray-400">
                        Install MetaMask and add Polygon network
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-mtc-gold text-mtc-navy w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      2
                    </span>
                    <div>
                      <p className="font-bold">Get MATIC</p>
                      <p className="text-gray-400">
                        Purchase MATIC from an exchange
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="bg-mtc-gold text-mtc-navy w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      3
                    </span>
                    <div>
                      <p className="font-bold">Swap for MTC</p>
                      <p className="text-gray-400">
                        Use QuickSwap or Uniswap to swap MATIC for MTC
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="bg-mtc-darker p-6 rounded-xl border border-mtc-gold/10">
                <h3 className="text-xl font-bold mb-4">Token Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Total Supply</p>
                      <p className="text-gray-400">1,000,000,000 MTC</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Network</p>
                      <p className="text-gray-400">Polygon (MATIC)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-mtc-gold flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold">Token Type</p>
                      <p className="text-gray-400">ERC-20</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-20 bg-mtc-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Invest in MuskTrumpCoin?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Robust Technology',
                desc: 'Built on cutting-edge blockchain architecture',
              },
              {
                icon: TrendingUp,
                title: 'Growth Potential',
                desc: 'Positioned for significant market expansion',
              },
              {
                icon: Globe,
                title: 'Global Ecosystem',
                desc: 'Integrated across multiple platforms',
              },
              {
                icon: Wallet,
                title: 'Visionary Support',
                desc: 'Backed by industry leaders',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-mtc-darker p-6 rounded-xl border border-mtc-gold/10 hover:border-mtc-gold/30 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-mtc-gold mb-4" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mtc-darker py-12 border-t border-mtc-gold/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-6 md:mb-0">
              <img
                src="src/MuskTrumpCoin - MTC  .png"
                alt="MuskTrumpCoin Logo"
                className="w-8 h-8"
              />
              <span className="text-2xl font-bold">MuskTrumpCoin</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://x.com/musktrumpcoin__?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-mtc-gold transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-mtc-gold transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-500">
            <p>&copy; 2025 MuskTrumpCoin (MTC). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
