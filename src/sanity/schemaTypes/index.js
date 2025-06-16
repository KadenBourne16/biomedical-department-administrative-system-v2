import { account } from "../schema/account"
import { student } from "../schema/student"
import {admin} from "../schema/admin"
import {lecturer} from "../schema/lecturer"
import {news} from "../schema/news"
import {studentacademiclife} from "../schema/student-academic-life"
import lecturerAcademicLife from "../schema/lecturer-academic-life"


export const schema = {
  types: [student,studentacademiclife, lecturerAcademicLife, lecturer, account, admin, news]
}