<template>
  <v-container>
        <v-col
        cols="12"
      >
        <base-material-card
          color="info"
          icon="mdi-card-account-details"
          title="ระบบจัดการสมาชิก"
          
        >
        <p>asasdasdas</p>
        <!-- <formuser /> -->
        <v-card-title>
            <v-col></v-col>
            <v-spacer></v-spacer>
            <v-col
                cols="12"
                md="7"
                class="d-flex justify-end mx-0"
            >
                <v-btn
                    depressed
                    text
                >
                    <v-icon>
                        mdi-clipboard-text
                    </v-icon>
                    <v-text
                    class="ml-2"
                    >
                        ทั้งหมด
                    </v-text>
                </v-btn>
                <v-btn
                    depressed
                    text
                >
                    <v-icon>
                        mdi-clipboard-arrow-down-outline
                    </v-icon>
                    <v-text
                    class="ml-2"
                    >
                        ออเดอร์
                    </v-text>
                </v-btn>
                <v-btn
                    depressed
                    text
                >
                    <v-icon>
                        mdi-car
                    </v-icon>
                    <v-text
                    class="ml-2"
                    >
                        กำลังจัดส่ง
                    </v-text>
                </v-btn>
                <v-btn
                    depressed
                    text
                >
                    <v-icon>
                        mdi-check-bold
                    </v-icon>
                    <v-text
                    class="ml-2"
                    >
                        เสร็จสิ้น
                    </v-text>
                </v-btn>
            </v-col>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="listorder"
              :search="search"
              :loading="loading"
              loader-height="2px"
              loading-text="Loading... Please wait"
              color="info"
            >
            <template v-slot:item.status_level="{ item }">
                <v-select
                    v-model="select"
                    :items="items"
                    item-text="state"
                    item-value="abbr"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    ></v-select>
            </template>
            <template v-slot:item.view="{ item }">
                    <v-icon
                    small
                    clas s="mr-2"
                    color="#FFBB29"
                    @click="view(item)"
                    >
                        mdi-eye
                    </v-icon>
            </template>
            </v-data-table>
          </v-card-text>
        </base-material-card>
      </v-col>
  </v-container>
</template>

<script>
export default {
    name:'order',
    data() {
        return {
            listorder:[
                {
                    index:'1',
                    id:'0000001',
                    userName:'Ceo_Ball',
                    password:[
                        {list:'sdfdsf'},
                        {list:'sdfdsf'},
                        {list:'sdfdsf'}
                    ],
                    email:'1,800',
                    status_level:'กำลังส่ง'
                },
                {
                    index:'1',
                    id:'0000001',
                    userName:'Ceo_Ball',
                    password:[
                        {list:'sdfdsf'},
                        {list:'sdfdsf'},
                        {list:'sdfdsf'}
                    ],
                    email:'1,800',
                    status_level:'กำลังส่ง'
                },
            ],
            headers: [
            {text: 'ลำดับ' , value: 'index' ,align: 'center',sortable: false,},
            {text: 'รห้สสั่งซื้อ', value: 'id',align: 'center',sortable: false,},
            { text: 'ชื่อผุ้สั่ง' ,value: 'userName',align: 'center',sortable: false,},
            { text: 'รายการ' , value: 'password',align: 'center',sortable: false,},
            { text: 'ราคา' , value: 'email',align: 'center',sortable: false, },
            {
                text: 'สถานะ', 
                align: 'center',
                sortable: false,
                value: 'status_level',
                width:'15%'
            },
            {
                text: 'ดูรายละเอียด',
                align: 'center',
                sortable: false,
                value: 'view', 
                width:'10%'
            },
          ],
        }
    },
}
</script>

<style>

</style>