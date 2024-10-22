
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('downloadBtn').addEventListener('click', function() { 
        
        let element = document.createElement('a');
        element.setAttribute('href', 'Abegail Chanyalew.pdf'); // Relative path to the image
        element.setAttribute('download', 'Abegail Chanyalew.pdf'); // The name of the downloaded file

        // Append the anchor to the body
        document.body.appendChild(element);

        // Trigger the download
        element.click();

        // Remove the anchor from the body
        document.body.removeChild(element);
    });
});
