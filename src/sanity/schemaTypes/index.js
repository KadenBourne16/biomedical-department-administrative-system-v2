import { account } from "../schema/account"
import { student } from "../schema/student"
import {admin} from "../schema/admin"
import lecturer from "../schema/lecturer"

export const schema = {
  types: [student, lecturer, account, admin]
}
