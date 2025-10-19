import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import apiService from '@/services/api'

export const useAdminStore = defineStore('admin', () => {
    // State
    const isLoading = ref(false)

    // API Methods
    //Get donations
    const getDonations = async (params) => {
        isLoading.value = true
        try {
            const response = await apiService.get('/admin/donations', {
                params: {...params}
            })

            return response.data
        } finally {
            isLoading.value = false
        }
    }

    //Get donation stats
    const getStats = async () => {
        isLoading.value = true
        try {
            const response = await apiService.get('/admin/donations/stats')

            return response.data
        } finally {
            isLoading.value = false
        }
    }


    return {
        // State
        isLoading,



        // Actions


        // API Methods
        getStats,
        getDonations

    }
})