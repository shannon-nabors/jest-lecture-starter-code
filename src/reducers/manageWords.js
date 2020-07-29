let idTracker = 1
let starterWords = [
    {name: "katten", img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"},
    {name: "avisen", img_url: "https://im-media.voltron.voanews.com/Drupal/01live-166/styles/sourced/s3/2020-04/ap_paper.jpg?itok=pevRrI3j"},
    {name: "skildpadden", img_url: "https://s3.amazonaws.com/filestore.rescuegroups.org/6685/pictures/animals/9629/9629687/70631879_385x385.jpg"},
    {name: "osten", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZTFupDecwShDuEwbYcAYFm14TtKAdJwZ7wg&usqp=CAU"},
    {name: "gaffelen", img_url: "https://media.istockphoto.com/photos/fork-on-black-background-picture-id987346626?k=6&m=987346626&s=612x612&w=0&h=WXWCwfMlL9rW2igFpM_kkiQ_pNgGnNRX9CJTWaHY9Rw="},
    {name: "brødet", img_url: "https://tastesbetterfromscratch.com/wp-content/uploads/2020/03/Bread-Recipe-5-2-500x500.jpg"}
]

export default function manageWord(state = { words: starterWords }, action){
    switch (action.type) {
        case 'ADD_WORD':
            let word = { id: idTracker, img_url: action.payload.img_url, name: action.payload.name }
            idTracker++
            console.log(word)
            return {...state, words: [...state.words, word]}
        case 'DELETE_WORD':
            let filteredWords = state.words.filter(word => word.id !== action.payload)
            return {...state, words: filteredWords }
        default:
            return state
    }
}