import React from 'react';
import {AdminExamBody} from './AdminExamBody';
import sample_data from './sample_exam_info.json'


export default {
    title: '3.organisms/AdminExamBody',
    component: AdminExamBody,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

const Template = (args) => <AdminExamBody {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    exam_info: sample_data
};