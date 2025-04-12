
// Function to format text
function formatText(action) {
    const input = document.getElementById("textInput");
    let text = input.value;

    switch (action) {
      case 'bold':
        if(input.style.fontWeight == "bold"){
            input.style.fontWeight = "normal";
        }
        else {
            input.style.fontWeight = "bold";
        }
        break;
      case 'italic':
        if(input.style.fontStyle == "italic"){
            input.style.fontStyle = "normal";
        }
        else {
            input.style.fontStyle = "italic";
        }
        break;
      case 'capitalize':
        text = text.replace(/\b\w/g, char => char.toUpperCase());
        break;
      case 'lowercase':
        text = text.toLowerCase();
        break;
      case 'uppercase':
        text = text.toUpperCase();
        break;
    }
    input.value = text;
  }