# Pie Graph
----
## 基本用法
使用```labels```和```datasets```屬性来定義 圖表 的資料顯示。

<div class="demo-block">
  <adoms-graph-pie :chart-id="'pie-example'"></adoms-graph-pie>
</div>

:::demo
```html
<adoms-graph-pie :chart-id="'pie-example'"></adoms-graph-pie>

<script>
export default {
  data() {
    return {
      labels: [
          'Saudi Arabia',
          'Russia',
          'Iraq',
          'United Arab Emirates',
          'Canada'
        ],
      title: '圖表表',
      dataSets: [
          {
            data: [133.3, 86.2, 52.2, 51.2, 50.2],
            backgroundColor: [
              '#FF6384',
              '#63FF84',
              '#84FF63',
              '#8463FF',
              '#6384FF'
            ]
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
