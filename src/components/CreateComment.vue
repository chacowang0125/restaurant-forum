<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea class="form-control" rows="3" name="text" v-model="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button
        type="submit"
        class="btn mr-0"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        //如果表單空白，發出錯誤提示
        if (!this.text) {
          Toast.fire({
            icon: "warning",
            title: "請輸入餐廳評論",
          });
          return;
        }
        this.isProcessing = true;
        //向後端發送新增餐廳評論
        const { data } = await restaurantsAPI.createComment({
          restaurantId: this.restaurantId,
          text: this.text,
        });
        console.log(data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // 觸發父層事件
        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        });
        this.isProcessing = false;
        this.text = "";
      } catch (error) {
        this.isProcessing = false;
        console.log(error.message);
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳評論，請稍後再試",
        });
      }
    },
  },
};
</script>
<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>