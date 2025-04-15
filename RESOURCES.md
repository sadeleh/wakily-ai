# Free Resources for Wakily.sa Website

## Icon Libraries
These free icon libraries are integrated into the website:

1. **FontAwesome** - Main icon library
   - Website: https://fontawesome.com/
   - CDN: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">`
   - Usage: `<i class="fas fa-user"></i>` or `<i class="far fa-user"></i>` (for regular style)

2. **Bootstrap Icons** - Alternative icon library
   - Website: https://icons.getbootstrap.com/
   - CDN: `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">`
   - Usage: `<i class="bi bi-person"></i>`

## Free Image Resources
These websites provide free images that can be used in the website:

1. **Unsplash**
   - Website: https://unsplash.com/
   - License: Free to use for commercial and personal projects
   - Attribution: Not required but appreciated

2. **Pixabay**
   - Website: https://pixabay.com/
   - License: Free to use for commercial and personal projects (CC0)
   - Attribution: Not required

3. **Pexels**
   - Website: https://www.pexels.com/
   - License: Free to use for commercial and personal projects
   - Attribution: Not required

4. **unDraw** - Customizable illustrations
   - Website: https://undraw.co/
   - License: Free to use for commercial and personal projects
   - Note: You can customize colors to match brand

## Integration Examples

### Icons
```html
<!-- FontAwesome icons examples -->
<i class="fas fa-robot"></i> <!-- AI Agent -->
<i class="fas fa-code"></i> <!-- Software Development -->
<i class="fas fa-brain"></i> <!-- AI/ML -->
<i class="fas fa-chart-line"></i> <!-- Data Science -->
<i class="fas fa-landmark"></i> <!-- Government Solutions -->
<i class="fas fa-cogs"></i> <!-- Systems/Engineering -->

<!-- Bootstrap Icons examples -->
<i class="bi bi-robot"></i> <!-- AI Agent -->
<i class="bi bi-code-slash"></i> <!-- Software Development -->
<i class="bi bi-graph-up"></i> <!-- Data Science -->
<i class="bi bi-gear"></i> <!-- Systems/Engineering -->
```

### Images
Images should be saved in the `/app/static/images/` directory, organized by section if needed.

Example usage:
```html
<img src="{{ url_for('static', filename='images/ai-agent.svg') }}" alt="AI Agent">
```

## Recommended Tools for SVG Editing
- Inkscape (free, open-source): https://inkscape.org/
- SVG Editor Online: https://svgeditoronline.com/
- SVGOMG (Optimizer): https://jakearchibald.github.io/svgomg/ 