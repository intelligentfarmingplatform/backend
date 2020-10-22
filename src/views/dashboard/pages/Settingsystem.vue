{<template>
  <div id="login">
    <!-- <div class="back"></div>
    <div class="box">
      <div class="boxlogin">
        <div class="showimg">
          <img id="img" src="/farmer.jpg" alt="" />
        </div>
        <div class="login_wrap">
          <img src="/engine.png" alt="" />
          <h2>Sing In</h2>
          <form action="">
            <v-text-field v-model="Username" label="Username"></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn rounded block type="submit">Login</v-btn>
          </form>
          <footer>
            <p>
              ยังไม่ได้ลงทะเบียนใช้งาน ? |
              <span @click="tologinr()" class="register">ลงทะเบียน</span>
            </p>
          </footer>
        </div>
      </div>
      <div class="boxregister">
        <div class="showimg">
          <img id="img" src="/farmer.jpg" alt="" />
        </div>
        <div class="login_wrap">
          <img src="/engine.png" alt="" />
          <h2>Sing In</h2>
          <form action="">
            <v-text-field v-model="Username" label="Username"></v-text-field>
            <v-text-field v-model="Username" label="Username"></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="Password"
              @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn rounded block type="submit">Login</v-btn>
          </form>
          <footer>
            <p>
              ยังไม่ได้ลงทะเบียนใช้งาน ? |
              <span @click="tologin()" class="register">เข้าสู่ระบบ</span>
            </p>
          </footer>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show1: false,
      password: "",
      rules: {
        required: value => !!value || "",
        min: v => v.length >= 8 || "รห้สอย่างน้อย 8 ตัวอักษร"
      }
    };
  },
  methods: {
    toregister() {}
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kanit");
#login {
  font-family: "Kanit", sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  .back {
    height: 100%;
    background-image: url("https://images.unsplash.com/photo-1472133530746-ae9b21e91c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80");
    background-position: center;
    background-size: cover;
  }

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    // border-radius: 15px;
    box-shadow: 10px 10px 54px -4px rgba(0, 0, 0, 0.75);
    cursor: pointer;

    .boxlogin, .boxregister{ 
        display: flex;
        overflow: hidden;
    
        .showimg {
            max-width: 350px;
        img {
            height: 100%;
            width: 100%;
            box-shadow: 11px 3px 19px -10px rgba(0, 0, 0, 0.75);
        }
        }
        .login_wrap {
            width: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        img {
            width: 60%;
            margin-bottom: 5px;
        }

        p {
            font-size: 12px;
            }
        }
    }
  }

  form {
    padding: 0px 15px 15px 15px;

    label {
      margin-left: 5px;
    }

    .v-label--active {
      margin-left: 0px !important;
    }

    .primary--text {
      color: #629d25 !important;
    }

    .v-input {
      margin-top: 5px;
    }

    button[type="submit"] {
      margin-top: 15px;
      background: #629d25;
      color: #ffffff;
      font-weight: 200;
    }
    button[type="button"] {
      color: #629d25;
      font-weight: 200;
    }
  }

  footer {
    margin-top: 20px;
    p {
      padding: 0px;
      margin: 0px;
      text-align: center;

      .register {
        color: #629d25 !important;
      }
    }
  }
}

@media only screen and (max-width: 1300px) {
  .showimg {
    display: none;
  }
  .login_wrap {
    height: 450px;
  }
}
</style>
