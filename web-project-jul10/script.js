document.addEventListener('DOMContentLoaded', function() {
    console.log('July 10 Project Initialized');
});

function loadFeatures() {
    console.log('Loading features...');
}

function initFeatures() {
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('click', handleFeatureClick);
    });
}

function handleFeatureClick(e) {
    e.target.classList.toggle('active');
}
// navbar section
// navbar styles
// footer section
