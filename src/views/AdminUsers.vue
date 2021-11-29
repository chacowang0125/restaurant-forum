<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
		<Spinner v-if="isLoading"/>
    <table v-else class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? "admin" : "user" }}</td>
          <td>
            <button
              v-if="user.id !== currentUserId"
              v-show="user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>
            <button
              v-show="!user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="
                toggleUserRole({ userId: user.id, isAdmin: user.isAdmin })
              "
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav.vue";
import Spinner from "../components/Spinner.vue"
import adminAPIS from "./../apis/admin";
import { Toast } from "./../utils/helpers";

const dummyUser = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    password: "$2a$10$qG14L8pzKmxmgVZvdm2ouuVMrJG7n8H78RBY4RN9PEMxT0PTpDsU.",
    isAdmin: true,
    image: null,
    createdAt: "2021-11-08T12:56:58.000Z",
    updatedAt: "2021-11-08T12:56:58.000Z",
    Comments: [
      {
        id: 11,
        text: "Tempora eius maxime reiciendis et est corporis.",
        UserId: 1,
        RestaurantId: 11,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 11,
          name: "Emilio Ruecker",
          tel: "150-403-3024",
          address: "532 Lindsey Street",
          opening_hours: "08:00",
          description:
            "Rem cumque et cumque nihil et asperiores aut. A minus voluptas. Vel reiciendis et. Dicta voluptates eaque dolorem culpa unde aut. Delectus veritatis aut et dolor. Quasi ut ipsam rerum consequatur ratione inventore.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=0.8112434132323099",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 19,
        text: "Facere sit sint placeat quae ut.",
        UserId: 1,
        RestaurantId: 19,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 19,
          name: "Geovany Fritsch",
          tel: "(441) 328-4335 x31968",
          address: "5892 Tobin Lake",
          opening_hours: "08:00",
          description: "Temporibus fugit enim quia.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=28.59752129770994",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 21,
        text: "Ad exercitationem fuga dolor blanditiis odio qui.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 21,
          name: "Zora Leffler",
          tel: "447-489-4136",
          address: "796 Beer Ways",
          opening_hours: "08:00",
          description: "laudantium enim voluptates",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=89.5272042326575",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 22,
        text: "Est iure repellendus nam maxime.",
        UserId: 1,
        RestaurantId: 22,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 22,
          name: "Ewell Champlin",
          tel: "386-845-2305 x7298",
          address: "496 O'Conner Crescent",
          opening_hours: "08:00",
          description: "sequi molestias ex",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.28311903714239",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 23,
        text: "Ratione autem eaque.",
        UserId: 1,
        RestaurantId: 23,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 23,
          name: "Cali Gottlieb",
          tel: "(420) 462-6820",
          address: "76657 Treutel Corners",
          opening_hours: "08:00",
          description: "eos",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=2.9368646912617535",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 26,
        text: "Aut quas qui esse molestiae aut quibusdam sunt qui quidem.",
        UserId: 1,
        RestaurantId: 26,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 26,
          name: "Mrs. Ulises Runte",
          tel: "1-792-767-1545 x42561",
          address: "05793 Howell Extension",
          opening_hours: "08:00",
          description:
            "Illum a praesentium porro reiciendis aliquid asperiores quae. Excepturi quis doloribus molestias. Quae maxime accusantium qui quae vero provident placeat. Odio et recusandae ex ducimus dignissimos nihil doloribus aut aut. Et et quia reiciendis optio sed quo. Eligendi facilis molestias quo voluptas dolor nulla.\n \rPraesentium similique at eius consectetur. Consectetur blanditiis est et rem odit. Tempora voluptatem quod facere cum et quidem quia distinctio sint.\n \rIpsa non eveniet odio dolorem vel tempore labore consequatur tempore. Minus voluptatum qui. Quo architecto nemo amet ut iure. Omnis ipsam quia cum est ut nesciunt.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=70.24816501038258",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 44,
        text: "Ex omnis qui asperiores.",
        UserId: 1,
        RestaurantId: 44,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 44,
          name: "Shayna Kutch DVM",
          tel: "1-930-345-4219 x940",
          address: "0288 Lydia Drive",
          opening_hours: "08:00",
          description: "quia",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=15.297659468613812",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 47,
        text: "Veniam cum quis distinctio laborum et sed.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 47,
          name: "Kendall Hackett",
          tel: "(585) 438-3735 x3626",
          address: "995 Kreiger Lakes",
          opening_hours: "08:00",
          description: "labore laboriosam deserunt",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=66.07589163329406",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 50,
        text: "Tempore molestias rerum est odit corrupti.",
        UserId: 1,
        RestaurantId: 50,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 50,
          name: "Nickolas Auer",
          tel: "1-123-103-9955 x95120",
          address: "538 Lubowitz Village",
          opening_hours: "08:00",
          description:
            "Eos quaerat eius qui molestiae odio ex reprehenderit possimus. Nam perspiciatis sit commodi. Repellendus neque quia et nam tenetur animi est praesentium.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=81.49994034503365",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 51,
        text: "Aut aut dignissimos ea.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 1,
          name: "Columbus Schoen",
          tel: "1-631-662-0705",
          address: "300 Romaine Road",
          opening_hours: "08:00",
          description:
            "Est magni sed temporibus. Inventore est eum amet voluptatem commodi inventore. Quia quos veniam et eos vero aut deserunt. Sapiente aut et sequi. Ut iusto debitis assumenda qui perferendis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=32.61512654779308",
          viewCounts: 1,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-12T09:58:26.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 60,
        text: "Esse modi doloribus sit.",
        UserId: 1,
        RestaurantId: 10,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 10,
          name: "Jasper Littel",
          tel: "041.506.5249 x614",
          address: "25140 Geo Shoal",
          opening_hours: "08:00",
          description:
            "Magni voluptatem aut temporibus mollitia numquam quaerat nihil fugiat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=74.43219543922217",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 62,
        text: "Sed consectetur non architecto nisi odit qui corrupti voluptatem.",
        UserId: 1,
        RestaurantId: 12,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 12,
          name: "Ettie Crona",
          tel: "565.045.9676 x31277",
          address: "681 Derek Run",
          opening_hours: "08:00",
          description: "unde non ratione",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=2.552253665432924",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 63,
        text: "Amet quo necessitatibus deleniti et maxime voluptas praesentium qui est.",
        UserId: 1,
        RestaurantId: 13,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 13,
          name: "Haylee King",
          tel: "200.879.3561 x2801",
          address: "6107 Abbott Roads",
          opening_hours: "08:00",
          description:
            "Quia hic dolor exercitationem. Iure ipsum ab. Iste illum error adipisci velit voluptatem neque.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=45.305700043341204",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 65,
        text: "Sapiente est aperiam sint.",
        UserId: 1,
        RestaurantId: 15,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 15,
          name: "Retta Mitchell",
          tel: "589-201-8499 x60097",
          address: "2640 Keeling Unions",
          opening_hours: "08:00",
          description: "Est aspernatur quaerat dolorem ut et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=23.85630793997946",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 66,
        text: "Eos voluptas aut deserunt reiciendis eos maxime sed doloremque.",
        UserId: 1,
        RestaurantId: 16,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 16,
          name: "Garnett Jaskolski Sr.",
          tel: "639-136-0931",
          address: "28560 Dickens Point",
          opening_hours: "08:00",
          description:
            "Quaerat dolorem autem deserunt eligendi in aut nihil numquam commodi. Sunt veritatis ut hic. Molestiae at fuga. Quam aut omnis vel.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=37.28244954155506",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 67,
        text: "Commodi asperiores aliquam voluptas perspiciatis repellendus cum.",
        UserId: 1,
        RestaurantId: 17,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 17,
          name: "Amira Jacobs II",
          tel: "062.008.0104 x109",
          address: "07753 Stuart Loaf",
          opening_hours: "08:00",
          description:
            "Et quis est eos cumque fuga cupiditate odit nihil. Sequi similique perferendis facilis quasi doloremque voluptatem inventore. Dolore voluptatem debitis. Occaecati dolor nam nesciunt. Enim reiciendis quo quidem doloribus consectetur.\n \rUt sint culpa qui. Maxime fugit iusto. Veritatis qui iste qui. Hic voluptatem dolores distinctio.\n \rEst soluta voluptas asperiores omnis est cum fugiat consequuntur. Et nesciunt animi perspiciatis exercitationem occaecati. Unde doloribus modi repellat qui qui tenetur quis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.04832958294641",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 68,
        text: "Et mollitia et perferendis sunt aspernatur ducimus laborum vitae officia.",
        UserId: 1,
        RestaurantId: 18,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 18,
          name: "Gideon Daniel",
          tel: "1-903-149-3913 x1346",
          address: "6787 Rau Drive",
          opening_hours: "08:00",
          description: "voluptates expedita molestiae",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=83.85267500312763",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 70,
        text: "Et consequatur dolores sed rerum optio.",
        UserId: 1,
        RestaurantId: 20,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 20,
          name: "Sofia Upton",
          tel: "1-053-217-3452",
          address: "889 Corkery Common",
          opening_hours: "08:00",
          description:
            "Ex ducimus facere ut qui. Est voluptatem voluptate placeat accusamus. Omnis autem aut. Ea quaerat accusantium expedita aut. Recusandae nemo praesentium voluptatibus ea autem tempora in.\n \rBeatae repellat qui voluptatibus cumque molestiae officiis ducimus quia nostrum. Eaque voluptate quibusdam porro. Inventore assumenda ut magnam aut excepturi ducimus omnis. Corrupti amet similique tempore aut voluptates.\n \rVoluptates sit dolorem doloribus reprehenderit ad. Quia voluptatibus officiis eum dolorem et alias. Sapiente qui aut eum voluptas inventore id. Vero tempore dolores ex distinctio.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=74.42696737564209",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 71,
        text: "Ut ad nostrum voluptas sunt exercitationem assumenda libero quisquam at.",
        UserId: 1,
        RestaurantId: 21,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 21,
          name: "Zora Leffler",
          tel: "447-489-4136",
          address: "796 Beer Ways",
          opening_hours: "08:00",
          description: "laudantium enim voluptates",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=89.5272042326575",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 72,
        text: "Vero reprehenderit provident fugiat accusantium.",
        UserId: 1,
        RestaurantId: 22,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 22,
          name: "Ewell Champlin",
          tel: "386-845-2305 x7298",
          address: "496 O'Conner Crescent",
          opening_hours: "08:00",
          description: "sequi molestias ex",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.28311903714239",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 76,
        text: "Velit praesentium at porro blanditiis.",
        UserId: 1,
        RestaurantId: 26,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 26,
          name: "Mrs. Ulises Runte",
          tel: "1-792-767-1545 x42561",
          address: "05793 Howell Extension",
          opening_hours: "08:00",
          description:
            "Illum a praesentium porro reiciendis aliquid asperiores quae. Excepturi quis doloribus molestias. Quae maxime accusantium qui quae vero provident placeat. Odio et recusandae ex ducimus dignissimos nihil doloribus aut aut. Et et quia reiciendis optio sed quo. Eligendi facilis molestias quo voluptas dolor nulla.\n \rPraesentium similique at eius consectetur. Consectetur blanditiis est et rem odit. Tempora voluptatem quod facere cum et quidem quia distinctio sint.\n \rIpsa non eveniet odio dolorem vel tempore labore consequatur tempore. Minus voluptatum qui. Quo architecto nemo amet ut iure. Omnis ipsam quia cum est ut nesciunt.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=70.24816501038258",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 78,
        text: "Et voluptas iure exercitationem.",
        UserId: 1,
        RestaurantId: 28,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 28,
          name: "Katlyn Aufderhar",
          tel: "311.347.8888 x614",
          address: "516 Shields Orchard",
          opening_hours: "08:00",
          description: "iusto",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=75.17418974273313",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 81,
        text: "Ut repudiandae eius voluptate.",
        UserId: 1,
        RestaurantId: 31,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 31,
          name: "Shaniya Sauer",
          tel: "(938) 940-0627 x4149",
          address: "98794 Olson Crossroad",
          opening_hours: "08:00",
          description:
            "Commodi dicta pariatur.\nQuisquam expedita ipsum voluptatem qui velit unde recusandae.\nNatus qui excepturi odit enim ut rerum et id deserunt.\nAtque aspernatur et enim eaque repellat adipisci in voluptas.\nDelectus quidem enim.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.1551024019834",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 89,
        text: "Est dolores incidunt perferendis nihil.",
        UserId: 1,
        RestaurantId: 39,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 39,
          name: "Narciso Schultz",
          tel: "591.555.7933",
          address: "3574 Block Dale",
          opening_hours: "08:00",
          description:
            "Aut non cupiditate facilis. Quaerat porro error nihil reprehenderit illum cupiditate error eum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=63.81073452317916",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 90,
        text: "Magnam autem dolorem eius est dolores itaque ipsam quidem ut.",
        UserId: 1,
        RestaurantId: 40,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 40,
          name: "Anissa Volkman",
          tel: "443.376.1581 x82909",
          address: "6429 Otho Mountain",
          opening_hours: "08:00",
          description:
            "Sed quod voluptas voluptates impedit neque itaque sit odio.\nUt consequuntur explicabo quo ut maxime expedita.\nNihil voluptas voluptatem saepe dicta sunt laudantium non ea.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.0343781973377",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 91,
        text: "Beatae quis eaque ullam quia alias.",
        UserId: 1,
        RestaurantId: 41,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 41,
          name: "Oran Russel I",
          tel: "(821) 689-9931 x87553",
          address: "1881 Hagenes Falls",
          opening_hours: "08:00",
          description: "tempora exercitationem maiores",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=87.0502288271763",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 98,
        text: "Ut libero est voluptas sint facere aspernatur eos commodi.",
        UserId: 1,
        RestaurantId: 48,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 48,
          name: "Odie Zboncak",
          tel: "993.822.3419 x80583",
          address: "9883 Ewell Shores",
          opening_hours: "08:00",
          description:
            "Totam laudantium nostrum. In dolor aut rerum et quod incidunt. Voluptatem enim qui voluptatem repellendus suscipit voluptatem. Vel placeat porro fugit amet in quisquam et eum.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=71.21302779328482",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 102,
        text: "Aut voluptatem dolor.",
        UserId: 1,
        RestaurantId: 2,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 2,
          name: "Hillard Lehner",
          tel: "233-678-6830",
          address: "4393 Karli Mall",
          opening_hours: "08:00",
          description:
            "Rerum eum et aut sint est. Fuga tempore animi repellendus. Est molestiae nobis repellendus molestiae labore reiciendis.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=11.627681473630048",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 103,
        text: "Dolorem perspiciatis eius praesentium reiciendis delectus quod magni veniam.",
        UserId: 1,
        RestaurantId: 3,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 3,
          name: "Anabelle Kozey",
          tel: "(916) 961-6184 x5240",
          address: "7514 Russel Route",
          opening_hours: "08:00",
          description: "Vel at aspernatur sed et voluptatum deserunt.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=2.270331816974802",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 106,
        text: "Ullam et in velit nihil sint error excepturi a beatae.",
        UserId: 1,
        RestaurantId: 6,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 6,
          name: "Easton Tremblay",
          tel: "1-159-661-6952",
          address: "9179 Chanel Knoll",
          opening_hours: "08:00",
          description:
            "Neque unde nemo. Perspiciatis distinctio ut id laboriosam est deleniti magni. Ut repudiandae in. Perspiciatis magnam vitae deleniti ut doloribus voluptas.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=17.080636620224787",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 110,
        text: "Fugit maxime quas qui et natus animi libero consectetur sint.",
        UserId: 1,
        RestaurantId: 10,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 10,
          name: "Jasper Littel",
          tel: "041.506.5249 x614",
          address: "25140 Geo Shoal",
          opening_hours: "08:00",
          description:
            "Magni voluptatem aut temporibus mollitia numquam quaerat nihil fugiat.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=74.43219543922217",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 111,
        text: "Tempora et qui occaecati.",
        UserId: 1,
        RestaurantId: 11,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 11,
          name: "Emilio Ruecker",
          tel: "150-403-3024",
          address: "532 Lindsey Street",
          opening_hours: "08:00",
          description:
            "Rem cumque et cumque nihil et asperiores aut. A minus voluptas. Vel reiciendis et. Dicta voluptates eaque dolorem culpa unde aut. Delectus veritatis aut et dolor. Quasi ut ipsam rerum consequatur ratione inventore.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=0.8112434132323099",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 115,
        text: "Est magnam dignissimos itaque esse eveniet et quod accusamus iste.",
        UserId: 1,
        RestaurantId: 15,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 15,
          name: "Retta Mitchell",
          tel: "589-201-8499 x60097",
          address: "2640 Keeling Unions",
          opening_hours: "08:00",
          description: "Est aspernatur quaerat dolorem ut et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=23.85630793997946",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 122,
        text: "Voluptatem voluptate iste sed nobis quo et ut est quam.",
        UserId: 1,
        RestaurantId: 22,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 22,
          name: "Ewell Champlin",
          tel: "386-845-2305 x7298",
          address: "496 O'Conner Crescent",
          opening_hours: "08:00",
          description: "sequi molestias ex",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=42.28311903714239",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 123,
        text: "Minima occaecati id praesentium quaerat nobis ut eveniet.",
        UserId: 1,
        RestaurantId: 23,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 23,
          name: "Cali Gottlieb",
          tel: "(420) 462-6820",
          address: "76657 Treutel Corners",
          opening_hours: "08:00",
          description: "eos",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=2.9368646912617535",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 2,
        },
      },
      {
        id: 129,
        text: "Eius sed iste consequatur sunt tempore qui iure tempora.",
        UserId: 1,
        RestaurantId: 29,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 29,
          name: "Antone Herman",
          tel: "1-827-268-2112 x50679",
          address: "948 Pfeffer Walk",
          opening_hours: "08:00",
          description: "illum",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=60.13432657302602",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 130,
        text: "Ducimus quia dolor qui.",
        UserId: 1,
        RestaurantId: 30,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 30,
          name: "Wilber Abshire",
          tel: "1-047-350-0810",
          address: "0939 Senger Islands",
          opening_hours: "08:00",
          description: "doloribus",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=26.198066180877877",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 131,
        text: "Dolor voluptatem incidunt rerum accusamus nihil velit qui.",
        UserId: 1,
        RestaurantId: 31,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 31,
          name: "Shaniya Sauer",
          tel: "(938) 940-0627 x4149",
          address: "98794 Olson Crossroad",
          opening_hours: "08:00",
          description:
            "Commodi dicta pariatur.\nQuisquam expedita ipsum voluptatem qui velit unde recusandae.\nNatus qui excepturi odit enim ut rerum et id deserunt.\nAtque aspernatur et enim eaque repellat adipisci in voluptas.\nDelectus quidem enim.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=78.1551024019834",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 135,
        text: "Quisquam facere praesentium nihil ratione sit quo.",
        UserId: 1,
        RestaurantId: 35,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 35,
          name: "Zula Johnson",
          tel: "183.833.3488 x356",
          address: "9189 Martine Flat",
          opening_hours: "08:00",
          description:
            "Saepe ad id impedit aperiam. Sint sed voluptatum animi est consequatur mollitia quod atque eos. Reprehenderit voluptas vero corrupti labore eum odio. Laborum consequatur alias et.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=43.80805653557811",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 136,
        text: "Voluptates non modi dolor qui.",
        UserId: 1,
        RestaurantId: 36,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 36,
          name: "Luther Renner",
          tel: "098.696.1338 x582",
          address: "5599 Akeem Views",
          opening_hours: "08:00",
          description:
            "Qui saepe expedita quisquam officiis nulla et cupiditate porro. Cumque dolorem tempora sit dolor et sint iure.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=94.77905130679038",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 137,
        text: "Non ut laborum necessitatibus at saepe.",
        UserId: 1,
        RestaurantId: 37,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 37,
          name: "Darron Zboncak II",
          tel: "(001) 024-9515",
          address: "57370 Montana Courts",
          opening_hours: "08:00",
          description:
            "Ut accusamus tempore vel nihil. Optio velit eos illum qui est qui. Exercitationem est suscipit tempora et odio nihil magni saepe asperiores. Odio dolores quia explicabo ut eveniet. Aut esse eos omnis consequatur sapiente dolorem. Voluptatem facilis sunt illum sit asperiores ea quod.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=29.747087917490855",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 140,
        text: "Quisquam qui nihil totam recusandae exercitationem porro excepturi.",
        UserId: 1,
        RestaurantId: 40,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 40,
          name: "Anissa Volkman",
          tel: "443.376.1581 x82909",
          address: "6429 Otho Mountain",
          opening_hours: "08:00",
          description:
            "Sed quod voluptas voluptates impedit neque itaque sit odio.\nUt consequuntur explicabo quo ut maxime expedita.\nNihil voluptas voluptatem saepe dicta sunt laudantium non ea.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=40.0343781973377",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 142,
        text: "Est laborum nostrum repellat necessitatibus excepturi.",
        UserId: 1,
        RestaurantId: 42,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 42,
          name: "Tamara Emmerich",
          tel: "261.376.9899 x2916",
          address: "4545 Hyatt Pass",
          opening_hours: "08:00",
          description: "neque",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=25.103229234079972",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
      {
        id: 143,
        text: "Veniam ut quia aut id autem ea accusamus est ipsam.",
        UserId: 1,
        RestaurantId: 43,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 43,
          name: "Jacinthe Schuster",
          tel: "1-459-882-2709 x19371",
          address: "95723 Bogan Lodge",
          opening_hours: "08:00",
          description: "quisquam",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=36.74444426852725",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 5,
        },
      },
      {
        id: 144,
        text: "Fugit sed minus vitae aspernatur.",
        UserId: 1,
        RestaurantId: 44,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 44,
          name: "Shayna Kutch DVM",
          tel: "1-930-345-4219 x940",
          address: "0288 Lydia Drive",
          opening_hours: "08:00",
          description: "quia",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=15.297659468613812",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 146,
        text: "Et eaque repellendus eveniet.",
        UserId: 1,
        RestaurantId: 46,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 46,
          name: "Gene Schuster PhD",
          tel: "928-662-3622",
          address: "5200 Maximus Lodge",
          opening_hours: "08:00",
          description:
            "Rerum fugiat veritatis culpa animi et ducimus et numquam. Reprehenderit officiis dolorum laborum. Voluptatibus quisquam ducimus. Quia eveniet quae id. Est debitis qui deleniti. Minima est est non.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=1.4964492087096382",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 1,
        },
      },
      {
        id: 147,
        text: "Omnis id voluptatem deleniti.",
        UserId: 1,
        RestaurantId: 47,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 47,
          name: "Kendall Hackett",
          tel: "(585) 438-3735 x3626",
          address: "995 Kreiger Lakes",
          opening_hours: "08:00",
          description: "labore laboriosam deserunt",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=66.07589163329406",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 4,
        },
      },
      {
        id: 149,
        text: "Repellat et enim non occaecati repudiandae repellendus et impedit.",
        UserId: 1,
        RestaurantId: 49,
        createdAt: "2021-11-08T12:56:59.000Z",
        updatedAt: "2021-11-08T12:56:59.000Z",
        Restaurant: {
          id: 49,
          name: "Soledad Goyette PhD",
          tel: "1-761-424-6898",
          address: "006 Gregoria Flats",
          opening_hours: "08:00",
          description:
            "Culpa laudantium numquam et tenetur molestiae. Ullam nulla iure voluptatem quidem. Ea aut aut omnis voluptas ipsum animi neque aliquam.",
          image:
            "https://loremflickr.com/320/240/restaurant,food/?random=87.03217757282154",
          viewCounts: 0,
          createdAt: "2021-11-08T12:56:58.000Z",
          updatedAt: "2021-11-08T12:56:58.000Z",
          CategoryId: 3,
        },
      },
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [],
  },
  isFollowed: false,
};

export default {
  components: {
    AdminNav,
		Spinner
  },
  data() {
    return {
      users: [],
      currentUserId: -1,
			isLoading: true
    };
  },
  methods: {
    async fetchUser() {
      try {
				this.isLoading = true
        const { data } = await adminAPIS.users.get();
        this.users = data.users;
				this.isLoading = false
      } catch (error) {
				this.isLoading = false
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
      this.currentUserId = dummyUser.profile.id;
    },
    async toggleUserRole(userId, isAdmin) {
      try {
        const { data } = await adminAPIS.users.update({
          userId,
          isAdmin: !isAdmin,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: !user.isAdmin,
            };
          }
          return user;
        });
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新使用者資料，請稍後再試",
        });
      }
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>
