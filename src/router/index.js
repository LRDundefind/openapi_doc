import summary from '@/views/preface/summary'
import startDevelopment from '@/views/preface/startDevelopment'
import developerTools from '@/views/preface/developerTools'
import updateLog from '@/views/preface/updateLog'

import createUser from '@/views/user/createUser'
import getUser from '@/views/user/getUser'
import updateUser from '@/views/user/updateUser'
import deleteUser from '@/views/user/deleteUser'

import getDepartment from '@/views/department/getDepartment'
import updateDepartment from '@/views/department/updateDepartment'
import createDepartment from '@/views/department/createDepartment'
import deleteDepartment from '@/views/department/deleteDepartment'


import createLabel from '@/views/label/createLabel'
import updateName from '@/views/label/updateName'
import deleteLabel from '@/views/label/deleteLabel'
import getLabel from '@/views/label/getLabel'


export default [
    {path: '/summary', name: "summary", component: summary},
    {path: '/startDevelopment', name: "startDevelopment", component: startDevelopment},
    {path: '/developerTools', name: "developerTools", component: developerTools},
    {path: '/updateLog', name: "updateLog", component: updateLog},


    {
        path: '/user/create',
        component: createUser,
        name: '401',
    },
    {
        path: '/user/get',
        component: getUser,
        name: '401',
    },
    {
        path: '/user/update',
        component: updateUser,
        name: '401',
    },
    {
        path: '/user/delete',
        component: deleteUser,
        name: '401',
    },


    {path: '/getDepartment', name: "getDepartment", component: getDepartment},
    {path: '/updateDepartment', name: "updateDepartment", component: updateDepartment},
    {path: '/createDepartment', name: "createDepartment", component: createDepartment},
    {path: '/deleteDepartment', name: "deleteDepartment", component: deleteDepartment},

    {path: '/createLabel', name: "createLabel", component: createLabel},
    {path: '/updateName', name: "updateName", component: updateName},
    {path: '/deleteLabel', name: "deleteLabel", component: deleteLabel},
    {path: '/getLabel', name: "getLabel", component: getLabel},
    {path: '*', redirect: '/summary'}
]
