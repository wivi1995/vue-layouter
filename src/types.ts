import Vue from 'vue'
import VueViewLayout from '../src/index'

 declare module 'vue/types/options' {
   // eslint-disable-next-line
   interface ComponentOptions<V extends Vue> {
     viewlayout?: VueViewLayout
   }
 }
