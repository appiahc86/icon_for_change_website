import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import apiService from '@/services/api'

export const useHomeStore = defineStore('home', () => {
    // State
    const isLoading = ref(false)

    // API Methods
    //Get countries
    const getCountries = async () => {
        isLoading.value = true
        try {
            const response = await apiService.get('/countries')

            return response.data
        } finally {
            isLoading.value = false
        }
    }

    //Initialize donation
    const initializeDonation = async (payload) => {
        isLoading.value = true
        try {
            const response = await apiService.post('/donations/initialize', {
                ...payload
            })

            return response.data
        } finally {
            isLoading.value = false
        }
    }


    //Verify Donation
    const verifyDonation = async (reference) => {
        isLoading.value = true
        try {
            const response = await apiService.get(`/donations/verify/${reference}`)

            return response.data
        } finally {
            isLoading.value = false
        }
    }


    return {
        // State
        isLoading,



        // Actions
        getCountries,
        initializeDonation,
        verifyDonation

    }
})