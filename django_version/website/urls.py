"""
URL configuration for website app.
"""
from django.urls import path
from . import views

app_name = 'website'

urlpatterns = [
    path('', views.home, name='home'),
    path('for-companies/', views.for_companies, name='for_companies'),
    path('for-candidates/', views.for_candidates, name='for_candidates'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
]