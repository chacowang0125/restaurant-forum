<template>
  <div class="container py-5">
		<NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
		<hr>
		<div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
				<NewestRestaurants :restaurants="restaurants"/>
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
				<NewestComments :comments="comments"/>
        <h3>最新評論</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'
import NewestRestaurants from '../components/NewestRestaurants.vue'
import NewestComments from '../components/NewestComments.vue'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Columbus Schoen",
            "tel": "1-631-662-0705",
            "address": "300 Romaine Road",
            "opening_hours": "08:00",
            "description": "Est magni sed temporibus. Inventore est eum amet voluptatem commodi inventore. Quia quos veniam et eos vero aut deserunt. Sapiente aut et sequi. Ut iusto debitis assumenda qui perferendis.",
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
            }
        },
        {
            "id": 2,
            "name": "Hillard Lehner",
            "tel": "233-678-6830",
            "address": "4393 Karli Mall",
            "opening_hours": "08:00",
            "description": "Rerum eum et aut sint est. Fuga tempore animi repellendus. Est molestiae nobis repellendus molestiae labore reiciendis.",
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
            }
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
            }
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
            }
        },
        {
            "id": 5,
            "name": "Elian Mraz",
            "tel": "980.907.2675 x325",
            "address": "702 Schuster Cliff",
            "opening_hours": "08:00",
            "description": "Itaque nam sequi dolores aliquid est fugiat eaque ullam dolorem. Illum et ex. Voluptatem provident magni eaque maxime neque.",
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
            }
        },
        {
            "id": 6,
            "name": "Easton Tremblay",
            "tel": "1-159-661-6952",
            "address": "9179 Chanel Knoll",
            "opening_hours": "08:00",
            "description": "Neque unde nemo. Perspiciatis distinctio ut id laboriosam est deleniti magni. Ut repudiandae in. Perspiciatis magnam vitae deleniti ut doloribus voluptas.",
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
            }
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
            }
        },
        {
            "id": 8,
            "name": "Roderick Predovic III",
            "tel": "(044) 534-3035",
            "address": "516 Morton Mills",
            "opening_hours": "08:00",
            "description": "Asperiores voluptates provident dignissimos deserunt iusto. Nam adipisci iure. Est quos eaque vel possimus distinctio fugiat ipsam. Odit voluptatibus sit et. Illo nesciunt provident saepe dolor quo ipsam ea molestiae.\n \rAut veniam animi quis eum et quisquam maiores voluptate et. Similique iure molestias. Accusantium accusamus neque.\n \rIncidunt commodi rem quis in iure. Repellendus quas iste amet et eveniet asperiores dolores. Quibusdam impedit repellat voluptas fugit tempora quae nostrum similique. Amet odit voluptatem et facilis. Quia eos ut ipsum. Nostrum occaecati explicabo totam occaecati fuga similique cum recusandae est.",
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
            }
        },
        {
            "id": 9,
            "name": "Sofia Wisozk",
            "tel": "(115) 819-6111",
            "address": "926 Hauck Drive",
            "opening_hours": "08:00",
            "description": "Laudantium harum quia architecto consequatur quo. Eos numquam enim velit perferendis deleniti aut dolore consectetur. Tempora fugit nostrum.",
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
            }
        },
        {
            "id": 10,
            "name": "Jasper Littel",
            "tel": "041.506.5249 x614",
            "address": "25140 Geo Shoal",
            "opening_hours": "08:00",
            "description": "Magni voluptatem aut temporibus mollitia numquam quaerat nihil fugiat.",
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
            }
        }
    ],
    "comments": [
        {
            "id": 21,
            "text": "Ad exercitationem fuga dolor blanditiis odio qui.",
            "UserId": 1,
            "RestaurantId": 21,
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
            },
            "Restaurant": {
                "id": 21,
                "name": "Zora Leffler",
                "tel": "447-489-4136",
                "address": "796 Beer Ways",
                "opening_hours": "08:00",
                "description": "laudantium enim voluptates",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.5272042326575",
                "viewCounts": 0,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 60,
            "text": "Esse modi doloribus sit.",
            "UserId": 1,
            "RestaurantId": 10,
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
            },
            "Restaurant": {
                "id": 10,
                "name": "Jasper Littel",
                "tel": "041.506.5249 x614",
                "address": "25140 Geo Shoal",
                "opening_hours": "08:00",
                "description": "Magni voluptatem aut temporibus mollitia numquam quaerat nihil fugiat.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.43219543922217",
                "viewCounts": 0,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 71,
            "text": "Ut ad nostrum voluptas sunt exercitationem assumenda libero quisquam at.",
            "UserId": 1,
            "RestaurantId": 21,
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
            },
            "Restaurant": {
                "id": 21,
                "name": "Zora Leffler",
                "tel": "447-489-4136",
                "address": "796 Beer Ways",
                "opening_hours": "08:00",
                "description": "laudantium enim voluptates",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=89.5272042326575",
                "viewCounts": 0,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 98,
            "text": "Ut libero est voluptas sint facere aspernatur eos commodi.",
            "UserId": 1,
            "RestaurantId": 48,
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
            },
            "Restaurant": {
                "id": 48,
                "name": "Odie Zboncak",
                "tel": "993.822.3419 x80583",
                "address": "9883 Ewell Shores",
                "opening_hours": "08:00",
                "description": "Totam laudantium nostrum. In dolor aut rerum et quod incidunt. Voluptatem enim qui voluptatem repellendus suscipit voluptatem. Vel placeat porro fugit amet in quisquam et eum.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=71.21302779328482",
                "viewCounts": 0,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 123,
            "text": "Minima occaecati id praesentium quaerat nobis ut eveniet.",
            "UserId": 1,
            "RestaurantId": 23,
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
            },
            "Restaurant": {
                "id": 23,
                "name": "Cali Gottlieb",
                "tel": "(420) 462-6820",
                "address": "76657 Treutel Corners",
                "opening_hours": "08:00",
                "description": "eos",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.9368646912617535",
                "viewCounts": 0,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z",
                "CategoryId": 2
            }
        },
        {
            "id": 142,
            "text": "Est laborum nostrum repellat necessitatibus excepturi.",
            "UserId": 1,
            "RestaurantId": 42,
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
            },
            "Restaurant": {
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
                "CategoryId": 3
            }
        },
        {
            "id": 10,
            "text": "Quia labore nulla est sunt pariatur et expedita.",
            "UserId": 2,
            "RestaurantId": 10,
            "createdAt": "2021-11-08T12:56:59.000Z",
            "updatedAt": "2021-11-08T12:56:59.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$rFJCQ6xmtFtg7IPyAWndweMwucZVlJtcQ31ajqY91xkdXTVAWYk5S",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "Restaurant": {
                "id": 10,
                "name": "Jasper Littel",
                "tel": "041.506.5249 x614",
                "address": "25140 Geo Shoal",
                "opening_hours": "08:00",
                "description": "Magni voluptatem aut temporibus mollitia numquam quaerat nihil fugiat.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=74.43219543922217",
                "viewCounts": 0,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z",
                "CategoryId": 4
            }
        },
        {
            "id": 34,
            "text": "Nisi totam inventore deserunt corporis.",
            "UserId": 2,
            "RestaurantId": 34,
            "createdAt": "2021-11-08T12:56:59.000Z",
            "updatedAt": "2021-11-08T12:56:59.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$rFJCQ6xmtFtg7IPyAWndweMwucZVlJtcQ31ajqY91xkdXTVAWYk5S",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "Restaurant": {
                "id": 34,
                "name": "Darrell Stehr",
                "tel": "(132) 336-6149 x7302",
                "address": "2960 Mafalda Orchard",
                "opening_hours": "08:00",
                "description": "Tempore enim nam qui.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.269603026305887",
                "viewCounts": 0,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 49,
            "text": "Possimus nihil numquam fuga voluptatem eius.",
            "UserId": 2,
            "RestaurantId": 49,
            "createdAt": "2021-11-08T12:56:59.000Z",
            "updatedAt": "2021-11-08T12:56:59.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$rFJCQ6xmtFtg7IPyAWndweMwucZVlJtcQ31ajqY91xkdXTVAWYk5S",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "Restaurant": {
                "id": 49,
                "name": "Soledad Goyette PhD",
                "tel": "1-761-424-6898",
                "address": "006 Gregoria Flats",
                "opening_hours": "08:00",
                "description": "Culpa laudantium numquam et tenetur molestiae. Ullam nulla iure voluptatem quidem. Ea aut aut omnis voluptas ipsum animi neque aliquam.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=87.03217757282154",
                "viewCounts": 0,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z",
                "CategoryId": 3
            }
        },
        {
            "id": 95,
            "text": "Id ut ut sint qui doloribus dignissimos.",
            "UserId": 2,
            "RestaurantId": 45,
            "createdAt": "2021-11-08T12:56:59.000Z",
            "updatedAt": "2021-11-08T12:56:59.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$rFJCQ6xmtFtg7IPyAWndweMwucZVlJtcQ31ajqY91xkdXTVAWYk5S",
                "isAdmin": false,
                "image": null,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z"
            },
            "Restaurant": {
                "id": 45,
                "name": "Joana Rath",
                "tel": "(691) 532-8606",
                "address": "3658 Halvorson Ferry",
                "opening_hours": "08:00",
                "description": "Voluptas quis vero perspiciatis omnis nam vitae placeat esse rem.",
                "image": "https://loremflickr.com/320/240/restaurant,food/?random=81.8013943429139",
                "viewCounts": 0,
                "createdAt": "2021-11-08T12:56:58.000Z",
                "updatedAt": "2021-11-08T12:56:58.000Z",
                "CategoryId": 3
            }
        }
    ]
}

export default ({
	components: {
		NavTabs,
		NewestRestaurants,
		NewestComments
	},
	data() {
		return{
			restaurants: [],
			comments: []
		}
	},
	created() {
		this.fetchFeeds()
	},
	methods: {
		fetchFeeds() {
			const {restaurants, comments} = dummyData
			this.restaurants = restaurants
			this.comments = comments.filter(comment => comment.Restaurant)
		}
	}
})
</script>