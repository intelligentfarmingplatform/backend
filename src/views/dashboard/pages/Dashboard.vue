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
            <v-list-item-content>
              <v-list-item-title>
                Light intensity
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
                {{this.dbrealtime.pump_a}}
              </v-col>
            </v-row>
          </v-card-text>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                Pump A
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
                {{this.dbrealtime.pump_b}}
              </v-col>
            </v-row>
          </v-card-text>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                Pump B
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
                {{this.dbrealtime.pump_c}}
              </v-col>
            </v-row>
          </v-card-text>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                Pump C
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
                {{this.dbrealtime.pump_d}}
              </v-col>
            </v-row>
          </v-card-text>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                Pump D
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
                sm="3"
                lg="3"
              >
                <base-material-stats-card
                  color="info"
                  icon="mdi-twitter"
                  title="Followers"
                  value="+245"
                  sub-icon="mdi-clock"
                  sub-text="Just Updated"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                lg="3"
              >
                <base-material-stats-card
                  color="info"
                  icon="mdi-twitter"
                  title="Followers"
                  value="+245"
                  sub-icon="mdi-clock"
                  sub-text="Just Updated"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                lg="3"
              >
                <base-material-stats-card
                  color="info"
                  icon="mdi-twitter"
                  title="Followers"
                  value="+245"
                  sub-icon="mdi-clock"
                  sub-text="Just Updated"
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
                lg="3"
              >
                <base-material-stats-card
                  color="info"
                  icon="mdi-twitter"
                  title="Followers"
                  value="+245"
                  sub-icon="mdi-clock"
                  sub-text="Just Updated"
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
              Employees Stats
            </div>

            <div class="subtitle-1 font-weight-light">
              New employees on 15th September, 2016
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
