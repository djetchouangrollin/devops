from django.contrib import admin
from django.utils.html import format_html
from .models import Experience, Project, Formation

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('title', 'company', 'start_date', 'end_date', 'created_at')
    list_filter = ('company', 'start_date')
    search_fields = ('title', 'company', 'description')
    date_hierarchy = 'start_date'
    fieldsets = (
        ('Informations principales', {
            'fields': ('title', 'company')
        }),
        ('Période', {
            'fields': ('start_date', 'end_date')
        }),
        ('Description', {
            'fields': ('description',)
        }),
    )

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'technologies', 'display_image', 'created_at')
    list_filter = ('technologies', 'created_at')
    search_fields = ('title', 'description', 'technologies')
    date_hierarchy = 'created_at'
    fieldsets = (
        ('Informations principales', {
            'fields': ('title', 'technologies')
        }),
        ('Liens', {
            'fields': ('github_link', 'live_link')
        }),
        ('Description et Image', {
            'fields': ('description', 'image')
        }),
    )

    def display_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="50" height="50" />', obj.image.url)
        return "Pas d'image"
    display_image.short_description = 'Image'

@admin.register(Formation)
class FormationAdmin(admin.ModelAdmin):
    list_display = ('title', 'institution', 'start_date', 'end_date', 'created_at')
    list_filter = ('institution', 'start_date')
    search_fields = ('title', 'institution', 'description')
    date_hierarchy = 'start_date'
    fieldsets = (
        ('Informations principales', {
            'fields': ('title', 'institution')
        }),
        ('Période', {
            'fields': ('start_date', 'end_date')
        }),
        ('Description', {
            'fields': ('description',)
        }),
    )
