<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row class="showdata">
      <v-col 
        cols="12"
        sm="5"
        lg="5"
      >
        <div class="datawater">
          <card>
            <h1>Water</h1>
            <div class="data">
              <img src="/water.png" alt="">
              <h1>95%</h1>
            </div>
          </card>
        </div>
      </v-col>
      <v-spacer />
      <v-col
        cols="12"
        sm="7"
        lg="7"
      >
        <div class="datasensor">
          <card>
            <v-icon>
              mdi-water-percent
            </v-icon>
            <h1>{{ this.dbrealtime.temp }}%</h1>
            <p>Tamptem</p>
          </card>
          <card>
            <v-icon>
              mdi-water-percent
            </v-icon>
            <h1>64%</h1>
            <p>Tamptem</p>
          </card>
          <card>
            <v-icon>
              mdi-water-percent
            </v-icon>
            <h1>64%</h1>
            <p>Tamptem</p>
          </card>
          <card>
            <v-icon>
              mdi-water-percent
            </v-icon>
            <h1>64%</h1>
            <p>Tamptem</p>
          </card>
        </div>
      </v-col>
    </v-row>

      <!-- --------------------------end showsirsor----------------- -->
      <v-col
        cols="12"
        class="statuspump"
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
      dbrealtime: [],
      pump_status:[],
      items:[],

      }
    }, 

    created() {
        console.log(process.env.VUE_APP_APIURL);
        let serial = localStorage.getItem("token");
        setInterval(() => {
          Axios.get(`${process.env.VUE_APP_APIURL}/api/dbrealtime/2`).then(response => {
          this.dbrealtime = response.data.data;
          
      });
    }, 3000)
  },
  methods:{

    }
  }
</script>
<style lang="scss" scoped>
    card{
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 
        0px 3px 1px -2px rgba(0, 0, 0, 0.2), 
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }
    .showdata{
      padding: 0px 14px;

      .datawater{
          height: 100%;

        card{
          text-align: center;
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          height: 100%;

          .data{
            position: relative;
            img{
              width: 200px;
              height: 200px;
              opacity: 0.5;
              animation: 60s img infinite;
            }
            h1{
              font-size: 35px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);

            }
          }
        }
      }
      .datasensor{
        display: flex;
        flex-wrap: wrap;
        margin:-10px;
        height: 100%;


        card{
          width: 50%;
          flex: 1 1 250px;
          margin:  10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          padding: 10px;

          .v-icon{
            font-size: 45px;
          }

          h1{
            margin-top: 10px;
          }

          p{
            margin: 10px 0px 0px 0px;
          }
        }
      }
    }

    .statuspump{
      padding: 0px 14px;
    } 

    // @media screen and (min-width: 1864px){
    //   .datasensor{
    //     margin: 0px !important;

    //       card{
    //         margin: 0px 10px !important;
    //       }
    //   }
    // }

    @keyframes img {
      0%{
        transform: rotateZ(0deg);
      }
      100%{
        transform: rotateZ(360deg);
      }
    }
</style>
