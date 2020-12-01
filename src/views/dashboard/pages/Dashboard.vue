<template>
  <v-container id="dashboard" fluid tag="section">
    <v-row class="showdata">
      <v-col> 
        <v-row>
          <v-col cols="12" sm="5" lg="5">
            <div class="datawater">
              <card>
                <h1>Water</h1>
                <div class="data">
                  <img src="/water.png" alt="" />
                  <h1>{{ this.dbrealtime.water_level }}%</h1>
                </div>
              </card>
            </div>
        </v-col>
        <v-spacer />
        <v-col cols="12" sm="7" lg="7">
          <div class="datasensor">
            <card>
              <v-icon> mdi-water-percent </v-icon>
              <h1>{{ this.dbrealtime.temp }}%</h1>
              <p>Temp</p>
            </card>

            <card>
              <v-icon> mdi-water-percent </v-icon>
              <h1>{{ this.dbrealtime.humi }}%</h1>
              <p>Humi</p>
            </card>

            <card>
              <v-icon> mdi-water-percent </v-icon>
              <h1>
                {{ this.dbrealtime.light_int }}
              </h1>
              <p>light</p>
            </card>

            <card>
              <v-icon> mdi-water-percent </v-icon>
              <h1>
                {{ this.dbrealtime.ec }}
              </h1>
              <p>ec</p>
            </card>
          </div>
      </v-col>
      </v-row> 

<!----------------------------end showsirsor----------------- -->
        <v-col cols="12" class="statuspump">
          <v-card color="white" >
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" lg="3">
                  <base-material-stats-card
                    color="info"
                    icon="mdi-cup-water"
                    title="Pump A"
                    :value="dbrealtime.pump_a"
                    sub-icon="mdi-clock"
                    sub-value="aasds"
                    :sub-text="dateConvert"
                  />
                </v-col>

                <v-col cols="12" sm="6" lg="3">
                  <base-material-stats-card
                    color="info"
                    icon="mdi-water"
                    title="Pump B"
                    :value="dbrealtime.pump_b"
                    sub-icon="mdi-clock"
                    :sub-text="dateConvert"
                  />
                </v-col>
                <v-col cols="12" sm="6" lg="3">
                  <base-material-stats-card
                    color="info"
                    icon="mdi-water-plus"
                    title="Pump C"
                    :value="dbrealtime.pump_c"
                    sub-icon="mdi-clock"
                    :sub-text="dateConvert"
                  />
                </v-col>
                <v-col cols="12" sm="6" lg="3">
                  <base-material-stats-card
                    color="info"
                    icon="mdi-bitbucket"
                    title="Pump D"
                    :value="dbrealtime.pump_d"
                    sub-icon="mdi-clock"
                    :sub-text="dateConvert"
                  />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-col>
      <v-col
        cols="2"
        class="showserial"
      >
        <v-card>
          <v-card-title class="align-center">
            Serial
          </v-card-title>
          <v-list >
            <v-list-item
              v-for="item in datauser.tbl_userserials"
              :key="item.id"
              class="justify-center"
            >
              <v-btn class="ma-0" @click="filter(item)">
                {{item.name}}
              </v-btn>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!-- --------------------------end สถานะปั้ม ------------------------- -->
    <v-col cols="12">
      <base-material-card color="warning" class="px-5 py-3">
        <template v-slot:heading>
          <v-col cols="12">
            <div class="display-2 font-weight-light">รายการย้อนหลังสถานะ</div>
          </v-col>

          <!-- <div class="subtitle-1 font-weight-light">
              :
            </div> -->
        </template>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="dblist"
            :loading="loading"
            loader-height="2px"
            loading-text="Loading... Please wait"
            color="info"
          >
            <template v-slot:item.createdAt="{ item }">
              {{ formatDate(item.updatedAt) }}
            </template>
            <template v-slot:item.pump_a="{ item }">
              <v-chip :color="item.pump_a === 'on' ? '#4CAF50' : '#FF6347'">
                {{ item.pump_a }}
              </v-chip>
            </template>
            <template v-slot:item.pump_b="{ item }">
              <v-chip :color="item.pump_b === 'on' ? '#4CAF50' : '#FF6347'">
                {{ item.pump_b }}
              </v-chip>
            </template>
            <template v-slot:item.pump_c="{ item }">
              <v-chip :color="item.pump_c === 'on' ? '#4CAF50' : '#FF6347'">
                {{ item.pump_c }}
              </v-chip>
            </template>
            <template v-slot:item.pump_d="{ item }">
              <v-chip :color="item.pump_d === 'on' ? '#4CAF50' : '#FF6347'">
                {{ item.pump_d }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </base-material-card>
    </v-col>
  </v-container>
</template>

<script>
import Axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  name: "DashboardDashboard",

  data() {
    return {
      headers: [
        { text: "ID", value: "id", sortable: false, align: "center" },
        { text: "อุณหภูมิ", value: "temp" },
        { text: "ความชื้น", value: "humi" },
        { text: "ความเข้มของแสง", value: "light_int" },
        { text: "ความเข้มของปุ๋ย", value: "ec" },
        { text: "ถังปุ๋ย", value: "pump_a", sortable: false },
        { text: "ถังน้ำ", value: "pump_b", sortable: false },
        { text: "ละอองน้ำ", value: "pump_c", sortable: false },
        { text: "...", value: "pump_d", sortable: false },
        { text: "วันที่/เวลา", value: "createdAt" },
      ],
      dbrealtime: [],
      dblist: [],
      loading: true,
      dateConvert: "",
      updatedAtConvert:"",
    };
  },
  computed: {
  ...mapState(["datauser"]),
  },

  mounted() {
   
  },
  methods: {
    filter(item){
      console.log(item);
    },
    formatDate(value) {
       return  MOMENT(value).format(
            "DD/MM/YYYY  HH:mm:ss"
          );
    }, 
  },
};
</script>

<style lang="scss" scoped>
card{
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.showdata {
  padding: 0px 14px;

  .datawater {
    height: 100%;
    card {
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 100%;

      .data {
        position: relative;
        img {
          width: 200px;
          height: 200px;
          opacity: 0.5;
        }

        h1 {
          font-size: 35px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

      }
    }
  }
  .datasensor {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
    height: 100%;

    card {
      width: 50%;
      flex: 1 1 250px;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      padding: 10px;

      .v-icon {
        font-size: 45px;
      }

      h1 {
        margin-top: 10px;
      }

      p {
        margin: 10px 0px 0px 0px;
      }
    }
  }
  .showserial{
    padding: 25px 10px;
    .v-card {
      margin-top: 0px;
      // margin: 0px;
      height: 100%;
    }
  }
}

.statuspump {
  padding: 0px;
}

@media screen and (min-width: 2200px) {
  .datasensor {
    margin: 0px !important;

    card {
      margin: 0px 10px !important;
    }
  }
}

// @keyframes img {
//   0% {
//     transform: rotateZ(0deg);
//   }
//   100% {
//     transform: rotateZ(360deg);
//   }
// }
</style>
