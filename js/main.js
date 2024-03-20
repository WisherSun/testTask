const userEmail = document.querySelector('.user-email');
const userName = document.querySelector('.user-name');
const userPosition = document.querySelector('.user-position');

function truncated(info) {
    let fullInfo = info.textContent.trim();
    return fullInfo.length > 27 ? fullInfo.substring(0, 27) + '...' : fullInfo;
}

userEmail.textContent = truncated(userEmail);
userName.textContent = truncated(userName);
userPosition.textContent = truncated(userPosition);



//________________



const fileInput = document.getElementById('post__file-upload2');

const uploadLabel = document.getElementById('post__upload-label');

fileInput.addEventListener('change', function() {
    if (this.files && this.files.length > 0) {
        let fileName = this.files[0].name;
        if (fileName.length >= 15) {
            fileName = fileName.substring(0, 15) + '...'; 
        }
        uploadLabel.textContent = fileName;
        uploadLabel.style.color = 'var(--black-color)';
    } else {
        uploadLabel.textContent = 'Upload your photo';
        uploadLabel.style.color = '';
    }
});