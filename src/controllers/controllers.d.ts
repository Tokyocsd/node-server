interface includes {
  where: {
    id?: number,
    username?: string,
    password?: string
  }
}

interface userInfo {
  username: string,
  password: string
}

interface changePassword {
  oldPassword: string,
  newPassword: string
}
