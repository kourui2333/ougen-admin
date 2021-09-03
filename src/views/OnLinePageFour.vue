<!--
 * @Author: your name
 * @Date: 2021-08-04 09:31:51
 * @LastEditTime: 2021-08-23 09:55:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ougenAdmin\src\views\OnLinePageFour.vue
-->
<template>
  <div class="onLinePageFour">
    <full-calendar></full-calendar>
  </div>
</template>

<script setup>
import FullCalendar from "@/components/FullCalendar/FullCalendar.vue";
</script>

<style lang="scss" scoped>
.onLinePageFour {
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .l,
    .c,
    .r {
      width: 33%;
    }
    .l {
      text-align: left;
      button {
        background: rgba($color: #4c77ab, $alpha: 1);
        width: 60px;
        height: 35px;
        color: #fff;
        font-size: 20px;
        border: none;
        transition: all 0.3s;
      }
      button:hover {
        background: oldlace;
        color: rgba($color: #000000, $alpha: 1);
        border: 1px solid rgba($color: #4c77ab, $alpha: 1);
      }
    }
    .c {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .main {
    display: flex;
    flex-wrap: wrap;
    height: 800px;
    width: 100%;
    .d {
      width: 14%;
      height: 158px;
      border: 1px solid rgba($color: #000000, $alpha: 0.1);
    }
  }
}
</style>