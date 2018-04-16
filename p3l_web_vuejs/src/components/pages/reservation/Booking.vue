<template>
  <v-container grid-list-md>
      <div>
        <v-layout row wrap>
        <v-flex xs12>
            <v-card color="white">
                <v-card-text class="px-0  text-xs-left"><h2>This is Progress Bar (1. Isi Data)</h2></v-card-text>
                <div v-for="room in roomType" :key="room.roomType.id">{{room.roomType.name}}</div>
            </v-card>
        </v-flex>
        </v-layout>
        <br>
      </div>
      <div>
        <v-layout row wrap>
            <v-card tile flat>
                <v-card-text class="px-0  text-xs-left ml-1"><h1>Pemesanan Kamar</h1></v-card-text>
            </v-card>
        </v-layout>
        <br>
      </div>
      <div>
        <v-layout row wrap>
        <v-flex xs12>
            <v-card color="white">
                <v-card-text class="px-0  text-xs-left"><h2>Log in ke akun Traveloka Anda untuk kemudahan pemesanan.</h2></v-card-text>
            </v-card>
        </v-flex>
        </v-layout>
        <br>
      </div>
       <div>
        <v-layout row wrap>
            <v-card tile flat>
                <v-card-text class="px-0  text-xs-left ml-1"><h1>Data Pemesan</h1></v-card-text>
            </v-card>
        </v-layout>
        <br>
      </div>
      <div>
        <v-layout row wrap>
        <v-flex xs12>
          <v-card tile flat>
                    <v-layout row wrap>
                        <v-layout row wrap>
                         <v-flex xs8>
                            <v-layout row wrap class="mr-2">
                                <v-flex xs12>
                                    <v-card color="white">
                                        <v-card-text class="px-0  text-xs-left"><h2>Form Data Pemesan</h2></v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                              <v-layout row wrap>
                                  <v-card tile flat>
                                      <v-card-text class="px-0  text-xs-left ml-1">
                                          <div class="_3HD0_"><b>Fasilitas Tambahan</b></div>
                                        </v-card-text>
                                  </v-card>
                              </v-layout>
                              <v-layout row wrap class="mr-2">
                                <v-flex xs12>
                                    <v-card color="white">
                                        <v-card-text class="px-0  text-xs-left">
                                            <div class="ml-3" v-for="facility in masterDataAdditionalFacility" :key="facility.id" v-if="facility.priceIdr > 0">
                                                <v-layout align-center row wrap >
                                                    <v-flex xs12>
                                                        <v-checkbox :id="facility.id"  :label = facility.name :value="facility" v-model="additionalFacility"></v-checkbox>
                                                    </v-flex>
                                                </v-layout>
                                            </div>
                                            <div v-for="add in additionalFacility" :key="add.id">{{add}}</div>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap class="mr-2">
                                <v-flex xs12>
                                    <v-card tile flat>
                                        <div class="_3HD0_" style="line-height: 48px;"><b>Rincian Harga</b></div>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap class="mr-2">
                                <v-flex xs12>
                                    <v-card color="white">
                                        <v-data-table
                                            :headers="headers"
                                            :items="roomType"
                                            hide-actions
                                            class="elevation-1"
                                        >
                                            <template slot="roomType" slot-scope="props">
                                            <td class="text-xs-left">{{ props.item.name }}</td>
                                            <td class="text-xs-left">{{ props.item.roomType.capacity }}</td>
                                            <td class="text-xs-left">{{ props.item.roomType.priceIdr }}</td>
                                            <td class="text-xs-left">{{ props.item.roomType.id }}</td>
                                            </template>
                                        </v-data-table>
                                        <v-layout row wrap class="mr-2 ml-2">
                                            <v-flex xs6>
                                                <v-card tile flat>
                                                    <div class="_3HD0_ mt-2" style="font-size:20px; line-height: 40px;">
                                                        <b>Sub Total</b>
                                                    </div>
                                                </v-card>
                                            </v-flex>
                                            <v-flex xs6>
                                                <v-card tile flat>
                                                    <div class="_3HD0_ mt-2" style="font-size:20px; line-height: 40px; text-align: right;">
                                                        <b>Rp 972.107</b>
                                                    </div>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row wrap class="mr-2 ml-2">
                                            <v-flex xs6>
                                                <v-card tile flat>
                                                    <div class="_3HD0_" style="font-size:18px">
                                                        <b>Biaya Pajak</b>
                                                    </div>
                                                </v-card>
                                            </v-flex>
                                            <v-flex xs6>
                                                <v-card tile flat>
                                                    <div class="_3HD0_" style="font-size:18px; text-align: right;">
                                                        <b>Rp 204.143</b>
                                                    </div>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                        <hr class="mr-2 ml-2 mt-1">
                                        <v-layout row wrap class="mr-2 ml-2">
                                            <v-flex xs6>
                                                <v-card tile flat>
                                                    <div class="_3HD0_" style="font-size:20px; line-height: 48px;">
                                                        <b>Total</b>
                                                    </div>
                                                </v-card>
                                            </v-flex>
                                            <v-flex xs6>
                                                <v-card tile flat>
                                                    <div class="_3HD0_" style="font-size:20px; text-align: right; line-height: 48px;">
                                                        <b>Rp 1.176.250</b>
                                                    </div>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap class="mr-2">
                                <v-flex xs8>
                                    <v-card tile flat>
                                        <v-card-text class="px-0  text-xs-justify ml-3">
                                          <p style="line-height: 24px;">Dengan mengeklik tombol di bawah, Anda menyetujui <span style="color: #3F51B5">Syarat dan Ketentuan</span> serta <span style="color: #3F51B5">Kebijakan Privasi</span> dari Traveloka.</p>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs4>
                                    <v-card tile flat>
                                        <v-card-text class="px-0  text-xs-right">
                                          <router-link to="booking/review">
                                            <v-btn color="orange accent-3" class="_cap01"><b>Lanjut ke Pembayaran</b></v-btn>
                                          </router-link>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        
                        <v-flex xs4>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-card color="white">
                                        <v-card-text class="px-0  text-xs-left"><h2>Rincian Data Kamar</h2></v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                            <br>
                        </v-flex>
                    </v-layout>
                        
                    </v-layout>
                </v-card>
        </v-flex>
        </v-layout>
      </div>
  </v-container>
</template>

<style>
._3HD0_ {
    font-size: 24px;
    font-weight: 500;
    line-height: 27px;
    text-align: left;
}
._cap01 {
    text-transform: capitalize;
    color: #ffffff;
}
</style>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
  export default {
    data: function () {
      return {
        e1: 0,
        masterDataAdditionalFacility: [],
        additionalFacility: [],
        includeFiles: true,
        headers: [
          {
            text: 'Jenis Kamar',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Jumlah', value: 'calories' },
          { text: 'Harga', value: 'fat' },
          { text: 'Sub Total', value: 'carbs' }
        ],
        items: [
          {
            value: false,
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24
          },
          {
            value: false,
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37
          },
          {
            value: false,
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23
          },
          {
            value: false,
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67
          },
          {
            value: false,
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49
          },
          {
            value: false,
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94
          },
          {
            value: false,
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98
          },
          {
            value: false,
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87
          },
          {
            value: false,
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51
          },
          {
            value: false,
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65
          }
        ]
      }
    },
    computed: {
        ...mapGetters([
            'roomType'
        ])
    },
    mounted: function () {
        this.getFacilityServices()
        this.getRoomType()
    },
    methods: {
        getFacilityServices: function () {
        const URL = '/api/facility/services'

        axios.get(URL)
          .then(response => {
            this.masterDataAdditionalFacility = response.data
          })
          .catch(error => {
            alert(error)
          })
      },
      getRoomType () {
          alert(this.$store.getters.roomType)
        return this.$store.getters.roomType;
      }
    }
  }
</script>