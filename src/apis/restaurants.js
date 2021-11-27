import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
    getRestaurant({ restaurantId }) {
        return apiHelper.get(`/restaurants/${restaurantId}`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    getRestaurants({ page, categoryId }) {
        const searchParams = new URLSearchParams({ page, categoryId })
        return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    getFeeds() {
        return apiHelper.get('/restaurants/feeds', {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    getTopRestaurants() {
        return apiHelper.get('/restaurants/top', {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    createComment({ restaurantId, text }) {
        return apiHelper.post('/comments', { restaurantId, text }, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    },
    deleteComment({ commentId }) {
        return apiHelper.delete(`/comments/${commentId}`, {
            headers: { Authorization: `Bearer ${getToken()}` }
        })
    }
}