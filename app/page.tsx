import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
              <img src="/oriental-dao-logo.png" alt="Oriental DAO Logo" className="w-12 h-12 rounded-md object-contain" />
              <span className="text-2xl font-bold ">Oriental DAO</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#governance" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Governance
              </a>
              <a href="#events" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Events
              </a>
              <a href="#community" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Community
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
        <section className="px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 p-4 !bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0 shadow-lg">
              🚀 Web3 Community
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-gray-800">
              Welcome to <span className="gradient-text">Oriental DAO</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 text-pretty max-w-3xl mx-auto leading-relaxed">
              A decentralized autonomous organization bridging Eastern wisdom with Web3 innovation. Join our community
              of builders, creators, and visionaries shaping the future of decentralized governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0 hover:opacity-90 shadow-lg"
              >
                Join Community →
              </Button>
              <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm shadow-lg">
                <span>Learn More</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="about" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Oriental DAO?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                Experience the power of decentralized governance with Eastern philosophical principles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <CardTitle>Community Driven</CardTitle>
                  <CardDescription>
                    Every decision is made collectively by our diverse community of members
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🗳️</span>
                  </div>
                  <CardTitle>Democratic Governance</CardTitle>
                  <CardDescription>
                    Transparent voting mechanisms ensure every voice is heard and counted
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🪙</span>
                  </div>
                  <CardTitle>Token Economics</CardTitle>
                  <CardDescription>
                    Fair distribution and utility-driven tokenomics for sustainable growth
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <CardTitle>Global Reach</CardTitle>
                  <CardDescription>Connecting Eastern and Western perspectives in the Web3 ecosystem</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <CardTitle>Security First</CardTitle>
                  <CardDescription>Multi-sig wallets and audited smart contracts ensure fund safety</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 gradient-bg rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle>Innovation Hub</CardTitle>
                  <CardDescription>Incubating the next generation of Web3 projects and technologies</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Governance Section */}
        <section id="governance" className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-white/20">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Decentralized Governance</h2>
            <p className="text-xl text-gray-600 mb-12 text-pretty">
              Our governance model combines ancient Eastern wisdom with modern blockchain technology
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">1</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Propose</h3>
                <p className="text-gray-600">Submit proposals for community consideration</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">2</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Discuss</h3>
                <p className="text-gray-600">Engage in thoughtful community dialogue</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">3</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Vote</h3>
                <p className="text-gray-600">Cast your vote and shape our future</p>
              </div>
            </div>

            <Button
              size="lg"
              className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0 hover:opacity-90 shadow-lg"
            >
              View Active Proposals
            </Button>
          </div>
        </section>

        {/* Hosted Events Section */}
        <section id="events" className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Hosted Events</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
                Join our community events and connect with fellow Web3 enthusiasts
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
                  <CardTitle className="text-xl mb-2">Web3 Workshop Series</CardTitle>
                  <CardDescription className="mb-4">
                    Learn the fundamentals of blockchain technology and DeFi protocols in our comprehensive workshop
                    series.
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
                  <CardTitle className="text-xl mb-2">DAO Governance Summit</CardTitle>
                  <CardDescription className="mb-4">
                    Deep dive into decentralized governance models and participate in live voting demonstrations.
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
                  <CardTitle className="text-xl mb-2">NFT Art Exhibition</CardTitle>
                  <CardDescription className="mb-4">
                    Showcasing digital art from Eastern artists and exploring the intersection of culture and Web3.
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
                  <CardTitle className="text-xl mb-2">DeFi Trading Masterclass</CardTitle>
                  <CardDescription className="mb-4">
                    Advanced strategies for yield farming, liquidity provision, and risk management in DeFi protocols.
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
                  <CardTitle className="text-xl mb-2">Community Meetup</CardTitle>
                  <CardDescription className="mb-4">
                    Regular networking sessions for DAO members to connect, share ideas, and collaborate on projects.
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
                    48-hour coding marathon to build innovative Web3 solutions with prizes and mentorship opportunities.
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
                className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0 hover:opacity-90 shadow-lg"
              >
                View All Events →
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Ready to Join Oriental DAO?</h2>
            <p className="text-xl text-gray-600 mb-8 text-pretty">
              Become part of a community that's building the future of decentralized governance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="!bg-gradient-to-r !from-[#f1cfae] !via-[#c86be5] !to-[#c6cef9] !text-white !border-0 hover:opacity-90 shadow-lg"
              >
                Get Started →
              </Button>
              <Button size="lg" variant="outline" className="bg-white/80 backdrop-blur-sm shadow-lg">
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
                  <span className="text-xl font-bold text-white">Oriental DAO</span>
                </div>
                <p className="text-white/80 text-sm">
                  Bridging Eastern wisdom with Web3 innovation through decentralized governance.
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
                      className="hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/OrientalDA0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
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
                © 2024 Oriental DAO. All rights reserved. Built with ❤️ by the community.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
