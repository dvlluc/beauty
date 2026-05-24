import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Calendar, DollarSign, Star, Users, Clock, TrendingUp, 
  Bell, CheckCircle, XCircle, AlertCircle, ArrowRight,
  Scissors, Palette, Sparkles, Heart
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const DashboardPage = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('overview')
  
  // Mock data - will be replaced with real Supabase data
  const [stats, setStats] = useState({
    upcomingBookings: 8,
    totalEarnings: 2450,
    averageRating: 4.8,
    totalReviews: 127,
    conversionRate: 68,
    repeatCustomers: 45,
  })

  const [upcomingAppointments, setUpcomingAppointments] = useState([
    { id: 1, client: 'Sarah Johnson', service: 'Hair Cut & Style', date: '2024-01-15', time: '10:00 AM', status: 'confirmed', price: 85 },
    { id: 2, client: 'Emily Chen', service: 'Balayage Coloring', date: '2024-01-15', time: '2:00 PM', status: 'confirmed', price: 250 },
    { id: 3, client: 'Maria Garcia', service: 'Manicure Deluxe', date: '2024-01-16', time: '11:00 AM', status: 'pending', price: 65 },
    { id: 4, client: 'Jessica Lee', service: 'Full Makeup', date: '2024-01-16', time: '4:00 PM', status: 'confirmed', price: 150 },
    { id: 5, client: 'Amanda Wilson', service: 'Keratin Treatment', date: '2024-01-17', time: '9:00 AM', status: 'confirmed', price: 300 },
  ])

  const [recentReviews, setRecentReviews] = useState([
    { id: 1, client: 'Sarah M.', rating: 5, comment: 'Absolutely love my new hairstyle! Best stylist in town.', date: '2024-01-10', service: 'Hair Cut & Color' },
    { id: 2, client: 'Jennifer K.', rating: 5, comment: 'Professional, friendly, and amazing results. Highly recommend!', date: '2024-01-08', service: 'Balayage' },
    { id: 3, client: 'Lisa R.', rating: 4, comment: 'Great experience overall. Will definitely come back.', date: '2024-01-05', service: 'Manicure' },
  ])

  const [notifications, setNotifications] = useState([
    { id: 1, type: 'booking', message: 'New booking request from Amanda Wilson', time: '5 min ago', unread: true },
    { id: 2, type: 'review', message: 'Sarah M. left you a 5-star review', time: '1 hour ago', unread: true },
    { id: 3, type: 'reminder', message: 'Reminder: 3 appointments tomorrow', time: '2 hours ago', unread: false },
    { id: 4, type: 'payment', message: 'Payment of $250 received from Emily Chen', time: 'Yesterday', unread: false },
  ])

  const userRole = user?.user_metadata?.role || 'professional'

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700'
      case 'pending': return 'bg-yellow-100 text-yellow-700'
      case 'cancelled': return 'bg-red-100 text-red-700'
      case 'completed': return 'bg-blue-100 text-blue-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {user?.user_metadata?.first_name || 'Professional'}!
              </h1>
              <p className="text-gray-600 mt-1">Here's what's happening with your business today.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-6 h-6" />
                {notifications.filter(n => n.unread).length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    {notifications.filter(n => n.unread).length}
                  </span>
                )}
              </button>
              <Link to="/settings" className="btn-secondary">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-5 h-5 text-primary-600" />
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.upcomingBookings}</div>
            <div className="text-xs text-gray-600">Upcoming Bookings</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <DollarSign className="w-5 h-5 text-green-600" />
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">${stats.totalEarnings}</div>
            <div className="text-xs text-gray-600">This Month</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="text-xs text-green-500">+0.2</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.averageRating}</div>
            <div className="text-xs text-gray-600">Avg Rating</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-xs text-green-500">+12%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.totalReviews}</div>
            <div className="text-xs text-gray-600">Total Reviews</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-purple-600" />
              <span className="text-xs text-green-500">+5%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</div>
            <div className="text-xs text-gray-600">Conversion Rate</div>
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <Heart className="w-5 h-5 text-red-600" />
              <span className="text-xs text-green-500">+8%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stats.repeatCustomers}%</div>
            <div className="text-xs text-gray-600">Repeat Customers</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
              <Link to="/appointments" className="text-sm text-primary-600 hover:text-primary-500 flex items-center">
                View All <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="divide-y">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                        <Scissors className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{appointment.client}</div>
                        <div className="text-sm text-gray-600">{appointment.service}</div>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} at {appointment.time}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">${appointment.price}</div>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reviews & Notifications */}
          <div className="space-y-6">
            {/* Recent Reviews */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Recent Reviews</h2>
              </div>
              <div className="divide-y">
                {recentReviews.map((review) => (
                  <div key={review.id} className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"{review.comment}"</p>
                    <div className="text-xs text-gray-500">{review.service}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
              </div>
              <div className="divide-y">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`p-4 ${notification.unread ? 'bg-blue-50' : ''}`}>
                    <div className="flex items-start gap-3">
                      {notification.type === 'booking' && <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />}
                      {notification.type === 'review' && <Star className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />}
                      {notification.type === 'reminder' && <Bell className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />}
                      {notification.type === 'payment' && <DollarSign className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />}
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link to="/services/new" className="flex flex-col items-center p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-all">
              <Scissors className="w-8 h-8 text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Add Service</span>
            </Link>
            <Link to="/availability" className="flex flex-col items-center p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-all">
              <Calendar className="w-8 h-8 text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Set Availability</span>
            </Link>
            <Link to="/styles/new" className="flex flex-col items-center p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-all">
              <Palette className="w-8 h-8 text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Upload Style</span>
            </Link>
            <Link to="/payouts" className="flex flex-col items-center p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-all">
              <DollarSign className="w-8 h-8 text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Payouts</span>
            </Link>
            <Link to="/messages" className="flex flex-col items-center p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-all">
              <Bell className="w-8 h-8 text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Messages</span>
            </Link>
            <Link to="/analytics" className="flex flex-col items-center p-4 rounded-lg border hover:border-primary-500 hover:bg-primary-50 transition-all">
              <TrendingUp className="w-8 h-8 text-primary-600 mb-2" />
              <span className="text-sm font-medium text-gray-900">Analytics</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
