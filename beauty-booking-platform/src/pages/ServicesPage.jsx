import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Filter, Star, MapPin, Calendar, Clock, ChevronDown, Heart } from 'lucide-react'

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [priceRange, setPriceRange] = useState([0, 500])

  const categories = [
    { id: 'all', name: 'All Services', count: 248 },
    { id: 'hair', name: 'Hair Styling', count: 86 },
    { id: 'nails', name: 'Nail Art', count: 52 },
    { id: 'makeup', name: 'Makeup', count: 41 },
    { id: 'skincare', name: 'Skincare', count: 35 },
    { id: 'massage', name: 'Massage', count: 24 },
    { id: 'brow-lash', name: 'Brow & Lash', count: 10 },
  ]

  const services = [
    {
      id: 1,
      title: 'Balayage Hair Coloring',
      professional: 'Sarah Mitchell',
      rating: 4.9,
      reviews: 127,
      price: 250,
      duration: '3 hours',
      image: '💇‍♀️',
      category: 'hair',
      location: 'New York, NY',
      available: true,
    },
    {
      id: 2,
      title: 'Luxury Gel Manicure',
      professional: 'Emma Chen',
      rating: 4.8,
      reviews: 89,
      price: 65,
      duration: '1 hour',
      image: '💅',
      category: 'nails',
      location: 'Brooklyn, NY',
      available: true,
    },
    {
      id: 3,
      title: 'Bridal Makeup Package',
      professional: 'Jessica Rodriguez',
      rating: 5.0,
      reviews: 203,
      price: 350,
      duration: '2.5 hours',
      image: '💄',
      category: 'makeup',
      location: 'Manhattan, NY',
      available: false,
    },
    {
      id: 4,
      title: 'Deep Cleansing Facial',
      professional: 'Dr. Amanda Lee',
      rating: 4.9,
      reviews: 156,
      price: 120,
      duration: '1.5 hours',
      image: '✨',
      category: 'skincare',
      location: 'Queens, NY',
      available: true,
    },
    {
      id: 5,
      title: 'Swedish Massage',
      professional: 'Michael Brown',
      rating: 4.7,
      reviews: 94,
      price: 95,
      duration: '1 hour',
      image: '💆‍♂️',
      category: 'massage',
      location: 'Jersey City, NJ',
      available: true,
    },
    {
      id: 6,
      title: 'Keratin Hair Treatment',
      professional: 'Lisa Thompson',
      rating: 4.8,
      reviews: 78,
      price: 300,
      duration: '4 hours',
      image: '💁‍♀️',
      category: 'hair',
      location: 'New York, NY',
      available: true,
    },
    {
      id: 7,
      title: 'Eyelash Extensions',
      professional: 'Nicole Park',
      rating: 4.9,
      reviews: 112,
      price: 180,
      duration: '2 hours',
      image: '👁️',
      category: 'brow-lash',
      location: 'Brooklyn, NY',
      available: true,
    },
    {
      id: 8,
      title: 'Acrylic Nail Set',
      professional: 'Tiffany Wang',
      rating: 4.6,
      reviews: 67,
      price: 55,
      duration: '1.5 hours',
      image: '💅',
      category: 'nails',
      location: 'Flushing, NY',
      available: true,
    },
  ]

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  )

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Discover professional beauty services from top-rated professionals in your area
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-gray-600" />
                <h2 className="font-semibold text-gray-900">Filters</h2>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs text-gray-400">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Price Range</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-20 px-2 py-1 border rounded text-sm"
                    placeholder="Min"
                  />
                  <span className="text-gray-400">-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-20 px-2 py-1 border rounded text-sm"
                    placeholder="Max"
                  />
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary-600" defaultChecked />
                  <span className="text-sm text-gray-700">Available Now</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Sort */}
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="input-pl pl-10"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                  >
                    <option value="popular">Most Popular</option>
                    <option value="rating">Highest Rated</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredServices.length} of {services.length} services
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center text-6xl">
                    {service.image}
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{service.title}</h3>
                      <button className="text-gray-400 hover:text-red-500">
                        <Heart className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <Link to={`/professionals/${service.professional.toLowerCase().replace(' ', '-')}`} className="text-sm text-primary-600 hover:text-primary-500 mb-2 block">
                      {service.professional}
                    </Link>
                    
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{service.rating}</span>
                        <span className="text-gray-400">({service.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t">
                      <div>
                        <span className="text-2xl font-bold text-gray-900">${service.price}</span>
                      </div>
                      <Link
                        to={`/booking?service=${service.id}`}
                        className={`btn-primary text-sm ${!service.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!service.available}
                      >
                        {service.available ? 'Book Now' : 'Unavailable'}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="btn-secondary">
                Load More Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
