# INTERNSTA - Django Web Application

A modern internship platform built with Django that connects students with companies for meaningful career opportunities.

## Features

- **Modern Design**: Warm, comforting color scheme with orange/coral gradients
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Two-Column Layout**: Main content area with dedicated internship listings sidebar
- **Newsletter Subscription**: Email collection for updates and opportunities
- **Admin Interface**: Django admin panel for managing internships, contacts, and subscribers
- **Contact System**: Built-in contact form with database storage
- **Sample Data**: Includes sample internship listings for immediate testing

## Quick Start

### 1. Clone and Setup

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Database Setup

```bash
# Create and apply migrations
python manage.py makemigrations
python manage.py migrate

# Create superuser (optional, for admin access)
python manage.py createsuperuser
```

### 3. Run Development Server

```bash
python manage.py runserver
```

Visit http://127.0.0.1:8000 to see your application!

## Project Structure

```
internsta/
├── manage.py
├── requirements.txt
├── internsta/              # Main project settings
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── asgi.py
├── website/                # Main application
│   ├── __init__.py
│   ├── admin.py           # Admin interface configuration
│   ├── apps.py
│   ├── models.py          # Database models
│   ├── tests.py           # Unit tests
│   ├── urls.py            # URL routing
│   ├── views.py           # View functions
│   └── migrations/
└── templates/              # HTML templates
    ├── base.html          # Base template with header/footer
    └── website/
        └── home.html      # Homepage template
```

## Key Components

### Models

- **Internship**: Job listings with company details, location, salary, type
- **NewsletterSubscriber**: Email collection for marketing
- **Contact**: Contact form submissions

### Views

- **Home**: Main landing page with internship listings
- **Newsletter Subscription**: AJAX endpoint for email collection
- **Contact**: Contact form handling

### Templates

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Gradient backgrounds, hover effects, animations
- **Semantic HTML**: Accessible and SEO-friendly markup

## Customization

### Colors and Branding

The color scheme uses warm orange/coral gradients. To customize:

1. Edit the CSS in `templates/base.html`
2. Update gradient classes throughout templates
3. Modify the logo and branding text

### Content

- Update company information in `templates/base.html` footer
- Modify hero section content in `templates/website/home.html`
- Customize statistics in the stats section

### Sample Data

The application includes sample internship data. To add real data:

1. Access Django admin at `/admin/`
2. Add internship listings
3. Mark internships as "featured" to display in sidebar

## Deployment

### Environment Variables

For production, set these environment variables:

```bash
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
```

### Static Files

```bash
python manage.py collectstatic
```

### Production Settings

- Update `ALLOWED_HOSTS` in settings.py
- Configure database settings for your production database
- Set up proper email backend for contact forms
- Configure HTTPS redirects

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues:

- Check the documentation
- Open an issue on GitHub
- Contact: hello@internsta.com

---

Built with ❤️ using Django and Tailwind CSS