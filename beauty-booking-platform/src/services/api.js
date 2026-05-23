import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const smsService = {
  sendAppointmentReminder: async (phoneNumber, appointmentDetails) => {
    try {
      const response = await api.post('/sms/reminder', {
        phoneNumber,
        appointmentDetails,
      })
      return response.data
    } catch (error) {
      console.error('Failed to send SMS reminder:', error)
      throw error
    }
  },
  
  sendVerificationCode: async (phoneNumber) => {
    try {
      const response = await api.post('/sms/verify', { phoneNumber })
      return response.data
    } catch (error) {
      console.error('Failed to send verification code:', error)
      throw error
    }
  },
}

export const emailService = {
  sendBookingConfirmation: async (email, bookingDetails) => {
    try {
      const response = await api.post('/email/booking-confirmation', {
        email,
        bookingDetails,
      })
      return response.data
    } catch (error) {
      console.error('Failed to send booking confirmation:', error)
      throw error
    }
  },
  
  sendCancellationConfirmation: async (email, cancellationDetails) => {
    try {
      const response = await api.post('/email/cancellation', {
        email,
        cancellationDetails,
      })
      return response.data
    } catch (error) {
      console.error('Failed to send cancellation confirmation:', error)
      throw error
    }
  },
  
  sendPasswordReset: async (email) => {
    try {
      const response = await api.post('/email/password-reset', { email })
      return response.data
    } catch (error) {
      console.error('Failed to send password reset email:', error)
      throw error
    }
  },
  
  sendVerificationEmail: async (email) => {
    try {
      const response = await api.post('/email/verify', { email })
      return response.data
    } catch (error) {
      console.error('Failed to send verification email:', error)
      throw error
    }
  },
}

export default api
