<template>
  <div class="view-wrapper">
    <a-card size="small" class="view-form">
      <a-form layout="inline">
        <a-form-item label="账号">
          <a-input v-model:value="formRt.username"/>
        </a-form-item>
        <a-form-item label="昵称">
          <a-input/>
        </a-form-item>
        <a-form-item label="注册时间">
          <a-input/>
        </a-form-item>
        <a-form-item>
          <a-space>
            <a-button>清除</a-button>
            <a-button type="primary">查询</a-button>
          </a-space>
        </a-form-item>
      </a-form>
    </a-card>

    <div>
      <a-card size="small">
        <a-space>
          <a-button type="primary">新增</a-button>
          <a-button type="default" danger>删除</a-button>
        </a-space>
        <a-space></a-space>
      </a-card>
      <a-table v-bind="tableRt">

      </a-table>
      <a-card size="small">
        <div>

        </div>
        <a-pagination v-bind="paginationRt"></a-pagination>
      </a-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue'
import {getPage} from '@/api/user'
import {columns} from './data'

//表格
const tableRt = reactive({
  rowKey: 'id',
  columns: columns,
  dataSource: [],
  pagination: false,
})

//分页
const paginationRt = reactive({})

//搜索表单
const formRt = reactive({
  username: '',
  nickname: '',
  createDate: [],
})

//初始化
const init = async () => {
  try {
    const data = await getPage()
    const {page, pageSize, total, content} = data as any
    tableRt.dataSource = content
  } catch (err) {

  } finally {

  }
}

onMounted(() => {
  init()
})

</script>
<style scoped>
.view-wrapper {
  padding: 12px;
}

.view-form {
  margin-bottom: 12px;
}
</style>