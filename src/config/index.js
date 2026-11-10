import axios from 'axios';

// Create axios instance
const apiService = axios.create({
    baseURL: 'https://server.iconofchangegh.org',
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


        return config
    },
    (error) => {
        document.body.style.cursor = 'default'
        return Promise.reject(error)
    }
)


export default apiService;
