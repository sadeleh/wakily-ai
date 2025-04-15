# Icons and Images Implementation for Wakily.sa

## Overview
This document explains how icons and images are implemented in the Wakily.sa website to ensure a consistent, professional appearance while using freely available resources.

## Icon Implementation

### Libraries Used
1. **FontAwesome 6.5.1** (Primary)
   - Loaded via CDN in base.html
   - Provides comprehensive icon set with multiple styles

2. **Bootstrap Icons** (Alternative)
   - Loaded via CDN in base.html as a backup/alternative option
   - Clean, simple icon set

### Usage in HTML
Icons are implemented as inline elements using the `<i>` tag with appropriate classes:

```html
<!-- FontAwesome examples -->
<i class="fas fa-robot"></i>        <!-- Solid style -->
<i class="far fa-chart-bar"></i>    <!-- Regular style -->
<i class="fab fa-python"></i>       <!-- Brand icon -->

<!-- Bootstrap Icons examples -->
<i class="bi bi-robot"></i>
<i class="bi bi-graph-up"></i>
```

### Icon Selection Guidelines
- Use icons that communicate the concept clearly
- Maintain consistent style (prefer solid style for consistency)
- Use appropriate sizing (typically 1-3rem depending on context)
- Ensure good contrast with backgrounds
- Consider RTL language requirements when positioning icons

## Image Implementation

### Image Sources
1. **unDraw Illustrations**
   - Free, customizable SVG illustrations
   - Downloaded via custom Python script (`download_illustrations.py`)
   - Modern, minimalist style that matches brand aesthetic

2. **Other Free Resources (as needed)**
   - Unsplash - High-quality photos
   - Pixabay - Various media types
   - Pexels - Professional stock photos

### Image Storage
All images are stored in the `/app/static/images/` directory and referenced using Flask's `url_for` helper:

```html
<img src="{{ url_for('static', filename='images/data-science.svg') }}" alt="Data Science">
```

### Image Optimization
- SVG format used for illustrations (scalable, small file size)
- Proper alt text for accessibility
- Responsive sizing with CSS

## Download Script
A custom Python script (`download_illustrations.py`) was created to automate the download of illustrations from unDraw:

```python
python download_illustrations.py
```

This script downloads a set of curated illustrations appropriate for the different service pages.

## Maintenance
To add new images:
1. Add the image to `/app/static/images/`
2. Reference it using the Flask `url_for` helper
3. Ensure proper alt text and responsive styling

To update icons:
1. Find the appropriate icon in FontAwesome or Bootstrap Icons
2. Use the correct class naming convention
3. Maintain consistent styling with other icons

## Resources
See the `RESOURCES.md` file for a complete list of free icon and image resources that can be used for future updates to the website. 