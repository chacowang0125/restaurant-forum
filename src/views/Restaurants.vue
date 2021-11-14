<template>
  <div class="container py-5">
		<NavTabs />
		<RestaurantNavPills :categories="categories"/>

    <div class="row">
			<RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant"/>

    </div>

		<RestaurantsPagination
		:current-page="currentPage"
    :total-page="totalPage"
    :category-id="categoryId"
    :previous-page="previousPage"
    :next-page="nextPage"
		/>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import RestaurantCard from '../components/RestaurantCard.vue'
import RestaurantNavPills from '../components/RestaurantsNavPills.vue'
import RestaurantsPagination from '../components/RestaurantsPagination.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Columbus Schoen",
            "tel": "1-631-662-0705",
            "address": "300 Romaine Road",
            "opening_hours": "08:00",
            "description": "Est magni sed temporibus. Inventore est eum amet v",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=32.61512654779308",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Hillard Lehner",
            "tel": "233-678-6830",
            "address": "4393 Karli Mall",
            "opening_hours": "08:00",
            "description": "Rerum eum et aut sint est. Fuga tempore animi repe",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=11.627681473630048",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Anabelle Kozey",
            "tel": "(916) 961-6184 x5240",
            "address": "7514 Russel Route",
            "opening_hours": "08:00",
            "description": "Vel at aspernatur sed et voluptatum deserunt.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.270331816974802",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Carlo Wisoky",
            "tel": "196.979.1950 x16071",
            "address": "653 Rutherford Island",
            "opening_hours": "08:00",
            "description": "explicabo",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=7.5762014823058665",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Elian Mraz",
            "tel": "980.907.2675 x325",
            "address": "702 Schuster Cliff",
            "opening_hours": "08:00",
            "description": "Itaque nam sequi dolores aliquid est fugiat eaque ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.96356233231065",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Easton Tremblay",
            "tel": "1-159-661-6952",
            "address": "9179 Chanel Knoll",
            "opening_hours": "08:00",
            "description": "Neque unde nemo. Perspiciatis distinctio ut id lab",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=17.080636620224787",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Tremaine Dibbert",
            "tel": "135.156.9900",
            "address": "67214 Derek Lake",
            "opening_hours": "08:00",
            "description": "tenetur laboriosam beatae",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.948950961644364",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Roderick Predovic III",
            "tel": "(044) 534-3035",
            "address": "516 Morton Mills",
            "opening_hours": "08:00",
            "description": "Asperiores voluptates provident dignissimos deseru",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.18668242244095357",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Sofia Wisozk",
            "tel": "(115) 819-6111",
            "address": "926 Hauck Drive",
            "opening_hours": "08:00",
            "description": "Laudantium harum quia architecto consequatur quo. ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.239806439680876",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Jasper Littel",
            "tel": "041.506.5249 x614",
            "address": "25140 Geo Shoal",
            "opening_hours": "08:00",
            "description": "Magni voluptatem aut temporibus mollitia numquam q",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.43219543922217",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default ({
	components: {
		NavTabs,
		RestaurantCard,
		RestaurantNavPills,
		RestaurantsPagination
	},
	data() {
		return {
			restaurants:[],
			categories:[],
			categoryId:-1,
			currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
		}
	},
	created(){
		this.fetchRestaurant()
	},
	methods:{
		fetchRestaurant() {
			const {restaurants,categories,categoryId,page,
    totalPage,prev,next} = dummyData
		this.restaurants = restaurants
		this.categories = categories
		this.categoryId = categoryId
		this.currentpage = page
		this.totalPage = totalPage
		this.previousPage = prev
		this.nextPage = next
		}
	}
})
</script>
