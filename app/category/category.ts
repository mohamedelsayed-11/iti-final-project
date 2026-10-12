export interface Root {
  results: number
  metadata: Metadata
  
}

export interface Metadata {
  currentPage: number
  numberOfPages: number
  limit: number
}

export interface categorytype {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
}
