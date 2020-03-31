import React from 'react';
import { connect } from 'react-redux';
import './styles.css';


function toggleLesson(lesson, module){
    return {
        type: 'TOGGLE_LESSON',
        module,
        lesson,
    }
}
const Sidebar = ({modules, dispatch}) => (
  
        <aside className="Tela">
    { modules.map(module => (
        <div className="content" key={module.id}>
            <strong className="Titulo"> [ {module.title} ]</strong>
            <ul>
                {module.lessons.map(lesson => (
                    <li key={lesson.id}>
                    <button className="buttons"  onClick={()=>dispatch(toggleLesson(lesson, module))}>
                    {lesson.title}
                    </button>
                    </li>
                ))}

            </ul>

        </div>
    ))}
</aside>
 
);

export default connect(state => ({modules: state.course.modules}))(Sidebar);
