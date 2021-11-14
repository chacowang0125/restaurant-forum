<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
			v-for="restaurant in restaurants" :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
							{{restaurant.name}}
            </h5>
            <span class="badge badge-secondary">收藏數：0</span>
            <p class="card-text">
              {{restaurant.description}}
            </p>
            <router-link
              :to="{ name: 'restaurant-dashboard' , params: { id : restaurant.id }}"
              class="btn btn-primary mr-2"
            >Show</router-link>

            <button
              type="button"
              class="btn btn-danger mr-2"
							v-if="restaurant.isFavorited"
							@click.stop.prevent="deleteFavorite(restaurant.id)"
            >
              移除最愛
            </button>
            <button
              type="button"
              class="btn btn-primary"
							v-else
							@click.stop.prevent="addFavorite(restaurant.id)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 50,
            "name": "Nickolas Auer",
            "tel": "1-123-103-9955 x95120",
            "address": "538 Lubowitz Village",
            "opening_hours": "08:00",
            "description": "Eos quaerat eius qui molestiae odio ex reprehender",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.49994034503365",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 49,
            "name": "Soledad Goyette PhD",
            "tel": "1-761-424-6898",
            "address": "006 Gregoria Flats",
            "opening_hours": "08:00",
            "description": "Culpa laudantium numquam et tenetur molestiae. Ull",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.03217757282154",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Odie Zboncak",
            "tel": "993.822.3419 x80583",
            "address": "9883 Ewell Shores",
            "opening_hours": "08:00",
            "description": "Totam laudantium nostrum. In dolor aut rerum et qu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.21302779328482",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 47,
            "name": "Kendall Hackett",
            "tel": "(585) 438-3735 x3626",
            "address": "995 Kreiger Lakes",
            "opening_hours": "08:00",
            "description": "labore laboriosam deserunt",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.07589163329406",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 46,
            "name": "Gene Schuster PhD",
            "tel": "928-662-3622",
            "address": "5200 Maximus Lodge",
            "opening_hours": "08:00",
            "description": "Rerum fugiat veritatis culpa animi et ducimus et n",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=1.4964492087096382",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 45,
            "name": "Joana Rath",
            "tel": "(691) 532-8606",
            "address": "3658 Halvorson Ferry",
            "opening_hours": "08:00",
            "description": "Voluptas quis vero perspiciatis omnis nam vitae pl",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.8013943429139",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 44,
            "name": "Shayna Kutch DVM",
            "tel": "1-930-345-4219 x940",
            "address": "0288 Lydia Drive",
            "opening_hours": "08:00",
            "description": "quia",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.297659468613812",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 43,
            "name": "Jacinthe Schuster",
            "tel": "1-459-882-2709 x19371",
            "address": "95723 Bogan Lodge",
            "opening_hours": "08:00",
            "description": "quisquam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=36.74444426852725",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 42,
            "name": "Tamara Emmerich",
            "tel": "261.376.9899 x2916",
            "address": "4545 Hyatt Pass",
            "opening_hours": "08:00",
            "description": "neque",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=25.103229234079972",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 3,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 41,
            "name": "Oran Russel I",
            "tel": "(821) 689-9931 x87553",
            "address": "1881 Hagenes Falls",
            "opening_hours": "08:00",
            "description": "tempora exercitationem maiores",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.0502288271763",
            "viewCounts": 0,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}


export default ({
	components: {
		NavTabs
	},
	data(){
		return{
			restaurants:[]
		}
	},
	methods:{
		fetchRestaurant(){
			this.restaurants = dummyData.restaurants
		},
		addFavorite(restaurantId){
			console.log(restaurantId)
			this.restaurants = this.restaurants.map(restaurant => {
				if (restaurant.id !== restaurantId){
					return restaurant
				}
				return{
					...restaurant,
					FavoriteCount: restaurant.FavoriteCount + 1,
					isFavorited: true
				}
			})
		},
		deleteFavorite(restaurantId){
			console.log(restaurantId)
				this.restaurants = this.restaurants.map(restaurant => {
				if (restaurant.id !== restaurantId){
					return restaurant
				}
				return{
					...restaurant,
					FavoriteCount: restaurant.FavoriteCount - 1,
					isFavorited: false
				}
			})
		}
	},
	created(){
		this.fetchRestaurant()
	}
})
</script>
