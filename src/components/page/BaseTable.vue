<style scoped>
  .handle-box {
    margin-bottom: 20px;
  }

  .handle-select {
    width: 120px;
  }

  .handle-input {
    width: 300px;
    display: inline-block;
  }
  .del-dialog-cnt{
    font-size: 16px;
    text-align: center
  }
  .table{
    width: 100%;
    font-size: 14px;
  }
  .red{
    color: #ff0000;
  }
  .mr10{
    margin-right: 10px;
  }
</style>
<template>
  <div class="table">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-suzhibiaoleixingguanli"></i>基础表格</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="container">
        <el-row :gutter="2">
          <el-col :span="3">
            <el-button type="primary" icon="el-icon-delete" @click="delAll">批量删除</el-button>
          </el-col>
          <el-col :span="4">
            <el-select v-model="select_cate" placeholder="筛选省份">
              <el-option label="广东省" value="广东省"></el-option>
              <el-option label="湖南省" value="湖南省"></el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-input v-model="select_word" placeholder="筛选关键词">
              <el-button type="primary" icon="el-icon-search" slot="append" @click="search"></el-button>
            </el-input>
          </el-col>
        </el-row>
        <el-table :data="data" border ref="multipleTable" @selection-change="handleSelectionChange" style="margin-top:15px;">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column prop="date" label="日期" sortable width="150"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="操作" width="180" align="center">
            <template v-slot="scope">
              <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination">
          <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="total" :page-size="pageSize">
          </el-pagination>
        </div>
    </div>

    <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
      <el-form :model="form" >
        <el-form-item label="日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width:100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="delVisible">
      <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
      <span slot="footer" class="dialog-footer">
          <el-button @click="delVisible = false">取 消</el-button>
          <el-button type="primary" @click="deleteRow">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import dataList from '@/hypotheticaldata/basetable.js'
export default {
  name: 'basetable',
  data () {
    return {
      select_cate: '',
      select_word: '',
      del_list: [],
      multipleSelection: [],
      tableList: dataList,
      is_search: false,
      editVisible: false,
      delVisible: false,
      form: {
        name: '',
        date: '',
        address: ''
      },
      idx: -1,
      total: 100,
      pageSize: 8,
      curr_page: 1
    }
  },
  computed: {
    data () {
      let items = this.tableList.filter(item => {
          let is_del = false
          for (let i = 0; i< this.del_list.length; i++) {
            if (item.name === this.del_list[i].name) {
              is_del = true
              break
            }
          }
          if (!is_del) {
            if (item.address.indexOf(this.select_cate) > -1 &&
                (item.name.indexOf(this.select_word) > -1 || item.name.indexOf(this.select_word) > -1)
              ) {
                return item
            }
          }
        })
      return items.slice((this.curr_page-1)*this.pageSize, this.curr_page*this.pageSize)
    }
  },
  methods: {
    delAll () {
      const selectionLength = this.multipleSelection.length
      let str = ''
      this.del_list = this.del_list.concat(this.multipleSelection)
      this.multipleSelection.forEach((item,key) => {
        str += this.multipleSelection[key].name + ' '
      })
      this.$message.error('删除了' + str)
      this.multipleSelection = []
    },
    search () {
      this.is_search = true
    },
    handleSelectionChange (selection) {
      this.multipleSelection = selection
    },
    handleEdit (index, row) {
      this.idx = index
      const item = this.tableList[index]
      this.form = {
        name: item.name,
        date: item.date,
        address: item.address
      }
      this.editVisible = true
    },
    handleDelete (index, row) {
      this.idx = index
      this.delVisible = true
    },
    saveEdit () {
      this.$set(this.tableList, this.idx, this.form)
      this.editVisible= false
      this.$message.success(`修改第${this.idx+1}行成功`)
    },
    deleteRow () {
      this.tableList.splice(this.idx, 1)
      this.$message.success('删除成功')
      this.delVisible = false
    },
    handleCurrentChange (val) {
      this.curr_page = val
    }
  },
  created (){
    this.total = dataList.length
  }
}
</script>
