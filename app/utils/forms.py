from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, SubmitField
from wtforms.validators import DataRequired, Email, Length

class ContactForm:
    """Simple contact form implementation without using FlaskForm.
    
    Since we're not using a database, this is a simplified version
    that just validates submitted data.
    """
    
    def __init__(self):
        self.name = ''
        self.email = ''
        self.inquiry_type = ''
        self.message = ''
        self.errors = {}
    
    def validate(self):
        """Validate the form data."""
        is_valid = True
        
        # Validate name
        if not self.name or len(self.name.strip()) < 2:
            self.errors['name'] = 'Name is required and must be at least 2 characters.'
            is_valid = False
        
        # Validate email
        email = self.email.strip() if self.email else ''
        if not email or '@' not in email or '.' not in email:
            self.errors['email'] = 'A valid email address is required.'
            is_valid = False
        
        # Validate inquiry type
        if not self.inquiry_type:
            self.errors['inquiry_type'] = 'Please select an inquiry type.'
            is_valid = False
        
        # Validate message
        if not self.message or len(self.message.strip()) < 10:
            self.errors['message'] = 'Message is required and must be at least 10 characters.'
            is_valid = False
        
        return is_valid 