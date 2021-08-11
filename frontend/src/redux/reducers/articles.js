const initialState = {
    articles : [],
    article: {}
}

export default function article (state = initialState, action){
    switch (action.type) {
        case 'LOAD_ARTICLES': 
            return {
                ...state,
                articles: action.articles,
            }
        case 'VIEW_ARTICLE': 
            return {
                ...state,
                articles: action.article,
            }
        case 'CLAP_ARTICLES': 
            let article = Object.assign({}, state.article)
            article.claps++
            console.log(article)
            return {
                ...state,
                article: article
            }
        default: 
            return state
    }
}