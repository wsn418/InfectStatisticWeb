const axios = require('axios')
let pinyin = require('pinyin')
const fs = require('fs')

const request = axios.create({
  baseURL: 'https://view.inews.qq.com/g2'
})

function transformChinaData (provinces) {
  provinces.forEach(province => {

    province.children.forEach(city => {
      if (province.name === '北京' || province.name === '上海') {
        city.cityName = city.name + '区'
        province.pinyin = pinyin(province.name, { style: pinyin.STYLE_NORMAL }).join('')
      } else {
        if (province.name === '陕西') {
          province.pinyin = 'shanxi1'
          city.cityName = city.name + '市'
        } else if (province.name === '重庆') {
          province.pinyin = 'chongqing'
          city.cityName = city.name
        } else if (province.name === '西藏') {
          province.pinyin = 'xizang'
          city.cityName = city.name + '市'
        } else {
          province.pinyin = pinyin(province.name, { style: pinyin.STYLE_NORMAL }).join('')
          city.cityName = city.name + '市'
        }
      }
    })
    
  })

  //    console.log(provinces)
}

function getData () {
  request.get('/getOnsInfo?name=disease_h5')
    .then(res => {
      let rawData = JSON.parse(res.data.data)
      let provinces = rawData.areaTree[0].children

      transformChinaData (provinces)
      // console.log(JSON.stringify(rawData));
       fs.writeFileSync('./结对2/2019-nCov/src/data/area.json', JSON.stringify(rawData))
    })
}

getData()
