from flask import render_template
from app.blueprints.services import services_bp

@services_bp.route('/')
def services_overview():
    """Render the services overview page."""
    return render_template('services/overview.html', title='Our Services - Wakily.sa')

@services_bp.route('/ai-agents')
def ai_agents():
    """Render the AI Agent Development page."""
    return render_template('services/ai_agents.html', title='AI Agent Development - Wakily.sa')

@services_bp.route('/llm-tuning')
def llm_tuning():
    """Render the LLM Tuning page."""
    return render_template('services/llm_tuning.html', title='LLM Tuning & Optimization - Wakily.sa')

@services_bp.route('/agentic-products')
def agentic_products():
    """Render the Agentic Products page."""
    return render_template('services/agentic_products.html', title='Agentic Products - Wakily.sa')

@services_bp.route('/software-development')
def software_development():
    """Render the Rapid Software Development page."""
    return render_template('services/software_development.html', title='Rapid Software Development - Wakily.sa')

@services_bp.route('/government-solutions')
def government_solutions():
    """Render the Government Solutions page."""
    return render_template('services/government_solutions.html', title='Government Solutions - Wakily.sa')

@services_bp.route('/data-science')
def data_science():
    """Render the Data Science & Analytics page."""
    return render_template('services/data_science.html', title='Data Science & Analytics - Wakily.sa') 