const INITIAL_STATE = {
    activeLesson: {},
    activeModule: {},

    modules: [
        {
            id: 1, title: ' Clique em um Nome ', tit:' Você clicou no nome de: ', lessons: [
                { id: 1, title: ' MatteusGuedz ' },
                { id: 2, title: ' Fulano de Tal ' },

            ],
        },
        {
            id: 2, title: ' Clique em um tecnologia ',tit:' Você clicou na tech: ', lessons: [
                { id: 3, title: ' ReactJS ' },
                { id: 4, title: ' VueJS ' }
            ]
        }
    ]
}
export default function course(state = INITIAL_STATE, action){
    if(action.type === "TOGGLE_LESSON") {
      return {  ...state, 
        activeLesson: action.lesson,
        activeModule: action.module}
    }
    return state;
}
