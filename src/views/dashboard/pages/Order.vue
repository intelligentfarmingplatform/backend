<template>
  <v-container>
        <v-col
        cols="12"
      >
        <base-material-card
          color="info"
          icon="mdi-card-account-details"
          title="ระบบจัดการสมาชิก"
          
        >
        <!-- <formuser /> -->
        <v-card-title>
            <v-col></v-col>
            <v-spacer></v-spacer>
            <v-col
                cols="12"
                md="7"
                class="d-flex justify-end mx-0"
            >
                <v-btn
                    depressed
                    text
                >
                    <v-icon>
                        mdi-plus
                    </v-icon>
                    <v-text
                    class="ml-2"
                    >
                        ทั้งหมด
                    </v-text>
                </v-btn>
                <v-btn
                    depressed
                    text
                >
                    <v-icon>
                        mdi-plus
                    </v-icon>
                    <v-text
                    class="ml-2"
                    >
                        ทั้งหมด
                    </v-text>
                </v-btn>
                <v-btn
                    depressed
                    text
                >
                    <v-icon>
                        mdi-plus
                    </v-icon>
                    <v-text
                    class="ml-2"
                    >
                        ทั้งหมด
                    </v-text>
                </v-btn>
                <v-btn
                    depressed
                    text
                >
                    <v-icon>
                        mdi-plus
                    </v-icon>
                    <v-text
                    class="ml-2"
                    >
                        ทั้งหมด
                    </v-text>
                </v-btn>
            </v-col>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="listusers"
              :search="search"
              :loading="loading"
              loader-height="2px"
              loading-text="Loading... Please wait"
              color="info"
            >
            <template v-slot:item.edit="{ item }">
                    <v-icon
                    small
                    clas s="mr-2"
                    color="#FFBB29"
                    @click="editItem(item)"
                    >
                        mdi-pencil
                    </v-icon>
            </template>
            <template v-slot:item.del="{ item }">
                <v-icon
                small
                @click="del(item)"
                color="#FF6347"
                >
                    mdi-delete
                </v-icon>
            </template>
            </v-data-table>
          </v-card-text>
        </base-material-card>
      </v-col>
  </v-container>
</template>

<script>
export default {
    name:'order',
    data() {
        return {
            headers: [
            {text: 'ลำดับ' , value: 'index' ,width:'10% '},
            {text: 'รห้สสั่งซื้อ', value: 'id'},
            { text: 'ชื่อผุ้สั่ง' ,value: 'userName',width:'10%'},
            { text: 'รายการ' , value: 'password' },
            { text: 'ราคา' , value: 'email' },
            {
                text: 'สถานะ', 
                align: 'center',
                sortable: false,
                value: 'status_level',
                width:'15%'
            },
            {
                text: 'แก้ไข',
                align: 'center',
                sortable: false,
                value: 'edit', 
                width:'5%'
            },
            {
                text: 'ลบ',
                align: 'center',
                sortable: false,
                value: 'del', 
                width:'5%',
            }
          ],
        }
    },
}
</script>

<style>

</style>