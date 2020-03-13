<template>
  <div>
    <div class="data-statement">
      <div class="statement-title">{{provinceName}} | 疫情状况</div>
      <div class="update-time">截止 {{updateTime}}</div>
    </div>
 <e-summary :total="total"></e-summary>

    <figure>
      <e-charts
        ref="map"
        :options="map"
        :init-options="initOptions"
        autoresize
      ></e-charts>
    </figure>

    <div class="table">
      <ul class="table-header">
        <li>地区</li>
        <li>新增</li>
        <li>累计确诊</li>
        <li>治愈</li>
        <li>死亡</li>
      </ul>
      <ul class="table-body">
        <li v-for="(item, index) in table" :key="index" class="table-line table-province">
          <div>{{item.name}}</div>
          <div>{{item.today.confirm}}</div>
          <div>{{item.total.confirm}}</div>
          <div>{{item.total.heal}}</div>
          <div>{{item.total.dead}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import buildMapData from '../data/map'
import { getNameByPinyin } from '../data/zhen'
import ECharts from '../components/ECharts.vue'
import ESummary from '../components/Summary.vue'

export default {
  components: {
    ECharts,
    ESummary
  },
  data () {
    return {
      updateTime: '',
      total: {},
      map: {},
      table: [],
      provinceName: '',
      initOptions: {
        renderer: 'canvas'
      }
    }
  },

  created () {
    let province = this.$route.path.substr(1)
    console.log(province)
    this.provinceName = getNameByPinyin(province)
    console.log(this.province)
    const { updateTime, total, map, table } = buildMapData(this.provinceName)

    this.updateTime = updateTime
    this.total = total
    this.table = table
    this.map = map
  }
}
</script>
