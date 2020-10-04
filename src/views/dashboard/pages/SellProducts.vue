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
            <v-card
                :loading="loading"
                class="mx-5 cardproducts"
                max-width="250"
                height="450"
            >
                <v-img
                height="150"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title class="mt-5">ชื่อสินค้า</v-card-title>
                    <v-list-item>
                        <v-list-item-title>ราคา บาท</v-list-item-title>
                        <v-list-item-subtitle class="text-right">จำนวน</v-list-item-subtitle>
                    </v-list-item>
                <v-card-text class="mx-0 my-0">
                <div class="detailproducts">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                </v-card-text>
                <v-divider class="mx-1"></v-divider>
                <v-card-title>Tab</v-card-title>
                <v-card-text class="mx-0 my-0">
                <div class="tabproducts">Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    color="#FFBB29"
                    depressed
                    max-width="50%"
                    class="mx-0 rounded-pill"
                    
                    @click="reserve"
                >
                    แก้ไขสินค้า
                </v-btn>
                <v-btn
                    color="#FF6347"
                    depressed
                    max-width="50%"
                    class="rounded-pill"
                    @click="reserve"
                >
                    ลบสินค้า
                </v-btn>
                </v-card-actions>
            </v-card>
            <v-card
                :loading="loading"
                class="mx-5 newcardproducts d-flex "
                width="250"
                height="450"
                color="info"
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
          </v-card-title>
        </base-material-card>
      </v-col>
  </v-container>
</template>

<script>
export default {
    name:"Sellproducts",
    products:{
        img:'',
        name:'',
        stock:'',
        pirec:'',
        detail:'',
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

