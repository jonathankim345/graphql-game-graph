let games = [
    { id: '1', title: 'Zelda, Tears of the Kingdom', platform: ['Switch'] },
    { id: '2', title: 'Phoenix Wright: Ace Attorney - Dual Destinies', platform: ['PS5', 'Xbox', 'Switch'] },
    { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
    { id: '4', title: 'Mario Kart', platform: ['Switch'] },
    { id: '5', title: 'Pokemon Scarlet', platform: ['Switch'] },
]

let authors = [
    { id: '1', name: 'Polygon', verified: true },
    { id: '2', name: 'IGN', verified: false },
    { id: '3', name: 'Kotaku', verified: true },
]

let reviews = [
    { id: '1', rating: 9, content: "Dual Destinies isn't ground-breaking", author_id: '1', game_id: '2' },
    { id: '2', rating: 10, content: 'A remarkable sequel', author_id: '2', game_id: '1' },
    { id: '3', rating: 7, content: 'A frustrating master class', author_id: '3', game_id: '3' },
    { id: '4', rating: 5, content: 'Mario Kart 8 is the best kart racing game', author_id: '2', game_id: '4' },
    { id: '5', rating: 8, content: 'A brilliant direction for the future of the franchise', author_id: '2', game_id: '5' },
    { id: '6', rating: 7, content: "It's great at what it does", author_id: '1', game_id: '2' },
    { id: '7', rating: 10, content: 'Nintendo builds on Breath of the Wild', author_id: '3', game_id: '1' },
]

export default { games, authors, reviews }