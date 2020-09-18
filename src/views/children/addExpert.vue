<template>
  <div class="gongying bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > {{ expert_authentication ? '修改专家信息' : '登记专家信息' }}
    </div>
    <div class="gongying-detail">
      <h3 class="gy-title">{{ expert_authentication ? '修改专家信息' : '登记专家信息' }}</h3>
      <table class="table">
        <tr class="active">
          <td colspan="4">专家信息</td>
        </tr>
        <tr>
          <td class="active"><b>*</b>工作单位：</td>
          <td>
            <el-input v-model="org" placeholder="请输入工作单位" style="width: 340px;"></el-input>
          </td>
          <td class="active"><b>*</b>职称：</td>
          <td>
            <el-input v-model="position" placeholder="请输入职称" style="width: 340px;"></el-input>
          </td>
        </tr>
        <tr>
          <td class="active"><b>*</b>所学专业及学位：</td>
          <td>
            <el-input v-model="major" placeholder="请输入所学专业及学位" style="width: 340px;"></el-input>
          </td>
          <td class="active"><b>*</b>手机或家庭电话：</td>
          <td>
            <el-input v-model="phone" placeholder="请输入手机或家庭电话" style="width: 203px;"></el-input>
          </td>
        </tr>
        <tr>
          <td class="active">民族：</td>
          <td class="active2">
            <el-input v-model="nation" placeholder="请输入民族" style="width: 203px;"></el-input>
          </td>
          <td class="active">出生日期：</td>
          <td class="active2">
            <el-date-picker
                style="width: 203px;"
                v-model="time"
                type="date"
                placeholder="选择出生日期">
            </el-date-picker>
          </td>
        </tr>
        <tr>
          <td class="active">党派：</td>
          <td>
            <el-input v-model="parties" placeholder="请输入党派" style="width: 203px;"></el-input>
          </td>
          <td class="active">籍贯：</td>
          <td>
            <el-input v-model="nativeplace" placeholder="请输入籍贯" style="width: 203px;"></el-input>
          </td>
        </tr>
        <tr>

          <td class="active">通讯地址：</td>
          <td>
            <el-input v-model="addr" placeholder="请输入通讯地址" style="width: 203px;"></el-input>
          </td>
          <td class="active">办公电话：</td>
          <td>
            <el-input v-model="tel" placeholder="请输入办公电话" style="width: 203px;"></el-input>
          </td>
        </tr>

        <tr>
          <td class="active">外语情况 ：</td>
          <td colspan="3">
            <el-input v-model="language" type="textarea" placeholder="请输入外语情况" :rows="5"></el-input>
          </td>
        </tr>
        <tr>
          <td class="active">研究方向及主要成果：</td>
          <td colspan="3">
            <el-input v-model="achievements" type="textarea" placeholder="请输入主要成果" :rows="5"></el-input>
          </td>
        </tr>

      </table>

      <div class="btn-box">
        <el-button type="success" v-if="expert_authentication" @click="edit">修改专家信息</el-button>
        <el-button type="success" v-else @click="add">登记专家信息</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addExpert",
  data() {
    return {
      expert_authentication: this.$store.state.user.expert_authentication,
      name: '',
      nation: '',
      time: '',
      parties: '',
      nativeplace: '',
      addr: '',
      org: '',
      tel: '',
      position: '',
      phone: '',
      major: '',
      language: '',
      direction: '',
      achievements: '',
      url: '',
      sha1: '',
    }
  },
  created() {
    if (!this.$store.state.user) {
      this.$router.push('/login')
      return
    }
    if (this.expert_authentication) {
      this.getDetail()
    }
  },
  methods: {
    async getDetail() {
      try {
        this.$api.apiContent.getExpert({
          id: this.$store.state.user.sha1
        }).then(res => {
          this.name = res.username
          this.nation = res.nation
          this.time = res.birthdate
          this.parties = res.party
          this.nativeplace = res.native
          this.addr = res.mail_address
          this.org = res.affiliation
          this.position = res.position
          this.tel = res.office_phone
          this.phone = res.phone
          this.major = res.education
          this.language = res.language_info
          this.achievements = res.research_info
          this.url = res.url
          this.sha1 = res.sha1

        })
      } catch (error) {
        console.log(error)
        this.$message.error("获取专家详情异常");
      }
    },
    pd() {

      if (!this.org) {
        this.$message.error('请输入工作单位')
        return false
      }

      if (!this.position) {
        this.$message.error('请输入职称')
        return false
      }
      if (!this.major) {
        this.$message.error('请输入所学专业及学位')
        return false
      }
      if (!this.phone) {
        this.$message.error('请输入手机或家庭电话')
        return false
      }
      return true
    },
    add() {
      if (!this.pd()) {
        return
      }
      this.$api.apiContent.addExpert({
        url: this.baseApi + "userexpertinfos/" + this.$store.state.user.user_id + "/",
        nation: this.nation,
        birthdate: this.$tools.ZHDate(new Date(this.time)),
        party: this.parties,
        native: this.nativeplace,
        mail_address: this.addr,
        affiliation: this.org,
        office_phone: this.tel,
        position: this.position,
        phone: this.phone,
        education: this.major,
        language_info: this.language,
        research_info: this.achievements,
        sha1: this.baseApi + 'userinfos/' + this.$store.state.user.sha1 + '/',
        id: this.$store.state.user.user_id,
        has: this.expert_authentication
      }).then(() => {
        this.$message.success('登记成功')
        this.expert_authentication = true
        this.$store.state.user.expert_authentication = true
      })
    },
    edit() {
      if (!this.pd()) {
        return
      }
      let list = this.url.split("/");
      let id = list[list.length - 2]
      this.$api.apiContent.editExpert({
        url: this.url,
        nation: this.nation,
        birthdate: this.$tools.ZHDate(new Date(this.time)),
        party: this.parties,
        native: this.nativeplace,
        mail_address: this.addr,
        affiliation: this.org,
        office_phone: this.tel,
        position: this.position,
        phone: this.phone,
        education: this.major,
        language_info: this.language,
        research_info: this.achievements,
        sha1: this.sha1,
        id: id,
        has: this.expert_authentication
      }).then(() => {
        this.$message.success('修改成功')
        this.expert_authentication = true
        this.$store.state.user.expert_authentication = true
      })
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
          border-bottom: solid 1px #aaccef;
          border-right: solid 1px #aaccef;

          b {
            color: #e4393c;
          }

          &.active {
            width: 230px;
            text-align: right;
          }

          &.active2 {
            width: 400px;
            //text-align: right;
          }
        }
      }
    }

    .btn-box {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 400px;
      margin: 0 auto 40px;

      .el-button {
        width: 150px;
      }
    }
  }
}
</style>