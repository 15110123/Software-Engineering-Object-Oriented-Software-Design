var emojiTableToggle = () => {
    $('#EmojiTable').toggle();
};

var addEmojiToTextBox = () => {
    //Add code to add emoji to textbox here
    console.log('here');
};

var previewFile = () => {
    var preview = $('#UploadedImage-id12345')[0]; //selects the query named img
    var file    = $('#BtnFileUpload')[0].files[0]; //sames as here
    var reader  = new FileReader();

    reader.onloadend = (o) => {
        preview.src = o.srcElement.result;
    }

    if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
    } else {
        preview.src = "";
    }
};

$('.EmojiIcon').on('click', emojiTableToggle);

$('.Emoji').on('click', emojiTableToggle);
$('.Emoji').on('click', addEmojiToTextBox);

$('#BtnFileUpload').on('change', previewFile);