
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('#videoFord');
  
    video.addEventListener('ended', function () {
     
      hideLoadingVideo();
    });
  
    function hideLoadingVideo() {
      const loadingVideoContainer = document.querySelector('.loading-video-container');
      loadingVideoContainer.style.transitionDuration = '1s';
      loadingVideoContainer.style.opacity = '0';
      setTimeout(() => {
          loadingVideoContainer.style.display = 'none';
        
      }, 1000);
    }
  
});