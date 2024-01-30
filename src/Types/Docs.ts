export interface Docs {
  PI: boolean
  CI: boolean
  PL: boolean
  SS_DS: boolean
  contract_agrees: boolean
  cost_agrees: boolean
  instruction: boolean
  ED: boolean
  bill: boolean
  order_number: string
}

export type DocsFormType = Omit<Docs, 'order_number'>
