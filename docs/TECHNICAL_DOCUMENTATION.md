# Wakily.ai Technical Documentation

## Architecture Overview

Wakily.ai uses a modular Flask architecture with a focus on maintainability and scalability. The application follows a blueprint-based structure to organize routes and functionality logically.

```
├── app/
│   ├── __init__.py           # Application factory
│   ├── config.py             # Configuration settings
│   ├── blueprints/           # Route blueprints
│   │   ├── main/             # Homepage routes
│   │   ├── services/         # Services routes
│   │   ├── about/            # About us routes
│   │   └── contact/          # Contact routes
│   ├── static/               # Static assets
│   │   ├── css/              # CSS stylesheets
│   │   ├── js/               # JavaScript files
│   │   └── images/           # Images and SVGs
│   ├── templates/            # HTML templates
│   └── utils/                # Utility functions
├── app.py                    # Application entry point
├── Dockerfile                # Docker configuration for deployment
├── fly.toml                  # Fly.io deployment configuration
└── requirements.txt          # Python dependencies
```

## Core Components

### Flask Application

The main Flask application is initialized in `app/__init__.py` using the application factory pattern. This allows for flexible creation of the app instance with different configurations.

### Blueprints

The application is organized into blueprints, each handling a specific section of the website:

- **Main Blueprint**: Handles the homepage and general site routes
- **Services Blueprint**: Routes for various service pages
- **About Blueprint**: Information about the company
- **Contact Blueprint**: Contact form and submission handling

### Templates

Templates use Jinja2 templating engine and are organized by blueprint. The base template (`base.html`) provides the common layout and structure.

### Static Files

- **CSS**: Main stylesheet in `styles.css` with RTL support
- **JavaScript**: Core functionality in `main.js`
- **Media**: Images, icons, and other assets

## Frontend Features

### Responsive Design

The site uses responsive design principles to adapt to various screen sizes. Key breakpoints:

- Desktop: 992px and above
- Tablet: 768px to 991px
- Mobile: 767px and below

Mobile view has special considerations, including header modifications and hiding certain code blocks.

### Animations

Several animation types are used:

1. **Particles.js**: Matrix-like background effect and section backgrounds
2. **Typed.js**: Terminal typing animations
3. **CSS Animations**: Fade-in effects and transitions

### RTL Support

The site is designed for right-to-left reading with Arabic as the primary language. All content flows correctly in RTL mode while code blocks maintain LTR display.

### Terminal Effect

The site uses a terminal-like interface for certain UI elements:

- Command prompt styles
- Typing effects
- Code block displays

## JavaScript Components

### Highlight.js Integration

Code syntax highlighting is implemented using Highlight.js. The implementation:

1. Initializes on `DOMContentLoaded`
2. Uses the safer `highlightElement` method (replacing deprecated `highlightBlock`)
3. Handles errors gracefully
4. Adds security attributes to prevent XSS

### Particles.js Configuration

Two main particles configurations:

1. **Hero Section**: Colorful, character-based particles
2. **Terminal CTA Section**: Matrix-inspired falling characters

Error handling is implemented to ensure particles.js loads correctly and canvas elements are properly rendered.

### Mobile Safety Features

Special JavaScript functions ensure sensitive code is properly hidden on mobile:

```javascript
function ensureMobileSafety() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    // Find blocks with language-models.js filename
    const codeHeaders = document.querySelectorAll('.code-header .file-name');
    const languageModelsBlocks = [];
    
    // Identify sensitive code blocks
    codeHeaders.forEach(header => {
        if (header.textContent.includes('language-models.js')) {
            const codeBlock = header.closest('.code-block');
            if (codeBlock) {
                languageModelsBlocks.push(codeBlock);
                // Add classes for CSS targeting
                codeBlock.classList.add('hidden-sensitive-code');
                codeBlock.classList.add('mobile-hide');
            }
        }
    });
    
    // Apply extra measures on mobile
    if (isMobile && languageModelsBlocks.length > 0) {
        languageModelsBlocks.forEach(block => {
            block.style.display = 'none';
            block.style.visibility = 'hidden';
            block.setAttribute('aria-hidden', 'true');
        });
    }
}
```

## Security Considerations

### XSS Prevention

All user-generated content and code displays use proper HTML escaping. Code blocks use the following escaping:

- `&quot;` for quotes
- `&lt;` and `&gt;` for angle brackets
- Server-side escaping for other special characters

### Mobile Code Hiding

Sensitive code in files like `language-models.js` is hidden on mobile views using:

1. CSS classes and media queries
2. JavaScript enforcement
3. Aria attributes

## Deployment

### Fly.io Configuration

Deployment uses Fly.io with Docker:

1. **Dockerfile**: Sets up Python environment and application
2. **fly.toml**: Configures app settings and routing
3. **Requirements**: Gunicorn for production serving

The deployment process automatically builds and deploys the application.

## Extending the Application

### Adding New Routes

1. Create a new function in the appropriate blueprint
2. Create a corresponding template
3. Register the URL rule

Example:
```python
@services_bp.route('/new-service')
def new_service():
    return render_template('services/new_service.html')
```

### Adding New Components

1. Add HTML to appropriate template
2. Add styles to `styles.css`
3. Add any JavaScript functionality to `main.js`

### Style Customization

Primary styling is controlled through CSS variables in the `:root` selector. Key variables:

```css
:root {
    --primary: #5e35b1;
    --secondary: #8561c5;
    --accent: #ffd54f;
    --dark: #0d1117;
    --darker: #090c10;
    --light: #f0f0f0;
    --white: #ffffff;
    /* Other variables... */
}
```

## Performance Optimization

- Minified JavaScript libraries
- Optimized images
- Efficient CSS selectors
- Lazy loading of animations
- Viewport-based rendering with Intersection Observer

## Browser Compatibility

The application is designed to work on modern browsers including:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest version)

Internet Explorer is not supported. 