<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  data() {
    return {
      user: {
        id: 0,
        image: "",
        name: "",
      },
      isProcessing: false,
    };
  },
  methods: {
    setUser(userId) {
      if (userId !== this.currentUser.id) {
        this.$router.push({ name: "not-found" });
      }
      const { id, name, image } = this.currentUser;
      this.user = {
        ...this.user,
        id,
        name,
        image,
      };
    },
    handleFileChange(e) {
      const files = e.target.files;
      if (files.length === 0) {
        this.user.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    async handleSubmit(e) {
      try {
        if (!this.user.name) {
          Toast.fire({
            icon: "warning",
            title: "請填入姓名",
          });
          return;
        }
        this.isProcessing = false;
        const form = e.target;
        const formData = new FormData(form);
        const { data } = await usersAPI.update({
          userId: this.user.id,
          formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.$router.push({ name: "user", params: { id: this.id } });
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法修改使用者資料，請稍後再試",
        });
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this.setUser(id);
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    currentUser() {
      const { id } = this.$route.params;
      this.setUser(id);
    },
  },
};
</script>
