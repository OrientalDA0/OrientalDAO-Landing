import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { X } from "lucide-react";

import { SiX, SiLinkedin, SiGithub } from "react-icons/si";
import BlockchainsMarquee from "@/components/ui/BlockchainsMarquee";

export default function OrientalDAOLanding() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 gradient-overlay"></div>

      {/* Floating gradient orbs for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 gradient-orb-1 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-96 h-96 gradient-orb-2 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 gradient-orb-3 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="px-6 py-4">
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-3">
              <img
                src="/oriental-dao-logo.png"
                alt="Oriental DAO Logo"
                className="w-12 h-12 rounded-md object-contain"
              />
              <span className="text-2xl font-bold ">Oriental DAO</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#team"
                className="text-gray-700 hover:text-primary transition-colors font-medium">
                Team
              </a>{" "}
              <a
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </a>
              <a
                href="#collaboration"
                className="text-gray-700 hover:text-primary transition-colors font-medium">
                Collaboration
              </a>
              <a
                href="#events"
                className="text-gray-700 hover:text-primary transition-colors font-medium">
                Events
              </a>
              <a
                href="#gallery"
                className="text-gray-700 hover:text-primary transition-colors font-medium">
                Gallery
              </a>
              <a
                href="#learn"
                className="text-gray-700 hover:text-primary transition-colors font-medium">
                Learn
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="!bg-gradient-to-r !from-[#f1cfae] !to-[#e46be5]  text-black cursor-pointer !border-0 hover:opacity-90 shadow-lg">
                Join DAO
              </Button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-gray-800">
              Welcome to <span className="gradient-text">Oriental DAO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
              A decentralized autonomous organization bridging Eastern wisdom
              with Web3 innovation. Join our community of builders, creators,
              and visionaries shaping the future of decentralized governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0 hover:opacity-90 shadow-lg">
                Join Community →
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/80 backdrop-blur-sm shadow-lg">
                <span>Learn More</span>
              </Button>
            </div>
          </div>
        </section>

        <BlockchainsMarquee />

        {/* Features Grid */}
        <section id="about" className="px-6 py-20 mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Why Oriental DAO?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                Experience the power of decentralized governance with Eastern
                philosophical principles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <CardTitle>Community Driven</CardTitle>
                  <CardDescription>
                    Every decision is made collectively by our diverse community
                    of members
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🗳️</span>
                  </div>
                  <CardTitle>Democratic Governance</CardTitle>
                  <CardDescription>
                    Transparent voting mechanisms ensure every voice is heard
                    and counted
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🪙</span>
                  </div>
                  <CardTitle>Token Economics</CardTitle>
                  <CardDescription>
                    Fair distribution and utility-driven tokenomics for
                    sustainable growth
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <CardTitle>Global Reach</CardTitle>
                  <CardDescription>
                    Connecting Eastern and Western perspectives in the Web3
                    ecosystem
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <CardTitle>Security First</CardTitle>
                  <CardDescription>
                    Multi-sig wallets and audited smart contracts ensure fund
                    safety
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle>Innovation Hub</CardTitle>
                  <CardDescription>
                    Incubating the next generation of Web3 projects and
                    technologies
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-14">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* Mishal Turkane */}
              <div className="hover:shadow-lg transition rounded p-6 flex flex-col items-center text-center">
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Mishal Turkane"
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">Mishal Turkane</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Founder, Oriental DAO
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/mishaldotrwa"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiX className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/in/mishalturkane"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiLinkedin className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                  <a
                    href="https://github.com/mishalturkane"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiGithub className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                </div>
              </div>

              {/* Pratima Tandekar */}
              <div className="hover:shadow-lg transition rounded p-6 flex flex-col items-center text-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSmP6Chzl3N5puEVXJoSRo00ZFFT-51yaAXg&s"
                  alt="Pratima Tandekar"
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">Pratima Tandekar</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Co-Founder, Oriental DAO
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiX className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiLinkedin className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiGithub className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                </div>
              </div>
              {/* Vilash Turkane */}
              <div className="hover:shadow-lg transition rounded p-6 flex flex-col items-center text-center">
                <Image
                  src="https://i.redd.it/2wm9k6rxnd6e1.jpeg"
                  alt="Vilash Turkane"
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">Vilash Turkane</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Devrel, Oriental DAO
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiX className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiLinkedin className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiGithub className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                </div>
              </div>

              {/* Shivam Waghale */}
              <div className="hover:shadow-lg transition rounded p-6 flex flex-col items-center text-center">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJ_NKNKGMT4f4CMtwwKMS6aaUjvUitYpL7AJF0U5lb9aMvu2MgEzPYmwO4ZWzUejdMlw&usqp=CAU"
                  alt="Shivam Waghale"
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">Shivam Waghale</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Social Media & Strategy, <br /> Oriental DAO
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiX className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiLinkedin className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiGithub className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                </div>
              </div>

          {/* Prince Raja Bunderla */}
          <div className="hover:shadow-lg transition rounded p-6 flex flex-col items-center text-center">
            <Image
              src="https://pbs.twimg.com/media/GnSgc3PW4AAxfMX.jpg"
              alt="Prince Raja Bunderla"
              width={150}
              height={150}
              className="w-[150px] h-[150px] object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Prince Raja Bunderla</h3>
            <p className="text-gray-600 text-sm mb-4">Full Stack MERN Engineer <br />Oriental DAO </p>
            <div className="flex gap-4">
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <SiX className="w-5 h-5 text-black dark:text-gray-300" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className="w-5 h-5 text-black dark:text-gray-300" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <SiGithub className="w-5 h-5 text-black dark:text-gray-300" />
              </a>
            </div>
          </div>

        

              {/* Kunal Choudhary */}
              <div className="hover:shadow-lg transition rounded p-6 flex flex-col items-center text-center">
                <Image
                  src="https://preview.redd.it/seen-a-lot-of-dogesh-bhai-memes-in-hindi-subs-which-is-v0-ivm4l4v3xb7f1.png?auto=webp&s=e15c0c934460b7fd530e708b0e0498c58533627a"
                  alt="Kunal Choudhary"
                  width={150}
                  height={150}
                  className="w-[150px] h-[150px] object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold">Kunal Choudhary</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Graphics Designer, <br /> Oriental DAO
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiX className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiLinkedin className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <SiGithub className="w-5 h-5 text-black dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hosted Events Section */}
        <section id="events" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Hosted Events
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                Join our community events and connect with fellow Web3
                enthusiasts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0">
                      Upcoming
                    </Badge>
                    <span className="text-lg">📅</span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    Web3 Workshop Series
                  </CardTitle>
                  <CardDescription className="mb-4">
                    Learn the fundamentals of blockchain technology and DeFi
                    protocols in our comprehensive workshop series.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>March 15, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">🕐</span>
                      <span>2:00 PM - 5:00 PM UTC</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>Virtual Event</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0">
                      Upcoming
                    </Badge>
                    <span className="text-lg">📅</span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    DAO Governance Summit
                  </CardTitle>
                  <CardDescription className="mb-4">
                    Deep dive into decentralized governance models and
                    participate in live voting demonstrations.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>March 22, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">🕐</span>
                      <span>1:00 PM - 6:00 PM UTC</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>Singapore Convention Center</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-gray-100">
                      Past Event
                    </Badge>
                    <span className="text-lg">📅</span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    NFT Art Exhibition
                  </CardTitle>
                  <CardDescription className="mb-4">
                    Showcasing digital art from Eastern artists and exploring
                    the intersection of culture and Web3.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>February 28, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">🕐</span>
                      <span>6:00 PM - 10:00 PM UTC</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>Tokyo Digital Gallery</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="bg-gray-100">
                      Past Event
                    </Badge>
                    <span className="text-lg">📅</span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    DeFi Trading Masterclass
                  </CardTitle>
                  <CardDescription className="mb-4">
                    Advanced strategies for yield farming, liquidity provision,
                    and risk management in DeFi protocols.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>February 14, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">🕐</span>
                      <span>3:00 PM - 7:00 PM UTC</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>Virtual Event</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0">
                      Monthly
                    </Badge>
                    <span className="text-lg">📅</span>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    Community Meetup
                  </CardTitle>
                  <CardDescription className="mb-4">
                    Regular networking sessions for DAO members to connect,
                    share ideas, and collaborate on projects.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>Every First Friday</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">🕐</span>
                      <span>7:00 PM - 9:00 PM UTC</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>Rotating Locations</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0">
                      Upcoming
                    </Badge>
                    <span className="text-lg">📅</span>
                  </div>
                  <CardTitle className="text-xl mb-2">Hackathon 2024</CardTitle>
                  <CardDescription className="mb-4">
                    48-hour coding marathon to build innovative Web3 solutions
                    with prizes and mentorship opportunities.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>April 5-7, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">🕐</span>
                      <span>48 Hours</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2">📍</span>
                      <span>Hybrid Event</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0 hover:opacity-90 shadow-lg">
                View All Events →
              </Button>
            </div>
          </div>
        </section>

        {/* Hosted Gallery Section */}
        <section id="gallery">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">
                Event Gallery
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                Highlights from our recent events and community gatherings
              </p>
              <div className="flex mt-6 justify-around">
                <Image
                  src="https://pbs.twimg.com/media/GPt2_e1aAAAMHl7?format=jpg&name=4096x4096"
                  alt="not found"
                  width={350}
                  height={350}
                  className="w-[350px] h-[350px] object-cover rounded-md mb-4"
                />
                <Image
                  src="https://pbs.twimg.com/media/GSG5AVXaUAI5Dxv?format=jpg&name=4096x4096"
                  alt="not found"
                  width={350}
                  height={350}
                  className="w-[350px] h-[350px] object-cover rounded-md mb-4"
                />
                <Image
                  src="https://pbs.twimg.com/media/GOhI6OgWIAAVolw.jpg:large"
                  alt="not found"
                  width={350}
                  height={350}
                  className="w-[350px] h-[350px] object-cover rounded-md mb-4"
                />
              </div>
              <div className="flex mt-6 justify-around">
                <Image
                  src="https://pbs.twimg.com/media/GSRzVOTagAERlgz?format=jpg&name=4096x4096"
                  alt="not found"
                  width={350}
                  height={350}
                  className="w-[350px] h-[350px] object-cover rounded-md mb-4"
                />
                <Image
                  src="https://pbs.twimg.com/media/GR95ftrW0AEuWVL?format=jpg&name=medium"
                  alt="not found"
                  width={350}
                  height={350}
                  className="w-[350px] h-[350px] object-cover rounded-md mb-4"
                />
                <Image
                  src="https://pbs.twimg.com/media/GPjnuK1bcAAtoGI?format=jpg&name=large"
                  alt="not found"
                  width={350}
                  height={350}
                  className="w-[350px] h-[350px] object-cover rounded-md mb-4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Ready to Join Oriental DAO?
            </h2>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              Become part of a community that's building the future of
              decentralized governance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0 hover:opacity-90 shadow-lg">
                Get Started →
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/80 backdrop-blur-sm shadow-lg">
                Read Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 gradient-bg">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src="/oriental-dao-logo.png"
                    alt="Oriental DAO Logo"
                    className="w-8 h-8 object-contain bg-white rounded-lg p-1"
                  />
                  <span className="text-xl font-bold text-white">
                    Oriental DAO
                  </span>
                </div>
                <p className="text-white/80 text-sm">
                  Bridging Eastern wisdom with Web3 innovation through
                  decentralized governance.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Community</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a
                      href="https://x.com/OrientalDA0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/OrientalDA0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Resources</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Whitepaper
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Tokenomics
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4">Governance</h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Proposals
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Voting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Treasury
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Analytics
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8 text-center">
              <p className="text-white/60 text-sm">
                © 2025 Oriental DAO. All rights reserved. Built with ❤️ by the
                community.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
