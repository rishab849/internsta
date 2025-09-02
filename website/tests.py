from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User
from .models import Internship, NewsletterSubscriber, Contact

class InternshipModelTest(TestCase):
    def setUp(self):
        self.internship = Internship.objects.create(
            title='Test Internship',
            company='Test Company',
            location='Test Location',
            salary='$15/hr',
            duration='3 months',
            type='Remote',
            description='Test description',
            requirements='Test requirements'
        )

    def test_internship_creation(self):
        self.assertEqual(self.internship.title, 'Test Internship')
        self.assertEqual(self.internship.company, 'Test Company')
        self.assertEqual(str(self.internship), 'Test Internship at Test Company')

class HomeViewTest(TestCase):
    def test_home_view_status_code(self):
        response = self.client.get(reverse('website:home'))
        self.assertEqual(response.status_code, 200)

    def test_home_view_contains_correct_html(self):
        response = self.client.get(reverse('website:home'))
        self.assertContains(response, 'INTERNSTA')
        self.assertContains(response, 'Build Real Skills')

class NewsletterSubscriptionTest(TestCase):
    def test_newsletter_subscription(self):
        response = self.client.post(reverse('website:subscribe_newsletter'), {
            'email': 'test@example.com'
        })
        self.assertEqual(response.status_code, 200)
        self.assertTrue(NewsletterSubscriber.objects.filter(email='test@example.com').exists())