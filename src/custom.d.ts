type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number
  createdAt?: string
}

type Tag = {
  id: string,
  name: string
}

type RootState = {
  recordList : RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

type  TagListModel = {
  date: Tag[],
  fetch: () => Tag[],
  create: (name: string) => 'success' | 'duplicated'
  update: (id: string , name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}
// export {RecordItem};

interface Window {
}
