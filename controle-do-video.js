document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('#videoFord');

  video.addEventListener('ended', function () {
   
    hideLoadingVideo();
  });

  function hideLoadingVideo() {
    const loadingVideoContainer = document.querySelector('.loading-video-container');
    loadingVideoContainer.style.display = 'none';
  }

});