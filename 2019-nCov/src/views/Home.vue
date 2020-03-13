<template>
  <div>
    <div class="data-statement">
      <div class="statement-title">全国疫情状况</div>
      <div class="update-time">截止 {{updateTime}}</div>
    </div>

    <e-summary :total="total" :today="today"></e-summary>
<!-- 地图 -->
    <figure>
      <e-charts
        ref="map"
        :options="map"
        :init-options="initOptions"
        autoresize
        @click="handleClick"
      ></e-charts>
    </figure>
    
    <div class="section-title">国内病例</div>
    <e-table :data="table"></e-table>
  </div>
</template>

<script>
import buildMapData from '../data/map'
import ETable from '../components/Table.vue'
import ECharts from '../components/ECharts.vue'
import ESummary from '../components/Summary.vue'
import { getNameByPinyin, getPinyinByName } from '../data/zhen'

export default {
  components: {
    ETable,
    ECharts,
    ESummary
  },
  data () {
    return {
      updateTime: '',
      today: {},
      total: {},
      map: {},
      table: [],
      chinaDayList: null,
      provinceName: '',
      initOptions: {
        renderer: 'canvas'
      }
    }
  },
  methods: {
    handleClick (params) {
      let provincePinyin = getPinyinByName(params.name)
      this.$router.push(`/${provincePinyin}`)
    }
  },
  created () {
    let province = this.$route.path.substr(1)
    this.provinceName = getNameByPinyin(province)
    const {
      updateTime,
      total,
      map,
      table,
      chinaDayList,
      today
    } = buildMapData(this.provinceName)

    this.chinaDayList = chinaDayList
    this.updateTime = updateTime
    this.today = today
    this.total = total
    this.table = table
    this.map = map
  }
}
</script>
