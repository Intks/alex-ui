<script>
import { Pie } from '~/utils/chart.js'
export default {
  name: 'AdomsGraphPie',
  extends: Pie,
  props: {
    labels: {
      type: Array,
      default () {
        return [
          'Saudi Arabia',
          'Russia',
          'Iraq',
          'United Arab Emirates',
          'Canada'
        ]
      }
    },
    dataSets: {
      type: Array,
      default () {
        /*
          pie example sets:
          labels: [
              "Saudi Arabia",
              "Russia",
              "Iraq",
              "United Arab Emirates",
              "Canada"
          ],
          datasets: [
          {
              data: [133.3, 86.2, 52.2, 51.2, 50.2],
              backgroundColor: [
                  "#FF6384",
                  "#63FF84",
                  "#84FF63",
                  "#8463FF",
                  "#6384FF"
              ]
          }]
        */
        return [
          {
            data: [133.3, 86.2, 52.2, 51.2, 50.2],
            backgroundColor: [
              '#FF6384',
              '#42b983',
              '#84FF63',
              '#8463FF',
              '#6384FF'
            ]
          }
        ]
      }
    },
    title: {
      type: String,
      default: '圖表表'
    },
    options: {
      type: Object,
      default () {
        return {
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
  },
  watch: {
    dataSets: {
      immediate: true,
      handler (value) {
        if (value) {
          this.$nextTick(() => {
            this.renderChart({
              labels: this.labels,
              datasets: this.dataSets
            }, this.options)
          })
        }
      },
      deep: true
    }
  }
}
</script>
