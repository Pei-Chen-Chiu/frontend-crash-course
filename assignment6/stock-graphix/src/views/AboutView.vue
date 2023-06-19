<template>
  <div>
    <canvas ref="stockChart" width="400" height="200"></canvas>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";

export default {
  mounted() {
    this.initializeChart();
    this.startUpdatingChart();
  },
  methods: {
    initializeChart() {
      const ctx = this.$refs.stockChart.getContext("2d");

      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Stock Price",
              data: [],
              borderColor: "blue",
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: "category",
              display: true,
            },
            y: {
              display: true,
            },
          },
        },
      });
    },
    startUpdatingChart() {
      this.updateChart(); // 首次更新資料和繪製圖表

      // 每秒更新資料和繪製圖表
      this.interval = setInterval(() => {
        this.updateChart();
      }, 1000);
    },
    updateChart() {
      const currentTime = new Date().toLocaleTimeString();

      this.chart.data.labels.push(currentTime);
      this.chart.data.datasets[0].data.push(this.generateRandomPrice());

      const maxDataPoints = 10;
      if (this.chart.data.labels.length > maxDataPoints) {
        this.chart.data.labels.shift();
        this.chart.data.datasets[0].data.shift();
      }

      this.chart.update();
    },
    generateRandomPrice() {
      const minPrice = 100;
      const maxPrice = 1000;
      return Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    },
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>
