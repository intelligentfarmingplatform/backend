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
              xl="2"
                v-for="items in showproducts "
                :key="items"
              >
            <v-card
                class="cardproducts"
                width="100%"
                height="450"
                loading='true'
                loader-height
            >
                <v-img
                height="150"
                :src="`https://intelligentfarmingplatform.herokuapp.com://localhost:3000/${items.productimg}`"
                ></v-img>

                <v-card-title  class="mt-5 mx-auto">{{ items.productname }}</v-card-title>
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
                <v-card-actions
                    class="boxactions"
                >
                <v-btn
                    color="#FFBB29"
                    depressed
                    max-width="50%"
                    class="mx-auto rounded-pill"
                    @click="editItem(items)"
                >
                    แก้ไขสินค้า
                </v-btn>
                <v-btn
                    color="#FF6347"
                    depressed
                    max-width="45%"
                    class="mx-auto rounded-pill"
                    @click="del(items)"
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
                            xl="2"
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
                                prepend-icon="mdi-account"
                                v-model="products.serial_number"
                                disabled
                                required
                                ></v-text-field>
                            
                                <v-text-field
                                v-model="products.productname"
                                label="ชื่่อสินค้า"
                                :rules="[v => !!v || 'กรุณาใส่ชื่อสินค้า']"
                                required
                                prepend-icon="mdi-tree"
                                ></v-text-field>
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                    v-model="products.productprice"
                                    label="ราคา"
                                    type="number"
                                    :rules="[v => !!v || 'กรุณาใส่ราคาสินค้า']"
                                    required
                                    prepend-icon="mdi-cash"
                                    suffix="บาท"
                                    ></v-text-field>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                >
                                    <v-text-field
                                    v-model="products.productnumber"
                                    label="จำนวน"
                                    type="number"
                                    :rules="[v => !!v || 'กรุณาใส่จำนวนสินค้า']"
                                    required
                                    prepend-icon="mdi-checkbox-multiple-blank"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                                                
                            <v-textarea
                            v-model="products.productdetail"
                            label="ลายละเอียด"
                            rows="1"
                            auto-grow
                            :rules="[v => !!v || 'กรุณาใส่ลายละเอียดสินค้า']"
                            required
                            prepend-icon="mdi-comment"
                            ></v-textarea>

                            <v-file-input
                                accept="image/*"
                                show-size
                                counter
                                label="รูปภาพสินค้า"
                                required
                                @change="upload"
                                prepend-icon="mdi-file-image"
                                :rules="this.editedIndex > -1 ? rulesimgedit : rulesimg "
                            ></v-file-input>

                                <v-checkbox
                                :label="[`ยืนยันการ${formTitle}`]"
                                :rules="[v => !!v || `กรุณากดยืนยันการ${formTitle}`]"
                                ></v-checkbox>
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
                serial_number:'',
                productname:'',
                productpice:'',
                productnumber:'',
                productdetail:'',
                producttab:'',
                productimg:[],
            },
            slelctedFile: null,
            showproducts:[],
            error:[],
            rulesimg:[
                v => !!v || 'กรุณาเพิ่มรูปภาพ',
                value => !value || value.size < 20000000 || 'ไฟลืมีขนาดเกิน 20 MB',
                value => !value || value.type.startsWith("image") || 'กรุณาเลือกไฟล์รูปภาพ',
            ],   
            rulesimgedit:[
                value => !value || value.size < 20000000 || 'ไฟลืมีขนาดเกิน 20 MB',
                value => !value || value.type.startsWith("image") || 'กรุณาเลือกไฟล์รูปภาพ',
            ]   
        }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'เพิ่มสินค้า' : 'แก้ไขข้อมูลสินค้า'
      },
    },
     created() {
       Axios.get(`https://intelligentfarmingplatform.herokuapp.com://localhost:3000/api/sellproducts/`)
        .then(response => {
            this.showproducts = response.data.data ;
            this.loading = false;
        }).catch((err) => {
        console.log(err); 
        })
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
        this.editedIndex = this.showproducts.indexOf(item);
        this.products = Object.assign({},item);
        this.dialog = true;
        
      },
      upload() {
          this.slelctedFile = event.target.files[0];
          this.url = URL.createObjectURL(this.slelctedFile)
      },
      onsubmit(){
          if(this.$refs.form.validate()){
              if(this.editedIndex > -1){
                console.log(this.products.id , this.products);
                Axios.put(`https://intelligentfarmingplatform.herokuapp.com/api/sellproducts/${this.products.id}`, this.products)
                .then(response => {
                     if(response.data.statusCode == 201){
                         if(this.slelctedFile == null){
                            Object.assign(this.showproducts[this.editedIndex], this.products)
                            this.products.reset;
                            this.close()
                         }
                            const id = response.data.id;
                            const formdata = new FormData();
                            formdata.append("files", this.slelctedFile,  this.slelctedFile.name);
                            const config = {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            };
                            Axios.put(`https://intelligentfarmingplatform.herokuapp.com/api/sellproducts/img/${id}`,formdata, config )
                            .then(response => {
                               if(response.data.statusCode == 201){
                                   console.log(response);
                                   const namefile = response.data.namefile;
                                   Object.assign(this.showproducts[this.editedIndex], this.products)
                                   this.close();
                                   location.reload();
                                //    เพิ่มเติมให้มันเปลี่ยนรูป #ff0000
                               }
                            }).catch(err => {
                                this.$swal({
                                title: "ไม่สำเร็จ",
                                text: err.response.data.message,
                                icon: "error",
                                showConfirmButton: true,
                                confirmButtonText: 'ยืนยัน'
                                }).then(() => {
                                    this.slelctedFile = null;
                                    this.products.productimg.value = '';
                                })
                            });
                    }
                })
            }else{
                    Axios.post("https://intelligentfarmingplatform.herokuapp.com/api/sellproducts", this.products)
                    .then(response => {
                        if(response.data.statusCode == 201){
                        const id = response.data.data.id
                        const dataresponse = response.data.data;
                        const formdata = new FormData();
                        formdata.append("files", this.slelctedFile,  this.slelctedFile.name);
                        const config = {
                            headers: {
                                "Content-Type": "multipart/form-data"
                            }
                        };
                        Axios.put(`https://intelligentfarmingplatform.herokuapp.com/api/sellproducts/img/${id}`,formdata, config )
                            .then(response => {
                                if(response.data.statusCode == 201){
                                    this.$swal({
                                    title: "สำเร็จ",
                                    text: "ทำการเพิ่มสินค้าสำเร็จ",
                                    icon: "success"
                                    });
                                    dataresponse.productimg = response.data.namefile //dataresponse คืออะไร #ff0000
                                    this.showproducts.push(dataresponse);
                                    this.close()
                                }
                            }).catch(err => {
                                this.$swal({
                                title: "ไม่สำเร็จ",
                                text: err.response.data.message,
                                icon: "error",
                                showConfirmButton: true,
                                 // timer: 1000
                                confirmButtonText: 'ยืนยัน'
                                })
                                this.slelctedFile = null
                            });
                        }
                    }).catch(err => console.log(err));  
             }
           }  
      },
      del(item){
        this.$swal({
          title: 'ต้องการลบข้อมูล',
          text: "คุณต้องการลบข้อมูลหรือไม",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'ยืนยัน',
          cancelButtonText: 'ยกเลิก'
          })
          .then((result) => {
              if (result.value) {
                Axios.delete(`https://intelligentfarmingplatform.herokuapp.com/api/sellproducts/${item.id}`)
                    .then(response => {
                        if(response.data.statusCode == 204){
                            console.log(response);
                                this.$swal({
                                title: "เสร็จสิ้น",
                                text: "ทำการลบสินค้าเสร็จสิ้น",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1000
                                })
                            Axios.delete(`https://intelligentfarmingplatform.herokuapp.com/api/sellproducts/img/${item.productimg}`)
                                .then(response => {
                                    if(response.data.statusCode == 204){
                                        this.$swal({
                                        title: "เสร็จสิ้น",
                                        text: "ทำการลบสินค้าเสร็จสิ้น",
                                        icon: "success",
                                        showConfirmButton: false,
                                        timer: 1000
                                        })
                                        const index = this.showproducts.indexOf(item) 
                                        this.showproducts.splice(index, 1)
                                    }
                                }).catch((err) => {
                                    this.$swal({
                                    title: "ไม่สำเร็จ",
                                    text: "ไม่สามารถลบสินค้าได้",
                                    icon: "error",
                                    showConfirmButton: true,
                                    confirmButtonText: 'ยืนยัน'
                                    })
                                });

                        }
                    }).catch((err) => {
                        this.$swal({
                            title: "ไม่สำเร็จ",
                            text: "ไม่สามารถลบสินค้าได้",
                            icon: "error",
                            showConfirmButton: true,
                            confirmButtonText: 'ยืนยัน'
                            })
                    });
              }
          })
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

    .boxactions{
        position: absolute;
        bottom: 5px;
        width: 100%;
    }


</style>

