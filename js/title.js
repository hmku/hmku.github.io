$(function(){
	$(".title").typed({
		strings: ["...", "> Hi, I'm Harrison!"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 70,
		// time before typing starts
        startDelay: 150,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
        contentType: 'html',
        loop: false,
	});
});

$(function(){
	$(".subtitle").typed({
		strings: ["...", "B.S. Computer Science @ UCSD"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 20,
		// time before typing starts
        startDelay: 4000,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
        contentType: 'html',
        loop: false,
	});
});
