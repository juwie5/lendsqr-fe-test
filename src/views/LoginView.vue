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
.contain {
  // padding: 60px;
   font-family: 'Avenir Next LT Pro';

  .row {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .img-div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 60px;

    .first-img {
      margin-left: 30px;
      margin-bottom: 150px;
    }
  }
}

.form-section {
  background-color: $white;
  width: 100%;
  height: 100vh;
  box-shadow: 0px 15px 90px rgba(0, 0, 0, 0.03);
  display: flex;
  align-items: center;
  padding-left: 100px;

  .form-header {
    color: $blue;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -1.6px;
    margin: 0;
  }

  .form-subtext {
    color: $grey;
    font-size: 20px;
    font-weight: 400;
    word-wrap: break-word;
    margin-top: 10px;
  }

  .spacer {
    margin-bottom: 60px;
  }

  .form-space {
    margin-bottom: 24px;
  }

  .form-input {
    width: 447px;
    border-radius: 5px;
    padding: 16px;
    border: 2px $grey-15 solid;

  }

  .forgot-btn {
    color: $lime-green;
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1.20px;
    word-wrap: break-word;
    margin: 24px 0 30px 0;
  }

  .login-btn {
    width: 485px;
    padding: 16px;
    color: $white;
    background: $lime-green;
    border-radius: 8px;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: 500;
  }

  .pass {
    position: relative;
  }

  .pass-toggle {
    position: absolute;
    right: 10px;
    top: 8px;
    color: $lime-green;
    font-size: 12px;
    cursor: pointer;
  }


}


input::placeholder {
  color: #545F7D;
  font-size: 14px;
  font-family: Avenir Next;
  font-weight: 400;
  word-wrap: break-word
}

::-ms-input-placeholder {

  color: #545F7D;
}
</style>


