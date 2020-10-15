{<template>
    <div id="login">
        <div class="back"></div>
        <!-- <div class="boxbutton">
            <button @click="res = true">ลงทะเบียน</button>
            <button @>ลงชื่อเข้าใช้</button>
        </div> -->
        <div class="boxlogin">
            <div class="showimg">
                <img src="/farmer.jpg" alt="">
            </div>
            <div class="login_wrap">
                    <img src="/engine.png" alt="">
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
                        <v-btn 
                            rounded block 
                            type="submit"  
                        >Login</v-btn> 
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            show1: false,
            password: '',
            rules: {
                required: value => !!value || '',
                min: v => v.length >= 8 || 'รห้สอย่างน้อย 8 ตัวอักษร',
            },
        }
    },
    
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kanit');
    #login{
        font-family: 'Kanit', sans-serif;
            position: absolute;
            width: 100%;
            height: 100%;
        .back{
            height: 100%;
            background-image: url("https://images.unsplash.com/photo-1472133530746-ae9b21e91c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80");
            background-position: center;
            // background-repeat: no-repeat;
            background-size: cover;
        }

        .boxbutton{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);   
            display: flex;

            button{
                height: 50px;
                width: 200px;
                border-radius: 100px;
                background-color: #ffffff;
                margin: 0px 20px;
                box-shadow: 2px 3px 34px 4px rgba(0, 0, 0, 0.336);
                color: #629d25;
                font-size: 18px;
                outline: none;
                transition: 0.5s ease-in-out;

            }

            button:hover{
                margin-top: -2.5px;
                color: #ffffff;
                background: #629d25;
                
            }
        }

        .boxlogin{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #ffffff;  
            max-height: 450px;          
            display: flex;
            // border-radius: 15px;  
            box-shadow: 10px 10px 54px -4px rgba(0,0,0,0.75);

            .showimg{
                max-width: 350px;
                img{
                    height: 100%;
                    width: 100%;
                    box-shadow: 11px 3px 19px -10px rgba(0,0,0,0.75);
                }
            }
            .login_wrap{
                width: 350px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                    img{
                        width: 60%;
                        margin-bottom: 5px;
                    }
            }
        }



            form{
                padding: 0px 15px 15px 15px;

                label{
                    margin-left: 5px;
                }

                .v-label--active{
                    margin-left: 0px !important;
                }

                .primary--text{
                    color: #629d25 !important;
                   
                }

                .v-input{
                    margin-top: 5px;
                }

                button[type="submit"]{
                    margin-top: 15px;
                    background: #629d25;
                    color: #ffffff;
                    font-weight: 200;
                }
                button[type="button"]{
                    color: #629d25;
                    font-weight: 200;
                }
            }

            footer{
                margin-top: 20px;
                    p{
                        padding: 0px;
                        margin: 0px;
                        text-align: center;
                    }
            }
        }

        @keyframes button {
            0%{transform: rotateX(0deg)}
            100%{
                transform: rotateX(360deg)
            }
        }
</style>