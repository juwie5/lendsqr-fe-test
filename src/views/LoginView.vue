<template>
  <main class="contain">
    <section class="row">
      <section>
        <div class="img-div">
          <img src="@/assets/logo.svg" alt="" class="first-img">
          <img src="@/assets/login-image.png" alt="">
        </div>
      </section>
      <section class="form-section">
        <div class="form-div">
          <form @submit.prevent="handleLogin ">
            <div class="spacer">
              <h1 class="form-header">Welcome!</h1>
              <p class="form-subtext">Enter details to login.</p>
            </div>
            <div>
              <div class="form-space">
                <input class="form-input" type="email" placeholder="Email" required v-model="form.email">
              </div>
              <div class="pass">
                <input class="form-input" type="password" placeholder="Password" required ref="passowrd" id="password"
                  v-model="form.password">
                <p class="pass-toggle" v-if="hide" @click="showPassword()">SHOW</p>
                <p class="pass-toggle" v-if="!hide" @click="showPassword()">HIDE</p>
              </div>
            </div>
            <div>
              <p class="forgot-btn">Forgot PASSWORD?</p>
            </div>

            <div>
              <button class="login-btn">LOG IN</button>
            </div>
          </form>
        </div>
      </section>
    </section>

  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref, reactive } from 'vue';
import type { Ref } from 'vue'
import { show } from '../services/show';


const router = useRouter();

let hide = ref(true);

interface Form {
  email: string
  password?: string
}

const form: Form  = reactive({
  email: "",
  password: ""
});

const showPassword = () => {
  show();
  hide.value = !hide.value;
};

const handleLogin = () => {
  router.push({ name: 'Users' })
}

</script>

<style lang="scss">

</style>


