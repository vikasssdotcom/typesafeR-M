
export interface data {
    info : {
      next:  string
      prev?: number
    }
    results:CharacterDetail[]
  }

export interface CharacterDetail {
  id: number
  name: string
  status: string
  gender: string
  image: string
}
