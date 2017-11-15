import summary from '@/views/preface/summary'
import startDevelopment from '@/views/preface/startDevelopment'
import developerTools from '@/views/preface/developerTools'
import updateLog from '@/views/preface/updateLog'

import createMember from '@/views/member/createMember'
import readMember from '@/views/member/readMember'

import establishDepartment from '@/views/department/establishDepartment'
import updateDepartment from '@/views/department/updateDepartment'

import createLabel from '@/views/label/createLabel'
import updateName from '@/views/label/updateName'
import deleteLabel from '@/views/label/deleteLabel'
import getMembers from '@/views/label/getMembers'

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
