### Quiz

Check your understanding so far. Make sure to play the part of *Engine* and have a "conversation" with the *Scope*:

```js
function foo(a) {
	var b = a;
	return a + b;
}

var c = foo( 2 );
```

1. Identify all the LHS look-ups (there are 3!).
assigning `2` to `a` (lhs reference for `a` from line 11)
lookup `b`
lookup `c`

2. Identify all the RHS look-ups (there are 4!).
get value of `foo(2)` call on line 11
get value of `a` and assign to `b`
get value of `a` and add to value of `b`