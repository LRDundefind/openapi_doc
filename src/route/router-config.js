import summary from '@/views/preface/summary.vue'
import startDevelopment from '@/views/preface/startDevelopment.vue'
import developerTools from '@/views/preface/developerTools.vue'
import updateLog from '@/views/preface/updateLog.vue'

import createMember from '@/views/member/createMember.vue'
import readMember from '@/views/member/readMember.vue'

import establishDepartment from '@/views/department/establishDepartment.vue'
import updateDepartment from '@/views/department/updateDepartment.vue'

import createLabel from '@/views/label/createLabel.vue'
import updateName from '@/views/label/updateName.vue'
import deleteLabel from '@/views/label/deleteLabel.vue'
import getMembers from '@/views/label/getMembers.vue'


export default [
    {path: '/summary', name: "summary", component: summary},
    {path: '/startDevelopment', name: "startDevelopment", component: startDevelopment},
    {path: '/developerTools', name: "developerTools", component: developerTools},
    {path: '/updateLog', name: "updateLog", component: updateLog},

    {path: '/createMember', name: "createMember", component: createMember},
    {path: '/readMember', name: "readMember", component: readMember},

    {path: '/establishDepartment', name: "establishDepartment", component: establishDepartment},
    {path: '/updateDepartment', name: "updateDepartment", component: updateDepartment},

    {path: '/createLabel', name: "createLabel", component: createLabel},
    {path: '/updateName', name: "updateName", component: updateName},
    {path: '/deleteLabel', name: "deleteLabel", component: deleteLabel},
    {path: '/getMembers', name: "getMembers", component: getMembers},
]
