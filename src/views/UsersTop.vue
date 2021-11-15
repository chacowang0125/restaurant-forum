<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <router-link
				:to="{ name: 'user' , params: { id : user.id }}">
          <img
            src="https://lh3.googleusercontent.com/proxy/d1YP2yic8x0TxTDXpfrlEP5uZh5OocHkLkYimY73-Svm0q56ieJVrCKEw7Qol0CrXfdwjZO9l9xngfb6ehxFnnUQRrpIOyoiK76YMT804e-n"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
						v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
						@click.stop.prevent="deleteFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button
						v-else
            type="button"
            class="btn btn-primary"
						@click.stop.prevent="addFollowing(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs.vue'

const dummyData = {
    "users": [
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$qG14L8pzKmxmgVZvdm2ouuVMrJG7n8H78RBY4RN9PEMxT0PTpDsU.",
            "isAdmin": true,
            "image": null,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$rFJCQ6xmtFtg7IPyAWndweMwucZVlJtcQ31ajqY91xkdXTVAWYk5S",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$XHN9k/3jvPAUjcsKYBvDmOxvlxAumAk0qrACPCUZDrKGZf8t47CaG",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-08T12:56:58.000Z",
            "updatedAt": "2021-11-08T12:56:58.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]
}

export default ({
	components: {
		NavTabs
	},
	data(){
		return{
			users:[]
		}
	},
	methods:{
		fetchUsers(){
			this.users = dummyData.users
		},
		addFollowing(userId){
			this.users = this.users.map(user => {
				if(user.id !== userId){
					return user
				}
				return{
					...user,
					FollowerCount: user.FollowerCount + 1,
					isFollowed: true
				}
			})
		},
		deleteFollowing(userId){
			this.users = this.users.map(user => {
				if(user.id !== userId){
					return user
				}
				return{
					...user,
					FollowerCount: user.FollowerCount - 1,
					isFollowed: false
				}
			})
		}
	},
	created(){
		this.fetchUsers()
	}
})
</script>