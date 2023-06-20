<template>
  <div>
    <!-- 显示股票信息 -->
    <ul>
      <li v-for="stock in stockData" :key="stock.c">
        {{ stock.n }} - {{ stock.z }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      stockData: [], // 存储股票数据
    };
  },
  mounted() {
    this.getStockInfo();
  },
  methods: {
    getStockInfo() {
      const stockListTse = ["0050", "0056", "2330", "2317", "1216"];
      const stockListOtc = ["6547", "6180"];
      const stockList1 = stockListTse
        .map((stock) => `tse_${stock}.tw`)
        .join("|");
      const stockList2 = stockListOtc
        .map((stock) => `otc_${stock}.tw`)
        .join("|");
      const stockList = `${stockList1}|${stockList2}`;

      const queryUrl = `https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=${stockList}`;

      axios
        .get(queryUrl)
        .then((response) => {
          if (response.status === 200) {
            const data = JSON.parse(response.data);
            // 处理数据
            // ...
            this.stockData = data.msgArray;
          } else {
            throw new Error("获取股票信息失败.");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
