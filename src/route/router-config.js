import activePublic from '../views/activePublic/index.vue'
import step1 from '../views/activePublic/step1.vue'
import step2 from '../views/activePublic/step2.vue'
import step3 from '../views/activePublic/step3.vue'
import step4 from '../views/activePublic/step4.vue'

import totalpages from '../views/activeManage/totalpages.vue'
import activeManage from '../views/activeManage/index.vue'
import detail from '../views/activeManage/detail.vue'

import page1 from '../views/activeManage/page1.vue'
import page2 from '../views/activeManage/page2.vue'
import page3 from '../views/activeManage/page3.vue'
import page4 from '../views/activeManage/page4.vue'
import page5 from '../views/activeManage/page5.vue'

import group from '../views/group/index.vue'

import group1 from '../views/group1/index.vue'
import group2 from '../views/group2/index.vue'
import group3 from '../views/group3/index.vue'
import group4 from '../views/group4/index.vue'
import group5 from '../views/group5/index.vue'
import group6 from '../views/group6/index.vue'

export default [
    {
        path: '/activeManage', component: totalpages,
        children: [
                {path: '', component: activeManage},
                {
                    path: 'detail', component: detail,

                    children: [
                        {path: '', component: page1},
                        {
                            path: 'page1', component: page1,
                            children: [
                                {path: '', component: step1},
                                {path: 'step1', component: step1},
                                {path: 'step2', component: step2},
                                {path: 'step3', component: step3},
                                {path: 'step4', component: step4}
                            ]
                        },
                        {path: 'page2', component: page2},
                        {path: 'page3', component: page3},
                        {path: 'page4', component: page4},
                        {path: 'page5', component: page5}
                    ]
            },
        ]
    }, {
        path: '/activePublic', component: activePublic,
        // 配置路由，当路径为'/activePublic',使用组件activePublic
        children: [
            {path: '', component: step1},
            {path: 'step1', component: step1},
            {path: 'step2', component: step2},
            {path: 'step3', component: step3},
            {path: 'step4', component: step4}
        ]
    },
    {path: '/group', component: group},
    {path: '/group1', component: group1},
    {path: '/group2', component: group2},
    {path: '/group3', component: group3},
    {path: '/group4', component: group4},
    {path: '/group5', component: group5},
    {path: '/group6', component: group6},
]
