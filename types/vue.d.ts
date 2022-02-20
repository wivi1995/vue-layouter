/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue'
import VueViewLayout from '../src/index'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    viewlayout?: VueViewLayout
  }
}
