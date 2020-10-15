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
                :src="`http://localhost:3000/${items.productimg}`"
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
                                v-model="products.sell_id"
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
                                :text-value="products.productimg"
                                show-size
                                counter
                                multiple
                                label="รูปภาพสินค้า"
                                required
                                @change="upload"
                                prepend-icon="mdi-file-image"
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
    <!-- <v-snackbar
      :multi-line="multiLine"
      :value="alert"
      color="blue-grey"
      absolute
      right
      top
    >
      Lorem ipsum dolor sit amet consectetur.
    </v-snackbar> -->
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
                sell_id:'',
                productname:'',
                productpice:'',
                productnumber:'',
                productdetail:'',
                producttab:'',
                productimg:''
            },
            slelctedFile: null,
            showproducts:[],
            error:[]   
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
                Axios.put(`http://localhost:3000/api/sellproducts/${this.products.id}`, this.products)
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
                            Axios.put(`http://localhost:3000/api/sellproducts/img/${id}`,formdata, config )
                            .then(response => {
                               if(response.data.statusCode == 201){
                                   console.log(response);
                                   const namefile = response.data.namefile;
                                   Object.assign(this.showproducts[this.editedIndex], this.products)
                                   this.products.reset;
                                   this.close()
                                //    เพิ่มเติมให้มันเปลี่ยนรูป #ff0000
                               }
                            }).catch(err => console.log(err));
                    }
                })
            }else{
                Axios.post("http://localhost:3000/api/sellproducts", this.products)
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
                    Axios.put(`http://localhost:3000/api/sellproducts/img/${id}`,formdata, config )
                        .then(response => {
                            if(response.data.statusCode == 201){
                                dataresponse.productimg = response.data.namefile //dataresponse คืออะไร #ff0000
                                this.showproducts.push(dataresponse);
                                this.close()
                            }
                        }).catch(err => {
                            console.log(err.response.data.message);
                            // *****เก็บลายเอียด****************#ff0000
                        });
                    }
                }).catch(err => console.log(err));
             }
           }  
      },
      del(item){
          console.log(item);
          Axios.delete(`http://localhost:3000/api/sellproducts/${item.id}`)
              .then(response => {
                  if(response.data.statusCode == 204){
                     
                       Axios.delete(`http://localhost:3000/api/sellproducts/img/${item.productimg}`)
                        .then(response => {
                            if(response.data.statusCode == 204){
                                console.log("Delete Products Success");
                                const index = this.showproducts.indexOf(item) 
                                this.showproducts.splice(index, 1)
                            }else{
                                console.log("Delete Img Products Fail");
                            }
                        }).catch((err) => console.log(err));

                  }else{
                      console.log("Delete Products Fail");
                  }
              }).catch((err) => console.log(err));
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

