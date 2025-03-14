export const searchAccount = (email) => {
    return `[_type == "account" && email == "${email}"]`
  }