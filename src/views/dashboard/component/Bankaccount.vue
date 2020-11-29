<template>
    <v-card-title>
        <div class="haderpeng">
            <span>บัญชีธนาคารของฉัน</span><br>
            <span class="subtitle">จัดการบัญชีธนาคารเพื่อเป็นบัญชีในการถอนเงินจากระบบ</span>
        </div>
        <v-row class="edit">
            <v-col
            cols="12"
            class="addbank"
            >
                <v-btn
                medium
                color="primary"
                >
                <v-icon
                    size="18px"
                    color="#ffffff"
                >
                    mdi-plus
                </v-icon>
                เพิ่มบัญชีธนาคาร
                </v-btn>
            </v-col>
        </v-row>
        </v-card-title>
</template>
<script>
import Axois from 'axios'
import { mapState, mapMutations } from "vuex";
export default {
name:'Backaccount',
  data() {
    return {
      show1: "",
      update: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  computed: {
  ...mapState(["datauser"]),
  },
  methods: {
    up() {
      if (!this.update) {
        this.update = true;
      } else if (this.update) {
        this.update = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.haderpeng{
      padding: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.11);
      width: 100%;

        .subtitle{
          font-size: 1rem;
        }
    }

    .edit{
      margin: 20px auto;
      font-size: 14px;

      .addbank{
            display: flex;
            justify-content: flex-end;

            button{
                margin: 0px !important;
            }
        }

      .col-12 {
         text-align: left;
      } 

      .col-md-3{
        text-align: right;
      }
      .haderlist{
        color: #868686;
        font-size: 14px;
      }

      .v-input{
        height: 100%;
        font-size: 14px;
      }

      .v-text-field {
        padding: 0;
        margin: 0;
      }

    .col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1{
      padding: 0px !important;
        }
    }

</style>