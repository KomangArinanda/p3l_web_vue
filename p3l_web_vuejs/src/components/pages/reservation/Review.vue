<template>
  <v-container grid-list-md>
      <div>
        <v-layout row wrap>
        <v-flex xs12>
            <v-card color="white">
                <v-card-text class="px-0  text-xs-left"><h2>This is Progress Bar (2. Review)</h2></v-card-text>
            </v-card>
        </v-flex>
        </v-layout>
        <br>
      </div>
      <div>
        <v-layout row wrap>
            <v-card tile flat>
                <v-card-text class="px-0  text-xs-left">
                    <div class="._1zgy8" style="font-size: 32px;">
                        Mohon Review Pesanan Anda
                    </div>
                </v-card-text>
            </v-card>
        </v-layout>
        <br>
      </div>
      <div>
        <v-layout row wrap class="mr-2">
            <v-flex xs12>
                <v-card tile flat>
                    <div class="_3HD0_" style="line-height: 48px;"><b>Data Pemesanan</b></div>
                </v-card>
            </v-flex>
        </v-layout>
        <br>
      </div>
      <div>
        <v-layout row wrap>
        <v-flex xs12>
          <v-card tile flat>
                    <v-layout row wrap>
                        <v-layout row wrap>
                         <v-flex xs9>
                                <v-card color="white">
                                    <v-layout row wrap  class="mr-3 ml-3">
                                        <v-flex xs12>
                                            <v-card tile flat>
                                                <v-card-text class="px-0  text-xs-left">
                                                    <v-layout row wrap>
                                                        <v-flex xs4>
                                                            <v-card tile flat>
                                                                <v-card-text class="px-0  text-xs-left">
                                                                <div class="_3HD1_"> Tamu</div>
                                                                <div class="_3HD2_"> Komang Arinanda</div>
                                                                </v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex xs4>
                                                            <v-card tile flat>
                                                                <v-card-text class="px-0  text-xs-left">
                                                                <div class="_3HD1_"> Check-In</div>
                                                                <div class="_3HD2_"> Min, 15 Apr 2018</div>
                                                                </v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex xs4>
                                                            <v-card tile flat>
                                                                <v-card-text class="px-0  text-xs-left">
                                                                <div class="_3HD1_"> Check-Out</div>
                                                                <div class="_3HD2_"> Sen, 16 Apr 2018</div>
                                                                </v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-layout row wrap>
                                                        <v-flex xs4>
                                                            <v-card tile flat>
                                                                <v-card-text class="px-0  text-xs-left">
                                                                <div class="_3HD1_"> Jumlah Kamar</div>
                                                                <div class="_3HD2_"> 2 Kamar</div>
                                                                </v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex xs4>
                                                            <v-card tile flat>
                                                                <v-card-text class="px-0  text-xs-left">
                                                                <div class="_3HD1_"> Tamu Dewasa</div>
                                                                <div class="_3HD2_"> 2 Orang</div>
                                                                </v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                        <v-flex xs4>
                                                            <v-card tile flat>
                                                                <v-card-text class="px-0  text-xs-left">
                                                                <div class="_3HD1_"> Tamu Anak</div>
                                                                <div class="_3HD2_"> 2 Orang</div>
                                                                </v-card-text>
                                                            </v-card>
                                                        </v-flex>
                                                    </v-layout>
                                                    <div class="_3HD0_" style="line-height: 48px;"><b>Detail Kamar</b></div>
                                                </v-card-text>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-card>
                                <v-layout row wrap>
                                    <v-flex xs12>
                                        <v-card color="white">
                                            <v-data-table
                                                :headers="headers"
                                                :items="items"
                                                hide-actions
                                                class="elevation-1" style="font-size: 14px;"
                                            >
                                                <template slot="items" slot-scope="props">
                                                <td class="text-xs-left" style="font-size: 14px;">{{ props.item.name }}</td>
                                                <td class="text-xs-left">{{ props.item.calories }}</td>
                                                <td class="text-xs-left">{{ props.item.fat }}</td>
                                                <td class="text-xs-left">{{ props.item.carbs }}</td>
                                                </template>
                                            </v-data-table>

                                            <v-layout row wrap class="mr-3 ml-3">
                                                <v-flex xs12>
                                                    <v-card tile flat>
                                                        <v-card-text class="px-0  text-xs-left">
                                                            <div class="_3HD0_" style="line-height: 48px;"><b>Permintaan Khusus</b></div>
                                                        <div class="_3HD2_"> - 1 extra bed (Rp 50.000)</div>
                                                        <div class="_3HD2_"> - non smoking</div>
                                                        </v-card-text>
                                                    </v-card>
                                                </v-flex>
                                            </v-layout>

                                        </v-card>
                                    </v-flex>
                                </v-layout>
                              <v-layout row wrap class="mt-2">
                                <v-flex xs12>
                                    <v-card color="white" >
                                        <v-card-text class="px-0 mr-3 ml-3  text-xs-left" >
                                            <div class="_3HD1_" style="line-height: 48px; font-size:24px;"><b>Kebijakan Pembatalan</b></div>
                                            <p class="text-xs-justify mr-5">Pemesanan ini tidak bisa di-refund. Waktu yang ditampilkan sesuai dengan waktu lokal hotel. Tanggal inap dan tipe kamar tidak dapat diubah.</p>
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
                                        <v-layout row wrap class="mr-2 ml-2">
                                            <v-flex xs6>
                                                <v-card tile flat>
                                                    <div class="_3HD0_  mt-2" style="font-size:18px">
                                                        <b>Biaya Kamar</b>
                                                    </div>
                                                </v-card>
                                            </v-flex>
                                            <v-flex xs6>
                                                <v-card tile flat>
                                                    <div class="_3HD0_  mt-2" style="font-size:18px; text-align: right;">
                                                        <b>Rp 1.204.143</b>
                                                    </div>
                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                        <v-layout row wrap class="mr-2 ml-2">
                                            <v-flex xs6>
                                                <v-card tile flat>
                                                    <div class="_3HD0_" style="font-size:18px">
                                                        <b>Biaya Layanan Tambahan</b>
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
                                                    <div class="_3HD0_" style="font-size:20px; line-height: 40px;">
                                                        <b>Sub Total</b>
                                                    </div>
                                                </v-card>
                                            </v-flex>
                                            <v-flex xs6>
                                                <v-card tile flat>
                                                    <div class="_3HD0_" style="font-size:20px; line-height: 40px; text-align: right;">
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
                                <v-flex xs4>
                                    <v-card tile flat>
                                        <v-card-text class="px-0  text-xs-justify ml-3">
                                          <p style="line-height: 24px;">Dengan mengeklik tombol di bawah, Anda menyetujui <span style="color: #3F51B5">Syarat dan Ketentuan</span> serta <span style="color: #3F51B5">Kebijakan Privasi</span> dari Traveloka.</p>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs4>
                                    <v-card tile flat>
                                        <v-card-text class="px-0  text-xs-right">
                                            <router-link to="/search">
                                                <v-btn color="orange accent-3" class="_cap01">Tambah Pemesanan</v-btn>
                                            </router-link>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                                <v-flex xs4>
                                    <v-card tile flat>
                                        <v-card-text class="px-0  text-xs-right">
                                            <router-link to="/booking/payment">
                                             <v-btn color="orange accent-3" class="_cap01">Lanjut ke Pembayaran</v-btn>
                                            </router-link>
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                        <v-flex xs3>
                            <v-layout row wrap>
                                <v-flex xs12>
                                    <v-card color="white" class="ml-3">
                                        <v-card-text class=" text-xs-justify ml-1">
                                          <p style="line-height: 24px;">Dengan mengeklik tombol di bawah, Anda menyetujui <span style="color: #3F51B5">Syarat dan Ketentuan</span> serta <span style="color: #3F51B5">Kebijakan Privasi</span> dari Traveloka.</p>
                                        </v-card-text>
                                        <v-card-text class="text-xs-center">
                                            <router-link to="/booking/payment">
                                             <v-btn color="orange accent-3" class="_cap01">Lanjut ke Pembayaran</v-btn>
                                            </router-link>
                                        </v-card-text>
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
._1zgy8 {
    margin-top: 40px;
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.2;
}
._3HD0_ {
    font-size: 24px;
    font-weight: 200;
    line-height: 27px;
    text-align: left;
    color: #434343;
}
._3HD1_ {
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    color: #000000;
}
._3HD2_ {
    font-size: 18px;
    font-weight: 100;
    line-height: 36px;
    text-align: left;
    color: #8f8f8f;
}
._cap01 {
    text-transform: capitalize;
    color: #ffffff;
}
</style>

<script>
  export default {
    data () {
      return {
        e1: 0,
        headers: [
          {
            text: 'Jenis Kamar',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Tamu / Kamar', value: 'calories' },
          { text: 'Harga', value: 'fat' },
          { text: 'Jumlah', value: 'fat' },
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
    }
  }
</script>