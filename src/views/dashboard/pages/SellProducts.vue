<template>
 <v-container>
        <v-col
        cols="12"
      >
        <base-material-card
          color="#ee4d2d"
          icon="mdi-store"
          title="ระบบจัดการขายสินค้า"
          
        >
          <v-card-title>
              <v-col
              cols="12"
              md="3"
                v-for="items in showproducts "
                :key="items"
                :loading="loading"
              >
            <v-card
                class="cardproducts"
                width="100%"
                height="450"
            >
                <v-img
                height="150"
                :src="`http://localhost:3000/${items.productimg}`"
                ></v-img>

                <v-card-title class="mt-5 mx-auto">{{ items.productname }}</v-card-title>
                    <v-list-item>
                        <v-list-item-title>{{ items.productprice }} บาท</v-list-item-title>
                        <v-list-item-subtitle class="text-right">{{ items.productnumber }}</v-list-item-subtitle>
                    </v-list-item>
                <v-card-text class="mx-0 my-0">
                <div class="detailproducts">{{ items.productdetail }}</div>
                </v-card-text>
                <v-divider class="mx-1"></v-divider>
                <v-card-title>Tab</v-card-title>
                <v-card-text class="mx-0 my-0">
                <div class="tabproducts">{{ items.producttab }}</div>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    color="#FFBB29"
                    depressed
                    max-width="50%"
                    class="mx-auto rounded-pill"
                    @click="editItem(items.id)"
                >
                    แก้ไขสินค้า
                </v-btn>
                <v-btn
                    color="#FF6347"
                    depressed
                    max-width="50%"
                    class="mx-auto rounded-pill"
                    @click="reserve"
                >
                    ลบสินค้า
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
            <!-- ----------------------------------------------------end cardshow----------------------------------- -->
                <v-dialog
                  v-model="dialog"
                  max-width="500px"
                >
                    <template v-slot:activator="{ on, attrs }">  
                        <v-col
                            cols="12"
                            md="3"
                        >             
                        <v-card
                            class="newcardproducts d-flex "
                            width="100%"
                            height="450"
                            color="info"
                            v-bind="attrs"
                            v-on="on"
                        >
                            <v-card-text class=" d-flex my-auto justify-center flex-column">
                                <v-icon
                                    size="55px"
                                    color="#ffffff"
                                >
                                    mdi-plus
                                </v-icon>
                                <v-card-title 
                                    class=" justify-center"
                                >
                                    New Products
                                </v-card-title>
                            </v-card-text>
                        </v-card>
                        </v-col> 
                    </template>
                    <v-card>
                        <v-card-title class="headline">
                        <span>{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                            <v-form
                                ref="form"
                                v-model="isValid"
                                @submit.prevent="onsubmit"
                            >
                                <v-text-field
                                label="ชื่อผู้ใช้งาน"
                                prepend-icon="mdi-pencil"
                                
                                required
                                ></v-text-field>
                            
                                <v-text-field
                                label="Username"
                                :rules="[v => !!v || 'กรุณาใส่ชื่อผู้ใช้']"
                                required
                                prepend-icon="mdi-pencil"
                                ></v-text-field>
                            <!-- <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                    label="Password"
                                    rules="passwordRules"
                                    maxlength="10"
                                    :counter="10"
                                    required
                                    prepend-icon="mdi-key"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                    type="email"
                                    label="Email"
                                    :rules="[ v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'กรุณาใส่อีเมล์']"
                                    required
                                    prepend-icon="mdi-email"
                                    ></v-text-field>
                                </v-col>
                            </v-row> -->
                            
                                <!-- <v-select
                                
                                :items="itemsstatus"
                                :rules="[v => !!v || 'กรุณาเลือกสถานะ']"
                                label="สถานะ"
                                required
                                prepend-icon="mdi-text-account"
                                ></v-select> -->

                            <v-file-input
                                show-size
                                counter
                                multiple
                                label="File input"
                                @change="upload"
                            ></v-file-input>

                                <!-- <v-checkbox
                                :label="[`ยืนยันการ${formTitle}`]"
                                :rules="[v => !!v || `กรุณากดยืนยันการ${formTitle}`]"
                                ></v-checkbox> -->
                                <v-container>
                                    <v-col
                                        cols="12"
                                        align="center"
                                    >
                                    <v-btn
                                    
                                    depressed
                                    color="success"
                                    class="rounded-pill"
                                    type="submit"
                                    >
                                    บันทึกข้อมูล
                                    </v-btn>

                                    <v-btn
                                    depressed
                                    color="error"
                                    class="rounded-pill"
                                    @click="close"
                                    >
                                    ย้อนกลับ
                                    </v-btn>
                                    </v-col>
                                </v-container>
                            </v-form>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-dialog>
          </v-card-title>
        </base-material-card>
      </v-col>
  </v-container>
</template>

<script>
import Axios from 'axios';
export default {
    name:"sellproducts",
    data() {
        return {
            loading:'',
            editedIndex: -1,
            dialog: false,
            products:{
                img:'',
                name:'',
                stock:'',
                pirec:'',
                detail:'',
            },
            slelctedFile: null,
            showproducts:[],    
        }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'เพิ่มสินค้า' : 'แก้ไขข้อมูลสินค้า'
      },
    },
     created() {
       Axios.get("http://localhost:3000/api/sellproducts")
        .then(response => {
            this.showproducts = response.data.data ;
            this.loading = false;
        }).catch((err) => {
        console.log(err); 
        })
    console.log("SellProducts");
    },
    methods:{
        close () {
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
          this.dialog = false
          this.$refs.form.reset()
        })
      },
        editItem (item) {
            console.log(item);
        this.editedIndex = item
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        
      },
      upload() {
          this.slelctedFile = event.target.files[0];
          this.url = URL.createObjectURL(this.slelctedFile)
      },
      onsubmit(){
          console.log(this.$refs.form.validate());
          const formdata = new FormData();
          formdata.append("files", this.slelctedFile,  this.slelctedFile.name);
          console.log(this.slelctedFile);
          const config = {
              headers: {
                  "Content-Type": "multipart/form-data"
              }
          };
          Axios.put('http://localhost:3000/api/sellproducts/img/1',formdata, config )
      }
    }
}
</script>

<style scss scoped>
    .detailproducts, .tabproducts{
    font-size: 15px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    height: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    }

    .newcardproducts{
        opacity: 0.5;
        transition: 0.5s;
    }
    .newcardproducts:hover{
        opacity: 1;
    }


</style>

