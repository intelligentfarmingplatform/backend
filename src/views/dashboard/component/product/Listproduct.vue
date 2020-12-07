<template>
  <v-container>
    <v-col cols="12">
      <v-card>
        <v-card-text>
          <v-col md="5">
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="basil"
              grow
            >
              <v-tab v-for="item in items" :key="item">
                {{ item.namehad }}
                ({{ item.count }})
              </v-tab>
            </v-tabs>
          </v-col>
        </v-card-text>
        <v-col>
          <v-card-title>
            สินค้า {{ this.showproducts.length }} รายการ
          </v-card-title>
          <div class="showproduct">
            <v-row>
              <v-col
                cols="12"
                sm="6"
                m="4"
                md="3"
                xl="2"
                v-for="items in this.showproducts"
                :key="items.id"
              >
                <v-card elevation="0" width="100%" class="product-card-item">
                  <div class="product-image">
                    <v-img
                      :src="`http://localhost:3000/product/${items.productimg}`"
                    ></v-img>
                    <div class="product-image-overlay"></div>
                  </div>
                  <div class="productdetail">
                    <div class="product-name T-dot">
                      {{ items.productname }}
                    </div>
                    <div class="product-info">
                      <div class="product-price">
                        ฿ {{ items.productprice }}
                      </div>
                      <div class="product-stock">
                        คลัง {{ items.productnumber }}
                      </div>
                    </div>
                    <div class="product-detail T-dot">
                      {{ items.productdetail }}
                    </div>
                  </div>
                  <div class="product-actions">
                    <v-icon color="#FFBB29">mdi-pencil</v-icon>
                    <v-icon color="#FF6347">mdi-delete</v-icon>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import Axios from "axios";
export default {
  name: "Listproduct",
  data() {
    return {
      items: [
        {
          namehad:"ทั้งหมด",
          count:'1'
        },
        {
          namehad:"หมด",
          count:'2'
        },
        {
          namehad:"กำลังปลูก",
          count:'3'
        }
      ],
      showproducts: [],
    };
  },
  mounted() {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    Axios.get(`${process.env.VUE_APP_APIURL}/api/sellproducts/`, config)
      .then((response) => {
        // console.log(response);
        this.showproducts = response.data.data;
        this.products.nameseller = this.datauser.tbl_userdetail.name;
        this.items[0].count = response.data.data
        console.log();
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.T-dot {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  height: inherit;
  text-overflow: ellipsis;
  overflow: hidden;
}
.showproduct {
  //   display: flex;
  padding: 0px 50px;

  .product-card-item:hover {
    margin-top: 20px !important;
    border: 1px solid #00000000;
    border-radius: 0 px;
    -webkit-box-shadow: 0px 0px 36px -12px rgba(0, 0, 0, 0.73) !important;
    -moz-box-shadow: 0px 0px 36px -12px rgba(0, 0, 0, 0.73) !important;
    box-shadow: 0px 0px 36px -12px rgba(0, 0, 0, 0.73) !important;
  }
  .product-card-item {
    background-color: #fff;
    border-radius: 15px;
    border: 1px solid #00000029;
    transition: 0.5s ease-out;

    .product-image {
      display: flex;
      //   padding: 10px;
      height: 150px;
      background-size: cover;
    }
    .productdetail {
      margin-top: 5px;
      padding: 15px;
      .product-name {
        font-weight: bold;
      }
      .product-info {
        display: flex;
        justify-content: space-between;
        .product-price {
          color: #ff6347;
        }
      }
    }
    .product-detail {
      margin-top: 5px;
    }
    .product-actions {
      //   position: absolute;
      bottom: 1px;
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 5px 0px;
      margin-top: 15px;
      border-top: 1px solid #00000033;
    }
  }
}
</style>
