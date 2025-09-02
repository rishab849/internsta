from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from .models import Internship, NewsletterSubscriber, Contact

def home(request):
    """Home page view with internship listings"""
    featured_internships = Internship.objects.filter(is_featured=True)[:6]
    recent_internships = Internship.objects.all()[:8]
    
    # Sample data if no internships in database
    if not featured_internships:
        sample_internships = [
            {
                'title': 'Frontend Developer',
                'company': 'TechCorp',
                'location': 'Remote',
                'salary': '$15-20/hr',
                'type': 'Remote'
            },
            {
                'title': 'Data Analyst',
                'company': 'DataFlow',
                'location': 'New York',
                'salary': '$18-25/hr',
                'type': 'On-site'
            },
            {
                'title': 'UX Designer',
                'company': 'DesignHub',
                'location': 'San Francisco',
                'salary': '$20-30/hr',
                'type': 'Hybrid'
            },
            {
                'title': 'Backend Developer',
                'company': 'ServerTech',
                'location': 'Austin',
                'salary': '$22-28/hr',
                'type': 'Remote'
            },
            {
                'title': 'Marketing Intern',
                'company': 'BrandCo',
                'location': 'Los Angeles',
                'salary': '$12-18/hr',
                'type': 'On-site'
            },
            {
                'title': 'Product Manager',
                'company': 'InnovateNow',
                'location': 'Seattle',
                'salary': '$25-35/hr',
                'type': 'Hybrid'
            }
        ]
        featured_internships = sample_internships
    
    context = {
        'featured_internships': featured_internships,
        'recent_internships': recent_internships,
    }
    return render(request, 'website/home.html', context)

def for_companies(request):
    """For companies page"""
    return render(request, 'website/for_companies.html')

def for_candidates(request):
    """For candidates page"""
    return render(request, 'website/for_candidates.html')

def about(request):
    """About page"""
    return render(request, 'website/about.html')

def contact(request):
    """Contact page"""
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        
        Contact.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )
        
        messages.success(request, 'Thank you for your message! We will get back to you soon.')
        return redirect('website:contact')
    
    return render(request, 'website/contact.html')

def subscribe_newsletter(request):
    """Handle newsletter subscription"""
    if request.method == 'POST':
        email = request.POST.get('email')
        
        if email:
            subscriber, created = NewsletterSubscriber.objects.get_or_create(
                email=email,
                defaults={'is_active': True}
            )
            
            if created:
                return JsonResponse({'success': True, 'message': 'Successfully subscribed!'})
            else:
                return JsonResponse({'success': False, 'message': 'Already subscribed!'})
        
        return JsonResponse({'success': False, 'message': 'Invalid email address!'})
    
    return JsonResponse({'success': False, 'message': 'Invalid request method!'})