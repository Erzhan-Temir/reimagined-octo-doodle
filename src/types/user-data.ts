export interface UserInfo {
  email: string,
  bookmarkedIds: string[],
}

export interface UserState {
  readonly isLoggedIn: boolean,
  readonly userInfo: UserInfo,
  readonly pendingAuthorization: boolean,
  readonly isLoginNoticeShowed: boolean,
}
