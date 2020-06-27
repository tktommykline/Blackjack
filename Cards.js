var deck = new Array();
var suits = ["hearts", "clubs", "diamonds", "spades"];
var faces = ["Ace", "2", "3" , "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

console.log("HERE IDIOT!")

function getDeck()
{
	var deck = new Array();

	for(var i = 0; i < suits.length; i++)
	{
		for(var x = 0; x < faces.length; x++)
		{
			var card = {Face: faces[x], Suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
}

    function shuffle(){
	for (var i = 0; i < 500; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
    }
    console.log(deck)
}

function renderDeck()
{
	document.getElementById('deck').innerHTML = '';

	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var icon = '';
		if (deck[i].Suit == 'hearts')
		icon=' of hearts';
		else if (deck[i].Suit == 'spades')
		icon = ' of spades';
		else if (deck[i].Suit == 'diamonds')
		icon = ' of diamonds';
		else
		icon = ' of clubs';

		card.innerHTML = deck[i].Face + '' + icon;
		card.className = 'card';
	document.getElementById("deck").appendChild(card);
    }
}

function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
	console.log(deck);
}
window.onload = load;


// dealer hits at 16 stays 17.
// splitting when you get 2 of the same card you can split them and play each as it's own hand.
// insurence when the dealer checks if they have blackjack on first deal. if they have a 10 or face card they can ask for insurence.
// double down if the player's first card is a 10 or 11 they can doulbe the bet but can't take more than 1 more card. 
