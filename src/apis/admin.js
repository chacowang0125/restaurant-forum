import { apiHelper } from './../utils/helpers'

export default {
    categories: {
        get() {
            return apiHelper.get('/admin/categories')
        },
        create(data) {
            return apiHelper.post('/admin/categories', data)
        },
        delete(id) {
            return apiHelper.delete(`/admin/categories/${id}`)
        },
        update({ categoryId, name }) {
            return apiHelper.put(`admin/categories/${categoryId}`, { name })
        }
    },
    restaurants: {
        create({ formData }) {
            return apiHelper.post('/admin/restaurants', formData)
        },
        get() {
            return apiHelper.get('/admin/restaurants', )
        },
        getDetail({ restaurantId }) {
            return apiHelper.get(`/admin/restaurants/${restaurantId}`, )
        },
        delete(id) {
            return apiHelper.delete(`/admin/restaurants/${ id }`, )
        },
        update({ restaurantId, formData }) {
            return apiHelper.put(`/admin/restaurants/${ restaurantId }`, formData, )
        }
    },
    users: {
        get() {
            return apiHelper.get('/admin/users')
        },
        update({ userId, isAdmin }) {
            return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
        }
    }
}