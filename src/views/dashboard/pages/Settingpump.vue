<template>
  <v-container id="settingsystem" fluid tag="section">
    <v-row>
      <v-col cols="12" lg="5" class="center">
        <div class="controlwater">
          <base-material-card
            color="info"
            icon="mdi-card-account-details"
            title="ระบบจัดการสมาชิก"
          >
            <v-switch
              v-model="ex01"
              label="ละอองน้ำ"
              color="success"
              value="success"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex02"
              label="ถังปุ๋ย"
              color="success"
              value="success"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex03"
              label="Pump C"
              color="success"
              value="success"
              hide-details
            ></v-switch>
            <v-switch
              v-model="ex04"
              label="Pump D"
              color="success"
              value="success"
              hide-details
            ></v-switch>
          </base-material-card>
        </div>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" lg="6" class="center">
        <!-- --------------------------------------------setsensor---------------------------------- -->
        <div class="setsensor">
          <base-material-card
            color="info"
            icon="mdi-card-account-details"
            title="Pump Auto Setting"
          >
            <v-col cols="12">
              อุณหภูมิ
              <v-slider
                v-model="ex1.val"
                :label="ex1.label"
                :thumb-color="ex1.color"
                prepend-icon="mdi-home-thermometer"
                thumb-label="ticks"
                class="align-center"
                :max="max"
                :min="min"
                hide-details
              />
              ความชื้น
              <v-slider
                v-model="ex2.val"
                :label="ex2.label"
                :thumb-color="ex2.color"
                prepend-icon="mdi-water-percent"
                thumb-label="ticks"
                class="align-center"
                :max="max"
                :min="min"
                hide-details
              />
              ความเข้มของปุ๋ย
              <v-slider
                v-model="ex3.val"
                :label="ex3.label"
                prepend-icon="mdi-virus"
                :thumb-color="ex3.color"
                thumb-label="ticks"
                class="align-center"
                :max="max"
                :min="min"
                hide-details
              />
              ระดับน้ำ
              {{ this.settingpump.water_level }}
              <v-slider
                v-model="settingpump.water_level"
                :label="ex4.label"
                :thumb-color="ex4.color"
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
      settingpump: [],  
      ex1: { label:"sadas", val: "50" ,color: "success" },
      ex2: { val: 50, color: "success" },
      ex3: { val: 50, color: "success" },
      ex4: { color: "success"},
    };
  },

  created() {
    Axios.get("http://localhost:3000/api/settingpump/1").then(response => {
      this.settingpump = response.data.data;
      console.log(response.data.data);
    });
  },
  methods:{
      onsubmit () {
            Axios.put(`http://localhost:3000/api/settingpump/1`, this.settingpump)
            .then(response => {
                if(response.data.statusCode == 201){
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
