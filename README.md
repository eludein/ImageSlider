# Image Slider JavaScript Component

## Description
This project contains a simple yet flexible JavaScript Image Slider class. It allows for automatic cycling through images with the option for manual navigation using previous and next buttons.

## Features
- **Automatic Image Rotation**: Images automatically rotate at a configurable interval.
- **Manual Navigation**: Users can manually navigate through images using next and previous buttons.
- **Easy Integration**: Designed to be easily integrated into any web project.
- **Customizable**: The rotation interval and styles can be easily customized.

## Installation

1. Clone the repository or download the `imageSlider.js` file.
2. Include the `imageSlider.js` in your HTML file.

## Usage

First, include the script in your HTML file:

    ```html
    <script src="path/to/imageSlider.js"></script>
    ```

Then, structure your HTML with a div element containing your images:

    ```html
    <div class="image-slider">
        <img src="image1.jpg" style="display:block;">
        <img src="image2.jpg" style="display:none;">
        <img src="image3.jpg" style="display:none;">
        <!-- Add more images as needed -->
    </div>
    ```

Finally, initialize the Image Slider in your script:

    ```javascript
    document.addEventListener('DOMContentLoaded', () => {
        const slider = new ImageSlider('.image-slider', 3000); // 3000 is the interval in milliseconds
    });
    ```

## Configuration

You can customize the interval between image changes by passing a second argument to the `ImageSlider` constructor. For example, for a 5-second interval:

    ```javascript
    const slider = new ImageSlider('.image-slider', 5000);
    ```

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to contact me.
