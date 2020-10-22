<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        lg="3"
        class="center"
      >
        <v-card
          class="mx-auto rounded-lg text-center"
          max-width="100%"
          color="info"
        >
          <v-card-text>
            <v-row align="center">
              <v-col
                class="headline"
                cols="12"
              >
                {{this.dbrealtime.temp}}  &deg;C
              </v-col>
            </v-row>
          </v-card-text>
          <v-list-item>
          <v-icon>mdi-home-thermometer </v-icon>
            <v-list-item-content>
              <v-list-item-title>
                Temperature
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        lg="3"
      >
        <v-card
          class="mx-auto rounded-lg text-center"
          max-width="100%"
          color="info"
        >
          <v-card-text>
            <v-row align="center">
              <v-col

                class="headline"
                cols="12"
              >

                {{this.dbrealtime.humi}}  &deg;C
              </v-col>
            </v-row>
          </v-card-text>
          <v-list-item>
              <v-icon>mdi-water-percent</v-icon>
            <v-list-item-content>
              <v-list-item-title>
                Humidity
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        lg="3"
      >
        <v-card
          class="mx-auto rounded-lg text-center"
          max-width="100%"
          color="info"
        >
          <v-card-text>
            <v-row align="center">
              <v-col
                class="headline"
                cols="12"
              >
                {{this.dbrealtime.ec}}
              </v-col>
            </v-row>
          </v-card-text>
          <v-list-item>
          <v-icon>mdi-virus </v-icon>
            <v-list-item-content>
              <v-list-item-title>
                Fertilizer intensity
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        lg="3"
      >
        <v-card
          class="mx-auto rounded-lg text-center"
          max-width="100%"
          color="info"
        >
          <v-card-text>
            <v-row align="center">
              <v-col
                class="headline"
                cols="12"
              >
                {{this.dbrealtime.light_int}}
              </v-col>
            </v-row>
          </v-card-text>
          <v-list-item>
          <v-icon>
               mdi-lightbulb-on
              </v-icon>
            <v-list-item-content>
              <v-list-item-title>

                Light intensity
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>

      <!-- --------------------------end showsirsor----------------- -->
      <v-col
        cols="12"
      >
        <v-card
          color="white"
          class="px-1 py-1"
        >

          <v-card-text>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                lg="3"
              >

                <base-material-stats-card
                  color="info"
                  icon="mdi-cup-water"
                  title="Pump A"
                  :value= dbrealtime.pump_a
                  sub-icon="mdi-clock"
                  sub-value="aasds"
                  :sub-text= dbrealtime.updatedAt

                />


              </v-col>

              <v-col
                cols="12"
                sm="6"
                lg="3"
              >
                <base-material-stats-card
                  color="info"
                  icon="mdi-water"
                  title="Pump B"
                  :value= dbrealtime.pump_b
                  sub-icon="mdi-clock"
                  :sub-text= dbrealtime.updatedAt
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                lg="3"
              >
                <base-material-stats-card
                  color="info"
                  icon="mdi-water-plus"
                  title="Pump C"
                  :value= dbrealtime.pump_c
                  sub-icon="mdi-clock"
                  :sub-text= dbrealtime.updatedAt
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                lg="3"
              >
                <base-material-stats-card
                  color="info"
                  icon="mdi-bitbucket"
                  title="Pump D"
                  :value= dbrealtime.pump_d
                  sub-icon="mdi-clock"
                  :sub-text= dbrealtime.updatedAt
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

      </v-col>

    <!-- --------------------------end สถานะปั้ม ------------------------- -->

      <v-col
        cols="12"
      >
        <base-material-card
          color="warning"
          class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              :
            </div>

            <div class="subtitle-1 font-weight-light">
              :
            </div>
          </template>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
            />
          </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Axios from "axios";

  export default {
    name: 'DashboardDashboard',

    data () {
      return {
        headers: [
          {
            sortable: false,
            text: 'ID',
            value: 'id',
          },
          {
            sortable: false,
            text: 'Name',
            value: 'name',
          },
          {
            sortable: false,
            text: 'Salary',
            value: 'salary',
            align: 'right',
          },
          {
            sortable: false,
            text: 'Country',
            value: 'country',
            align: 'right',
          },
          {
            sortable: false,
            text: 'City',
            value: 'city',
            align: 'right',
          },
        ],
      dbrealtime: [
      ],

      pump_status:[


      ]

      }
    }, 

    created() {
    Axios.get("http://localhost:3000/api/dbrealtime/1").then(response => {
      this.dbrealtime = response.data.data;

    });
  },



  }
</script>
