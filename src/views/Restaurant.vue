<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
		<!-- 餐廳詳細資料 RestaurantDetail -->
		<RestaurantDetail
		:initial-restaurant="restaurant"/>
    <hr>
		<!-- 餐廳評論 RestaurantComments -->
		<RestaurantComments :restaurant-comments="restaurantComments"
		@after-delete-comment="afterDeleteComment"/>
    <!-- 新增評論 CreateComment -->
		<CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment"/>
  </div>
</template>

<script>
import RestaurantDetail from '../components/RestaurantDetail.vue'
import RestaurantComments from '../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'

const dummyData = {
    "restaurant": {
        "id": 1,
        "name": "Columbus Schoen",
        "tel": "1-631-662-0705",
        "address": "300 Romaine Road",
        "opening_hours": "08:00",
        "description": "Est magni sed temporibus. Inventore est eum amet voluptatem commodi inventore. Quia quos veniam et eos vero aut deserunt. Sapiente aut et sequi. Ut iusto debitis assumenda qui perferendis.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.61512654779308",
        "viewCounts": 1,
        "createdAt": "2021-11-08T12:56:58.000Z",
        "updatedAt": "2021-11-12T09:58:26.085Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z"
        },
        "FavoritedUsers": [],
        "LikedUsers": [],
        "Comments": [
            {
                "id": 51,
                "text": "Aut aut dignissimos ea.",
                "UserId": 1,
                "RestaurantId": 1,
                "createdAt": "2021-11-08T12:56:59.000Z",
                "updatedAt": "2021-11-08T12:56:59.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$qG14L8pzKmxmgVZvdm2ouuVMrJG7n8H78RBY4RN9PEMxT0PTpDsU.",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2021-11-08T12:56:58.000Z",
                    "updatedAt": "2021-11-08T12:56:58.000Z"
                }
            },
            {
                "id": 1,
                "text": "Maxime impedit sit.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2021-11-08T12:56:59.000Z",
                "updatedAt": "2021-11-08T12:56:59.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$XHN9k/3jvPAUjcsKYBvDmOxvlxAumAk0qrACPCUZDrKGZf8t47CaG",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-11-08T12:56:58.000Z",
                    "updatedAt": "2021-11-08T12:56:58.000Z"
                }
            },
            {
                "id": 101,
                "text": "Sint voluptatibus sunt ad mollitia ratione.",
                "UserId": 3,
                "RestaurantId": 1,
                "createdAt": "2021-11-08T12:56:59.000Z",
                "updatedAt": "2021-11-08T12:56:59.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$XHN9k/3jvPAUjcsKYBvDmOxvlxAumAk0qrACPCUZDrKGZf8t47CaG",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-11-08T12:56:58.000Z",
                    "updatedAt": "2021-11-08T12:56:58.000Z"
                }
            }
        ]
    },
    "isFavorited": false,
    "isLiked": false
}

const dummyUser={
	currentUser:{
    "id": 1,
    "name": "root",
    "email": "root@example.com",
    "image": null,
    "isAdmin": true
	},
	isAuthenticated: true
}

export default({
	components:{
		RestaurantDetail,
		RestaurantComments,
		CreateComment
	},
	data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
			currentUser: dummyUser.currentUser,
      restaurantComments: []
    }
  },
	created () {
		const { id } = this.$route.params
		this.fetchRestaurant(id)
	},
	methods: {
		fetchRestaurant(restaurantId){
			console.log('fetchRestaurant id: ', restaurantId)
			const { restaurant , isFavorited , isLiked } = dummyData
			const { id, name , Category , image , opening_hours , tel , address , description , Comments} = restaurant

			this.restaurant = {
				id,
        name,
        categoryName: Category.name? Category.name : '未分類',
        image,
        openingHours: opening_hours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
			}

			this.restaurantComments = Comments
		},
		afterDeleteComment(commentId){
			this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
		},
		afterCreateComment(payload){
			const { commentId, restaurantId, text } = payload
			this.restaurantComments.push({
				id: commentId,
				RestaurantId: restaurantId,
				User: {
					id: this.currentUser.id,
					name: this.currentUser.name
				},
				text,
				createdAt: new Date()
			})
		}
	}
})
</script>
