<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <base-material-card
          color="info"
          title="แก้ไขข้อมูลส่วนตัว"
          icon="mdi mdi-account-edit"
        >
          <v-card-title>
            <div class="haderpeng">
              <h2>ข้อมูลของฉัน</h2>
              <span>จัดการข้อมูลส่วนตัวคุณเพื่อความปลอดภัยของบัญชีผู้ใช้นี้</span>
            </div>
            <v-row class="editprofile">
                <v-col md="3" cols="12 haderlist">
                  <label for="">ชื่อผู้ช้งาน</label>
                </v-col>
                <v-col md="8" cols="12">
                  <label for="">{{datauser.userName}}</label>
                </v-col>
                <v-col md="3" cols="12 haderlist">
                  <label for="">ชื่อร้านค้า</label>
                </v-col>
                <v-col md="8" cols="12">
                  <v-text-field
                    v-model="datauser.tbl_userdetail.name"
                   :clearable="update"
                   :readonly="!update"
                  ></v-text-field>
                </v-col>
                <v-col md="3" cols="12 haderlist">
                  <label for="">อีเมล์</label>
                </v-col>
                <v-col md="8" cols="12">
                  <label for="">{{datauser.tbl_userdetail.email}}</label>
                </v-col>
                <v-col md="3" cols="12 haderlist">
                  <label for="">ที่อยู่</label>
                </v-col>
                <v-col md="8" cols="12">
                  <v-textarea
                    auto-grow
                    rows="1"
                    v-model="datauser.tbl_userdetail.address"
                    :clearable="update"
                    :readonly="!update"
                  ></v-textarea>
                </v-col>
                <v-col md="3" cols="12 haderlist">
                  <label for="">รายละเอียดร้าน</label>
                </v-col>
                <v-col md="8" cols="12">
                  <v-textarea
                    auto-grow
                    rows="1"
                    v-model="datauser.tbl_userdetail.address"
                    :clearable="update"
                    :readonly="!update"
                  ></v-textarea>
                </v-col>
                <v-col md="3" cols="12 haderlist">
                  <label for="">ชื่อผู้ช้งาน</label>
                </v-col>
                <v-col md="8" cols="12">
                  <label for="">{{datauser.userName}}</label>
                </v-col>
                <v-col md="3" cols="12 haderlist" justify-end>
                  <label for="">ชื่อผู้ช้งาน</label>
                </v-col>
                <v-col md="8" cols="12" justify-end>
                  <label for="">{{datauser.userName}}</label>
                </v-col>

              <v-col cols="12" class="text-right">
                <v-btn
                  :color="this.update === true ? 'info' : 'rgb(255, 187, 41)'"
                  class="mr-0"
                  @click="up()"
                >
                  {{
                    this.update === true
                      ? "Update UserProfile"
                      : "Edit UserProfile"
                  }}
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
        </base-material-card>
      </v-col>

      <v-col cols="12" md="4">
        <base-material-card
          class="v-card-profile"
          avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        >
          <v-card-text>
            <h4
              class="display-2 font-weight-light mb-3 black--text text-center"
            >
              {{datauser.tbl_userdetail.name}}
            </h4>
            <p class="my-5">
             เปิดร้านวันที่
            </p>
            <p>{{datauser.createdAt}}</p>
          </v-card-text>
        </base-material-card>
        <div class="serial">
          <div class="addserial">
            <v-card class="my-5  pa-3 d-flex justify-center">
              <v-col
              cols="12"
              class="d-flex  justify-md-space-between align-center"
              >
                <v-col 
                  cols="12"
                  md="8"
                >
                <v-text-field
                label="Add Serial"
                single-line
              ></v-text-field>
                </v-col>
                  <vs-button color="success" type="filled">Success</vs-button>
              </v-col>
            </v-card>
          </div>
          <div class="showserial" v-for="serial in datauser.  s" :key="serial.id">
            <v-card class="my-5  pa-3 d-flex justify-center">
             <v-col
              cols="8"
              class="text-center"
             >
               {{serial.serial}}
             </v-col>
              <v-col
                cols="2"
              >
                <v-icon>fas fa-eye</v-icon>
              </v-col>
              <v-col
                cols="2"
              >
                <v-icon>fas fa-trash</v-icon>
              </v-col>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Axois from 'axios'
import { mapState, mapMutations } from "vuex";
export default {
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
.container {
  padding-left: 50px !important;
  padding-right: 50px !important;

  .v-card__title {
    padding: 10px auto;

    .haderpeng{
      padding: 15px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.11);
      width: 100%;
    }

    .editprofile{
      margin: 20px auto;
      font-size: 16px;

      .col-12 {
         text-align: left;
      } 

      .col-md-3{
        text-align: right;
      }
      .haderlist{
        color: #868686;
        font-weight: bold;
      }

      .v-input{
        height: 100%;
      }

      .v-text-field {
        padding: 0;
        margin: 0;
      }
    }

  }
  }

.addserial{
  .v-card{
    align-items: center;
    height: 50px;

    .vs-button{
      width: 100%;
    }

    .col-xl, .col-xl-auto, .col-xl-12, .col-xl-11, .col-xl-10, .col-xl-9, .col-xl-8, .col-xl-7, .col-xl-6, .col-xl-5, .col-xl-4, .col-xl-3, .col-xl-2, .col-xl-1, .col-lg, .col-lg-auto, .col-lg-12, .col-lg-11, .col-lg-10, .col-lg-9, .col-lg-8, .col-lg-7, .col-lg-6, .col-lg-5, .col-lg-4, .col-lg-3, .col-lg-2, .col-lg-1, .col-md, .col-md-auto, .col-md-12, .col-md-11, .col-md-10, .col-md-9, .col-md-8, .col-md-7, .col-md-6, .col-md-5, .col-md-4, .col-md-3, .col-md-2, .col-md-1, .col-sm, .col-sm-auto, .col-sm-12, .col-sm-11, .col-sm-10, .col-sm-9, .col-sm-8, .col-sm-7, .col-sm-6, .col-sm-5, .col-sm-4, .col-sm-3, .col-sm-2, .col-sm-1, .col, .col-auto, .col-12, .col-11, .col-10, .col-9, .col-8, .col-7, .col-6, .col-5, .col-4, .col-3, .col-2, .col-1{
      padding: 0px 10px !important;
    }

    input{
      font-size: 18px;
    }
  }
}
</style>
