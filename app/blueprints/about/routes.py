from flask import render_template
from app.blueprints.about import about_bp

@about_bp.route('/')
def about():
    """Render the about us page."""
    return render_template('about/about.html', title='About Us - Wakily.sa')

@about_bp.route('/arabic-ai')
def arabic_ai():
    """Render the Arabic AI advantage page."""
    return render_template('about/arabic_ai.html', title='Our Arabic AI Advantage - Wakily.sa') 