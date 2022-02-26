import Vue from 'vue'
import Layouter from '../src/index'

 declare module 'vue/types/options' {
   // eslint-disable-next-line
   interface ComponentOptions<V extends Vue> {
    layouter?: Layouter
   }
 }
