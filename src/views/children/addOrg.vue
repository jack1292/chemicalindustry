<template>
  <div class="gongying bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > {{ company_authentication ? '修改企业信息' : '登记企业信息' }}
    </div>
    <div class="gongying-detail">
      <h3 class="gy-title">{{ company_authentication ? '修改企业信息' : '登记企业信息' }}</h3>
      <table class="table">
        <tr class="active">
          <td colspan="4">企业信息</td>
        </tr>
        <tr>
          <td class="active"><b>*</b>企业名称：</td>
          <td class="active2">
            <el-input v-model="organization" placeholder="请输入企业名称" style="width: 340px;"></el-input>
          </td>
          <td class="active"><b>*</b>电话：</td>
          <td>
            <el-input v-model="phone" placeholder="请输入电话" style="width: 203px;"></el-input>
          </td>
        </tr>
        <tr>
          <td class="active"><b>*</b>地址：</td>
          <td>
            <el-input v-model="address" placeholder="请输入地址" style="width: 340px;"></el-input>

          </td>

          <td class="active">统一社会信用代码：</td>
          <td class="active2">
            <el-input v-model="social_credit" placeholder="请输入统一社会信用代码" style="width: 340px;"></el-input>
          </td>

        </tr>
        <tr>
          <td class="active">邮编：</td>
          <td>
            <el-input v-model="postcode" placeholder="请输入邮编" style="width: 203px;"></el-input>
          </td>
          <td class="active">成立时间：</td>
          <td>
            <el-date-picker
                style="width: 203px"
                v-model="establishment_time"
                type="date"
                placeholder="选择成立时间">
            </el-date-picker>

          </td>


        </tr>
        <tr>
          <td class="active">职务：</td>
          <td td colspan="3">
            <el-input v-model="position" placeholder="请输入职务" style="width: 203px;"></el-input>
          </td>
        </tr>

        <tr>
          <td class="active">企业已有资质 ：</td>
          <td colspan="3">
            <el-input v-model="qualification" type="textarea" placeholder="请输入企业已有资质" :rows="5"></el-input>
          </td>
        </tr>
        <tr>
          <td class="active">主营业务活动：</td>
          <td colspan="3">
            <el-input v-model="business_activity" type="textarea" placeholder="请输入主营业务活动" :rows="5"></el-input>
          </td>
        </tr>
        <tr>
          <td class="active">公司简介：</td>
          <td colspan="3">
            <el-input v-model="org_info" type="textarea" placeholder="请输入公司简介" :rows="5"></el-input>
          </td>
        </tr>
      </table>

      <div class="btn-box">
        <el-button type="success" v-if="company_authentication" @click="eidt">修改企业信息</el-button>
        <el-button type="success" v-else @click="add">登记企业信息</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addOrg",
  data() {
    return {
      company_authentication: this.$store.state.user.company_authentication,
      organization: "",
      social_credit: "",
      position: "",
      phone: "",
      address: "",
      postcode: "",
      establishment_time: "",
      qualification: "",
      business_activity: "",
      org_info: "",
      sha1: '',
      url: '',
    }
  },
  created() {
    if (!this.$store.state.user) {
      this.$router.push('/login')
      return
    }
    if (this.company_authentication) {
      this.getDetail()
    }
  },
  methods: {
    async getDetail() {
      try {
        this.$api.apiContent.getCompany({
          id: this.$store.state.user.sha1
        }).then(res => {
          this.organization = res.organization
          this.social_credit = res.social_credit
          this.position = res.position
          this.phone = res.phone
          this.address = res.address
          this.postcode = res.postcode
          this.establishment_time = res.establishment_time
          this.qualification = res.qualification
          this.business_activity = res.business_activity
          this.org_info = res.org_info
          this.sha1 = res.sha1
          this.url = res.url
        })
      } catch (error) {
        console.log(error)
        this.$message.error("获取专家详情异常");
      }
    },
    pd(){
      if(!this.organization){
        this.$message.error('请输入企业名称')
        return false
      }


      if(!this.address){
        this.$message.error('请输入地址')
        return false
      }
      if(!this.phone){
        this.$message.error('请输入电话')
        return false
      }


      return true
    },
    add() {
      if(!this.pd()){
        return
      }
      this.$api.apiContent.addCompany({
        url: this.baseApi + "usercompanyinfos/" + this.$store.state.user.sha1 + "/",
        sha1: this.baseApi + 'userinfos/' + this.$store.state.user.sha1 + '/',
        organization: this.organization,
        social_credit: this.social_credit,
        position: this.position,
        phone: this.phone,
        address: this.address,
        postcode: this.postcode,
        establishment_time: this.$tools.ZHDate(new Date(this.establishment_time)),
        qualification: this.qualification,
        business_activity: this.business_activity,
        org_info: this.org_info,
      }).then(() => {
        this.$message.success('登记成功')
        this.company_authentication = true
        this.$store.state.user.company_authentication = true
      })
    },
    eidt() {
      if(!this.pd()){
        return
      }
      let list = this.url.split("/");
      let id = list[list.length - 2]
      this.$api.apiContent.editCompany({
        url: this.url,
        sha1: this.sha1,
        organization: this.organization,
        social_credit: this.social_credit,
        position: this.position,
        phone: this.phone,
        address: this.address,
        postcode: this.postcode,
        establishment_time: this.$tools.ZHDate(new Date(this.establishment_time)),
        qualification: this.qualification,
        business_activity: this.business_activity,
        org_info: this.org_info,
        id:id,
      }).then(() => {
        this.$message.success('修改成功')
        this.company_authentication = true
        this.$store.state.user.company_authentication = true
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
          padding: 5px 10px;
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
            width: 444px;
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