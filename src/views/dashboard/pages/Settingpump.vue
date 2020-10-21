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
              <v-switch
                v-model="settingpump.pump_a"
                :label="`Pump A: ${settingpump.pump_a.toString()}`"
                color="success"
                @change="onsubmit()"
                hide-details
              ></v-switch>
              <v-switch
                v-model="settingpump.pump_b"
                :label="`Pump B: ${settingpump.pump_b.toString()}`"
                color="success"
                @change="onsubmit()"
                hide-details
              ></v-switch>

              <v-switch
                v-model="settingpump.pump_c"
                :label="`Pump C: ${settingpump.pump_c.toString()}`"
                color="success"
                @change="onsubmit()"
                hide-details
              ></v-switch>
              <v-switch
                v-model="settingpump.pump_d"
                :label="`Pump D: ${settingpump.pump_d.toString()}`"
                color="success"
                @change="onsubmit()"
                hide-details
              ></v-switch>
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

      type: null,
      elapse: null,
      settingpump: []
    };
  },

  created() {
    Axios.get("http://localhost:3000/api/settingpump/1").then(response => {
      this.settingpump = response.data.data;
      console.log(response.data.data);
    });
  },
  methods: {
    onsubmit() {
      Axios.put(`http://localhost:3000/api/settingpump/1`, this.settingpump)
        .then(response => {
          if (response.data.statusCode == 201) {
            alert(response.data.message);
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="scss" scoped>
.controlwater,
.setsensor {
  // background-color: rgba(0, 204, 255, 0.863);
}
</style>
