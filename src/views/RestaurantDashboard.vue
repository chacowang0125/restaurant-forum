<template>
  <div class="container py-5">
		<Spinner v-if="isLoading"/>
		<template v-else >
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
		</template>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue"
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
	components: {
Spinner
	},
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        viewCounts: 0,
        commentsLength: 0,
      },
			isLoading: true
    };
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
				this.isLoading = true
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }
        const { id, name, Category, viewCounts, Comments } = data.restaurant;
        this.restaurant = {
          id,
          name,
          viewCounts,
          categoryName: Category.name ? Category.name : "未分類",
          commentsLength: Comments.length,
        };
				this.isLoading = false
      } catch (error) {
				this.isLoading = false
        console.log(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
};
</script>
