var EmojiTableToggle = () => {
    $('#EmojiTable').toggle();
};

var AddEmojiToTextBox = () => {
    //Add code to add emoji to textbox here
    console.log('here');
};

$('.EmojiIcon').on('click', EmojiTableToggle);

$('.Emoji').on('click', EmojiTableToggle);
$('.Emoji').on('click', AddEmojiToTextBox);