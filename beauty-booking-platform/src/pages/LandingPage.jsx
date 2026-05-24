import { Link } from 'react-router-dom'
import { Scissors, Sparkles, Calendar, Users, Heart, Star, ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'

const LandingPage = () => {
  const features = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: 'Professional Services',
      description: 'Book top-rated beauty professionals for hair, nails, makeup, and more.',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Easy Booking',
      description: 'Schedule appointments in seconds with our intuitive booking system.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Verified Professionals',
      description: 'All professionals are verified with certifications and real reviews.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Save Favorites',
      description: 'Create collections of your favorite styles and professionals.',
    },
  ]

  const services = [
    { name: 'Hair Styling', icon: '💇', color: 'from-pink-500 to-rose-500' },
    { name: 'Nail Art', icon: '💅', color: 'from-purple-500 to-indigo-500' },
    { name: 'Makeup', icon: '💄', color: 'from-red-500 to-pink-500' },
    { name: 'Skincare', icon: '✨', color: 'from-amber-500 to-orange-500' },
    { name: 'Massage', icon: '💆', color: 'from-teal-500 to-cyan-500' },
    { name: 'Brow & Lash', icon: '👁️', color: 'from-blue-500 to-indigo-500' },
  ]

  const stats = [
    { value: '10K+', label: 'Active Professionals' },
    { value: '500K+', label: 'Happy Customers' },
    { value: '1M+', label: 'Bookings Made' },
    { value: '4.9', label: 'Average Rating' },
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Customer',
      content: 'Found my go-to stylist through BeautyBook. The booking process is so easy and I love seeing the portfolio before booking!',
      rating: 5,
    },
    {
      name: 'Jessica L.',
      role: 'Beauty Professional',
      content: 'This platform has transformed my business. I can manage all my appointments and reach new clients effortlessly.',
      rating: 5,
    },
    {
      name: 'Emily R.',
      role: 'Customer',
      content: 'The style gallery is amazing! I can find exactly what I want and book directly. Highly recommend!',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-secondary-500 to-accent-500 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Beauty, <span className="text-accent-300">Your Style</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Discover and book top beauty professionals. From hair to nails, makeup to skincare - 
              everything you need in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="btn-lg bg-white text-primary-600 hover:bg-gray-100">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/professionals" className="btn-lg border-2 border-white hover:bg-white/10">
                Browse Professionals
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From classic cuts to creative colors, find the perfect service for your style
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services?category=${service.name.toLowerCase().replace(' ', '-')}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`text-5xl mb-4 bg-gradient-to-r ${service.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BeautyBook?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make beauty booking simple, secure, and enjoyable
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book your next appointment in three simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Browse', desc: 'Explore styles, services, and professional portfolios' },
              { step: 2, title: 'Book', desc: 'Select your preferred time and complete booking' },
              { step: 3, title: 'Enjoy', desc: 'Receive confirmation and enjoy your beauty experience' },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary-200 absolute -top-4 -left-4">
                  {item.step}
                </div>
                <div className="relative bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Beauty Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of happy customers and professionals on BeautyBook
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="btn-lg bg-white text-primary-600 hover:bg-gray-100">
              Create Free Account
            </Link>
            <Link to="/impact" className="btn-lg border-2 border-white hover:bg-white/10">
              Learn About Our Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">BeautyBook</h3>
              <p className="text-gray-400">Your trusted platform for beauty services booking.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@beautybook.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/professionals" className="block text-gray-400 hover:text-white">Find Professionals</Link>
                <Link to="/services" className="block text-gray-400 hover:text-white">Browse Services</Link>
                <Link to="/styles" className="block text-gray-400 hover:text-white">Style Gallery</Link>
                <Link to="/impact" className="block text-gray-400 hover:text-white">Our Impact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Professionals</h4>
              <div className="space-y-2">
                <Link to="/signup?role=professional" className="block text-gray-400 hover:text-white">Join as Pro</Link>
                <Link to="/pricing" className="block text-gray-400 hover:text-white">Pricing</Link>
                <Link to="/resources" className="block text-gray-400 hover:text-white">Resources</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
