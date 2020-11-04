<template>
  <v-container>

    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <base-material-card
        color="info"
        title="แก้ไขโปรไฟล์"
        icon="mdi mdi-account-edit"
  >

          <v-card-title>
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Company (disabled)"
                    :readonly='!this.update'
                    value="wqfasds"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                <v-text-field
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-2"
                  label="Not visible"
                  hint="At least 8 characters"
                  value="wqfasds"
                  class="input-group--focused"
                  @click:append="show1 = !show1"
                  :readonly='!this.update'
                ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                >
                  <h4>ข้อมูลที่อยุ่</h4>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="Address"
                    class="purple-input"
                    :readonly='!this.update'
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="City"
                    class="purple-input"
                    :readonly='!this.update'
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Country"
                    class="purple-input"
                    :readonly='!this.update'
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                    :readonly='!this.update'
                  />
                </v-col>
                <v-col
                  cols="12"
                >
                  <h4>ช่องทางการรับเงิน</h4>
                </v-col>
                <v-col cols="3">
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                    :readonly='!this.update'
                  />
                </v-col>
                <v-col cols="9">
                  <v-text-field
                    class="purple-input"
                    label="Postal Code"
                    type="number"
                    :readonly='!this.update'
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    :color="this.update === true ? 'info': 'rgb(255, 187, 41)'"
                    class="mr-0"
                    @click="this.password = 'type'"
                  >
                    {{this.update === true ? 'Update UserProfile':'Edit UserProfile'}}
                  </v-btn>
                </v-col>
              </v-row>

            </v-card-title>

        </base-material-card>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <base-material-card
          class="v-card-profile"
          avatar="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
        >
          <v-card-text class="text-center">
            <h6 class="display-1 mb-1 grey--text">
              CEO / CO-FOUNDER <v-icon>mdi-user</v-icon>
            </h6>

            <h4 class="display-2 font-weight-light mb-3 black--text">
              Alec Thompson
            </h4>

            <p class="font-weight-light grey--text">
              Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
            </p>

          </v-card-text>
        </base-material-card>
        <v-card>
          sdasdsad
        </v-card>
        <v-card>
          sdasdsad
        </v-card>
        <v-card>
          sdasdsad
        </v-card>
        <v-card>
          sdasdsad
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        show1:'',
        update: null,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
    methods:{
      update(){
        this.profileupdate = true
      }
    }
  }
</script>
<style scoped>
.container {
    padding-left: 50px !important;
    padding-right: 50px !important;
}
</style>
