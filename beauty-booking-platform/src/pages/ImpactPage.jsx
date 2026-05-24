import { Link } from 'react-router-dom'
import { Heart, Users, Globe, Award, TrendingUp, DollarSign, Zap, Shield, ArrowRight } from 'lucide-react'

const ImpactPage = () => {
  const missionPoints = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Empowering Beauty Professionals',
      description: 'We provide independent beauty professionals with the tools and platform to grow their businesses, manage appointments, and reach new clients without the high commission fees of traditional booking platforms.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Building Community',
      description: 'BeautyBook connects customers with talented professionals in their local area, fostering meaningful relationships and supporting local economies.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Sustainable Beauty',
      description: 'We promote eco-friendly practices by connecting customers with professionals who use sustainable products and methods.',
    },
  ]

  const impactStats = [
    { value: '$2.5M+', label: 'Paid to Professionals', icon: <DollarSign className="w-6 h-6" /> },
    { value: '15K+', label: 'Professionals Empowered', icon: <Award className="w-6 h-6" /> },
    { value: '500+', label: 'Communities Served', icon: <Globe className="w-6 h-6" /> },
    { value: '98%', label: 'Customer Satisfaction', icon: <Heart className="w-6 h-6" /> },
  ]

  const values = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Trust & Safety',
      description: 'Every professional is verified with valid certifications. We maintain strict quality standards and provide secure payment processing.',
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Innovation',
      description: 'We continuously improve our platform with features like real-time booking, AI-powered recommendations, and seamless mobile experiences.',
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: 'Growth',
      description: 'Our professionals see an average 40% increase in bookings within the first 3 months of joining BeautyBook.',
    },
  ]

  const initiatives = [
    {
      title: 'Professional Development Program',
      description: 'Free training resources, business workshops, and mentorship opportunities for all registered professionals.',
      impact: 'Over 5,000 professionals completed our certification courses',
    },
    {
      title: 'Community Giveback',
      description: '5% of platform commissions go toward providing free beauty services to underserved communities.',
      impact: '$100K+ donated to community programs in 2024',
    },
    {
      title: 'Eco-Friendly Initiative',
      description: 'Partnership with sustainable beauty brands and incentives for professionals using eco-friendly products.',
      impact: '30% reduction in environmental impact among participating salons',
    },
    {
      title: 'Emergency Relief Fund',
      description: 'Support for professionals affected by natural disasters or personal emergencies.',
      impact: '$50K distributed to 200+ professionals in need',
    },
  ]

  const testimonials = [
    {
      name: 'Maria Garcia',
      role: 'Hairstylist & Salon Owner',
      content: 'BeautyBook gave me the freedom to run my business my way. I\'ve doubled my client base and can finally focus on what I love - creating beautiful hairstyles.',
      image: '👩‍🦱',
    },
    {
      name: 'James Chen',
      role: 'Makeup Artist',
      content: 'The platform\'s exposure helped me land wedding gigs I never would have found otherwise. The booking system is incredibly easy to use.',
      image: '👨‍🎨',
    },
    {
      name: 'Aisha Patel',
      role: 'Nail Technician',
      content: 'As a single mom, flexibility is everything. BeautyBook lets me set my own schedule while still earning a great income.',
      image: '👩‍💼',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-600 via-accent-500 to-primary-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Mission & Impact
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Transforming the beauty industry by empowering professionals and 
              creating opportunities for everyone.
            </p>
            <Link to="/signup" className="btn-lg bg-white text-secondary-600 hover:bg-gray-100 inline-flex items-center">
              Join Our Mission
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're more than just a booking platform - we're building a movement
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-600 mb-4">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from our growing community
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 text-primary-600 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Initiatives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Giving back to the communities that support us
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{initiative.title}</h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="flex items-center text-primary-600 font-medium">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  {initiative.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the professionals whose lives have been transformed
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="text-5xl mb-4">{testimonial.image}</div>
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
      <section className="py-16 md:py-24 bg-gradient-to-r from-secondary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of the Change
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're a beauty professional or a customer, you can help us 
            build a better beauty industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup?role=professional" className="btn-lg bg-white text-secondary-600 hover:bg-gray-100">
              Join as a Professional
            </Link>
            <Link to="/professionals" className="btn-lg border-2 border-white hover:bg-white/10">
              Find a Professional
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ImpactPage
