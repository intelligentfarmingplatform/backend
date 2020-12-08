<template>
  <v-container id="settingpump" fluid tag="section">
    <v-row>
      <v-col class="setting d-flex">
        <v-col>
          <v-row class="profileserial">
            <v-card class="d-flex" width="100%">
              <div class="d-flex detail">
                <div class="img">
                  <img
                    src="https://cache.gmo2.sistacafe.com/images/uploads/summary/image/41751/3e9fea8de38ad5631fd691a1e9c54c26.jpg"
                    alt=""
                  />
                </div>
                <v-col class="detaillist">
                  <span>ชื่อ : ...............</span>
                  <span>ชื่อ : ...............</span>
                  <span>ชื่อ : ...............</span>
                  <span>ชื่อ : ...............</span>
                </v-col>
              </div>
            </v-card>
          </v-row>
          <v-row>
            <v-col cols="12" lg="9" class="center">
              <!-- --------------------------------------------setsensor---------------------------------- -->
              <div class="setsensor">
                <base-material-card
                  color="info"
                  icon="mdi-tune"
                  title="Pump Control"
                >
                  <v-col cols="12">
                    อุณหภูมิ
                    <v-slider
                      v-model="settingpump.temp"
                      :label="settingpump.temp"
                      prepend-icon="mdi-home-thermometer"
                      thumb-label="ticks"
                      @change="onsubmit()"
                      class="align-center"
                      :max="max"
                      :min="min"
                      hide-details
                    />
                    ความชื้น
                    <v-slider
                      v-model="settingpump.humi"
                      :label="settingpump.humi"
                      prepend-icon="mdi-water-percent"
                      thumb-label="ticks"
                      @change="onsubmit()"
                      class="align-center"
                      :max="max"
                      :min="min"
                      hide-details
                    />
                    ความเข้มของปุ๋ย
                    <v-slider
                      v-model="settingpump.ec"
                      :label="settingpump.ec"
                      prepend-icon="mdi-virus"
                      @change="onsubmit()"
                      thumb-label="ticks"
                      class="align-center"
                      :max="max"
                      :min="min"
                      hide-details
                    />
                    ระดับน้ำ
                    <v-slider
                      v-model="settingpump.water_level"
                      :label="settingpump.water_level"
                      @change="onsubmit()"
                      prepend-icon="mdi-water-polo"
                      thumb-label="ticks"
                      class="align-center"
                      :max="max"
                      :min="min"
                      hide-details
                    />
                  </v-col>
                </base-material-card>
              </div>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" lg="3" class="center">
              <div class="controlwater">
                <base-material-card
                  color="info"
                  icon="mdi-tune-variant"
                  title="Pump"
                >
                  <v-container fluid>
                    <p>Pump A</p>
                    <vs-switch
                      v-model="settingpump.pump_a"
                      :label="settingpump.pump_a"
                      vs-value
                      color="success"
                      @change="onsubmit()"
                    >
                      <template #off> Off </template>
                      <template #on> On </template>
                    </vs-switch>
                    <br />

                    <p>Pump B</p>

                    <vs-switch
                      v-model="settingpump.pump_b"
                      label="Pump B"
                      color="success"
                      @change="onsubmit()"
                    >
                      <template #off> Off </template>
                      <template #on> On </template>
                    </vs-switch>

                    <br />
                    <p>Pump C</p>

                    <vs-switch
                      v-model="settingpump.pump_c"
                      label="Pump C"
                      color="success"
                      @change="onsubmit()"
                    >
                      <template #off> Off </template>
                      <template #on> On </template>
                    </vs-switch>

                    <br />
                    <p>Pump D</p>

                    <vs-switch
                      v-model="settingpump.pump_d"
                      label="Pump D"
                      color="success"
                      @change="onsubmit()"
                    >
                      <template #off> Off </template>
                      <template #on> On </template>
                    </vs-switch>
                  </v-container>
                </base-material-card>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="2" class="showserial">
          <v-card>
            <v-card-title class="align-center"> Serial </v-card-title>
            <v-list>
              <v-list-item class="justify-center">
                <v-btn class="ma-0" @click="filter(item)"> xcvxcv </v-btn>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Axios from "axios";
export default {
  name: "settingpump",
  data() {
    return {
      type: null,
      elapse: null,
      settingpump: "",
    };
  },
  created() {
    Axios.get("http://localhost:3000/api/settingpump/1").then((response) => {
      this.settingpump = response.data.data;
      console.log("dataLoad", this.settingpump);
    });
  },
  methods: {
    onsubmit() {
      Axios.put(`http://localhost:3000/api/settingpump/1`, this.settingpump)
        .then((response) => {
          if (response.data.statusCode == 201) {
            alert(response.data.message);
          }
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang="scss" scoped>
.setting {
  padding: 0px 14px;
  .setsensor {
    height: 90%;

    .v-card {
      height: 100%;
    }
  }

  .profileserial {
    padding: 0px 14px;
    .detail {
      margin: 20px auto;
      align-items: center;
      .detaillist {
        display: grid;
      }
    }
    img {
      margin-right: 15px;
      height: 100px;
      width: 100px;
      border-radius: 100%;
    }
    .img {
      border-right: 2px solid rgba(0, 0, 0, 0.089);
    }
  }

  .showserial {
    padding: 40px 10px;
    .v-card {
      // margin-top: 5px;
      margin: 0px;
      height: 100%;
    }
  }
}

@media screen and (max-width: 958px) {
  .setting {
    display: flex;
    flex-direction: column-reverse;
    padding: 0px;
    .showserial {
      width: 100%;
      padding: 0px 14px;
      .v-card {
        height: auto;
      }
    }
  }
}
</style>
