{<template>
  <div id="login">
    <div class="back"></div>
    <div class="box">
        <div class="boxlogin">
        <div class="showimg">
            <img id="img" src="/farmer.jpg" alt="" />
        </div>
        <div class="login_wrap">
            <img src="/engine.png" alt="" />
            <h2>Sing In</h2>
            <v-form                                 
              ref="form"
              v-model="isValid"
            >
            <v-text-field v-model="formlogin.username" label="Username"></v-text-field>
            <v-text-field
                v-model="formlogin.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                label="Password"
                @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn rounded block type="submit" @click="login()">Login</v-btn>
            </v-form>
            <footer>
            <p>
                ยังไม่ได้ลงทะเบียนใช้งาน ? |
                <button @click="trigger('res')" class="register">ลงทะเบียน</button>
            </p>
            </footer>
        </div>
        </div>
        <div class="boxregister">
        <div class="login_wrap">
            <img src="/engine.png" alt="" />
            <h2>Sing In</h2>
            <v-form @submit.prevent="res">
            <v-text-field  label="Username"></v-text-field>
            <v-text-field v-model="formres.username" label="Username"></v-text-field>
            <v-text-field
                v-model="formres.password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                @click:append="show1 = !show1"
            ></v-text-field>
            <v-btn rounded block type="submit">Login</v-btn>
            </v-form>
            <footer>
            <p>
                ยังไม่ได้ลงทะเบียนใช้งาน ? |
                <button @click="trigger('login')" class="register">เข้าสู่ระบบ</button>
            </p>
            </footer>
        </div>
                <div class="showimg">
            <img id="img" src="https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=100" alt="" />
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: "Login",
  data() {
    return {
      show1: false,
      formlogin:{
        username:'',
        password:''
      },
      formres:{
        serial:'',
        username:'',
        password:''
      },
      rules: {
        required: value => !!value || "",
        min: v => v.length >= 8 || "รห้สอย่างน้อย 8 ตัวอักษร"
      }
    };
  },
  methods: {
    trigger(item) {
        const boxlogin = document.querySelector(".boxlogin");
        const boxregister = document.querySelector(".boxregister");
        if(item == "login"){
            boxlogin.style.transform = "perspective(10000px) rotateY(0deg)"
            boxregister.style.transform = "perspective(10000px) rotateY(180deg)"
        }else{
            boxlogin.style.transform = "perspective(10000px) rotateY(-180deg)"
            boxregister.style.transform = "perspective(10000px) rotateY(0deg)"
        }
    },
    login(){
      Axios.post(`http://localhost:3000/api/login/`, this.formlogin)
        .then(response => {
          if(response.data.statusCode == 200){
            console.log(response.data.data);
            localStorage.setItem('username', JSON.stringify(response.data.data));
             this.$router.replace("/");
          }
        }).catch(err => {
          alert(err.response.data.message);
        })
    },
    res(){
       Axios.post(`http://localhost:3000/api/login/res`, this.formres)
        .then(response => {
          if(response.status == 200){
          console.log(response.data.token);
          alert("สมัครสมาชิกเสดแล้วจ้า");
            localStorage.setItem('token', response.data.token);
             this.$router.replace("/");
          }
        }).catch(err => {
          alert(err.response.data.message);
        })
    }
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
    // background-repeat: no-repeat;
    background-size: cover;
  }

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 50%;    
    height: 70%;

    .boxlogin{
        background: #ffffff;
        transform: perspective(600px) rotateY(0deg);
        box-shadow: -6px 3px 70px 0px rgba(0,0,0,0.75);

    }

    .boxregister{
        background: #ffffff;
        transform: perspective(600px) rotateY(180deg);
        box-shadow: -6px 3px 70px 0px rgba(0,0,0,0.75);

        .showimg{
            box-shadow: -17px 3px 44px -32px rgba(0,0,0,0.75);
        }

    }

    .boxlogin, .boxregister{
        width: 100%;
        height: 100%;
        overflow: hidden;
        backface-visibility: hidden;
        position: absolute;
        transition: transform .6s linear;
        display: flex;

        .showimg {
            width: 50%;
        img {
            height: 100%;
            width: 100%;
            box-shadow: 11px 3px 19px -10px rgba(0, 0, 0, 0.75);
        }
        }
        .login_wrap {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            form {
                padding: 0px 15px 15px 15px;
                width:70%;

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
        img {
            width: 60%;
            margin-bottom: 5px;
        }

        p {
            font-size: 12px;
                button{
                    outline: none;
                }
            }
        }
    }
  }
}

@media only screen and (max-width: 750px) {
  .showimg {
    display: none;
  } 
  .box{
     width: 80% !important; 
        .login_wrap {
            width: 100% !important;
        }
  }
}
</style>
