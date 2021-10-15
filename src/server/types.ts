export default interface APIResponse<T> {
  //状态码
  code: number,
  //信息
  info: string,
  //数据
  data: T,
}

export interface PageData<T> {
  //当前页
  page: 0,
  //数据总数
  records: 0,
  //数据
  rows: T,
  //分页总数
  total: 0,
}

export interface PageQueryType {
  //每页行数
  rows: number
  //当前页数
  page: number,
  //查询信息
  queryJson?: string
}