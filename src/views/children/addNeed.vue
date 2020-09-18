<template>
  <div class="need bx-content">
    <div class="page-title">
      <i class="iconfont iconleft"></i>当前位置：首页 > 我有需求
    </div>
    <div class="need-detail">
      <h3 class="need-detail-titel"><span>发布需求</span></h3>
      <div class="from-item">
        <h3>技术需求名称 <b>*</b></h3>
        <el-input v-model="title" placeholder="请输入内容"></el-input>
      </div>
      <div class="from-item">
        <h3>希望解决的技术需求概述 <b>*</b></h3>
        <el-input v-model="description" placeholder="请输入希望解决的技术需求概述"></el-input>
      </div>
      <div class="from-item">
        <h3>要求达到的技术性能、参数指标等<b>*</b></h3>
        <el-input v-model="requirements" placeholder="请输入要求达到的技术性能、参数指标等"></el-input>
      </div>
      <div class="from-item">
        <h3>其他相关要求<b>*</b></h3>
        <el-input v-model="other" placeholder="请输入其他相关要求"></el-input>
      </div>
      <div class="from-item">
        <h3>需求分类<b>*</b></h3>
        <el-select v-model="need_type" placeholder="请需求分类" style="width: 100%;">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="from-item">
        <h3>意向技术获得方式（至少选择一项）<b>*</b></h3>
        <el-checkbox-group v-model="techSource">
          <el-checkbox label="购买专利">购买专利</el-checkbox>
          <el-checkbox label="技术转让">技术转让</el-checkbox>
          <el-checkbox label="技术入股">技术入股</el-checkbox>
          <el-checkbox label="委托开发">委托开发</el-checkbox>
          <el-checkbox label="其它">其它</el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="from-item">
        <h3>需求单位名称 <b>*</b></h3>
        <el-input v-model="orgName" placeholder="请输入需求单位名称"></el-input>
      </div>
      <div class="from-item">
        <h3>需求单位简介 <b>*</b></h3>
        <el-input v-model="orgInfo" placeholder="请输入需求单位简介"></el-input>
      </div>
      <div class="from-item">
        <h3>需求联系人 <b>*</b></h3>
        <el-input v-model="contact" placeholder="请输入需求联系人"></el-input>
      </div>
      <div class="from-item">
        <h3>联系人电话 <b>*</b></h3>
        <el-input v-model="phone" placeholder="请输入联系人电话"></el-input>
      </div>
      <div class="from-item">
        <h3>电子邮箱 <b>*</b></h3>
        <el-input v-model="email" placeholder="请输入电子邮箱"></el-input>
      </div>
      <div class="btn-box">
        <el-button type="primary" @click="publish">发布需求</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addNeed",
  data() {
    return {
      islogin: false,
      title: '',
      description: '',
      requirements: '',
      other: '',
      need_type: '',
      techSource: [],
      orgName: '',
      orgInfo: '',
      contact: '',
      phone: '',
      email: '',
      options: [{
        value: '1',
        label: '合作开发'
      }, {
        value: '2',
        label: '合作兴办开发'
      }, {
        value: '3',
        label: '科技服务'
      }, {
        value: '4',
        label: '综合类'
      }],
    }
  },
  created() {
    if (!this.$store.state.user) {
      this.$router.push('/login')
      return
    }
  },
  methods: {
    myformatter() {
      let date = new Date();
      var strDate = date.getFullYear() + "-";

      strDate += date.getMonth() + 1 + "-";

      strDate += date.getDate();

      return strDate;
    },
    publish() {
      const user = this.$store.state.user
      if (!user ) {
        return this.$toast.fail('请先登录')
      }
      if (!user.expert_authentication) {
        return this.$toast.fail('请先在个人中心完成企业认证')
      }
      if (!this.title) {
        this.$message.error("技术需求名称不能为空");
      } else if (!this.description) {
        this.$message.error("技术需求概叙不能为空");
      } else if (!this.requirements) {
        this.$message.error("技术性能参数指标不能为空");
      } else if (!this.other) {
        this.$message.error("其他相关要求不能为空");
      } else if (!this.techSource) {
        this.$message.error("意向技术获得方式不能为空");
      }else if (this.need_type === '') {
        this.$message.error("请选择需求分类");
      }else if (this.techSource.length === 0) {
        this.$message.error("意向技术获得方式（至少选择一项）");
      }else if (!this.orgName) {
        this.$message.error("需求单位名称不能为空");
      } else if (!this.orgInfo) {
        this.$message.error("需求单位简介不能为空");
      } else if (!this.contact) {
        this.$message.error("需求联系人不能为空");
      } else if (!this.phone) {
        this.$message.error("联系人电话不能为空");
      } else if (!this.email) {
        this.$message.error("电子邮箱不能为空");
      } else {
        let time = this.myformatter();
        this.$api.apiContent.publishDemand({
          title: this.title,
          url:this.baseApi + "techneeds/" + this.$store.state.user.sha1 + "/",
          creation_time:time,
          description:this.description,
          requirements:this.requirements,
          other_requirements:this.other,
          tech_source:this.techSource.join(','),
          published:1,
          org_name:this.orgName,
          org_info:this.orgInfo,
          contact_person:this.contact,
          contact_phone:this.phone,
          contact_email:this.email,
          sha1:this.$store.state.user.sha1
        }).then(res=>{
          if (res.status == 400) {
            this.$message.error(res.data.detail || "提交失败")
          } else {
            this.$router.push('/home/user')
          }
        })
      }
    },
  }
}
</script>

<style scoped lang="scss">
.need {
  .need-detail {
    padding: 30px 50px;
    border: solid 1px #aaccef;
    margin-bottom: 25px;

    .need-detail-titel {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
      margin-bottom: 20px;

      span {
        display: block;
        width: 80px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        font-weight: normal;
        color: #2882db;
        border-bottom: 1px solid #2882db;
      }
    }

    .from-item {
      margin-bottom: 30px;

      h3 {
        margin-bottom: 10px;

        b {
          color: #e4393c;
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