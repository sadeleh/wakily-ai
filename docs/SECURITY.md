# Wakily.ai Security Documentation

This document outlines the security measures implemented in the Wakily.ai platform to protect user data and maintain system integrity.

## Code Security

### XSS Prevention

The application implements multiple layers of protection against Cross-Site Scripting (XSS) attacks:

1. **Server-side Template Escaping**
   - All dynamic content rendered through Jinja2 templates is automatically escaped
   - Explicit `safe` filters are only used when necessary and with pre-validated content

2. **Code Block Security**
   - All code examples use proper HTML entity encoding:
     - `&quot;` for quotes
     - `&lt;` and `&gt;` for angle brackets
     - `&amp;` for ampersands
   - The highlight.js implementation uses the safer `highlightElement` method

3. **Content Security Policy**
   - Strict CSP headers limit script execution
   - Inline scripts are avoided where possible

4. **Additional Safety Attributes**
   - Data sanitization attributes
   - ARIA hidden attributes for sensitive content

### Mobile View Protection

Sensitive code examples are protected on mobile views through multiple mechanisms:

```css
/* CSS Protection Layer */
@media screen and (max-width: 768px) {
    .code-block.mobile-hide,
    .code-block.hidden-sensitive-code {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        overflow: hidden !important;
        position: absolute !important;
        pointer-events: none !important;
        opacity: 0 !important;
    }
}
```

```javascript
// JavaScript Protection Layer
function ensureMobileSafety() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    // Find and protect sensitive blocks
    if (isMobile) {
        // Hide sensitive code blocks
        // Add ARIA attributes
        // Remove from accessibility tree
    }
}
```

## Data Security

### Form Handling

1. **CSRF Protection**
   - All forms include CSRF tokens
   - Flask-WTF integration ensures token validation

2. **Input Sanitization**
   - Server-side validation of all input fields
   - HTML sanitization of user-submitted content

3. **Rate Limiting**
   - Protection against form submission flooding
   - IP-based throttling on sensitive endpoints

## Deployment Security

### Fly.io Deployment

The application uses several security features in its Fly.io deployment:

1. **HTTPS Enforcement**
   - All traffic is encrypted via HTTPS
   - HTTP to HTTPS redirection

2. **Docker Containerization**
   - Isolated application environment
   - Minimal base image to reduce attack surface

3. **Environment Variable Management**
   - Sensitive configuration stored in environment variables
   - Secrets management through Fly.io's secure system

## Authentication & Authorization

While the current version does not include user authentication, the system is designed to easily incorporate secure authentication:

1. **Infrastructure Ready**
   - Blueprint structure supports auth routes
   - Session management capabilities

2. **Future Implementation**
   - OAuth integration capability
   - Role-based access control structure

## Security Headers

The application implements recommended security headers:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'; script-src 'self' cdnjs.cloudflare.com; style-src 'self' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data:;
Referrer-Policy: strict-origin-when-cross-origin
```

## Security Monitoring

The application includes monitoring capabilities:

1. **Error Logging**
   - Detailed error logging for security events
   - Structured logging format for easy analysis

2. **JavaScript Diagnostics**
   - Console warnings for potential security issues
   - Runtime monitoring of DOM manipulations

## Security Recommendations for Contributors

Contributors should follow these guidelines:

1. **Code Reviews**
   - All code changes must be reviewed
   - Security-sensitive changes require additional scrutiny

2. **Dependency Management**
   - Regular updates of dependencies
   - Security scanning of third-party packages

3. **Safe Content Handling**
   - Always escape user-generated content
   - Use appropriate content-type headers

4. **Testing**
   - Include tests for security-critical features
   - Consider penetration testing for major releases

## Reporting Security Issues

Security vulnerabilities should be reported directly to security@wakily.ai instead of opening public issues. We are committed to working with security researchers to resolve issues quickly. 