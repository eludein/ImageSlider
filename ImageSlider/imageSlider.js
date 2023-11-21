class ImageSlider {
    constructor(selector, interval = 3000) {
        this.slider = document.querySelector(selector);
        this.interval = interval;
        this.currentIndex = 0;
        this.images = this.slider.querySelectorAll('img');
        this.totalImages = this.images.length;
        this.startSlider();
        this.createNavigationButtons();
    }

    startSlider() {
        this.intervalId = setInterval(() => {
            this.moveToNextImage();
        }, this.interval);
    }

    moveToNextImage() {
        this.images[this.currentIndex].style.display = 'none';
        this.currentIndex = (this.currentIndex + 1) % this.totalImages;
        this.images[this.currentIndex].style.display = 'block';
    }

    moveToPreviousImage() {
        this.images[this.currentIndex].style.display = 'none';
        this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
        this.images[this.currentIndex].style.display = 'block';
    }

    createNavigationButtons() {
        const nextButton = document.createElement('button');
        nextButton.innerText = '>';
        nextButton.onclick = () => {
            clearInterval(this.intervalId);
            this.moveToNextImage();
            this.startSlider();
        };

        const prevButton = document.createElement('button');
        prevButton.innerText = '<';
        prevButton.onclick = () => {
            clearInterval(this.intervalId);
            this.moveToPreviousImage();
            this.startSlider();
        };

        this.slider.appendChild(prevButton);
        this.slider.appendChild(nextButton);
    }
}

// Usage
document.addEventListener('DOMContentLoaded', () => {
    const slider = new ImageSlider('.image-slider');
});
