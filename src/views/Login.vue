<!--
 * @Author: your name
 * @Date: 2021-08-02 10:06:02
 * @LastEditTime: 2021-09-01 09:13:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\Login.vue
-->
<template>
  <div class="body">
    <div class="container right-panel-active" ref="container">
      <!-- Sign Up -->
      <div class="container__form container--signup">
        <form v-if="isAdmin" action="#" class="form" id="form1">
          <h2 class="form__title">管理员登录</h2>
          <input type="text" v-model="LoginFrom.userName" placeholder="UserName" class="input" />
          <input
            type="password"
            placeholder="Password"
            class="input"
            v-model="LoginFrom.password"
            autocomplete
          />
          <div class="yanzheng">
            <input v-model="LoginFrom.verificationCode" class="input" type="text" autocomplete />
            <img src="@/assets/images/yanzheng.png" alt />
          </div>
          <button @click="sign" class="btn" type="button">Sign In</button>
        </form>
      </div>

      <!-- Sign In -->
      <div class="container__form container--signin">
        <form v-if="!isAdmin" action="#" class="form" id="form2">
          <h2 class="form__title">个人登录</h2>
          <input v-model="LoginFrom.userName" placeholder="UserName" class="input" />
          <input type="password" v-model="LoginFrom.password" placeholder="Password" class="input" />
          <div class="yanzheng">
            <input v-model="LoginFrom.verificationCode" class="input" type="text" />
            <img src="@/assets/images/yanzheng.png" alt />
          </div>
          <button @click="sign" class="btn" type="button">Sign In</button>
        </form>
      </div>

      <!-- Overlay -->
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <button class="btn" id="signIn" ref="signInBtn" @click="signIn">个人登录</button>
          </div>
          <div class="overlay__panel overlay--right">
            <button class="btn" id="signUp" ref="signUpBtn" @click="signUp">管理员登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { ElMessage } from "element-plus";
import { useRouter, useRoute } from "vue-router";
let signInBtn = ref();
let signUpBtn = ref();
let container = ref();
let secondForm = ref();
let fistForm = ref();
let isAdmin = ref(true);
let router = useRouter();
let route = useRoute();
let LoginFrom = reactive({
  userName: "admin",
  password: "888888",
  verificationCode: "7364",
});
// 切换到管理员登录
function signIn() {
  container.value.classList.remove("right-panel-active");
  // console.log(container.value.classList);
  isAdmin.value = !isAdmin.value;
}
// 切换到个人登录
function signUp() {
  container.value.classList.add("right-panel-active");
  isAdmin.value = !isAdmin.value;
}
// 登录
function sign() {
  console.log(LoginFrom);
  router.push("/home").then(() => {
    ElMessage.success("登录成功!")
  })
}
onMounted(() => {
  console.log(document.querySelector(".container").classList);
});
</script>
<style lang="scss" scoped>
.body {
  align-items: center;
  background-color: var(--white);
  background: url("https://s3.bmp.ovh/imgs/2021/08/f48417089d57afb7.jpg");
  /* 决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。 */
  /* https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-attachment */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
}

.form__title {
  font-weight: 300;
  margin: 0;
  margin-bottom: 1.25rem;
}

.link {
  color: var(--gray);
  font-size: 0.9rem;
  margin: 1.5rem 0;
  text-decoration: none;
}

.container {
  background-color: var(--white);
  border-radius: var(--button-radius);
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  height: var(--max-height);
  max-width: var(--max-width);
  overflow: hidden;
  position: relative;
  width: 100%;
  animation: coming 0.5s linear;
}

.container__form {
  height: 100%;
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
  .yanzheng {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 340px;
    img {
      width: 100px;
      height: 44px;
      margin: 8px 0 0 0;
    }
    .input {
      width: 150px !important;
    }
  }
}

.container--signin {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.right-panel-active .container--signin {
  transform: translateX(100%);
}

.container--signup {
  left: 0;
  opacity: 0;
  width: 50%;
  z-index: 1;
}

.container.right-panel-active .container--signup {
  animation: show 0.6s;
  opacity: 1;
  transform: translateX(100%);
  z-index: 5;
}

.container__overlay {
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0;
  transition: transform 0.6s ease-in-out;
  width: 50%;
  z-index: 100;
}

.container.right-panel-active .container__overlay {
  transform: translateX(-100%);
}

.overlay {
  background-color: var(--lightblue);
  background: url("https://s3.bmp.ovh/imgs/2021/08/7748062053444640.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  left: -100%;
  position: relative;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 200%;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay__panel {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: absolute;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  width: 50%;
}

.overlay--left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay--left {
  transform: translateX(0);
}

.overlay--right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay--right {
  transform: translateX(20%);
}

.btn {
  background-color: var(--blue);
  background-image: linear-gradient(
    90deg,
    var(--blue) 0%,
    var(--lightblue) 74%
  );
  border-radius: 20px;
  border: 1px solid var(--blue);
  color: var(--white);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

.form > .btn {
  margin-top: 1.5rem;
}

.btn:active {
  transform: scale(0.95);
}

.btn:focus {
  outline: none;
}

.form {
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
}

.input {
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}
@keyframes coming {
  0% {
    opacity: 0;
    // margin-top: 10px;
  }
  100% {
    opacity: 1;
    // margin-top: 0px;
  }
}
</style>