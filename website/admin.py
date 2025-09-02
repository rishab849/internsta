from django.contrib import admin
from .models import Internship, NewsletterSubscriber, Contact

@admin.register(Internship)
class InternshipAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'location', 'type', 'salary', 'is_featured', 'created_at')
    list_filter = ('type', 'is_featured', 'created_at', 'company')
    search_fields = ('title', 'company', 'location', 'description')
    list_editable = ('is_featured',)
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)

@admin.register(NewsletterSubscriber)
class NewsletterSubscriberAdmin(admin.ModelAdmin):
    list_display = ('email', 'is_active', 'subscribed_at')
    list_filter = ('is_active', 'subscribed_at')
    search_fields = ('email',)
    list_editable = ('is_active',)
    date_hierarchy = 'subscribed_at'
    ordering = ('-subscribed_at',)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'email', 'subject')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'
    ordering = ('-created_at',)