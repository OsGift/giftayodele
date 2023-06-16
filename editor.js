function execCommand(command, value = null) {
    document.execCommand(command, false, value);
  }
  
  function createLink() {
    const url = prompt('Enter the URL:');
    if (url) {
      execCommand('createLink', url);
    }
  }
  
  function unlink() {
    execCommand('unlink');
  }
  
  // Get the content of the editor
  function getContent() {
    return document.getElementById('editor').innerHTML;
  }
  
  // Set the content of the editor
  function setContent(content) {
    document.getElementById('editor').innerHTML = content;
  }
  