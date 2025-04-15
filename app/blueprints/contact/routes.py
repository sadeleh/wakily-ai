from flask import render_template, request, flash, redirect, url_for
from app.blueprints.contact import contact_bp
from app.utils.forms import ContactForm

@contact_bp.route('/', methods=['GET', 'POST'])
def contact():
    """Render the contact us page."""
    form = ContactForm()
    if request.method == 'POST':
        # In a real application, we would process the form data here
        # Since we're not using a database, we'll just return a success message
        if form.validate():
            flash('Thank you for your message! We will get back to you soon.', 'success')
            return redirect(url_for('contact.contact'))
        else:
            flash('There was an error with your submission. Please check your input.', 'error')
    
    return render_template('contact/contact.html', title='Contact Us - Wakily.sa', form=form) 