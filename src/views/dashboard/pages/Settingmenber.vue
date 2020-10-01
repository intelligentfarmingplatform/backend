<template>
      <v-container
    id="regular-tables"
    fluid
    tag="section"
  >
        <v-col
        cols="12"
      >
        <base-material-card
          color="info"
          icon="mdi-card-account-details"
          title="ระบบจัดการสมาชิก"
          
        >
        <v-card-title>
            <v-row
             align="center"
            >
                <v-col
                 cols="12"
                 lg="4"
                 md="4"
                >
                    <v-text-field
                     v-model="search"
                     append-icon="mdi-magnify"
                     label="Search"
                     sort-by="calories"
                     color="info"
                    ></v-text-field>
                </v-col>
                <v-spacer></v-spacer>
                <v-col
                 cols="12"
                 lg="2"
                 md="2"
                >   
                    <v-btn
                     depressed
                     color="info"
                     width="100%"
                     class="rounded-pill"
                    >
                     <v-icon>
                         mdi-plus
                     </v-icon>
                     <v-text
                      class="ml-2 display-1"
                     >
                         เพิ่มสมาชิก
                     </v-text>
                    </v-btn>
                </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="listusers"
              :search="search"
              loading-text="Loading... Please wait"
            >
            <template v-slot:item.edit="{ item }">
                <router-link :to="`/update/${item.id}`">
                    <v-icon
                    small
                    clas s="mr-2"
                    color="#FFBB29"
                    >
                        mdi-pencil
                    </v-icon>
                </router-link>
            </template>
            <template v-slot:item.del="{ item }">
                <v-icon
                small
                @click="del(item)"
                color="#FF6347"
                >
                    mdi-delete
                </v-icon>
            </template>
            </v-data-table>
          </v-card-text>
        </base-material-card>
      </v-col>
  </v-container>
</template>

<script>

import { mapState, mapMutations } from 'vuex'
import Axios from 'axios'

  export default {
    name: 'Settingmenber',
    data() {
        return {
          search: '',
          headers: [
            {text: 'รห้ส' , value: 'id' ,width:'10% '},
            { text: 'ชื่อผู้ใช้' ,value: 'userName'},
            { text: 'รห้ส' , value: 'password' },
            { text: 'อีเมล์' , value: 'email' },
            {
                text: 'สถานะ', 
                align: 'center',
                sortable: false,
                value: 'status_level',
                width:'15%'
            },
            {
                text: 'แก้ไข',
                align: 'center',
                sortable: false,
                value: 'edit', 
                width:'5%'
            },
            {
                text: 'ลบ',
                align: 'center',
                sortable: false,
                value: 'del', 
                width:'5%',
            }
          ],
          listusers: [],
        }
    },
    created() {
        Axios.get("https://intelligentfarmingplatform.herokuapp.com/api/user")
        .then(response => {
            this.listusers = response.data.data;
        }).catch((err) => {
        console.log(err); 
        })
    },
    methods: {
    del (item) {
        console.log(item.id);
        this.$swal({
          title: 'ต้องการลบข้อมูล',
          text: "คุณต้องการลบข้อมูลหรือไม",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ยืนยัน',
          cancelButtonText: 'ยกเลิก'
          }).then((result) => {
          if (result.value) {
            Axios.delete(`https://intelligentfarmingplatform.herokuapp.com/api/user/${item.id}`)
            .then(response => {
              if(response.data.statusCode == 204){
               this.$swal({
                  title: 'ลบข้อมูลเสร์จสิ้น',
                  text: "ทำการลบข้อมูลสำเร็จ",
                  icon: 'success'
                }).then((result) => {
                  if(result.value){
                    const index = this.listusers.indexOf(item) 
                    this.listusers.splice(index, 1)
                    console.log(response.data.message);
                  }
                });
              }else{
                this.$swal({
                  title: 'ลบข้อมูลไม่สำเร็จ',
                  text: "ทำการลบข้อมูลไม่สำเร็จ",
                  icon: 'error'
                });
              }
            }).catch((err) => console.log(err));
          }
        })
    },
  }
  }
</script>
