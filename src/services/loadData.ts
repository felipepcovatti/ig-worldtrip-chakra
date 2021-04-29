import localData from '../../localData.json'

type Query = {
  [key: string]: string
}

interface loadDataReturn<Data> {
  data: Data[]
  id(id: string): { data: Data }
  query(query: Query): { data: Data[] }
}

export function loadData<Data>(ref: string): loadDataReturn<Data> {
  const items = localData[ref]

  return {
    data: items,
    id(id) {
      return {
        data: items.find((item: any) => item.id === id)
      }
    },

    query(query) {
      const filteredItems = items.filter((item: any) => {
        for (const [param, value] of Object.entries(query)) {
          if (item[param] !== value) return false
        }
        return true
      })

      return { data: filteredItems }
    }
  }
}