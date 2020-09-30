<template>
    <div id="login">
        <div class="back"></div>
        <v-carousel 
            cycle
            height="200"
            hide-delimiter-background
            show-arrows-on-hover>
            <v-carousel-item
            v-for="(sides,i) in side"
            :key="i"
            :src="sides.src"
            ></v-carousel-item>
        </v-carousel>
        <div class="boxlogin">
            <div class="login_wrap">
                <header>
                    <img src="/engine.png" />
                    <h1>LOGIN</h1>
                    <h3>Intelligent Farming Platform</h3>
                </header>
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
                <footer>
                    <p>asdasdasdadasxzdzxdzxd</p>
                    <p>asdxzdzxddzxddasd</p>
                    <p>asdasdasdad</p>
                </footer>
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
                // required: value => !!value || '',
                min: v => v.length >= 8 || 'รห้สอย่างน้อย 8 ตัวอักษร',
                // emailMatch: () => ('The email and password you entered don\'t match'),
        },
            side: [
                    {
                        src: 'https://images.unsplash.com/photo-1519897831810-a9a01aceccd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
                    },
                    // {
                    //     src: 'https://www.krungsri.com/bank/getmedia/c0bb4e14-99c8-4d04-9526-c3b0e0ef4ed0/smart-farming-1.jpg.aspx',
                    // },
                    // {
                    //     src: 'https://ak.picdn.net/shutterstock/videos/32394631/thumb/4.jpg',
                    // },
                    // {
                    //     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQRA46FZl84B0dB4BhV6d8WoJbbdfn4n8J4A&usqp=CAU',
                    // },
                ],
        }
    },
    
}
</script>

<style lang="scss" scoped>
    .container{
        padding: 0px;
        margin: 0px;
    }
    #login{
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        
        .back{
            position: absolute;
            z-index: 1;           
            width: 100%;
            height: 100%;
            background: #fff;
            opacity: 10%;
        }
        .v-carousel{
            height: 100% !important;

            .v-responsive{
                height: 100% !important;

                .v-responsive__sizer{
                    padding: 0px !important;
                }

                .v-image__image{
                    filter: blur(1px);
                }
            }
            .v-window__prev,.v-window__next{
                display: none;
            }
        }

        .boxlogin{
            // width: 100%;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            align-content: center;
            z-index: 2;
            .login_wrap{
                left: 50%;
                
                background: #fff;
                // height: 600px;
                min-width: 350px;
                border-radius:15px;
                padding: 25px;
                box-shadow: 24px 23px 31px -10px rgba(0, 0, 0, 0.432);
                header{
                    text-align: center;
                    img{
                        height: auto;
                        max-width: 250px;
                        // border-radius:100% ;
                    }
                }
            }

            form{
                margin-top: 30px;
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
                    margin-top: 10px;
                }

                button[type="submit"]{
                    margin-top: 10px;
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
    }
</style>