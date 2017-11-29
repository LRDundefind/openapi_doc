import summary from '@/views/preface/summary'
import startDevelopment from '@/views/preface/startDevelopment'
import developerTools from '@/views/preface/developerTools'
import updateLog from '@/views/preface/updateLog'

import errcode from '@/views/preface/errcode'

import createUser from '@/views/user/createUser'
import getUser from '@/views/user/getUser'
import updateUser from '@/views/user/updateUser'
import deleteUser from '@/views/user/deleteUser'
import batchdeleteUser from '@/views/user/batchdeleteUser'

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

    {path: '/errcode', name: "errcode", component: errcode},
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
    {
        path: '/user/batchdelete',
        component: batchdeleteUser,
        name: '401',
    },

    {
        path: '/department/get',
        component: getDepartment,
        name: 'getDepartment',
    },
    {
        path: '/department/update',
        component: updateDepartment,
        name: 'updateDepartment',
    },
    {
        path: '/department/create',
        component: getDepartment,
        name: 'getDepartment',
    },
    {
        path: '/department/delete',
        component: deleteDepartment,
        name: 'deleteDepartment',
    },

    {
        path: '/label/create',
        component: createLabel,
        name: 'createLabel',
    },
    {
        path: '/label/update',
        component: updateName,
        name: 'updateName',
    },
    {
        path: '/label/delete',
        component: deleteLabel,
        name: 'deleteLabel',
    },
    {
        path: '/label/get',
        component: getLabel,
        name: 'getLabel',
    },
    {path: '*', name: "summary", component: summary},

]
