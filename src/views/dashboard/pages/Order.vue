<template>
  <v-container>
    <v-col cols="12">
      <base-material-card
        color="info"
        icon="mdi-card-account-details"
        title="ระบบจัดการสมาชิก"
      >
        <!-- <formuser /> -->
        <v-card-title>
          <v-col cols="12" lg="4" md="4">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              sort-by="calories"
              color="info"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="7" class="d-flex justify-end mx-0">
            <v-btn-toggle
              v-model="toggle_exclusive"
              mandatory
              borderless="none"
            >
              <v-btn depressed text @click="order('all')" class="rounded-pill">
                <v-icon> mdi-clipboard-text </v-icon>
                <v-text class="ml-2"> ทั้งหมด </v-text>
              </v-btn>
              <v-btn
                depressed
                text
                @click="order('order')"
                class="rounded-pill mx-1"
              >
                <v-icon> mdi-clipboard-arrow-down-outline </v-icon>
                <v-text class="ml-2"> ออเดอร์ </v-text>
              </v-btn>
              <v-btn
                depressed
                text
                @click="order('delivery')"
                class="rounded-pill mx-1"
              >
                <v-icon> mdi-car </v-icon>
                <v-text class="ml-2"> กำลังจัดส่ง </v-text>
              </v-btn>
              <v-btn
                depressed
                text
                @click="order('success')"
                class="rounded-pill"
              >
                <v-icon> mdi-check-bold </v-icon>
                <v-text class="ml-2"> เสร็จสิ้น </v-text>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="filter"
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
              <v-icon small clas s="mr-2" color="#FFBB29" @click="view(item)">
                mdi-eye
              </v-icon>
            </template>
          </v-data-table>
        </v-card-text>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title class="headline">
              <span>ข้อมูลออเดอร์</span>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="3"> รห้สการซื้อ </v-col>
                <v-col cols="9"> sdasdasda </v-col>
              </v-row>
              <v-row>
                <v-col cols="3"> ชื่อผู้สั่ง </v-col>
                <v-col cols="3"> ชื่อผู้สั่ง </v-col>
              </v-row>
              ที่อยู่ที่ต้องจัดส่ง
              <v-col cols="12">
                adasdasdasdasdasdadsasddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </v-col>
              <v-row>
                <v-col cols="3"> เบอร์โทร </v-col>
                <v-col cols="9"> sdasdasd </v-col>
              </v-row>
              รายการสินค้า
              <v-data-table
                :headers="headers"
                :items="listusers"
                :search="search"
                :loading="loading"
                loader-height="2px"
                loading-text="Loading... Please wait"
                color="info"
                hide-default-footer
              />
            </v-container>
          </v-card>
        </v-dialog>
      </base-material-card>
    </v-col>
  </v-container>
</template>

<script>
import Axios from "axios";

export default {
  name: "order",
  data() {
    return {
      loading: true,
      filter: [],
      dialog: false,
      listorder: [],
      search: "",
      headers: [
        { text: "รห้สสั่งซื้อ", value: "id", align: "center", sortable: false },
        {
          text: "ชื่อผุ้สั่ง",
          value: "nameuser",
          align: "center",
          sortable: false,
        },
        {
          text: "รายการ",
          value: "lists_order",
          align: "center",
          sortable: false,
        },
        {
          text: "ราคา",
          value: "totalpice_order",
          align: "center",
          sortable: false,
        },
        {
          text: "สถานะ",
          align: "center",
          sortable: false,
          value: "status_order",
          width: "15%",
        },
        {
          text: "ดูรายละเอียด",
          align: "center",
          sortable: false,
          value: "view",
          width: "10%",
        },
      ],
    };
  },
  created() {
    Axios.get("http://localhost:3000/api/order").then((response) => {
      this.listorder = response.data.data;
      this.filter = this.listorder;
      this.loading = false;
    });
  },
  //   mounted(){
  //       this.order("all")
  //       this.filter = this.listorder
  //   },
  methods: {
    view(item) {
      this.dialog = true;
    },
    order(item) {
      let dataall = this.listorder;
      if (item == "all") {
        this.filter = this.listorder;
      } else {
        let datafilter = dataall.filter(
          (status) => status.status_order == item
        );
        this.filter = datafilter;
      }
    },
  },
};
</script>

<style></style>
