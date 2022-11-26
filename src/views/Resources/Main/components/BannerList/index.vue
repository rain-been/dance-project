<template>
  <div class="block text-center">
    <el-carousel trigger="click" height="466px">
      <el-carousel-item >
        <a style="width: 100%; height: 100%;">
          <img src="https://rs.dance365.com/photo/1667373574669.jpg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1" style="width: 100%; height: 100%;">
          
        </a>
        
      </el-carousel-item>
      <el-carousel-item >
        <a style="width: 100%; height: 100%;">
          <img src="https://rs.dance365.com/photo/1667373574669.jpg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1" style="width: 100%; height: 100%;">
          
        </a>
        
      </el-carousel-item>
      <el-carousel-item >
        <a style="width: 100%; height: 100%;">
          <img src="https://rs.dance365.com/photo/1667373574669.jpg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1" style="width: 100%; height: 100%;">
          
        </a>
        
      </el-carousel-item>
      <el-carousel-item >
        <a style="width: 100%; height: 100%;">
          <img src="https://rs.dance365.com/photo/1667373574669.jpg?imageView2/0/w/2000/h/1200/format/webp/ignore-error/1" style="width: 100%; height: 100%;">
          
        </a>
        
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang='ts'>



</script>

<style lang="less">
.text-center {
  overflow: hidden;
}

.el-carousel {
  width: 100%;
  margin-top: 20px;
  border-radius: 4px;

  .el-carousel-item {
    background-color: aqua;
  }
}

.el-carousel__indicator--horizontal .el-carousel__button {
  width: 14px;
  height: 14px;
  // background: transparent;
  background-color: rgba(255, 255, 255, .6);
  border-radius: 50%;
  opacity: 0.5;
}

.el-carousel__indicator--horizontal.is-active .el-carousel__button {
  width: 14px;
  height: 14px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 1;
}
</style>