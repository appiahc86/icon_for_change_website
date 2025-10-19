import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import apiService from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
    // State
    const user = ref(JSON.parse(localStorage.getItem('user')) || null)
    const token = ref(localStorage.getItem('token'))
    const isLoading = ref(false)

    // Getters
    const isAuthenticated = computed(() => !!token.value && !!user.value)

    // Actions
    const setAuth = (authData) => {
        user.value = authData.user
        token.value = authData.token
        localStorage.setItem('token', authData.token)
        localStorage.setItem('user', JSON.stringify(authData.user))

        // Set default authorization header
        apiService.defaults.headers.common['Authorization'] = `Bearer ${authData.token}`
    }

    const clearAuth = () => {
        user.value = null
        token.value = null
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        delete apiService.defaults.headers.common['Authorization']
    }

    const initializeAuth = () => {
        const storedToken = localStorage.getItem('token')
        const storedUser = localStorage.getItem('user')

        if (storedToken && storedUser) {
            try {
                token.value = storedToken
                user.value = JSON.parse(storedUser)
                apiService.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`
            } catch (error) {
                console.error('Failed to parse stored user data:', error)
                clearAuth()
            }
        }
    }


    // API Methods
    //Login to Your account
    const login = async (email, password) => {
        isLoading.value = true
        try {
            const response = await apiService.post('/admin/login', {
                email,
                password,
            })

            // Extract user data based on user type
            const userData = response.data.data.user

            setAuth({
                user: { ...userData },
                token: response.data.data.token
            })

            return response.data
        } finally {
            isLoading.value = false
        }
    }


    return {
        // State
        user,
        token,
        isLoading,

        // Getters
        isAuthenticated,

        // Actions
        setAuth,
        clearAuth,
        initializeAuth,

        // API Methods
        login,

    }
})