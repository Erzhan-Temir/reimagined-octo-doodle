export interface UserInfo {
  email: string,
  bookmarkedIds: string[],
}

export interface UserState {
  readonly isLoggedIn: boolean,
  readonly isLoginNoticeShowed: boolean,
  readonly isFavoriteButtonDisabled: boolean,
  readonly pendingAuthorization: boolean,
  readonly userInfo: UserInfo,
}
