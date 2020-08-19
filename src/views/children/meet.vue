<template>
  <div class="meet bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 会议活动
    </div>

    <div class="saixuan flex align-center padding-lr-sm">
      <span>会议活动筛选：</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="科技交流"></el-checkbox>
        <el-checkbox label="人才培养"></el-checkbox>
        <el-checkbox label="知识产权"></el-checkbox>
        <el-checkbox label="综合类"></el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="meet-list flex align-center">
      <el-row :gutter="20">
        <el-col :span="8"><div class="meet-item">
          <img src="../../assets/img/meet.png" alt="">
          <p class="ovHide5">
            PAK-iD论坛由纽伦堡会展（上海）有限公司主办，中国轻工机械协会支持，北京中印鸥奇国际展览有限公司和包联网协办，与享誉全球的纽伦堡会展包装母展FachPack一脉相承，致力于打造包装产业的专业技术平台、搭建中...
          </p>
        </div></el-col>
        <el-col :span="8"><div class="meet-item">
          <img src="../../assets/img/meet.png" alt="">
          <p class="ovHide5">
            PAK-iD论坛由纽伦堡会展（上海）有限公司主办，中国轻工机械协会支持，北京中印鸥奇国际展览有限公司和包联网协办，与享誉全球的纽伦堡会展包装母展FachPack一脉相承，致力于打造包装产业的专业技术平台、搭建中...
          </p>
        </div></el-col>
        <el-col :span="8"><div class="meet-item">
          <img src="../../assets/img/meet.png" alt="">
          <p class="ovHide5">
            PAK-iD论坛由纽伦堡会展（上海）有限公司主办，中国轻工机械协会支持，北京中印鸥奇国际展览有限公司和包联网协办，与享誉全球的纽伦堡会展包装母展FachPack一脉相承，致力于打造包装产业的专业技术平台、搭建中...
          </p>
        </div></el-col>
        <el-col :span="8"><div class="meet-item">
          <img src="../../assets/img/meet.png" alt="">
          <p class="ovHide5">
            PAK-iD论坛由纽伦堡会展（上海）有限公司主办，中国轻工机械协会支持，北京中印鸥奇国际展览有限公司和包联网协办，与享誉全球的纽伦堡会展包装母展FachPack一脉相承，致力于打造包装产业的专业技术平台、搭建中...
          </p>
        </div></el-col>
      </el-row>
    </div>
    <div class="page-box">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="100"
          background
          layout="prev, pager, next, jumper"
          :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "meet",
  data() {
    return {
      checkList: []
    }
  },
  created() {
    this.$emit('setIndex', 3)
  }
}
</script>

<style scoped lang="scss">
.meet {
  .saixuan {
    width: 1200px;
    height: 50px;
    background-color: #e3f1fe;
    border: solid 1px #aaccef;
    margin-bottom: 30px;

    span {
      font-size: 14px;
      font-weight: 500;
      margin-right: 20px;
    }
  }
  .meet-list{
    border: solid 1px #aaccef;
    padding: 25px 25px 5px;
    .meet-item{
      border: solid 1px #e8e8e8;
      margin-bottom: 20px;
      img{
        display: block;
        width: 100%;
        height: 192px;
      }
      p{
        padding: 10px;
        text-align: justify;
        line-height: 22px;
        color: #333333;
      }
    }
  }
  .page-box {
    margin: 30px auto;
    text-align: center;
  }
}
</style>