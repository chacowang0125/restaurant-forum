<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
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
        "updatedAt": "2021-11-12T09:58:26.000Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z"
        },
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
    }
}

export default({
	data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
				viewCounts: 0,
				commentsLength: 0,
      },
    }
  },
	methods:{
		fetchRestaurant(restaurantId){
			console.log('fetchRestaurant id: ', restaurantId)
			const { id, name , Category , viewCounts , Comments} = dummyData.restaurant

			this.restaurant = {
				id,
        name,
				viewCounts,
        categoryName: Category.name? Category.name : '未分類',
        commentsLength: Comments.length
			}
		}
	},
	created () {
		const { id } = this.$route.params
		this.fetchRestaurant(id)
	}
})
</script>
