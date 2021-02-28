export interface UserInfo {
  email: null|string,
  bookmarkedIds: null|string[],
}

export interface UserState {
  readonly isLoggedIn: boolean,
  readonly userInfo: UserInfo,
  readonly pendingAuthorization: boolean,
}
