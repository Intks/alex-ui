<script>
import { Bar } from '~/utils/chart.js'
export default {
  name: 'AdomsGraphBar',
  extends: Bar,
  props: {
    labels: {
      type: Array,
      default () {
        return ['2012', '2013', '2014', '2015']
      }
    },
    dataSets: {
      type: Array,
      default () {
        /*
          example sets:
          {
            label: 'Data one',
            backgroundColor: '#f87979',
            data: [12, 40, 20, 10]
          }
        */
        return [
          {
            label: 'Data one',
            backgroundColor: '#42b983',
            data: [12, 40, 20, 10]
          }
        ]
      }
    },
    title: {
      type: String,
      default: '圖表'
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
