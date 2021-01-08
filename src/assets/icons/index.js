import Vue from 'vue'
import Icon from '@/components/Icon' // svg component

// register globally
Vue.component('icon', Icon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
