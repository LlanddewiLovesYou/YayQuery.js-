# YayQuery.js!

A javascript library for people who are tired of JQuery, but still want to manipulate the DOM.

# Core functionality

Perhaps you're used to using `$('dom-element')` to select a DOM element.

In YayQuery.js! you'll find a very similar selector.
However... instead of `$('dom-element')`
You'll use: `$y('dom-element')`.

Why?
`$y` not? (the `$y` is for yay!!!!)

`$y` can differentiate between a simple string selector and an HTMLElement and grab
the correct DOM elements accordingly.

`$y`can also be used to make AJAX requests just as in JQuery, y'know, but with an extra "YAY!"

Finally, you can also extend the `$y` prototype to add functionality and allow chaining of YayQuery! methods.

# FAQ

### What can I do with the nodes I've selected with `$y`?

Great question!

You can use `$y('dom-element').append(htmlstuff)` to add HTML to the selected elementList

Similarly, you can use `$y('dom-element').empty()` to remove the HTML you just added. Pretty neat huh?

Not impressed? How about classes? `$y('dom-element').addClass('some-class-name')` will allow you to
add a class to a selected element!

---

### "But what if I don't want my element to have that class anymore?? What do I do?? Help!"

No worries, I've got you covered. Just use `$y('dom-element').removeClass('some-class-name')`
and it's like that class was never even there, man!

---
### "Well, I don't want the thing... I want the thing's parent! Get me THAT, Smarty-pants!"

well with `$y('dom-element').parent()` that ain't no thing.

---
### "That's all well and good, but what about the children?!?!"

Kids love `$y('dom-element').children()`

---

### "I come from a dysfunctional DOM tree. I want to get rid of my Children because they are obnoxious."

Well that's as simple as `$y('dom-element').remove()` and show those brats the door one by one!

---

### "Can't I do this later? I don't have the time to wait around for some loser to click on one of my elements to run my callback for cryin' out loud!"

Well, 'LISTEN' UP! You can add an event listener to a node just by using `$y('dom-element').on(someEvent, someCallback)` and before you say anything you better believe you can take it right back off whenever strikes your fancy with a simple invocation of... you guessed it: `$y('dom-element').off(someEvent, someCallback)`

---

#### So there you have it, DOM manipulation you didn't even know you needed (because you already had it but whatever) Yaaaaaaaaaay!!!
