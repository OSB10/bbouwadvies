export type ContactFormFieldName =
  | 'fullName'
  | 'email'
  | 'phone'
  | 'subject'
  | 'message'
  | 'companyProject'
  | 'website'

export type ContactActionState = {
  success: boolean
  message: string
  fieldErrors?: Partial<Record<ContactFormFieldName, string[]>>
  formError?: string
  status:
    | 'idle'
    | 'success'
    | 'validation_error'
    | 'server_error'
    | 'rate_limited'
    | 'spam_blocked'
}

export const initialContactActionState: ContactActionState = {
  success: false,
  message: '',
  status: 'idle',
}
