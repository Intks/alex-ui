# Bar Graph
----
## 基本用法
使用```labels```和```datasets```屬性来定義 圖表 的資料顯示。

<div class="demo-block">
  <adoms-graph-bar :chart-id="'bar-example'"></adoms-graph-bar>
</div>

:::demo
```html
<adoms-graph-bar :chart-id="'bar-example'"></adoms-graph-bar>

<script>
export default {
  data() {
    return {
      labels: ['2014', '2015', '2016', '2017'],
      title: '圖表表',
      dataSets: [
          {
            label: 'Data one',
            backgroundColor: '#f87979',
            data: [12, 40, 20, 10]
          }
      ],
      options: {
          responsive: true,
          title: {
            display: true,
            text: `${this.title}`,
            fontSize: 20
          },
          tooltips: {
            mode: 'index',
            intersect: false,
            bodySpacing: 8
          },
          hover: {
            mode: 'nearest',
            intersect: true
          },
          scales: {
            xAxes: [{
              display: true,
              beginAtZero: true
            }],
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: true
              },
              scaleLabel: {
                display: true
              }
            }]
          }
        }
    }
  }
}
</script>
```
:::



## Attributes
| 參數      | 說明    | 類型      | 可選值       | 默認值   |
|---------- |-------- |---------- |-------------  |-------- |
| chartId     | 圖表ID   | string  |      —             |    —     |
| labels     | Ｘ軸座標值   | array    |            —            |     —    |
| title  | 圖表標題    | string   | —   | —    |
| dataSets  | 圖表資料集合    | array   | —   | —    |
| options  | 圖表設定    | object   | —   | —    |
