import React from 'react';
import  { connect } from 'react-redux';
import '../Sidebar/styles.css';

// import { Container } from './styles';

const Video = ({ activeModule, activeLesson}) =>  (
    <div className="ContTitles">
        <strong>{activeModule.tit}</strong>
        <span>{activeLesson.title}</span>
    </div>
);

export default connect(state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson,
}))(Video);
