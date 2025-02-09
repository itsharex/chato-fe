export interface IQuestionFilter {
  domainId: string | number
  source: string
  evaluation?: string
  page?: number
  page_size?: number
  begin_time?: string
  end_time?: string
  mid_question_id?: string | number
  keyword?: string
}
