<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          class="btn btn-danger float-right"
          v-if="currentUser.isAdmin"
          @click.stop.prevent="handleDeletebuttonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id: comment.User.id } }">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/minins";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    async handleDeletebuttonClick(commentId) {
      try {
				//請求 API 伺服器刪除 id 為 commentId 的評論
        const { data } = await restaurantsAPI.deleteComment({ commentId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 觸發父層事件
        this.$emit("after-delete-comment", commentId);
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法刪除餐廳評論，請稍後再試",
        });
      }
    },
  },
  mixins: [fromNowFilter],
};
</script>
