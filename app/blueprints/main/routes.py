from flask import render_template
from app.blueprints.main import main_bp

@main_bp.route('/')
@main_bp.route('/index')
def index():
    """Render the homepage."""
    return render_template('index.html', title='Wakily.sa - Pioneering Arabic AI') 