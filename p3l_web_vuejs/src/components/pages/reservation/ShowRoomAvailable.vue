<template>
  <v-container grid-list-md>
      <div>
          <v-layout row wrap  class="mt-3" justify-space-around>
            <v-flex xs7>
                <v-card dark tile flat>
                    <v-card-text class="px-0  text-xs-left"><h2>Hasil pencarian kamar di cabang Yogyakarta</h2></v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs3 class="mr-0 pr-0">
                <v-card dark tile flat>
                    <div  style="text-align: right; padding: 0px; margin: 0px;">
                        <v-btn color="blue darken-1">Ganti pencarian</v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
      </div>
      <div>
          <v-layout row wrap class="mt-3" justify-space-around>
              <v-flex xs11>
                <v-card tile flat color="white">
                    <v-layout row wrap>
                         <v-flex xs2>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Check In</h2></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Check Out</h2></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Dewasa</h2></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Anak</h2></v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left"><h2>Kamar</h2></v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-card>
              </v-flex>
          </v-layout>
          <br>
      </div>
    <v-layout row wrap justify-space-around>
      <v-flex xs11>
        <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
      <br>
      <div>
          <v-layout row wrap justify-space-around>
            <v-flex xs11>
            <v-card tile flat color="white">
                <div v-for="room in rooms" :key="room.roomType.id">
                    <v-layout row wrap class="ml-2 mr-2">
                         <v-flex xs2 class="mt-2">
                            <v-card dark tile flat>
                                <v-card-media src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002000010677_wh_7" height="176px">
                                </v-card-media>
                            </v-card>
                        </v-flex>
                        <v-flex xs5 >
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left">
                                    <div class="_3HD0_"><b>{{room.roomType.name}}</b></div>
                                    <div class="MUdPv ml-1">Kapasitas kamar {{room.roomType.capacity}} orang</div>
                                    <div class="ml-1 _2Gtuh+._216CV" style="line-height: 30px;">{{room.roomType.description}}</div>
                                    <div class="ml-1 _2Gtuh+._216CV" style="line-height: 27px;">
                                        Pilihan tempat tidur : <span v-for="bed in room.bedList" :key="bed.id">{{bed.name}}</span>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs3>
                            <v-card dark tile flat>
                                <v-card-text class="px-0  text-xs-left">
                                    <div class="_2qcja mt-5 mr-4">
                                        <p class="_2As7Y _noMbuttom">Harga / kamar / malam</p>
                                        <p class="_noMbuttom">Rp {{room.price.priceIdr}}<p>
                                        <p class="_1wFJT _noMbuttom">Termasuk Pajak</p>
                                    </div>
                                    </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs2>
                            <v-card dark tile flat>
                                <div class="mt-5">
                                    <br>
                                    <router-link to="/detail/roomTypeName">
                                    <v-btn color="orange accent-3" class="_cap01" @click="saveRoomType(room)"><b>Lihat Kamar</b></v-btn>
                                    </router-link>
                                    <br>
                                    <p class="_1emD6 _cap01">{{room.numberAvailable}} kamar tersedia</p>
                                </div>
                            </v-card>
                        </v-flex>
                    </v-layout>
                    <br>
                    <hr class="ml-4 mr-4">
                </div>
            </v-card>
            </v-flex>
        </v-layout>
      </div>
  </v-container>
</template>
<style>
._1emD6 {
  color: #f34646;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  font-weight: 700;
}
._cap01 {
    text-transform: capitalize;
}
._2qcja {
    color: #f96d01;
    font-size: 22px;
    font-weight: 700;
    line-height: 27px;
    text-align: right;
}
._2As7Y {
    color: #8f8f8f;
    text-align: right;
    font-size: 12px;
}
._1wFJT {
    text-align: right;
    color: #0770cd;
    font-size: 12px;
    line-height: 0px;
}
._noMbuttom {
    margin-bottom: 0px;
}
._3HD0_ {
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
}
.MUdPv {
    color: #8f8f8f;
    font-size: 12px;
    line-height: 18px; 
    margin-bottom: 8px;
}
._2Gtuh+._216CV {
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    color: #434343;
}
</style>
<script>
import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        items: [
          {
            src: 'http://travelcentremaldives.com/maldives-blog/wp-content/uploads/2015/02/kurumba-resort-maldives-beach-hd-wallpaper-1920x1200-6519.jpg'
          },
          {
            src: 'https://www.pixelstalk.net/wp-content/uploads/2016/10/Hotels-Waterpool-HD-Wallpapers.jpg'
          },
          {
            src: 'http://www.travelzoo.com/blog/wp-content/uploads/2015/04/tzoo.hd_.77845.1055.197153.belvederehotel-1024x512.jpg'
          },
          {
            src: 'http://www.wallpapers13.com/wp-content/uploads/2016/08/Bellagio-and-Caesars-Palace-hotels-and-casinos-reflection-in-the-lake-Wallpaper-HD-2560x1600-915x515.jpg'
          }
        ],
        card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.',
      }
    },
    computed: {
        ...mapGetters([
            'rooms'
        ])
    },
    mounted () {
      this.getRooms()
    },
    methods: {
      getRooms () {
        this.$store.dispatch('getRooms')
      },
      saveRoomType (room) {
       this.$store.dispatch('saveRoomType', room);
      },
      formatCurrency: function(amount, decimalSeparator, thousandsSeparator, nDecimalDigits){
            var num = parseFloat( amount ); //convert to float
            //default values
            decimalSeparator = decimalSeparator || '.';
            thousandsSeparator = thousandsSeparator || ',';
            nDecimalDigits = nDecimalDigits == null? 2 : nDecimalDigits;

            var fixed = num.toFixed(nDecimalDigits); //limit or add decimal digits
            //separate begin [$1], middle [$2] and decimal digits [$4]
            var parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{' + nDecimalDigits + '}))?$').exec(fixed); 

            if(parts){ //num >= 1000 || num < = -1000
                return parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');
            }else{
                return fixed.replace('.', decimalSeparator);
            }
        }
    }
  }
</script>
