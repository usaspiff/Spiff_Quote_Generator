var quotes = [
		"Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us",
		"It's hard to be religious when certain people are never incinerated by bolts of lightning.",
		"Why waste time learning, when ignorance is instantaneous?",
		"In my opinion, we don't devote nearly enough scientific research to finding a cure for jerks.",
		"I like maxims that don't encourage behavior modification.",
		"As far as I'm concerned, if something is so complicated that you can't explain it in 10 seconds, then it's probably not worth knowing anyway.",
		"Things are never quite as scary when you've got a best friend.",
		"That's the difference between me and the rest of the world! Happiness isn't good enough for me! I demand euphoria!",
		"Being a parent is wanting to hug and strangle your kid at the same time.",
		"There's never enough time to do all the nothing you want.",
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
	}