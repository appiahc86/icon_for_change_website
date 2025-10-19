import axios from 'axios'
import { useToast } from 'vue-toastification'
import router from '@/router'

// Create axios instance
const apiService = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

// Request interceptor
apiService.interceptors.request.use(
    (config) => {
        // Add auth token if available
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        // Add loading state
        document.body.style.cursor = 'wait'

        return config
    },
    (error) => {
        document.body.style.cursor = 'default'
        return Promise.reject(error)
    }
)

// Response interceptor
apiService.interceptors.response.use(
    (response) => {
        document.body.style.cursor = 'default'
        return response
    },
    (error) => {
        document.body.style.cursor = 'default'

        const toast = useToast()

        // Handle different error scenarios
        if (error.response) {
            const { status, data } = error.response

            switch (status) {
                case 400:
                    // Validation errors or bad requests
                    if (data.errors && Array.isArray(data.errors)) {
                        // Handle validation errors from express-validator or Joi
                        const errorMessages = data.errors.map(err =>
                            typeof err === 'string' ? err : err.message || err.msg
                        )
                        toast.error(errorMessages.join(', '))
                    }
                    else {
                        toast.error(data.message || 'Bad request')
                    }
                    break

                case 401:
                    // Unauthorized - clear auth and redirect to login
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    toast.error('Invalid Credentials Or Session expired. Please login again.')
                    router.push('/admin/login')
                    break

                case 403:
                    // Forbidden
                    toast.error(data.message || 'Access denied')
                    break

                case 404:
                    // Not found
                    toast.error(data.message || 'Resource not found')
                    break

                case 409:
                    // Conflict (e.g., phone number already registered)
                    toast.error(data.message || 'Conflict occurred')
                    break

                case 422:
                    // Unprocessable entity
                    if (data.errors) {
                        const errorMessages = Object.values(data.errors).flat()
                        toast.error(errorMessages.join(', '))
                    } else {
                        toast.error(data.message || 'Validation failed')
                    }
                    break

                case 429:
                    // Too many requests
                    toast.error('Too many requests. Please try again later.')
                    break

                case 500:
                    // Server error
                    toast.error('Server error. Please try again later.')
                    break

                default:
                    toast.error(data.message || 'An error occurred')
            }
        } else if (error.request) {
            // Network error
            toast.error('Network error. Please check your connection.')
        } else {
            // Something else happened
            toast.error('An unexpected error occurred')
        }

        return Promise.reject(error)
    }
)

// Export default instance
export default apiService