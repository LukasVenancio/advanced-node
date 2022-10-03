import { AuthenticationError } from '@/domain/errors'
import { AcessToken } from '@/domain/models'

export interface FacebookAuthentication {
  perform: (parms: FacebookAuthentication.Params) => Promise<FacebookAuthentication.Result>
}

export namespace FacebookAuthentication {
  export type Params = {
    token: string
  }

  export type Result = AcessToken | AuthenticationError
}
