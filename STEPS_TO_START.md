# INTERNSTA Django Project - Setup Instructions

## Prerequisites

- Python 3.8 or higher
- pip (Python package installer)
- Virtual environment (recommended)

## Step-by-Step Setup

### 1. Create Virtual Environment

```bash
# Create virtual environment
python -m venv internsta_env

# Activate virtual environment
# On Windows:
internsta_env\Scripts\activate

# On macOS/Linux:
source internsta_env/bin/activate
```

### 2. Install Dependencies

```bash
# Make sure you're in the project root directory
pip install -r requirements.txt
```

### 3. Database Setup

```bash
# Create database migrations
python manage.py makemigrations

# Apply migrations to create database tables
python manage.py migrate
```

### 4. Create Superuser (Optional)

```bash
# Create admin user to access Django admin panel
python manage.py createsuperuser

# Follow the prompts to set username, email, and password
```

### 5. Collect Static Files (Optional for development)

```bash
# If you want to serve static files properly
python manage.py collectstatic
```

### 6. Run the Development Server

```bash
# Start the Django development server
python manage.py runserver
```

### 7. Access Your Application

Open your browser and visit:

- **Homepage**: http://127.0.0.1:8000/
- **Admin Panel**: http://127.0.0.1:8000/admin/ (if you created a superuser)

## Project Structure Overview

```
internsta/
├── manage.py                 # Django management script
├── requirements.txt         # Python dependencies
├── internsta/              # Main project configuration
│   ├── settings.py         # Django settings
│   ├── urls.py            # Main URL routing
│   └── wsgi.py            # WSGI configuration
├── website/               # Main application
│   ├── models.py          # Database models
│   ├── views.py           # View functions
│   ├── urls.py           # App URL routing
│   └── admin.py          # Admin configuration
└── templates/            # HTML templates
    ├── base.html         # Base template
    └── website/          # App templates
        ├── home.html
        ├── about.html
        ├── contact.html
        ├── for_companies.html
        └── for_candidates.html
```

## Available URLs

- `/` - Homepage
- `/for-companies/` - Companies page
- `/for-candidates/` - Candidates page
- `/about/` - About page
- `/contact/` - Contact page
- `/admin/` - Django admin panel

## Adding Sample Data

1. Access the admin panel at http://127.0.0.1:8000/admin/
2. Login with your superuser credentials
3. Add Internship entries and mark some as "featured" to display in the sidebar

## Customization Tips

1. **Colors and Branding**: Edit CSS in `templates/base.html`
2. **Content**: Update text in template files
3. **Logo**: Replace "INTERNSTA" text in header
4. **Contact Info**: Update footer information in `templates/base.html`

## Troubleshooting

### Common Issues:

1. **ModuleNotFoundError**: Make sure virtual environment is activated and dependencies are installed
2. **Database errors**: Run `python manage.py migrate`
3. **Static files not loading**: Run `python manage.py collectstatic`
4. **Port already in use**: Use `python manage.py runserver 8001` for different port

### Getting Help:

- Check Django documentation: https://docs.djangoproject.com/
- Review error messages in terminal
- Ensure all file paths are correct

## Development Tips

- Use `python manage.py check` to verify project setup
- Use `python manage.py test` to run tests
- Access Django shell with `python manage.py shell`
- Create new apps with `python manage.py startapp app_name`

## Production Deployment

For production deployment:

1. Set `DEBUG = False` in settings.py
2. Configure proper database (PostgreSQL recommended)
3. Set up static file serving (WhiteNoise included)
4. Configure environment variables for sensitive data
5. Use a production WSGI server like Gunicorn

Your INTERNSTA website is now ready to go! 🚀