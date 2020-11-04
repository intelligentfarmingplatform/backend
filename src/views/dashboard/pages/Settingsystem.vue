<template>
  <v-container id="settingpump" fluid tag="section">
    <v-row>
      <v-col cols="12" lg="7" class="center">
        <!-- --------------------------------------------setsensor---------------------------------- -->
        <div class="setsensor">
          <base-material-card color="info" icon="mdi-tune" title="Pump Control">
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

      <v-col cols="12" lg="5" class="center">
        <div class="controlwater">
          <base-material-card color="info" icon="mdi-tune-variant" title="Pump">
            <v-container fluid>
              <!-- :label="`Pump A: ${settingpump.pump_a.toString()}`" -->

              <!-- <v-switch
                v-model="settingpump.pump_a"
                label="Pump A"
                color="success"
                @change="onsubmit()"
                hide-details
              ></v-switch> -->

              <p>Pump A</p>
              <vs-switch
                v-model="settingpump.pump_a"
                :label="`Pump A`"
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
                v-model="pumpc"
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
                v-model="pumpd"
                label="Pump D"
                color="success"
                @change="onsubmit()"
              >
                <template #off> Off </template>
                <template #on> On </template>
              </vs-switch>

              <!-- :label="`Pump B: ${settingpump.pump_b.toString()}`" -->
              <!-- <v-switch
                v-model="settingpump.pump_b"
                label="Pump B"
                color="success"
                @change="onsubmit()"
                hide-details
              ></v-switch> -->

              <!-- :label="`Pump C: ${pumpc.toString()}`" -->
              <!-- <v-switch
                v-model="settingpump.pump_c"
                label="Pump C"
                color="success"
                @change="onsubmit()"
                hide-details
              ></v-switch> -->

              <!-- :label="`Pump D: ${pumpd.toString()}`" -->
              <!-- <v-switch
                v-model="settingpump.pump_d"
                label="Pump D"
                color="success"
                @change="onsubmit()"
                hide-details -->
              <!-- ></v-switch> -->
            </v-container>
          </base-material-card>
        </div>
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
      pumpa: true,
      pump_b: true,
      pumpc: false,
      pumpd: false,
      type: null,
      elapse: null,
      settingpump: ["On", "Off"],
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
.controlwater .setsensor {
  // background-color: rgba(0, 204, 255, 0.863);
}
</style>
