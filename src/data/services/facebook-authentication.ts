import { LoadFacebookUserApi } from '@/data/contracts/apis'
import { CreateFacebookAccountRepository, LoadUserAccountRepository } from '@/data/contracts/repos'
import { AuthenticationError } from '@/domain/errors'
import { FacebookAuthentication } from '@/domain/features'

export class FacebookAuthenticationService {
  constructor (
    private readonly LoadFacebookUserApi: LoadFacebookUserApi,
    private readonly LoadUserAccountRepo: LoadUserAccountRepository,
    private readonly CreateFacebookAccountRepo: CreateFacebookAccountRepository
  ) {}

  async perform (params: FacebookAuthentication.Params): Promise<AuthenticationError> {
    const fbData = await this.LoadFacebookUserApi.loadUser(params)

    if (fbData !== undefined) {
      await this.LoadUserAccountRepo.load({ email: fbData?.email })
      await this.CreateFacebookAccountRepo.createFacebookAccount(fbData)
    }

    return new AuthenticationError()
  }
}
