<template>
  <div class="gongying bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 供应商详情
    </div>
    <div class="gongying-detail">
      <h3 class="gy-title">供应商</h3>
      <table class="table" v-if="expert">
        <tr class="active">
          <td colspan="4">专家信息</td>
        </tr>
        <tr>
          <td class="active">姓名：</td>
          <td>{{ expert.username }}</td>
          <td class="active">民族：</td>
          <td>{{ expert.nation }}</td>
        </tr>
        <tr>
          <td class="active">出生日期：</td>
          <td>{{ expert.birthdate }}</td>
          <td class="active">党派：</td>
          <td>{{ expert.party }}</td>
        </tr>
        <tr>
          <td class="active">籍贯：</td>
          <td>{{ expert.native }}</td>
          <td class="active">通讯地址：</td>
          <td>{{ expert.mail_address }}</td>
        </tr>
        <tr>
          <td class="active">工作单位：</td>
          <td>{{ expert.affiliation }}</td>
          <td class="active">办公电话：</td>
          <td>{{ expert.office_phone }}</td>
        </tr>
        <tr>
          <td class="active">职称：</td>
          <td>{{ expert.position }}</td>
          <td class="active">手机或家庭电话：</td>
          <td>{{ expert.phone }}</td>
        </tr>
        <tr>
          <td class="active">所学专业及学位：</td>
          <td>{{ expert.education }}</td>
          <td class="active">外语情况：</td>
          <td>{{ expert.language_info }}</td>
        </tr>
        <tr>
          <td class="active">研究方向及主要成果 ：</td>
          <td colspan="3">{{ expert.research_info }}
          </td>
        </tr>

      </table>

      <div class="btn-box">

      </div>
      <div class="btn-box" v-if="info">
        <el-button type="success" v-if="info.is_served == 1">已同意接洽</el-button>

        <el-button type="danger" v-else-if="info.is_served == 2">已拒绝接洽</el-button>
        <el-button type="success" v-if="info.is_served == 0" @click="jieqia(1)">同意接洽</el-button>

        <el-button type="danger" v-if="info.is_served == 0" @click="jieqia(2)">拒绝接洽</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "supplier",
  data() {
    return {
      expert: null,
      info: null,
      demindid: this.$route.query.demindid
    };
  },
  created() {
    if (!this.$store.state.user) {
      this.$router.push('/login')
      return
    }
    this.init();
    this.info = JSON.parse(decodeURIComponent(this.$route.query.info))
  },
  methods: {
    async init() {
      try {
        this.$api.apiContent.getExpert({
          id: this.$route.query.id,
        }).then(res => {
          this.expert = res;
        })
      } catch (error) {
        console.log(error);
      }
    },
    async jieqia(flag) {
      try {
          this.$api.apiContent.suerJq({
            is_served: flag,
            sha1: this.info.supply_sha1,
            need_sha1: `${this.baseApi}techneeds/${this.demindid}/`,
            supplier_sha1: this.expert.sha1,
          }).then(() => {
            this.$message.success('操作成功')
            this.$router.go(-1);
          })
      } catch (error) {
        this.$message.error("提交失败");
      }
    }
  }
}
</script>

<style scoped lang="scss">
.gongying {
  .gongying-detail {
    .gy-title {
      text-align: center;
      padding-bottom: 30px;
      font-size: 18px;
    }

    .table {
      display: block;
      width: 100%;
      border-top: solid 1px #aaccef;
      border-left: solid 1px #aaccef;
      background-color: #f7fdf9;
      margin-bottom: 40px;

      tr {
        &.active {
          background: #e0ecff;
          font-size: 16px;
        }

        td {
          text-align: left;
          padding: 10px;
          width: 600px;
          border-bottom: solid 1px #aaccef;
          border-right: solid 1px #aaccef;

          &.active {
            width: 150px;
            text-align: right;
          }
        }
      }
    }

    .btn-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 400px;
      margin: 0 auto 40px;

      .el-button {
        width: 150px;
      }
    }
  }
}
</style>